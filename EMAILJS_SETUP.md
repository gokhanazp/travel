# 📧 EmailJS Kurulum Rehberi - Piba Wings Travel

Bu rehber, rezervasyon mail sistemini EmailJS ile nasıl kuracağınızı açıklar.

## 🚀 Adım 1: EmailJS Hesabı Oluşturun

1. [EmailJS.com](https://www.emailjs.com/) adresine gidin
2. "Sign Up" ile ücretsiz hesap oluşturun
3. Email adresinizi doğrulayın

## ⚙️ Adım 2: Email Service Ekleyin

1. Dashboard'da "Email Services" sekmesine gidin
2. "Add New Service" butonuna tıklayın
3. **Gmail** seçin (önerilen)
4. Gmail hesabınızla bağlantı kurun
5. Service ID'yi not alın (örn: `service_abc123`)

## 📝 Adım 3: Email Template'leri Oluşturun

### Rezervasyon Template'i:

1. "Email Templates" sekmesine gidin
2. "Create New Template" tıklayın
3. Template ID: `template_reservation`
4. Subject: `✅ Rezervasyon Onayı - {{customer_name}} - Piba Wings Travel`

**Template İçeriği:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .info-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #ff6b6b; }
        .footer { text-align: center; margin-top: 30px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Rezervasyon Onayı</h1>
            <p>Sayın {{customer_name}}, rezervasyonunuz başarıyla alınmıştır!</p>
        </div>
        
        <div class="content">
            <div class="info-box">
                <h3>👤 Müşteri Bilgileri</h3>
                <p><strong>Ad Soyad:</strong> {{customer_name}}</p>
                <p><strong>E-posta:</strong> {{customer_email}}</p>
                <p><strong>Telefon:</strong> {{customer_phone}}</p>
            </div>
            
            <div class="info-box">
                <h3>🎯 Tur Bilgileri</h3>
                <p><strong>Tur Adı:</strong> {{tour_name}}</p>
                <p><strong>Tarih:</strong> {{tour_date}}</p>
                <p><strong>Katılımcı Sayısı:</strong> {{participants}}</p>
            </div>
            
            <div class="info-box">
                <h3>♿ Erişilebilirlik</h3>
                <p><strong>Özel İhtiyaçlar:</strong> {{accessibility_needs}}</p>
                <p><strong>Özel İstekler:</strong> {{special_requests}}</p>
            </div>
            
            <div class="info-box">
                <h3>🚨 Acil Durum İletişim</h3>
                <p><strong>İletişim Kişisi:</strong> {{emergency_contact}}</p>
                <p><strong>Telefon:</strong> {{emergency_phone}}</p>
            </div>
            
            <div class="info-box">
                <h3>📞 İletişim</h3>
                <p>Sorularınız için bizimle iletişime geçebilirsiniz:</p>
                <p><strong>Telefon:</strong> {{company_phone}}</p>
                <p><strong>E-posta:</strong> {{company_email}}</p>
                <p><strong>WhatsApp:</strong> {{company_whatsapp}}</p>
            </div>
        </div>
        
        <div class="footer">
            <p>Bu e-posta {{submission_date}} tarihinde {{submission_time}} saatinde otomatik olarak gönderilmiştir.</p>
            <p>© 2024 {{company_name}} - Engelli Dostu Turizm</p>
        </div>
    </div>
</body>
</html>
```

### İletişim Template'i:

1. Yeni template oluşturun
2. Template ID: `template_contact`
3. Subject: `📧 Yeni İletişim - {{from_name}} - Piba Wings Travel`

**Template İçeriği:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .info-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #4f46e5; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 Yeni İletişim Mesajı</h1>
            <p>{{from_name}} tarafından gönderildi</p>
        </div>
        
        <div class="content">
            <div class="info-box">
                <h3>👤 Gönderen Bilgileri</h3>
                <p><strong>Ad Soyad:</strong> {{from_name}}</p>
                <p><strong>E-posta:</strong> {{from_email}}</p>
                <p><strong>Telefon:</strong> {{phone}}</p>
            </div>
            
            <div class="info-box">
                <h3>💬 Mesaj</h3>
                <p><strong>Konu:</strong> {{subject}}</p>
                <p><strong>Mesaj:</strong></p>
                <p>{{message}}</p>
            </div>
        </div>
        
        <div class="footer">
            <p>Gönderim: {{submission_date}} - {{submission_time}}</p>
            <p>© 2024 {{company_name}}</p>
        </div>
    </div>
</body>
</html>
```

## 🔑 Adım 4: Public Key Alın

1. Dashboard'da "Account" sekmesine gidin
2. "API Keys" bölümünden Public Key'i kopyalayın

## ⚙️ Adım 5: Environment Variables Güncelleyin

`.env` dosyasını güncelleyin:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_RESERVATION=template_reservation
VITE_EMAILJS_TEMPLATE_CONTACT=template_contact
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 🧪 Adım 6: Test Edin

1. Uygulamayı başlatın: `npm run dev`
2. Rezervasyon formunu doldurun
3. Console'da logları kontrol edin
4. Email'inizi kontrol edin

## 🔧 Sorun Giderme

### Mail Gelmiyor?
- EmailJS dashboard'da "Logs" sekmesini kontrol edin
- Console'da hata mesajlarını kontrol edin
- Template ID'lerin doğru olduğundan emin olun

### Simülasyon Modu?
- `.env` dosyasındaki EmailJS ayarlarını kontrol edin
- Public Key'in doğru olduğundan emin olun

### Gmail Sorunu?
- Gmail hesabınızın 2FA aktif olduğundan emin olun
- "Less secure app access" kapalı olmalı
- EmailJS'in Gmail erişim izni olduğunu kontrol edin

## 📞 Destek

Sorun yaşıyorsanız:
1. Console loglarını kontrol edin
2. EmailJS dashboard'daki logs'u inceleyin
3. Template'lerin doğru kaydedildiğini kontrol edin

## 🎉 Tamamlandı!

Artık rezervasyon mail sisteminiz çalışıyor! 🚀
