import { NextRequest, NextResponse } from "next/server";

const KIT_API_KEY = process.env.KIT_API_KEY;

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

    // Kit API v4 - suscripción directa (más confiable que el endpoint de formularios)
    const body: Record<string, string | object> = {
      email_address: email,
    };

    if (firstName) {
      body.first_name = firstName;
    }

    const response = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": KIT_API_KEY,
      },
      body: JSON.stringify(body),
    });

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
