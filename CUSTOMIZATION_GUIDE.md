# Quick Customization Guide

This guide will help you quickly personalize your portfolio website.

## ✏️ Step-by-Step Customization

### Step 1: Update Your Name and Branding

**File: `src/components/Navbar.tsx`**
```typescript
// Line 30: Replace with your name or brand
<YourName/>  →  Your Actual Name
```

**File: `src/components/Footer.tsx`**
```typescript
// Line 18: Replace with your name or brand
<YourName/>  →  Your Actual Name
```

### Step 2: Update Contact Information

**File: `src/components/Footer.tsx`**
```typescript
// Lines 47-48: Update email
href="mailto:your.email@example.com"

// Lines 53-54: Update phone
href="tel:+919999999999"
```

**File: `src/components/ContactForm.tsx`**
```typescript
// Line 185: Update email
your.email@example.com  →  your_actual_email@example.com
```

### Step 3: Update Social Media Links

**File: `src/components/Footer.tsx`**
```typescript
// Line 23: GitHub
href="https://github.com"  →  href="https://github.com/yourusername"

// Line 31: LinkedIn
href="https://linkedin.com"  →  href="https://linkedin.com/in/yourusername"
```

### Step 4: Customize Pricing (Optional)

**File: `src/components/Pricing.tsx`**

To adjust pricing for your market:
- Line 13-21: Basic tier (currently ₹5,000)
- Line 36-48: Standard tier (currently ₹12,000)
- Line 63-79: Premium tier (currently ₹20,000)

You can also add/remove features from the `features` arrays.

### Step 5: Update Meta Tags for SEO

**File: `src/app/layout.tsx`**
```typescript
// Lines 8-10: Update these
title: "Your Name | Full Stack Developer Portfolio"
description: "Your custom description..."
keywords: ["your", "relevant", "keywords"]
```

**File: `src/app/contact/page.tsx`**
```typescript
// Lines 4-6: Update contact page meta
title: "Contact Your Name | Get Your Website Built"
description: "Your custom description..."
```

### Step 6: Customize Colors (Optional)

**File: `tailwind.config.ts`**

The site uses a blue color scheme by default. To change:
```typescript
// Lines 12-22: Primary color palette
primary: {
  500: '#0ea5e9',  // Main color - change this!
  600: '#0284c7',  // Darker variant
  // ... etc
}
```

**Popular color combinations:**
- **Purple**: `#8b5cf6` (primary-500)
- **Green**: `#10b981` (primary-500)
- **Red**: `#ef4444` (primary-500)
- **Orange**: `#f97316` (primary-500)

### Step 7: Add Your Own Content

**File: `src/components/Experience.tsx`**

Update your experience details:
- Lines 15-27: CRM experience description
- Lines 28-40: Healthcare experience description

You can add more experience cards or modify existing ones.

### Step 8: Customize Hero Section

**File: `src/components/Hero.tsx`**

- Line 57: Update the main headline
- Line 65: Update the subtitle with your specialization
- Lines 75-84: Update CTA button text if needed

## 🎨 Quick Color Reference

Here's where each color is primarily used:

- **Primary-500**: Buttons, links, accents
- **Primary-600**: Button hover states, emphasized elements
- **Primary-100**: Subtle backgrounds, badges
- **Primary-50**: Very light backgrounds

## 📝 Content Checklist

Before going live, make sure you've updated:

- [ ] Your name/brand in Navbar and Footer
- [ ] Email address (3 places: Footer, ContactForm, README)
- [ ] Phone number (Footer)
- [ ] GitHub URL (Footer)
- [ ] LinkedIn URL (Footer)
- [ ] Meta titles and descriptions (layout.tsx, contact/page.tsx)
- [ ] Pricing tiers (if needed)
- [ ] Hero section text
- [ ] Experience descriptions
- [ ] Color scheme (optional)

## 🚀 After Customization

1. Test the site locally: `npm run dev`
2. Check all links work
3. Test the contact form
4. View on mobile devices
5. Build for production: `npm run build`
6. Deploy to Vercel or your hosting platform

## 💡 Pro Tips

1. **Keep it simple**: Don't overcomplicate your first portfolio
2. **Add projects gradually**: As you complete projects, add them to your experience section
3. **Test everything**: Make sure all links and forms work before going live
4. **Get feedback**: Ask friends or colleagues to review before launch
5. **Update regularly**: Keep your portfolio fresh with new projects and skills

## ❓ Common Issues

**Issue: Colors not updating**
- Solution: Stop dev server, run `npm run dev` again

**Issue: Form not submitting**
- Solution: The form is set to simulate submission. Follow README instructions to connect a real email service.

**Issue: Build errors**
- Solution: Check that all imports are correct and there are no TypeScript errors

## 📞 Need Help?

If you get stuck:
1. Check the main README.md for detailed documentation
2. Review the code comments in each file
3. Search for Next.js documentation
4. Check Tailwind CSS documentation for styling questions

---

**Remember**: This is YOUR portfolio. Feel free to modify, add, or remove any sections to make it uniquely yours!

