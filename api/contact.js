const nodemailer = require('nodemailer');

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ status: 'KO', message: 'Method not allowed' });
    }

    const { to_email, user_email, message } = req.body;

    // Set up Nodemailer transport for Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        },
    });

    try {
        // Send the email
        await transporter.sendMail({
            from: user_email,
            to: to_email,
            subject: `Someone wants to get in touch with you!`, 
            text: message,
        });

        res.status(200).json({ status: 'OK', message: 'Message sent successfully' });
    } catch (err) {
        res.status(500).json({ status: 'KO', message: 'Failed to send message', error: err.message });
    }
};
