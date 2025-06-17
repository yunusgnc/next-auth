# NextAuth + Auth0 Kimlik Doğrulama Projesi

Bu proje, **Next.js**, **NextAuth.js** ve **Auth0** kullanarak modern, güvenli ve ölçeklenebilir bir kimlik doğrulama sistemi sunar.  
Ayrıca TailwindCSS ile şık bir arayüz, Zod ile validasyon ve Vitest ile test altyapısı içerir.

---

## İçindekiler

- [Kurulum](#kurulum)
- [Gerekli Environment Değişkenleri](#gerekli-environment-değişkenleri)
- [Geliştirme](#geliştirme)
- [Test](#test)
- [Auth0 & NextAuth Entegrasyonu](#auth0--nextauth-entegrasyonu)
- [Sayfa Koruma (Middleware)](#sayfa-koruma-middleware)
- [Kod Kalitesi](#kod-kalitesi)
- [12Factor App Uyum](#12factor-app-uyum)
- [Katkı ve Lisans](#katkı-ve-lisans)

---

## Kurulum

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/<kullanici-adi>/next-auth.git
   cd next-auth
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   # veya
   yarn install
   ```

3. **Environment dosyasını oluşturun:**
   `.env.local` dosyasını oluşturup aşağıdaki değişkenleri ekleyin.

---

## Gerekli Environment Değişkenleri

`.env.local` dosyanıza aşağıdaki değişkenleri ekleyin:

```env
AUTH0_CLIENT_ID=xxx
AUTH0_CLIENT_SECRET=xxx
AUTH0_ISSUER_BASE_URL=https://<auth0-domain>.auth0.com
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=xxx
```

- `AUTH0_CLIENT_ID`, `AUTH0_CLIENT_SECRET`, `AUTH0_ISSUER_BASE_URL`: Auth0 uygulamanızdan alınır.
- `NEXTAUTH_SECRET`: Rastgele bir secret oluşturabilirsiniz (`openssl rand -base64 32` ile).
- `NEXTAUTH_URL`: Geliştirme ortamında genellikle `http://localhost:3000` olur.

---

## Geliştirme

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

---

## Test

Testleri çalıştırmak için:

```bash
npm run test
```

Coverage (kapsam) raporu almak için:

```bash
npm run test:coverage
```

Testler Zod validasyonlarını kapsar. API, middleware ve component testleri eklenebilir.

---

## Auth0 & NextAuth Entegrasyonu

- `src/app/api/auth/[...nextauth]/route.ts` dosyasında Auth0 provider ile NextAuth kuruludur.
- Giriş için `/login` sayfası kullanılır.
- Oturum yönetimi JWT ile yapılır.
- Auth0 ayarları için Auth0 dashboard üzerinden callback ve logout URL'lerini ayarlamayı unutmayın.

---

## Sayfa Koruma (Middleware)

- `src/middleware.ts` ile `/dashboard` ve `/profile` gibi route'lar sadece oturum açmış kullanıcılar tarafından erişilebilir.
- Korumak istediğiniz yeni route'ları `matcher` dizisine ekleyebilirsiniz.

---

## Kod Kalitesi

- ESLint ve Prettier ile kod kalitesi sağlanır.
- TailwindCSS ile modern ve responsive arayüz.
- SOLID prensiplerine uygun modüler yapı (örnek: `src/services/auth.service.ts`).

---

## 12Factor App Uyum

- Tüm konfigürasyonlar environment değişkenleri ile yönetilir.
- Stateless yapı, kolay ölçeklenebilirlik.
- Loglama ve diğer 12Factor başlıkları için geliştirme yapılabilir.

---

## Katkı ve Lisans

- Katkıda bulunmak için PR gönderebilir veya issue açabilirsiniz.
- Lisans: MIT (veya eklemek istediğiniz başka bir lisans)

---

## Ekstra Notlar

- Proje ile ilgili sorularınız için [Auth0](https://auth0.com/docs) ve [NextAuth.js](https://next-auth.js.org/getting-started/introduction) dökümantasyonlarına göz atabilirsiniz.
- Eksik gördüğünüz noktaları issue olarak bildirebilirsiniz.
