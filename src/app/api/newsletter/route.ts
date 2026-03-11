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

    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: KIT_API_KEY,
          email,
          first_name: firstName || "",
        }),
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
