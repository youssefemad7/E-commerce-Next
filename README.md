This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

src/
│
├── app/ # النظام الأساسي لـ Next.js (Pages, Routing)
│ ├── page.tsx # الصفحة الرئيسية
│ ├── layout.tsx # Layout عام
│ ├── products/ # صفحة عرض المنتجات
│ │ └── page.tsx
│ ├── cart/ # صفحة عربة التسوق
│ │ └── page.tsx
│ ├── product/ # صفحة تفاصيل المنتج
│ │ └── [id]/page.tsx
│ ├── checkout/ # صفحة الدفع
│ │ └── page.tsx
│ ├── account/ # الحساب الشخصي / الطلبات
│ │ └── page.tsx
│ └── auth/ # تسجيل الدخول والتسجيل
│ ├── login/page.tsx
│ └── signup/page.tsx
│
├── components/ # كل المكونات القابلة لإعادة الاستخدام
│ ├── ui/ # مكونات واجهة الاستخدام
│ │ ├── Navbar.tsx
│ │ ├── Footer.tsx
│ │ ├── Button.tsx
│ │ ├── ThemeToggle.tsx
│ │ └── ProductCard.tsx
│ └── layout/ # مكونات خاصة بالـ layout العام
│ ├── Container.tsx
│ └── Section.tsx
│
├── lib/ # كود يساعد المشروع (Utils, API, Supabase)
│ ├── supabaseClient.ts # الاتصال بـ Supabase
│ ├── helpers.ts # دوال مساعدة (مثلاً: formatPrice)
│ └── constants.ts # متغيرات عامة
│
├── styles/ # ملفات التنسيق
│ ├── globals.css # ملف CSS الرئيسي
│ └── tailwind.config.js # إعدادات Tailwind (خارج src غالبًا)
│
├── data/ # بيانات وهمية مؤقتة أو JSON محلي
│ └── products.js
│
├── hooks/ # Custom hooks
│ └── useCart.ts
│
└── context/ # Context API (مثل إدارة العربة)
└── CartContext.tsx
