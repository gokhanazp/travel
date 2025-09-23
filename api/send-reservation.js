// Vercel serverless function for sending reservation emails
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const reservationData = req.body

    // Email transporter configuration (Gmail örneği)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Gmail adresiniz
        pass: process.env.EMAIL_PASS  // Gmail app password
      }
    })

    // Müşteriye gönderilecek onay maili
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
                <h1>Rezervasyon Onayı</h1>
                <p>Engelli Dostu Turizm</p>
            </div>
            
            <div class="content">
                <div class="status">
                    <strong>✅ Rezervasyonunuz başarıyla alınmıştır!</strong><br>
                    En kısa sürede size dönüş yapacağız.
                </div>
                
                <div class="info-box">
                    <h3>👤 Kişisel Bilgiler</h3>
                    <p><strong>Ad Soyad:</strong> ${reservationData.firstName} ${reservationData.lastName}</p>
                    <p><strong>E-posta:</strong> ${reservationData.email}</p>
                    <p><strong>Telefon:</strong> ${reservationData.phone}</p>
                </div>
                
                <div class="info-box">
                    <h3>🏛️ Tur Bilgileri</h3>
                    <p><strong>Seçilen Tur:</strong> ${reservationData.tourInfo?.name || 'Belirtilmemiş'}</p>
                    <p><strong>Tur Tarihi:</strong> ${new Date(reservationData.tourDate).toLocaleDateString('tr-TR')}</p>
                    <p><strong>Katılımcı Sayısı:</strong> ${reservationData.participantCount} kişi</p>
                    <p><strong>Fiyat:</strong> ${reservationData.tourInfo?.price || 'Belirtilmemiş'}</p>
                </div>
                
                ${reservationData.disabilityType ? `
                <div class="info-box">
                    <h3>♿ Erişilebilirlik Bilgileri</h3>
                    <p><strong>Engel Türü:</strong> ${reservationData.disabilityType}</p>
                    ${reservationData.assistanceNeeded ? `<p><strong>İhtiyaç Duyulan Yardım:</strong> ${reservationData.assistanceNeeded}</p>` : ''}
                    ${reservationData.wheelchairUser ? '<p>✅ Tekerlekli sandalye kullanıcısı</p>' : ''}
                    ${reservationData.guideDogUser ? '<p>✅ Rehber köpeği var</p>' : ''}
                </div>
                ` : ''}
                
                ${reservationData.specialRequests ? `
                <div class="info-box">
                    <h3>📝 Özel İstekler</h3>
                    <p>${reservationData.specialRequests}</p>
                </div>
                ` : ''}
                
                ${reservationData.emergencyContact ? `
                <div class="info-box">
                    <h3>🚨 Acil Durum İletişim</h3>
                    <p><strong>İletişim Kişisi:</strong> ${reservationData.emergencyContact}</p>
                    <p><strong>Telefon:</strong> ${reservationData.emergencyPhone}</p>
                </div>
                ` : ''}
                
                <div class="info-box">
                    <h3>📞 İletişim</h3>
                    <p>Sorularınız için bizimle iletişime geçebilirsiniz:</p>
                    <p><strong>Telefon:</strong> +90 212 123 45 67</p>
                    <p><strong>E-posta:</strong> info@pibawingstravel.com</p>
                    <p><strong>WhatsApp:</strong> +90 532 123 45 67</p>
                </div>
            </div>
            
            <div class="footer">
                <p>Bu e-posta otomatik olarak gönderilmiştir.</p>
                <p>© 2024 Piba Wings Travel - Engelli Dostu Turizm</p>
            </div>
        </div>
    </body>
    </html>
    `

    // Şirkete gönderilecek bildirim maili
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
            .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">🚨 YENİ REZERVASYON</div>
                <h1>Engelli Dostu Tur Rezervasyonu</h1>
                <p>Rezervasyon Tarihi: ${new Date().toLocaleString('tr-TR')}</p>
            </div>
            
            <div class="content">
                <div class="info-box urgent">
                    <h3>⚡ ÖNCELİKLİ REZERVASYON</h3>
                    <p>Engelli dostu tur rezervasyonu - Özel dikkat gerektirir</p>
                </div>
                
                <div class="info-box">
                    <h3>👤 Müşteri Bilgileri</h3>
                    <p><strong>Ad Soyad:</strong> ${reservationData.firstName} ${reservationData.lastName}</p>
                    <p><strong>E-posta:</strong> ${reservationData.email}</p>
                    <p><strong>Telefon:</strong> ${reservationData.phone}</p>
                </div>
                
                <div class="info-box">
                    <h3>🏛️ Tur Detayları</h3>
                    <p><strong>Seçilen Tur:</strong> ${reservationData.tourInfo?.name || 'Belirtilmemiş'}</p>
                    <p><strong>Tur Tarihi:</strong> ${new Date(reservationData.tourDate).toLocaleDateString('tr-TR')}</p>
                    <p><strong>Katılımcı Sayısı:</strong> ${reservationData.participantCount} kişi</p>
                    <p><strong>Tahmini Gelir:</strong> ${reservationData.tourInfo?.price || 'Belirtilmemiş'} x ${reservationData.participantCount}</p>
                </div>
                
                <div class="info-box">
                    <h3>♿ ERİŞİLEBİLİRLİK BİLGİLERİ</h3>
                    <p><strong>Engel Türü:</strong> ${reservationData.disabilityType || 'Belirtilmemiş'}</p>
                    <p><strong>İhtiyaç Duyulan Yardım:</strong> ${reservationData.assistanceNeeded || 'Belirtilmemiş'}</p>
                    <p><strong>Tekerlekli Sandalye:</strong> ${reservationData.wheelchairUser ? '✅ Evet' : '❌ Hayır'}</p>
                    <p><strong>Rehber Köpeği:</strong> ${reservationData.guideDogUser ? '✅ Evet' : '❌ Hayır'}</p>
                </div>
                
                ${reservationData.specialRequests ? `
                <div class="info-box">
                    <h3>📝 Özel İstekler</h3>
                    <p>${reservationData.specialRequests}</p>
                </div>
                ` : ''}
                
                ${reservationData.emergencyContact ? `
                <div class="info-box">
                    <h3>🚨 Acil Durum İletişim</h3>
                    <p><strong>İletişim Kişisi:</strong> ${reservationData.emergencyContact}</p>
                    <p><strong>Telefon:</strong> ${reservationData.emergencyPhone}</p>
                </div>
                ` : ''}
                
                <div class="info-box">
                    <h3>⚡ YAPILACAKLAR</h3>
                    <ul>
                        <li>Müşteriyi 24 saat içinde arayın</li>
                        <li>Erişilebilirlik gereksinimlerini kontrol edin</li>
                        <li>Özel araç/rehber ayarlamalarını yapın</li>
                        <li>Tur rotasını engel durumuna göre planlayın</li>
                        <li>Gerekli izinleri ve rezervasyonları yapın</li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
    </html>
    `

    // Müşteriye onay maili gönder
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: reservationData.email,
      subject: '✅ Rezervasyon Onayı - Piba Wings Travel',
      html: customerEmailHTML
    })

    // Şirkete bildirim maili gönder (TEST - gokhanyildirim1905@gmail.com)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'gokhanyildirim1905@gmail.com', // TEST e-posta adresi
      subject: `🚨 YENİ REZERVASYON: ${reservationData.firstName} ${reservationData.lastName} - ${reservationData.tourInfo?.name}`,
      html: companyEmailHTML
    })

    res.status(200).json({ 
      success: true, 
      message: 'Rezervasyon başarıyla gönderildi ve e-postalar iletildi.' 
    })

  } catch (error) {
    console.error('Email gönderme hatası:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Rezervasyon gönderilirken bir hata oluştu.',
      error: error.message 
    })
  }
}
