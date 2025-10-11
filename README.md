# Portfolio Website - Next.js

A modern, professional portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Perfect for showcasing web development services with a focus on school websites, CRM systems, and healthcare applications.

## 🌟 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Pricing Section**: Tailored pricing tiers for school websites (₹5,000 - ₹20,000)
- **Experience Showcase**: Highlights CRM and healthcare project experience
- **Contact Form**: Beautiful contact form with validation
- **SEO Optimized**: Built-in meta tags and semantic HTML
- **Fast Performance**: Optimized for speed and performance
- **Smooth Animations**: Powered by Framer Motion

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Icons**: React Icons

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Navigate to the project directory**
   ```bash
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Customization

### 1. Personal Information

Update the following files with your personal information:

- **Navbar & Footer** (`src/components/Navbar.tsx` & `src/components/Footer.tsx`):
  - Replace `<YourName/>` with your actual name
  - Update email: `your.email@example.com`
  - Update phone: `+91 99999 99999`
  - Add your GitHub and LinkedIn URLs

### 2. Meta Tags

Edit `src/app/layout.tsx` to update SEO information:
```typescript
export const metadata: Metadata = {
  title: "Your Name | Full Stack Developer",
  description: "Your custom description",
  // ... other meta tags
};
```

### 3. Pricing Tiers

Modify pricing in `src/components/Pricing.tsx` to adjust:
- Price points
- Features for each tier
- Package names and descriptions

### 4. Experience Section

Update `src/components/Experience.tsx` to:
- Add or remove experience items
- Customize skills and technical expertise
- Modify descriptions

### 5. Contact Form

The contact form in `src/components/ContactForm.tsx` currently simulates submission. To make it functional:

**Option 1: Use a form service**
- [Formspree](https://formspree.io/)
- [Web3Forms](https://web3forms.com/)
- [EmailJS](https://www.emailjs.com/)

**Option 2: Create your own API endpoint**
```typescript
// Create src/app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Add your email sending logic here
  return Response.json({ success: true });
}
```

Then update the form submission in `ContactForm.tsx`:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

## 🎨 Color Customization

Colors are defined in `tailwind.config.ts`. The primary color scheme uses:
- Primary: Blue shades (customizable)

To change the color scheme:
```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: {
        // Change these values to your preferred colors
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        // ... etc
      },
    },
  },
},
```

## 📱 Pages

- **Home** (`/`): Hero section, experience showcase, pricing, and CTA
- **Contact** (`/contact`): Dedicated contact page with form

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. The output will be in the `.next` folder
3. Deploy the build folder to Netlify

### Other hosting options

- **AWS Amplify**
- **DigitalOcean App Platform**
- **Railway**
- **Render**

## 📝 Build for Production

```bash
npm run build
npm run start
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── CTA.tsx
│       ├── ContactForm.tsx
│       ├── Experience.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       └── Pricing.tsx
├── public/
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Key Features to Highlight

### For School Websites
- Three pricing tiers starting from ₹5,000
- Mobile-friendly designs
- Easy content management
- Special rates for rural schools

### Technical Expertise
- CRM development for lead management
- Healthcare applications (shift management, invoicing, form automation)
- Full-stack development capabilities
- Modern, scalable architecture

## 💡 Tips

1. **Replace placeholder content** with your actual information
2. **Add your actual projects** when you complete them
3. **Update social media links** in the footer
4. **Optimize images** by adding them to the `public` folder
5. **Test on multiple devices** before deployment

## 📞 Support

If you need help with customization or have questions:
- Email: your.email@example.com
- GitHub: [Your GitHub Profile]

## 📜 License

This project is open source and available for personal and commercial use.

---

**Built with ❤️ using Next.js and Tailwind CSS**

