# Mihnev Agency Website

A modern, responsive website built with Next.js 15, React 19, and TypeScript, featuring a beautiful UI with Tailwind CSS and Framer Motion animations. The website is fully translated to Bulgarian and includes various features for business presentation and user engagement.

## Features

- **Multi-language Support**: Full Bulgarian language implementation
- **Modern UI Components**: Built with shadcn/ui and Radix UI primitives
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark Mode Support**: Elegant theme switching with next-themes
- **Animations**: Smooth animations powered by Framer Motion
- **Analytics Integration**: Support for Google Analytics, Google Ads, and Facebook Pixel
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **Type Safety**: Written in TypeScript for better development experience
- **SEO Friendly**: Optimized meta tags and descriptions
- **Contact Form**: Integrated with Nodemailer for email functionality

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Validation**: Zod
- **Email**: Nodemailer
- **Analytics**: Google Analytics, Facebook Pixel
- **Font**: Inter (with Cyrillic support)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mihnevw/mihnev-agency.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   NEXT_PUBLIC_GOOGLE_ADS_ID=your_google_ads_id
   NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_facebook_pixel_id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                # Next.js app directory
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/        # React components
├── lib/              # Utility functions
├── hooks/            # Custom React hooks
├── public/           # Static assets
└── types/            # TypeScript type definitions
```

## Features & Sections

- **Hero Section**: Main landing section
- **About**: Company information
- **Services**: Service offerings
- **Reviews**: Client testimonials
- **Why Us**: Company advantages
- **Contact**: Contact form
- **Cookie Consent**: GDPR compliance
- **Analytics**: Integrated tracking

## Configuration

The project uses various configuration files:
- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - shadcn/ui configuration

## License

MIT

## Author

SM 