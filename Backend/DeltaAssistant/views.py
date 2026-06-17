import os
import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from openai import OpenAI
from dotenv import load_dotenv

# LOAD ENV VARIABLES
load_dotenv()

# OPENAI CLIENT
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

# SYSTEM PROMPT
SYSTEM_PROMPT = import os
import json
import logging

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from openai import OpenAI, OpenAIError
from dotenv import load_dotenv


# ─────────────────────────────────────────────
# SETUP
# ─────────────────────────────────────────────

load_dotenv()

logger = logging.getLogger(__name__)

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    timeout=30
)


# ─────────────────────────────────────────────
# SYSTEM PROMPT
# ─────────────────────────────────────────────

SYSTEM_PROMPT = """

You are Delta AI Consultant.

You are NOT a chatbot.
You are a senior business growth consultant.

Your mission:

Help the client first.
Build trust.
Provide valuable advice.
Understand their business.
Recommend the best solution.

Never behave like a salesperson.

━━━━━━━━━━━━━━━━━━
CORE PRINCIPLE
━━━━━━━━━━━━━━━━━━

Help first.
Advise second.
Sell last.

The goal is not to force a sale.

The goal is to become the obvious choice.

━━━━━━━━━━━━━━━━━━
CONVERSATION STYLE
━━━━━━━━━━━━━━━━━━

Every response:

1. Understand
2. Diagnose
3. Provide value
4. Move conversation forward


Be:

- Professional
- Strategic
- Helpful
- Confident


Avoid:

- Pushy selling
- Generic answers
- Long explanations
- Feature dumping


Ask only ONE important question.

━━━━━━━━━━━━━━━━━━
THINK LIKE
━━━━━━━━━━━━━━━━━━

- Growth strategist
- Automation consultant
- Technical advisor
- Startup mentor


Focus on:

- More revenue
- More leads
- Better conversions
- Saving time
- Automation
- Better customer experience

━━━━━━━━━━━━━━━━━━
SERVICE POSITIONING
━━━━━━━━━━━━━━━━━━

Delta-Developers provides:

- AI Chatbots
- Websites
- Web Applications
- Automation Systems
- Custom Software
- AI Solutions


Never sell features.

Sell outcomes.

Example:

Bad:
"We build chatbots."


Good:
"We build systems that respond instantly so businesses stop losing potential customers."

━━━━━━━━━━━━━━━━━━
CLIENT PSYCHOLOGY
━━━━━━━━━━━━━━━━━━

Identify:

- Business type
- Pain points
- Goals
- Urgency
- Budget awareness


High intent:

- Asking pricing
- Asking timeline
- Discussing customers
- Wanting solutions


Low intent:

- Curiosity
- No business context


Adjust accordingly.

━━━━━━━━━━━━━━━━━━
OBJECTION HANDLING
━━━━━━━━━━━━━━━━━━

If client says expensive:

Acknowledge.
Explain value.
Explore goals.


If client is unsure:

Clarify.
Do not pressure.


If client already has a solution:

Find gaps.
Suggest improvements.

━━━━━━━━━━━━━━━━━━
CLOSING
━━━━━━━━━━━━━━━━━━

Only suggest a call when:

- Problem is clear
- Client sees value
- Interest exists


Example:

"Based on what you've shared, there is a clear opportunity to improve this.

A short strategy discussion would help map the best approach."

━━━━━━━━━━━━━━━━━━
FINAL RULE
━━━━━━━━━━━━━━━━━━

Make every client feel:

"This person understands my business."

"""


# ─────────────────────────────────────────────
# CONSTANTS
# ─────────────────────────────────────────────

MAX_MESSAGES = 20


# ─────────────────────────────────────────────
# HELPERS
# ─────────────────────────────────────────────

def calculate_lead_score(messages):

    score = 0

    text = " ".join(
        m["content"].lower()
        for m in messages
        if m["role"] == "user"
    )


    if any(x in text for x in [
        "business",
        "company",
        "startup",
        "agency"
    ]):
        score += 10


    if any(x in text for x in [
        "customers",
        "sales",
        "revenue",
        "clients"
    ]):
        score += 20


    if any(x in text for x in [
        "price",
        "cost",
        "budget"
    ]):
        score += 15


    if any(x in text for x in [
        "urgent",
        "asap",
        "timeline",
        "soon"
    ]):
        score += 20


    if any(x in text for x in [
        "ready",
        "start",
        "hire"
    ]):
        score += 20


    return min(score,100)



def get_stage(score):

    if score < 30:
        return "DISCOVERY"

    elif score < 60:
        return "DIAGNOSIS"

    elif score < 80:
        return "SOLUTION"

    return "CLOSING"



# ─────────────────────────────────────────────
# CHAT API
# ─────────────────────────────────────────────

@csrf_exempt
@require_http_methods(["POST"])
def chat_view(request):

    try:

        body = json.loads(request.body)


    except Exception:

        return JsonResponse(
            {
                "error":"Invalid JSON"
            },
            status=400
        )


    messages = body.get("messages")


    if not isinstance(messages,list):

        return JsonResponse(
            {
                "error":"messages must be list"
            },
            status=400
        )



    clean_messages=[]


    for msg in messages:

        if not isinstance(msg,dict):
            continue


        role = msg.get("role")
        content = msg.get("content")


        if role not in [
            "user",
            "assistant"
        ]:
            continue


        if not isinstance(content,str):
            continue


        if not content.strip():
            continue


        clean_messages.append(
            {
                "role":role,
                "content":content.strip()
            }
        )



    if not clean_messages:

        return JsonResponse(
            {
                "error":"No messages"
            },
            status=400
        )



    clean_messages = clean_messages[-MAX_MESSAGES:]



    score = calculate_lead_score(
        clean_messages
    )


    stage = get_stage(score)



    dynamic_context = f"""

CURRENT LEAD STATUS

Score: {score}/100

Stage: {stage}

Adapt your response accordingly.

"""


    try:

        response = client.responses.create(

            model="gpt-5",

            input=[

                {
                    "role":"system",
                    "content":
                    SYSTEM_PROMPT
                    +
                    dynamic_context
                },

                *clean_messages

            ]

        )


        reply = response.output_text.strip()



    except OpenAIError as e:


        logger.error(e)


        return JsonResponse(
            {
                "error":
                "AI unavailable"
            },
            status=502
        )



    return JsonResponse(
        {
            "reply":reply,
            "lead_score":score,
            "stage":stage
        }
    )

# CHAT API VIEW
@csrf_exempt
def chat_view(request):

    # ONLY ALLOW POST
    if request.method != "POST":
        return JsonResponse(
            {"error": "POST request required"},
            status=405
        )

    try:
        # PARSE JSON BODY
        body = json.loads(request.body)

        # GET CHAT HISTORY
        messages = body.get("messages", [])

        # CLEAN INVALID MESSAGES
        clean_messages = []

        for msg in messages:

            if (
                isinstance(msg, dict)
                and msg.get("role") in ["user", "assistant"]
                and isinstance(msg.get("content"), str)
                and msg["content"].strip()
            ):

                clean_messages.append({
                    "role": msg["role"],
                    "content": msg["content"].strip()
                })

        # OPENAI REQUEST
        completion = client.chat.completions.create(
            model="gpt-4o",
            temperature=0.75,
            max_tokens=320,
            presence_penalty=0.4,
            frequency_penalty=0.3,
            messages=[
                {
                    "role": "system",
                    "content": SYSTEM_PROMPT
                },
                *clean_messages
            ]
        )

        # AI REPLY
        reply = completion.choices[0].message.content.strip()

        # RETURN RESPONSE
        return JsonResponse({
            "reply": reply
        })

    except json.JSONDecodeError:

        return JsonResponse({
            "error": "Invalid JSON body"
        }, status=400)

    except Exception as e:

        return JsonResponse({
            "error": str(e)
        }, status=500)