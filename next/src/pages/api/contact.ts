import { NextApiRequest, NextApiResponse } from 'next';
import { TokenContactFormData } from '../../@types/form';
import { mailOptions, transport } from '../../lib/nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body as TokenContactFormData;

    if (!data.name || !data.email || !data.subject || !data.message || !data.tel) {
      return res.status(400).json({ message: 'Missing fields.' });
    }

    const messageText = ` E-mail: ${data.email}\n Nome: ${data.name}\n Telefone: ${data.tel}\n\n Mensagem: ${data.message}`;

    try {
      await transport.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: messageText,
        replyTo: data.email,
      });

      return res.status(200).json({ message: 'Ok' });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
  return res.status(400).json({ message: 'Bad request' });
}
