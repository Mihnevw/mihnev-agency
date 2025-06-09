import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Validate environment variables
const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'ADMIN_EMAIL']
for (const envVar of requiredEnvVars) {
	if (!process.env[envVar]) {
		throw new Error(`Missing required environment variable: ${envVar}`)
	}
}

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASSWORD,
	},
})

// Verify if email exists by attempting DNS lookup
async function verifyEmailExists(email: string): Promise<boolean> {
	try {
		const [localPart, domain] = email.split('@')
		if (!localPart || !domain) {
			return false
		}

		// First verify SMTP connection
		const verify = await transporter.verify()
		if (!verify) {
			throw new Error("SMTP connection failed")
		}

		// Try to verify the recipient by checking MX records
		return new Promise((resolve) => {
			require('dns').resolveMx(domain, (err: Error | null, addresses: any[]) => {
				if (err || !addresses || addresses.length === 0) {
					resolve(false)
				} else {
					resolve(true)
				}
			})
		})
	} catch (error) {
		console.error("Email verification error:", error)
		return false
	}
}

export async function POST(request: Request) {
	try {
		const body = await request.json()
		const { name, email, phone, company, message } = body

		// First verify if the email exists
		const emailExists = await verifyEmailExists(email)
		if (!emailExists) {
			return NextResponse.json(
				{ error: "invalid_email", message: "Невалиден имейл адрес" },
				{ status: 400 }
			)
		}

		// Proceed with sending emails
		try {
			// Email to admin
			await transporter.sendMail({
				from: process.env.SMTP_USER,
				to: process.env.ADMIN_EMAIL,
				subject: `Ново съобщение от ${name}`,
				html: `
					<h2>Ново съобщение от ${name}</h2>
					<p><strong>Име:</strong> ${name}</p>
					<p><strong>Имейл:</strong> ${email}</p>
					<p><strong>Телефон:</strong> ${phone || "Не е предоставено"}</p>
					<p><strong>Компания:</strong> ${company || "Не е предоставено"}</p>
					<p><strong>Съобщение:</strong></p>
					<p>${message}</p>
				`,
			})

			// Confirmation email to user
			await transporter.sendMail({
				from: process.env.SMTP_USER,
				to: email,
				subject: "Благодарим ви, че се свързахте с Mihnev Agency!",
				html: `
					<h2>Благодаря ви, че се свързахте с нас!</h2>
					<p>Здравейте ${name},</p>
					<p>Получихме вашето съобщение и ще се свържем с вас в рамките на 2 работни часа.</p>
					<p>Ето копие на вашето съобщение:</p>
					<blockquote>${message}</blockquote>
					<p>С най-добри пожелания,<br>The Mihnev Agency Team</p>
				`,
			})

			return NextResponse.json(
				{ message: "Emails sent successfully" },
				{ status: 200 }
			)
		} catch (error) {
			console.error("Error sending emails:", error)
			return NextResponse.json(
				{ error: "email_send_failed", message: "Грешка при изпращане на съобщението" },
				{ status: 500 }
			)
		}
	} catch (error) {
		console.error("Error processing request:", error)
		return NextResponse.json(
			{ error: "invalid_request", message: "Невалидна заявка" },
			{ status: 400 }
		)
	}
} 