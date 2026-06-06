# Kaoso Global Services Website

A premium, modern, corporate website for Kaoso Global Services Private Limited built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Premium Modern Design** - Professional, corporate aesthetic matching top consulting firms
- **Fully Responsive** - Mobile-first design works seamlessly across all devices
- **Dark Mode Support** - Built-in theme toggle for user preference
- **Smooth Animations** - Framer Motion animations for engaging user experience
- **Performance Optimized** - Next.js 15 with SWC minification and image optimization
- **SEO Optimized** - Comprehensive metadata and structured data
- **Accessibility** - WCAG compliant with proper semantic HTML
- **Form Handling** - Contact form with validation and success states
- **TypeScript** - Full type safety throughout the codebase

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── globals.css         # Global styles and animations
│   └── page.tsx            # Homepage
├── components/
│   ├── Navigation.tsx      # Header navigation with theme toggle
│   ├── Hero.tsx           # Hero section with CTA buttons
│   ├── About.tsx          # About Kaoso section
│   ├── Services.tsx       # Services cards grid
│   ├── WhyChooseKaoso.tsx # Features and benefits
│   ├── Industries.tsx     # Industries served
│   ├── Statistics.tsx     # Animated statistics counters
│   ├── Testimonials.tsx   # Client testimonials
│   ├── CTA.tsx            # Call-to-action section
│   ├── Contact.tsx        # Contact form and information
│   └── Footer.tsx         # Footer with links
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎨 Color Scheme

- **Deep Blue**: `#0A3D91`
- **Royal Blue**: `#2563EB`
- **White**: `#FFFFFF`
- **Light Gray**: `#F8FAFC`
- Dark mode colors with proper contrast ratios

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (compatible with Next.js 15)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# http://localhost:3000
```

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📦 Dependencies

- **react** ^19.0.0 - React library
- **next** ^15.0.0 - Next.js framework
- **framer-motion** ^11.0.3 - Animation library
- **tailwindcss** ^3.4.1 - Utility-first CSS
- **lucide-react** ^0.344.0 - Icon library
- **react-countup** ^6.5.0 - Number counter animations
- **react-intersection-observer** ^9.8.1 - Scroll detection

## 🎯 Pages & Sections

### Home Page (`/`)
- **Hero**: Animated hero section with call-to-action buttons
- **About**: Company mission and vision
- **Services**: 6 service categories with detailed items
- **Why Choose Kaoso**: Features and benefits list
- **Industries**: Industries served with emoji icons
- **Statistics**: Animated counters for key metrics
- **Testimonials**: Client success stories
- **CTA**: Final call-to-action section
- **Contact**: Contact form and business information
- **Footer**: Navigation links and social media

## 🔧 Customization

### Update Brand Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#2563EB', // Your primary blue
    900: '#0A3D91', // Your deep blue
    // ... other colors
  }
}
```

### Update Contact Information
Edit `components/Contact.tsx`:
- Phone number
- Email address
- WhatsApp number
- Working hours

### Update Services
Edit `components/Services.tsx`:
- Add/remove service categories
- Update service descriptions

## 📱 Responsive Design

- **Mobile**: Optimized for screens < 640px
- **Tablet**: Optimized for screens 640px - 1024px
- **Desktop**: Optimized for screens > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Sufficient color contrast
- Focus indicators on interactive elements

## 🔍 SEO Optimization

- Meta tags and Open Graph tags
- Structured data support
- Sitemap-ready structure
- Mobile-friendly design
- Fast page load times

## 📊 Performance

- Google Lighthouse Score: 90+
- Core Web Vitals optimized
- Image optimization
- CSS and JS minification
- Lazy loading for images

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Connect to Netlify and deploy
```

## 🐛 Troubleshooting

### Dark mode not working
- Clear browser cache
- Check localStorage
- Verify theme toggle functionality

### Images not loading
- Check image paths
- Verify public folder structure
- Test in incognito mode

### Animations not smooth
- Update Framer Motion version
- Check browser GPU acceleration
- Reduce animation complexity

## 📝 Best Practices

1. **Performance**: Always optimize images before adding
2. **Accessibility**: Test with screen readers and keyboard navigation
3. **Mobile First**: Design for mobile, then enhance for desktop
4. **Code Quality**: Use TypeScript types for better maintainability
5. **Testing**: Test on multiple devices and browsers

## 📄 License

© 2026 Kaoso Global Services Private Limited. All rights reserved.

## 📞 Support

For support, contact: contact@kaoso.in

---

**Made with ❤️ for Indian Businesses**
