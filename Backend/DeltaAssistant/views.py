import os
import json
import logging

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from openai import OpenAI, OpenAIError
from dotenv import load_dotenv


load_dotenv()

logger = logging.getLogger(__name__)


client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    timeout=30
)


SYSTEM_PROMPT = """
You are Delta AI Consultant.

You are a senior business growth consultant.

Your mission:
Help the client first.
Build trust.
Provide valuable advice.
Understand their business.

Never behave like a salesperson.

Focus on:
- More revenue
- More leads
- Better conversions
- Automation
- Customer experience

Delta Developers provides:
- AI Chatbots
- Websites
- Web Applications
- Automation Systems
- Custom Software
- AI Solutions

Ask only ONE important question.

Be professional, strategic and helpful.
"""


MAX_MESSAGES = 20



def calculate_lead_score(messages):

    score = 0

    text = " ".join(
        m["content"].lower()
        for m in messages
        if m["role"] == "user"
    )


    if any(x in text for x in ["business", "company", "startup"]):
        score += 10

    if any(x in text for x in ["customers", "sales", "revenue"]):
        score += 20

    if any(x in text for x in ["price", "cost", "budget"]):
        score += 15

    if any(x in text for x in ["urgent", "asap", "soon"]):
        score += 20

    if any(x in text for x in ["start", "hire", "ready"]):
        score += 20


    return min(score, 100)



def get_stage(score):

    if score < 30:
        return "DISCOVERY"

    if score < 60:
        return "DIAGNOSIS"

    if score < 80:
        return "SOLUTION"

    return "CLOSING"



@csrf_exempt
@require_http_methods(["POST"])
def chat_view(request):

    try:

        body = json.loads(request.body)

    except:

        return JsonResponse(
            {"error": "Invalid JSON"},
            status=400
        )


    messages = body.get("messages", [])


    clean_messages = []


    for msg in messages:

        if (
            isinstance(msg, dict)
            and msg.get("role") in ["user", "assistant"]
            and isinstance(msg.get("content"), str)
            and msg["content"].strip()
        ):

            clean_messages.append(
                {
                    "role": msg["role"],
                    "content": msg["content"].strip()
                }
            )


    if not clean_messages:

        return JsonResponse(
            {"error": "No messages"},
            status=400
        )


    clean_messages = clean_messages[-MAX_MESSAGES:]


    score = calculate_lead_score(clean_messages)

    stage = get_stage(score)



    try:

        response = client.responses.create(

            model="gpt-4o-mini",

            input=[
                {
                    "role": "system",
                    "content":
                    SYSTEM_PROMPT
                    +
                    f"\nLead score: {score}/100\nStage: {stage}"
                },

                *clean_messages
            ]
        )


        reply = response.output_text.strip()


        return JsonResponse(
            {
                "reply": reply,
                "lead_score": score,
                "stage": stage
            }
        )


    except OpenAIError as e:

        logger.error(e)

        return JsonResponse(
            {
                "error": "AI service unavailable"
            },
            status=502
        )


    except Exception as e:

        return JsonResponse(
            {
                "error": str(e)
            },
            status=500
        )