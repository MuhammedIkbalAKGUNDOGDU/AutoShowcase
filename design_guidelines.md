# Premium Car Dealership Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from luxury automotive brands and premium e-commerce experiences (Tesla, Porsche, luxury car configurators) combined with modern web galleries.

## Core Design Elements

### A. Color Palette
**Dark Mode Premium Theme** (Primary):
- Background: `0 0% 10%` (dark gray #1a1a1a) or `0 0% 0%` (black)
- Text Primary: `0 0% 88%` (light gray #e0e0e0) or `0 0% 100%` (white)
- Accent/Interactive: `51 100% 50%` (gold #FFD700) for buttons, links, icons
- Secondary Accent: `0 0% 69%` (metallic gray #B0B0B0) for subtle highlights

### B. Typography
- **Font Family**: Google Fonts "Montserrat" (primary) or "Oswald" (alternative)
- **Hierarchy**:
  - Hero Headline: Bold, large (4xl-6xl), white
  - Section Headlines: Bold, medium-large (2xl-4xl), white
  - Body Text: Regular, light gray (#e0e0e0)
  - Button Text: Semibold, gold accent or white

### C. Layout System
**Tailwind Spacing**: Use units of 2, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24
- Component spacing: gap-4, gap-6, gap-8
- Container: max-w-7xl with px-4 to px-8

### D. Component Library

**Navbar** (Sticky):
- Sleek, semi-transparent dark background with backdrop blur
- Logo "Premium Auto" text on left (gold accent)
- Centered navigation links: Home, Vehicles, About, Contact
- Right side: Language selector (Select) + "Contact Us" Button (gold accent)
- Mobile: Hamburger menu icon with slide-out navigation

**Hero Section** (Full-width):
- High-quality premium car background image (slightly dimmed with overlay)
- Large, bold headline: "Your Dream Car Awaits"
- Sub-headline: "Where Luxury Meets Performance"
- "Discover Our Vehicles" Button with gold accent, backdrop blur on outline variant

**CarCard Component**:
- Shadcn Card with car image at top
- Display: Make, Model, Year, Price
- "View Details" Button (gold accent)
- Smooth hover transitions (scale, shadow, or glow effect)

**Featured Vehicles Section**:
- Headline: "Featured Vehicles"
- Horizontal Carousel (Shadcn Carousel) with 6 CarCards
- Navigation arrows with gold accent

**Services Section**:
- Headline: "Our Services"
- 3 Cards in grid layout (responsive: 1 col mobile, 3 cols desktop)
- Each card: Icon placeholder, title, short description
- Services: "Full Inspection", "Financing Options", "Warranty"

**All Vehicles Page**:
- Headline: "Our Full Inventory"
- Search Input and filter Select components (dark styled)
- Grid of 12 CarCards (responsive: 1-2-3-4 columns)

**Footer** (Minimalist):
- Dark background matching navbar
- Center-aligned text: "Copyright © 2025 Premium Auto. All rights reserved."
- Subtle separation line above

### E. Animations & Interactions
- Smooth hover transitions on all interactive elements
- CarCard hover: subtle scale (1.02-1.05) and shadow enhancement
- Button hover: brightness increase or glow effect
- Carousel: smooth slide transitions
- Page transitions: subtle fade-in effects
- All animations: duration-300 or duration-500 for premium feel

## Images

**Hero Section**:
- Full-width, high-quality luxury car image (sports car or premium sedan)
- Apply dark overlay (opacity 40-60%) for text readability
- Source: Unsplash premium car images

**Car Images** (CarCard & Carousel):
- High-quality car photos from various angles
- Consistent aspect ratio (16:9 or 4:3)
- Premium vehicles (luxury brands, sports cars, SUVs)
- Source: Unsplash car collection

**Service Icons**:
- Simple, elegant icon placeholders (shield for warranty, dollar for financing, checkmark for inspection)
- Gold or light gray color

## Multilingual Considerations
- Language switcher in Navbar (Select component with flag icons optional)
- 5 languages: English (en), Turkish (tr), German (de), Arabic (ar), Russian (ru)
- RTL layout: `dir="rtl"` for Arabic with reversed layout flow
- All text managed via next-intl message files

## Responsive Design
- Mobile: Single column, hamburger menu, stacked cards
- Tablet: 2 columns for grids, simplified carousel
- Desktop: Full multi-column layouts, enhanced spacing
- Breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px

## Quality Standards
- Premium, luxurious aesthetic throughout
- Minimalist and modern design philosophy
- High-quality, professional imagery only
- Consistent gold accent usage for premium feel
- Smooth, polished interactions and transitions
- Production-ready, pixel-perfect implementation