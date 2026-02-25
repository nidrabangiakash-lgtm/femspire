# CHAKRAVYUH 2K26 - The Queens Arena

An interactive web application for **CHAKRAVYUH 2K26**, the ultimate coding challenge for girls, organized by **FemSpire Club** at **Raghu Engineering College**.

## Overview

CHAKRAVYUH 2K26 is an exciting coding competition designed to empower and showcase the talent of female programmers. This application serves as the registration and information hub for the event.

## Features

- 🚀 **Fast & Responsive**: Built with Vite for blazing-fast development and production builds
- 🎨 **Modern UI**: Beautiful, accessible components using shadcn/ui and Tailwind CSS
- 📱 **Mobile-First Design**: Fully responsive design that works on all devices
- 🔐 **Admin Dashboard**: Secure admin panel for managing registrations and event details
- 💳 **Payment Integration**: Seamless payment processing for registrations
- ⏱️ **Live Countdown**: Real-time countdown timer to event start
- 📊 **Registration Management**: Track and manage participant registrations

## Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **UI Components**: shadcn/ui
- **Testing**: Vitest
- **Package Manager**: Bun
- **Linting**: ESLint

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── home/           # Homepage sections
│   ├── layout/         # Layout components (Navbar, Footer)
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
│   ├── Index.tsx       # Landing page
│   ├── Register.tsx    # Registration page
│   ├── Payment.tsx     # Payment page
│   ├── Status.tsx      # Status page
│   ├── AdminLogin.tsx  # Admin login
│   ├── AdminDashboard.tsx # Admin dashboard
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utilities and helpers
├── test/               # Test files
└── main.tsx            # App entry point
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd arena-queens-main
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   cp .env.example .env.local
   ```

## Development

Start the development server:

```bash
bun run dev
```

The application will be available at `http://localhost:5173`

## Building

Build for production:

```bash
bun run build
```

## Testing

Run tests:

```bash
bun run test
```

Run tests with coverage:

```bash
bun run test:coverage
```

## Linting

Check code quality:

```bash
bun run lint
```

Fix linting issues:

```bash
bun run lint:fix
```

## Environment Variables

Create a `.env.local` file in the root directory with necessary environment variables:

```
VITE_API_URL=your_api_endpoint
VITE_PAYMENT_KEY=your_payment_key
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## License

This project is proprietary to FemSpire Club, Raghu Engineering College.

## Contact

For inquiries about CHAKRAVYUH 2K26, please contact FemSpire Club.

---

**Made with ❤️ by FemSpire Club** | Raghu Engineering College
