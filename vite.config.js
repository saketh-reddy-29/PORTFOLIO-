import { defineConfig, loadEnv } from 'vite';
import nodemailer from 'nodemailer';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const gmailUser = env.GMAIL_USER || 'sakethgoturi93@gmail.com';
  const defaultPass = Buffer.from('Zm5qdmx1bm9mdGR0aXdveA==', 'base64').toString('utf8');
  const gmailPass = (env.GMAIL_APP_PASSWORD || defaultPass).replace(/\s+/g, '');

  return {
    server: {
      port: 5174,
      host: true
    },
    plugins: [
      {
        name: 'contact-api-handler',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res, next) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', async () => {
              try {
                const data = JSON.parse(body || '{}');
                const { name, email, projectType, category, timeline, message } = data;
                const chosenType = projectType || category || 'General Inquiry';

                if (!name || !email || !message) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Name, email, and message are required' }));
                  return;
                }

                const transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: gmailUser,
                    pass: gmailPass
                  }
                });

                const mailOptions = {
                  from: `"Portfolio Inquiry: ${name}" <${gmailUser}>`,
                  to: gmailUser,
                  replyTo: email,
                  subject: `[Portfolio Inquiry] ${chosenType} from ${name}`,
                  html: `
                    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; border: 1px solid #e5e5e5; background-color: #ffffff;">
                      <div style="border-bottom: 1px solid #e5e5e5; padding-bottom: 14px; margin-bottom: 20px;">
                        <span style="font-size: 11px; font-family: monospace; letter-spacing: 0.1em; color: #777777; text-transform: uppercase;">SAKETH REDDY // PORTFOLIO INQUIRY</span>
                        <h2 style="margin: 6px 0 0 0; color: #111111; font-size: 20px; font-weight: 700;">New Project Inquiry</h2>
                      </div>
                      
                      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
                        <tr>
                          <td style="padding: 8px 0; color: #777777; width: 140px; font-size: 12px; text-transform: uppercase; font-family: monospace;">Name:</td>
                          <td style="padding: 8px 0; color: #111111; font-weight: 600;">${name}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; color: #777777; font-size: 12px; text-transform: uppercase; font-family: monospace;">Email:</td>
                          <td style="padding: 8px 0; color: #111111;"><a href="mailto:${email}" style="color: #111111; text-decoration: underline;">${email}</a></td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; color: #777777; font-size: 12px; text-transform: uppercase; font-family: monospace;">Project Type:</td>
                          <td style="padding: 8px 0; color: #111111; font-weight: 500;">${chosenType}</td>
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
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ 
                  success: true, 
                  message: 'Transmission delivered successfully to Saketh Reddy',
                  timestamp: new Date().toLocaleTimeString()
                }));
              } catch (err) {
                console.error('Email transmission error:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message || 'Failed to dispatch email' }));
              }
            });
          });
        }
      }
    ]
  };
});
