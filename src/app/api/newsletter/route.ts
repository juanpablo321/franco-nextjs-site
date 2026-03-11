import { NextRequest, NextResponse } from "next/server";

const KIT_API_KEY = process.env.KIT_API_KEY;
const KIT_FORM_ID = process.env.KIT_FORM_ID || "9194581";

export async function POST(request: NextRequest) {
  try {
    const { email, firstName } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Por favor ingresa un email válido." },
        { status: 400 }
      );
    }

    if (!KIT_API_KEY) {
      console.error("KIT_API_KEY no está configurada");
      return NextResponse.json(
        { error: "Error de configuración del servidor." },
        { status: 500 }
      );
    }

    // Kit API v4 - usa header X-Kit-Api-Key y endpoint api.kit.com/v4
    const body: Record<string, string> = {
      email_address: email,
    };
    if (firstName) {
      body.first_name = firstName;
    }

    const response = await fetch(
      `https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": KIT_API_KEY,
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Kit API error:", data);
      return NextResponse.json(
        { error: "No se pudo completar la suscripción. Intenta de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "¡Suscripción exitosa! Revisa tu email para confirmar." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
