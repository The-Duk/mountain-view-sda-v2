import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set');
}

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const contactEmail = process.env.CONTACT_EMAIL || 'mountainviewchurch1844@gmail.com';
  const fromEmail = process.env.FROM_EMAIL || 'noreply@mountainviewsda.org';

  const { data, error } = await resend.emails.send({
    from: `Mountain View SDA Website <${fromEmail}>`,
    to: [contactEmail],
    reply_to: email,
    subject: `New Message from ${name} - Mountain View SDA Website`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2e7d32;">New Contact Form Message</h2>
        <hr style="border: 1px solid #e0e0e0;" />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 16px; border-left: 4px solid #2e7d32;">
          ${message.replace(/\n/g, '<br />')}
        </blockquote>
        <hr style="border: 1px solid #e0e0e0;" />
        <p style="color: #888; font-size: 12px;">
          Sent from Mountain View SDA Church website contact form
        </p>
      </div>
    `,
  });

  if (error) {
    console.error('Resend email error:', error);
    throw new Error('Failed to send email');
  }

  return data;
}
