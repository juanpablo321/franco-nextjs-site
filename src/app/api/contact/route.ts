import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body: ContactFormData = await request.json();

    // Validación básica
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Enviar correo al administrador
    const adminResponse = await resend.emails.send({
      from: 'Nuevo Contacto <juan@franco.com.co>',
      to: process.env.CONTACT_EMAIL || 'juanpablo321@gmail.com',
      subject: `Nuevo mensaje de contacto: ${body.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${escapeHtml(body.name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></p>
            <p><strong>Asunto:</strong> ${escapeHtml(body.subject)}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">
              ${escapeHtml(body.message)}
            </p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Este mensaje fue enviado desde el formulario de contacto de franco.com.co
          </p>
        </div>
      `,
    });

    if (adminResponse.error) {
      console.error('Error enviando email al admin:', adminResponse.error);
      return NextResponse.json(
        { error: 'Error al enviar el correo' },
        { status: 500 }
      );
    }

    // Enviar correo de confirmación al usuario
    await resend.emails.send({
      from: 'Juan Pablo Franco <juan@franco.com.co>',
      to: body.email,
      subject: 'Hemos recibido tu mensaje',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Gracias por contactarnos, ${escapeHtml(body.name)}!</h2>
          <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Tu mensaje:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px;">
              ${escapeHtml(body.message)}
            </p>
          </div>
          <p style="color: #666;">
            Si tienes más preguntas, no dudes en responder a este correo.
          </p>
          <p style="margin-top: 30px; color: #999; font-size: 12px;">
            © 2026 Juan Pablo Franco. Todos los derechos reservados.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente. Pronto nos pondremos en contacto.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en API de contacto:', error);
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    );
  }
}

// Función para escapar HTML y prevenir XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
