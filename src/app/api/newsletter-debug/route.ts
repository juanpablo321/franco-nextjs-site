import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID || "9194581";

  // Check if env vars are present (without exposing the full key)
  const apiKeyStatus = apiKey
    ? `present (starts with: ${apiKey.substring(0, 8)}...)`
    : "MISSING";

  // Try a real API call to Kit
  let kitResponse = null;
  let kitError = null;

  if (apiKey) {
    try {
      const res = await fetch(
        `https://api.kit.com/v4/forms/${formId}/subscribers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Kit-Api-Key": apiKey,
          },
          body: JSON.stringify({ email_address: "debug-test@franco.com.co" }),
        }
      );
      const data = await res.json();
      kitResponse = { status: res.status, data };
    } catch (e) {
      kitError = String(e);
    }
  }

  return NextResponse.json({
    env: {
      KIT_API_KEY: apiKeyStatus,
      KIT_FORM_ID: formId,
      NODE_ENV: process.env.NODE_ENV,
    },
    kitApiTest: kitResponse || kitError || "skipped (no API key)",
  });
}
