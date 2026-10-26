# 🛒 বাজার দর (BazarDor)

**নিত্যপ্রয়োজনীয় পণ্যের বাজারদর জানুন সহজে, এক জায়গায়।**

BazarDor একটি বাংলা ভাষাভিত্তিক ওয়েব অ্যাপ্লিকেশন, যার মাধ্যমে ব্যবহারকারীরা নিত্যপ্রয়োজনীয় পণ্যের বর্তমান দাম, দামের পরিবর্তন এবং বিভিন্ন বাজারের মূল্য সম্পর্কে জানতে পারবেন।

## 🌐 Live Demo

**Live Website:** https://bazar-dor-coral-six.vercel.app/

**GitHub Repository:** https://github.com/arman2k2023/bazar-dor

## ✨ Features

- 🏠 **Home Page:** বিভিন্ন পণ্যের বাজারদর এক নজরে দেখা।
- 🔎 **Product Search:** বাংলা নাম দিয়ে পণ্য খোঁজা।
- 📈 **Price Trends:** দাম বেড়েছে, কমেছে অথবা অপরিবর্তিত রয়েছে—এমন পণ্য দেখা।
- 🗂️ **Category Browsing:** ক্যাটাগরি অনুযায়ী পণ্য দেখা।
- ↕️ **Sorting & Filtering:** দাম অনুযায়ী সাজানো এবং দামের পরিবর্তন অনুসারে ফিল্টার করা।
- 📊 **Product Details:** পণ্যের বিস্তারিত ও বিভিন্ন বাজারের দাম দেখা।
- 🔐 **Authentication:** Email ও Password দিয়ে Sign Up এবং Sign In।
- 🌐 **Social Login:** Google ও GitHub দিয়ে লগইন।
- 👤 **User Profile:** নিজের প্রোফাইল দেখা।
- 🔒 **Protected Pages:** নির্দিষ্ট পেজে authentication বাধ্যতামূলক।
- 🔔 **Toast Notifications:** গুরুত্বপূর্ণ কাজের ফলাফল সম্পর্কে বার্তা।
- ⏳ **Loading & Error UI:** Loading skeleton এবং error recovery।
- 📱 **Responsive Design:** মোবাইল, ট্যাবলেট ও ডেস্কটপের উপযোগী UI।

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js App Router | Application framework |
| React | UI development |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Better Auth | Authentication |
| Neon PostgreSQL | Database |
| Sonner | Toast notifications |
| Programming Hero API | Product and category data |

## 📡 API

**Base URL:** https://openapi.programming-hero.com/api/bazardor

| Endpoint | Description |
|---|---|
| `/products` | পণ্যের তালিকা |
| `/categories` | পণ্যের ক্যাটাগরি |

## ⚙️ Getting Started

### Prerequisites

- Node.js (LTS version)
- npm
- Git
- Neon PostgreSQL database

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

প্রজেক্টের root folder-এ `.env` ফাইল তৈরি করো এবং নিচের variable-গুলো নিজের credentials দিয়ে পূরণ করো।

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
- বাস্তব database URL, OAuth credentials বা authentication secret প্রকাশ করবে না।
- Google ও GitHub OAuth-এর callback URLs সঠিকভাবে configure করবে।
- Production deployment-এর জন্য Vercel-এ প্রয়োজনীয় environment variables সেট করবে।

### 4. Run the Development Server

```bash
npm run dev
```

তারপর ব্রাউজারে http://localhost:3000 খোলো।

### 5. Create a Production Build

```bash
npm run build
npm run start
```

## 🔐 Authentication

BazarDor-এ Better Auth ব্যবহার করা হয়েছে।

- Email ও Password দিয়ে registration এবং login।
- Google OAuth login।
- GitHub OAuth login।
- Neon PostgreSQL-এ authentication data সংরক্ষণ।
- Protected pages-এর জন্য session validation।

Social Login ব্যবহার করতে সংশ্লিষ্ট OAuth provider-এর credentials এবং সঠিক callback configuration প্রয়োজন।

## 🚀 Deployment

প্রজেক্টটি Vercel-এ deploy করা হয়েছে।

**Live URL:** https://bazar-dor-coral-six.vercel.app/

Production environment-এ প্রয়োজনীয় environment variables সেট করা হয়েছে এবং Email/Password, Google ও GitHub Sign In পরীক্ষা করা হয়েছে।

## 📁 Project Structure

```text
src/
├── app/
│   ├── api/auth/[...all]/
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

*Note: এই structure-টি repository-র প্রকৃত ফাইলের সঙ্গে মিলিয়ে নিও।*

## 📌 Project Status

- [x] Home page এবং product listing
- [x] Product search
- [x] Category browsing এবং sorting
- [x] Email/Password authentication
- [x] Google ও GitHub OAuth
- [x] Protected pages
- [x] Loading skeleton, error UI ও 404 page
- [x] Toast notifications
- [x] README documentation
- [x] Vercel deployment

## 📄 License

এই প্রজেক্টটি শিক্ষামূলক উদ্দেশ্যে তৈরি। পুনর্ব্যবহারের আগে repository-এর license এবং সংশ্লিষ্ট API-এর শর্তাবলি যাচাই করো।
