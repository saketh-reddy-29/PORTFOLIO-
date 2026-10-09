import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS if accessed externally
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body || {};
    const { name, email, category, timeline, message } = data;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const gmailUser = process.env.GMAIL_USER || 'sakethgoturi93@gmail.com';
    const defaultPass = Buffer.from('Zm5qdmx1bm9mdGR0aXdveA==', 'base64').toString('utf8');
    const gmailPass = (process.env.GMAIL_APP_PASSWORD || defaultPass).replace(/\s+/g, '');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass
      }
    });

    const mailOptions = {
      from: `"Portfolio Lead: ${name}" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `[Portfolio Inquiry] ${category || 'General Influx'} from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; border: 2px solid #111111; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #111111; padding-bottom: 14px; margin-bottom: 20px;">
            <span style="font-size: 10px; font-family: monospace; letter-spacing: 0.14em; color: #666666; text-transform: uppercase;">TRANSMISSION LOG // SAKETH REDDY PORTFOLIO</span>
            <h2 style="margin: 6px 0 0 0; color: #111111; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;">New Engineering Project Inquiry</h2>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13px;">
            <tr>
              <td style="padding: 10px 0; color: #777777; width: 140px; font-family: monospace; font-size: 11px; text-transform: uppercase;">Sender Name:</td>
              <td style="padding: 10px 0; color: #111111; font-weight: 700; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #777777; font-family: monospace; font-size: 11px; text-transform: uppercase;">Direct Email:</td>
              <td style="padding: 10px 0; color: #111111;"><a href="mailto:${email}" style="color: #111111; font-weight: 600; text-decoration: underline;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #777777; font-family: monospace; font-size: 11px; text-transform: uppercase;">Specification:</td>
              <td style="padding: 10px 0; color: #111111; font-weight: 600;">${category || 'General Software Engineering'}</td>
            </tr>
            ${timeline ? `
            <tr>
              <td style="padding: 10px 0; color: #777777; font-family: monospace; font-size: 11px; text-transform: uppercase;">Target Timeline:</td>
              <td style="padding: 10px 0; color: #111111; font-weight: 600;">${timeline}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #777777; font-family: monospace; font-size: 11px; text-transform: uppercase;">Timestamp (UTC):</td>
              <td style="padding: 10px 0; color: #555555; font-family: monospace; font-size: 11px;">${new Date().toUTCString()}</td>
            </tr>
          </table>

          <div style="background-color: #f8f8f8; padding: 20px; border-left: 4px solid #111111; margin-bottom: 24px;">
            <span style="font-size: 10px; font-family: monospace; text-transform: uppercase; color: #666666; font-weight: 700; letter-spacing: 0.1em; display: block; margin-bottom: 10px;">MESSAGE BRIEF:</span>
            <p style="margin: 0; color: #222222; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="font-size: 10px; font-family: monospace; color: #888888; text-transform: uppercase; border-top: 1px solid #eeeeee; padding-top: 14px; display: flex; justify-content: space-between;">
            <span>G. Saketh Reddy // Portfolio Transmission Console</span>
            <span>Delivered to sakethgoturi93@gmail.com</span>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ 
      success: true, 
      message: 'Transmission delivered successfully to Saketh Reddy',
      timestamp: new Date().toLocaleTimeString()
    });
  } catch (error) {
    console.error('Serverless mail error:', error);
    return res.status(500).json({ error: error.message || 'Error transmitting email' });
  }
}
