# AUREVIAAI — Kurulum ve Deploy Rehberi

```
aureviaai/
├── index.html        ← Ana site (tüm frontend)
├── api/
│   └── analyze.js    ← Backend API (Vercel serverless)
├── vercel.json       ← Vercel otomatik ayarları
└── README.md         ← Bu dosya
```

---

## ADIM 1 — Anthropic API Anahtarı Al

1. https://console.anthropic.com adresine git
2. Google ile hesap aç
3. Sol menü → **API Keys** → **Create Key**
4. Anahtarı kopyala: `sk-ant-api03-...`
5. Güvenli bir yere kaydet

---

## ADIM 2 — GitHub Hesabı Aç

1. https://github.com → Sign Up
2. Email + şifre → hesap oluştur
3. Email doğrula

---

## ADIM 3 — Dosyaları GitHub'a Yükle

1. github.com → sağ üst **"+"** → **New repository**
2. Repository name: `aureviaai`
3. Public seç → **Create repository**
4. **"uploading an existing file"** linkine tıkla
5. Bu 4 dosyayı sürükle bırak:
   - `index.html`
   - `vercel.json`
   - `README.md`
   - `api/analyze.js` ← bu dosyayı yüklerken api/ klasörü otomatik oluşur
6. **Commit changes** butonuna bas

---

## ADIM 4 — Vercel'e Deploy Et

1. https://vercel.com → GitHub ile giriş yap
2. **Add New Project** → `aureviaai` repo'sunu seç
3. **Import** → **Deploy** (1-2 dakika)
4. Sana şu şekilde bir URL verir: `aureviaai.vercel.app`

---

## ADIM 5 — API Anahtarını Ekle (ÇOK ÖNEMLİ)

1. Vercel → Projen → **Settings**
2. Sol menü → **Environment Variables**
3. Şunu ekle:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** `sk-ant-api03-...`
   - Tüm ortamları işaretle (Production, Preview, Development)
4. **Save** → sonra **Deployments** → **Redeploy**

---

## ADIM 6 — Test Et

`https://aureviaai.vercel.app` adresine git
→ Metin yapıştır → ANALİZİ BAŞLAT → Çalışmalı ✅

---

## ADIM 7 — Özel Domain (İsteğe Bağlı)

- `aureviaai.com` domaini al (~$10-15/yıl)
- Vercel → Settings → Domains → Domain ekle
- DNS ayarlarını Vercel'in gösterdiği şekilde yap

---

## ADIM 8 — Stripe Ödeme Sistemi

1. https://stripe.com → hesap aç
2. Products → Aylık ₺99 + Yıllık ₺790 ürün oluştur
3. Payment Link al
4. `index.html` dosyasında şu satırı bul:
   ```javascript
   // window.location.href = 'https://buy.stripe.com/LINK';
   ```
   Yorumu kaldır, linkini yapıştır

---

## Maliyet

| Kalem | Ücret |
|---|---|
| Anthropic API | ~$0.01-0.03 / analiz |
| Vercel | Ücretsiz (100GB/ay) |
| GitHub | Ücretsiz |
| Domain | ~$10-15/yıl |
| Stripe | %2.9 + 30¢ / işlem |

---

## İletişim

**Site:** aureviaai.com  
**Email:** contact@aureviaai.com  
**Twitter:** @aureviaai
