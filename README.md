# Brandefyn Professional Website

A modern, conversion-focused website built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- 🎨 Modern, professional design
- 📱 Fully responsive
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 📊 Animated metrics counters
- 🎥 Video testimonials and sales letter
- 📧 Email capture with Calendly integration
- 🖼️ Before/After case studies
- 🏢 Trusted by logo carousel
- ⭐ Reviews and testimonials

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/           # Images, videos, and other static assets
│   ├── images/      # Logo, case studies, testimonials, etc.
│   └── videos/      # Sales letter and testimonial videos
├── components/       # React components
│   ├── layout/      # Header, Footer, Layout
│   ├── sections/    # Page sections (Hero, Services, etc.)
│   ├── ui/          # Reusable UI components
│   └── forms/       # Form components
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── styles/          # Global styles
└── utils/           # Constants and utilities
```

## Adding Your Assets

### Logo
Place your Brandefyn logo at:
- `src/assets/images/logo/brandefyn-logo.png` or `.svg`

### Trusted By Logos
Add 15-20 client logos at:
- `src/assets/images/trusted-by/logo-1.png` through `logo-20.png`

### Case Study Images
Add before/after images at:
- `src/assets/images/case-studies/liquidation-before.jpg`
- `src/assets/images/case-studies/liquidation-after.jpg`
- `src/assets/images/case-studies/flower-power-before.jpg`
- `src/assets/images/case-studies/flower-power-after.jpg`

### Videos
Add your videos at:
- `src/assets/videos/sales-letter.mp4`
- `src/assets/videos/testimonial-1.mp4`
- `src/assets/videos/testimonial-2.mp4`
- `src/assets/videos/testimonial-3.mp4`

### Testimonial Thumbnails
Add thumbnails at:
- `src/assets/images/testimonials/testimonial-1.jpg`
- `src/assets/images/testimonials/testimonial-2.jpg`
- `src/assets/images/testimonials/testimonial-3.jpg`

## Configuration

### Calendly Integration
Update the Calendly URL in `src/components/sections/EmailForm.tsx`:
```tsx
<EmailCapture calendlyUrl="https://calendly.com/your-username/strategy-call" />
```

### Social Media Links
Update links in `src/utils/constants.ts`:
```tsx
export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/your-number',
  // ... other links
};
```

### Contact Information
Update contact info in `src/utils/constants.ts`:
```tsx
export const CONTACT_INFO = {
  phone: '+1 (800) 456 37 96',
  email: 'info@brandefyn.com',
  address: 'Your Address',
};
```

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **React Hook Form** - Form handling
- **React Icons** - Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC
