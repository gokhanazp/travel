// Local development server for API endpoints
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

// Load environment variables
dotenv.config()

const app = express()
const PORT = 3001

// Middleware
app.use(cors())
app.use(express.json())

// Contact form endpoint
app.post('/api/send-contact', async (req, res) => {
  try {
    const contactData = req.body

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Email credentials not configured. Simulating email send...')
      console.log('Contact Data:', contactData)
      
      return res.status(200).json({ 
        success: true, 
        message: 'Email simulated successfully (credentials not configured)' 
      })
    }

    // Email transporter configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Customer confirmation email
    const customerEmailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #667eea; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
            .status { background: #d4edda; color: #155724; padding: 15px; border-radius: 8px; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">🏛️ Piba Wings Travel</div>
                <h1>Mesajınız Alındı</h1>
                <p>Erişilebilir Turizm Uzmanı</p>
            </div>
            
            <div class="content">
                <div class="status">
                    <strong>✅ Mesajınız başarıyla alınmıştır!</strong><br>
                    En kısa sürede size dönüş yapacağız.
                </div>
                
                <div class="info-box">
                    <h3>👤 İletişim Bilgileriniz</h3>
                    <p><strong>Ad Soyad:</strong> ${contactData.name}</p>
                    <p><strong>E-posta:</strong> ${contactData.email}</p>
                    <p><strong>Telefon:</strong> ${contactData.phone || 'Belirtilmedi'}</p>
                    <p><strong>Konu:</strong> ${contactData.subject}</p>
                </div>
                
                <div class="info-box">
                    <h3>💬 Mesajınız</h3>
                    <p>${contactData.message}</p>
                </div>
                
                ${contactData.accessibilityNeeds ? `
                <div class="info-box">
                    <h3>♿ Erişilebilirlik İhtiyaçları</h3>
                    <p>${contactData.accessibilityNeeds}</p>
                </div>
                ` : ''}
                
                <div class="info-box">
                    <h3>📞 İletişim</h3>
                    <p>Sorularınız için bizimle iletişime geçebilirsiniz:</p>
                    <p><strong>Telefon:</strong> +90 532 543 36 73</p>
                    <p><strong>E-posta:</strong> info@pibawingstravel.com</p>
                    <p><strong>WhatsApp:</strong> +90 532 543 36 73</p>
                </div>
            </div>
            
            <div class="footer">
                <p>Bu e-posta otomatik olarak gönderilmiştir.</p>
                <p>© 2024 Piba Wings Travel - Erişilebilir Turizm Uzmanı</p>
            </div>
        </div>
    </body>
    </html>
    `

    // Company notification email
    const companyEmailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #ff6b6b; }
            .urgent { background: #fff3cd; border-color: #ffc107; color: #856404; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">📧 Yeni İletişim Mesajı</div>
                <h1>Piba Wings Travel</h1>
                <p>İletişim Formu Bildirimi</p>
            </div>
            
            <div class="content">
                <div class="info-box urgent">
                    <strong>🚨 YENİ İLETİŞİM MESAJI</strong><br>
                    Gönderim Zamanı: ${new Date(contactData.submittedAt).toLocaleString('tr-TR')}
                </div>
                
                <div class="info-box">
                    <h3>👤 Müşteri Bilgileri</h3>
                    <p><strong>Ad Soyad:</strong> ${contactData.name}</p>
                    <p><strong>E-posta:</strong> ${contactData.email}</p>
                    <p><strong>Telefon:</strong> ${contactData.phone || 'Belirtilmedi'}</p>
                    <p><strong>Konu:</strong> ${contactData.subject}</p>
                </div>
                
                <div class="info-box">
                    <h3>💬 Mesaj İçeriği</h3>
                    <p>${contactData.message}</p>
                </div>
                
                ${contactData.accessibilityNeeds ? `
                <div class="info-box">
                    <h3>♿ Erişilebilirlik İhtiyaçları</h3>
                    <p><strong>Özel İhtiyaçlar:</strong> ${contactData.accessibilityNeeds}</p>
                </div>
                ` : ''}
                
                <div class="info-box">
                    <h3>⚡ Hızlı Eylemler</h3>
                    <p><strong>E-posta ile yanıtla:</strong> <a href="mailto:${contactData.email}?subject=Re: ${contactData.subject}">${contactData.email}</a></p>
                    ${contactData.phone ? `<p><strong>Telefon ile ara:</strong> <a href="tel:${contactData.phone}">${contactData.phone}</a></p>` : ''}
                </div>
            </div>
            
            <div class="footer">
                <p>Bu bildirim otomatik olarak gönderilmiştir.</p>
                <p>© 2024 Piba Wings Travel - İletişim Sistemi</p>
            </div>
        </div>
    </body>
    </html>
    `

    // Send customer confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: contactData.email,
      subject: '✅ Mesajınız Alındı - Piba Wings Travel',
      html: customerEmailHTML
    })

    // Send company notification email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'gokhanyildirim1905@gmail.com',
      subject: `📧 YENİ İLETİŞİM: ${contactData.name} - ${contactData.subject}`,
      html: companyEmailHTML
    })

    res.status(200).json({ 
      success: true, 
      message: 'Mesaj başarıyla gönderildi ve e-postalar iletildi.' 
    })

  } catch (error) {
    console.error('Email sending error:', error)
    res.status(500).json({ 
      success: false, 
      message: 'E-posta gönderilirken bir hata oluştu.' 
    })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Local API server is running' })
})

app.listen(PORT, () => {
  console.log(`🚀 Local API server running on http://localhost:${PORT}`)
  console.log(`📧 Email User: ${process.env.EMAIL_USER || 'Not configured'}`)
  console.log(`🔑 Email Pass: ${process.env.EMAIL_PASS ? 'Configured' : 'Not configured'}`)
})
