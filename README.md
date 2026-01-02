# Global Visa & Travel Services Website

A modern, professional frontend website for a Visa & Travel Services company built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Built-in metadata and SEO best practices
- **Type-Safe**: Full TypeScript implementation
- **Fast Performance**: Optimized with Next.js App Router
- **Reusable Components**: Modular component architecture

## 📦 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
travel-agency/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About Us page
│   ├── air-tickets/              # Air Ticket booking page
│   ├── contact/                  # Contact page
│   ├── hotels/                   # Hotel booking page
│   ├── visa-services/            # Visa services page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with Navbar & Footer
│   └── page.tsx                  # Home page
├── components/                   # Reusable components
│   ├── CountryCard.tsx          # Country information card
│   ├── CTASection.tsx           # Call-to-action section
│   ├── Footer.tsx               # Site footer
│   ├── Navbar.tsx               # Navigation bar
│   └── ServiceCard.tsx          # Service display card
├── types/                        # TypeScript type definitions
│   └── index.ts                 # Shared types
├── public/                       # Static assets
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## 🎨 Pages Overview

### 1. Home Page (`/`)
- Hero section with value proposition
- Services overview (6 main services)
- Featured countries
- Why choose us section
- Client testimonials
- Call-to-action

### 2. Visa Services (`/visa-services`)
- Detailed visa type information
  - Business Visa
  - Tourist Visa
  - Student Visa
  - Other Visas
- Visa application process
- Country coverage (150+ countries)
- Requirements checklist

### 3. Air Tickets (`/air-tickets`)
- Service benefits
- International & domestic flights
- Booking process
- Special offers
- FAQ section

### 4. Hotels (`/hotels`)
- Hotel categories (Budget to Luxury)
- Global coverage
- Popular destinations
- Booking process
- Corporate & group bookings

### 5. About Us (`/about`)
- Company story
- Mission & vision
- Core values
- Why choose us
- Leadership team

### 6. Contact Us (`/contact`)
- Contact form (UI only)
- Contact information
- Office hours
- WhatsApp integration placeholder
- Map placeholder

## 🧩 Components

### Navbar
- Responsive navigation
- Mobile menu
- Scroll-aware background
- Smooth animations

### Footer
- Service links
- Quick links
- Contact information
- Social media links
- Popular countries

### ServiceCard
- Gradient header
- Feature list
- Hover effects
- Call-to-action button

### CTASection
- Customizable gradient backgrounds
- Primary and secondary buttons
- Background patterns

### CountryCard
- Country flag emoji
- Visa types
- Processing time
- Popular badge

## 🎨 Design System

### Colors

**Primary (Blue)**
- Used for main branding, buttons, and primary actions
- Shades: 50-950

**Accent (Teal)**
- Used for highlights and secondary elements
- Shades: 50-950

### Typography
- Font Family: Inter (sans-serif)
- Headings: Bold, large sizes
- Body: Regular weight, readable line-height

### Animations
- `fade-in`: Smooth entry animations
- `slide-up`: Upward slide effect
- `slide-down`: Downward slide effect
- Custom animation delays for staggered effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization Guide

### Update Contact Information

Edit the contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Modify Services

Update service information in:
- `app/page.tsx` (Home page services)
- Individual service pages

### Change Colors

Update the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Add New Pages

1. Create a new folder in `app/`
2. Add `page.tsx` inside the folder
3. Export default function component
4. Update navigation links in `components/Navbar.tsx`

## 🌐 SEO

Each page includes:
- Custom title and description
- Open Graph metadata
- Twitter card metadata
- Proper heading hierarchy
- Semantic HTML

## ♿ Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Proper color contrast ratios
- Semantic HTML structure
- Focus indicators

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px

## 🔧 Configuration Files

### `next.config.ts`
- Next.js configuration
- Currently using default settings

### `tailwind.config.ts`
- Custom color palette
- Extended animations
- Custom font configuration

### `tsconfig.json`
- TypeScript compiler options
- Path aliases configured (`@/*`)

## 📄 License

This project is private and proprietary.

## 🤝 Support

For questions or issues, please contact the development team.

---

**Built with ❤️ for Global Visa & Travel Services**
