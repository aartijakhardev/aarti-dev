# 🚀 Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## Step 1: Install Dependencies (1 min)

```bash
cd portfolio-website
npm install
```

## Step 2: Start Development Server (30 sec)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 3: Essential Customizations (3 min)

### Must Update Before Going Live:

1. **Your Name** - Replace `<YourName/>` in:
   - `src/components/Navbar.tsx` (line 30)
   - `src/components/Footer.tsx` (line 18)

2. **Email** - Replace `your.email@example.com` in:
   - `src/components/Footer.tsx` (line 47)
   - `src/components/ContactForm.tsx` (line 185)

3. **Phone** - Replace `+91 99999 99999` in:
   - `src/components/Footer.tsx` (line 53)

4. **Social Links** - Update in `src/components/Footer.tsx`:
   - GitHub (line 23)
   - LinkedIn (line 31)

## Step 4: Deploy (30 sec)

### Using Vercel (Easiest):

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your site is live! 🎉

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                 # Pages
│   │   ├── page.tsx        # Homepage
│   │   └── contact/        # Contact page
│   └── components/          # React components
│       ├── Hero.tsx        # Main banner
│       ├── Experience.tsx  # Work experience
│       ├── Pricing.tsx     # Pricing tiers
│       └── ContactForm.tsx # Contact form
├── public/                  # Static files (images, etc.)
└── README.md               # Full documentation
```

## 🎨 Quick Customizations

### Change Main Color
**File:** `tailwind.config.ts`
```typescript
primary: {
  500: '#0ea5e9',  // Change this hex color
}
```

### Update Pricing
**File:** `src/components/Pricing.tsx`
- Adjust prices and features for each tier

### Modify Experience
**File:** `src/components/Experience.tsx`
- Update your project descriptions and skills

## 📝 Optional Enhancements

- Add your logo to `public/` folder
- Replace hero animations
- Add actual projects as you complete them
- Connect contact form to email service (see README)

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Changes not showing?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

**Build errors?**
```bash
npm run build
```
Fix any TypeScript errors that appear.

## 📚 More Help?

- **Full Documentation**: See `README.md`
- **Customization Guide**: See `CUSTOMIZATION_GUIDE.md`
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)

---

**You're all set! Start customizing and make it yours! 💪**

