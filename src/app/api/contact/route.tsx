import mail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

// Create an api key in sendgrid and store someplace safe
mail.setApiKey(process.env.SENDGRID_API_KEY || '');
const emailTo = process.env.SENDGRID_EMAIL_TO || '';
const emailFrom = process.env.SENDGRID_EMAIL_FROM || '';

type ResponseData = {
  status?: string;
  message?: string;
};

export async function POST(request: Request) {
  let response: ResponseData = {};
  const body = await request.json();
  // I know the formData I sent in my request has name, email, and message fields so I'm just manually grabbing them to format a message
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  const data = {
    to: emailTo,
    from: emailFrom,
    subject: `Contact Message via Sendgrid - ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  await mail
    .send(data)
    .then(() => {
      response = {
        status: 'success',
        message: "Your message was sent. I'll be in contact shortly.",
      };
    })
    .catch((error) => {
      response = {
        status: 'error',
        message: `Message failed to send with error, ${error}`,
      };
    });

  return NextResponse.json(response);
}