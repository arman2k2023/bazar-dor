# 🛒 বাজার দর (BazarDor)

**নিত্যপ্রয়োজনীয় পণ্যের বাজারদর জানুন সহজে, এক জায়গায়।**

BazarDor একটি বাংলা ভাষাভিত্তিক ওয়েব অ্যাপ্লিকেশন, যার মাধ্যমে ব্যবহারকারীরা বিভিন্ন নিত্যপ্রয়োজনীয় পণ্যের বর্তমান দাম, দামের পরিবর্তন এবং বাজারভিত্তিক মূল্য সম্পর্কে জানতে পারবেন।

## ✨ Features

- 🏠 **Home Page:** বিভিন্ন পণ্যের বাজারদর এক নজরে দেখা।
- 🔎 **Product Search:** বাংলা নাম দিয়ে পণ্য খোঁজা।
- 📈 **Price Trends:** দাম বেড়েছে, কমেছে অথবা অপরিবর্তিত রয়েছে—এমন পণ্য দেখা।
- 🗂️ **Category Browsing:** ক্যাটাগরি অনুযায়ী পণ্য দেখা।
- ↕️ **Sorting & Filtering:** দাম অনুযায়ী সাজানো এবং দামের পরিবর্তন অনুসারে ফিল্টার করা।
- 📊 **Product Details:** পণ্যের বিস্তারিত ও বিভিন্ন বাজারের দাম দেখা।
- 🔐 **Authentication:** Email/Password দিয়ে Sign Up ও Sign In।
- 🌐 **Social Login:** Google ও GitHub দিয়ে লগইন।
- 👤 **User Profile:** প্রোফাইল দেখা ও সংশ্লিষ্ট অ্যাকাউন্ট ফিচার ব্যবহার।
- 🔒 **Protected Pages:** অনুমোদিত ব্যবহারকারীদের জন্য সুরক্ষিত পেজ।
- 🔔 **Toast Notifications:** গুরুত্বপূর্ণ কাজের ফলাফল সম্পর্কে বার্তা।
- ⏳ **Loading & Error UI:** Loading skeleton এবং error recovery।
- 📱 **Responsive Design:** মোবাইল, ট্যাবলেট ও ডেস্কটপে ব্যবহার উপযোগী UI।

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js App Router | Application framework |
| React | UI development |
| TypeScript | Type safety |
| Tailwind CSS | Styling and responsive design |
| Better Auth | Authentication |
| Neon PostgreSQL | Database |
| Sonner | Toast notifications |
| Programming Hero API | Product and category data |

## 📡 API

**Base URL:**  
https://openapi.programming-hero.com/api/bazardor

| Endpoint | Description |
|---|---|
| `/products` | পণ্যের তালিকা |
| `/categories` | পণ্যের ক্যাটাগরি |

## ⚙️ Getting Started

### Prerequisites

- Node.js (সমর্থিত LTS version)
- npm
- Git
- Neon PostgreSQL database
- Google ও GitHub OAuth credentials (Social Login ব্যবহার করতে চাইলে)

### 1. Clone the Repository

```bash
git clone https://github.com/arman2k2023/bazar-dor.git
cd bazar-dor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

প্রজেক্টের root folder-এ `.env` ফাইল তৈরি করো:

```env
DATABASE_URL="YOUR_NEON_DATABASE_URL"
BETTER_AUTH_SECRET="YOUR_STRONG_RANDOM_SECRET"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

NEXT_PUBLIC_API_BASE_URL="https://openapi.programming-hero.com/api/bazardor"

GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET"

GITHUB_CLIENT_ID="YOUR_GITHUB_CLIENT_ID"
GITHUB_CLIENT_SECRET="YOUR_GITHUB_CLIENT_SECRET"
```

**Security Notes:**

- `.env` ফাইল কখনো GitHub-এ commit করবে না।
- বাস্তব database URL, OAuth secret বা authentication secret README-তে প্রকাশ করবে না।
- `BETTER_AUTH_SECRET`-এর জন্য শক্তিশালী random secret ব্যবহার করবে।
- Google ও GitHub OAuth-এর callback URLs সঠিকভাবে configure করবে।
- Production deployment-এর সময় hosting platform-এ প্রয়োজনীয় environment variables যোগ করবে।

### 4. Run the Development Server

```bash
npm run dev
```

ব্রাউজারে [http://localhost:3000](http://localhost:3000) খুলে অ্যাপ্লিকেশনটি দেখো।

### 5. Create a Production Build

```bash
npm run build
npm run start
```

## 🔐 Authentication Setup

BazarDor-এ Better Auth ব্যবহার করে authentication পরিচালনা করা হয়।

- Email ও password দিয়ে registration এবং login।
- Google OAuth login।
- GitHub OAuth login।
- Neon PostgreSQL-এ authentication data সংরক্ষণ।

Social Login ব্যবহার করতে সংশ্লিষ্ট OAuth provider-এর credentials এবং সঠিক callback configuration প্রয়োজন।

## 🚀 Deployment

প্রজেক্টটি Next.js সমর্থিত hosting platform-এ deploy করার প্রস্তুতি চলছে।

Deployment-এর আগে:

1. `npm run build` সফল হচ্ছে কি না পরীক্ষা করো।
2. Hosting platform-এ প্রয়োজনীয় environment variables সেট করো।
3. Neon database connection যাচাই করো।
4. Google ও GitHub OAuth callback URLs production domain অনুযায়ী আপডেট করো।
5. Production URL-এ Sign Up, Sign In, Profile এবং protected pages পরীক্ষা করো।

**Live Demo:** Deployment সম্পন্ন হলে এখানে production URL যোগ করা হবে।

## 📁 Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   ├── category/
│   ├── product/
│   ├── profile/
│   ├── sign-in/
│   ├── sign-up/
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   ├── product/
│   └── ui/
├── lib/
│   ├── api.ts
│   ├── auth.ts
│   ├── auth-client.ts
│   ├── categories.ts
│   └── products.ts
└── types/
    └── product.ts
```

*Note: Project Structure-টি তোমার বর্তমান ফাইল ও ফোল্ডারের সঙ্গে মিলিয়ে নিও।*

## 📌 Project Status

- [x] Home page এবং product listing
- [x] Product search
- [x] Category filtering এবং price sorting
- [x] Authentication integration
- [x] Loading skeleton এবং error UI
- [x] README documentation
- [ ] Production deployment
- [ ] Live Demo link যোগ করা

## 📄 License

এই প্রজেক্টটি শিক্ষামূলক উদ্দেশ্যে তৈরি। পুনর্ব্যবহারের আগে repository-এর license এবং সংশ্লিষ্ট API-এর শর্তাবলি যাচাই করো।
