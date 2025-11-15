# Navdeep Singh Photography Academy

A modern, responsive photography academy website built with React, TypeScript, and Tailwind CSS. Features an AI-powered chatbot using Google's Gemini AI to answer questions about photography courses.

## ✨ Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🤖 AI-powered chatbot assistant (Gemini AI)
- 📸 Interactive photo gallery with modal viewer
- 📚 Course catalog with detailed information
- 💬 Testimonials section
- 🎯 Smooth scrolling navigation
- ⚡ Fast and optimized with Vite
- 🔒 Type-safe with TypeScript
- ♿ Accessible and SEO-friendly

## 🌐 Live Demo

**Visit the live site**: [https://nchand02.github.io/photography/](https://nchand02.github.io/photography/)

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nchand02/photography.git
   cd photography
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
photography/
├── public/                    # Static assets
├── src/
│   ├── app/                   # App-level components
│   ├── components/
│   │   ├── common/            # Reusable UI components
│   │   ├── features/          # Feature-specific components
│   │   └── layout/            # Layout components
│   ├── config/                # App configuration
│   ├── constants/             # Constants and static data
│   ├── hooks/                 # Custom React hooks
│   ├── services/              # API services
│   ├── styles/                # Global styles
│   ├── types/                 # TypeScript type definitions
│   ├── utils/                 # Utility functions
│   └── main.tsx               # Application entry point
├── .env.example               # Example environment variables
├── index.html                 # HTML entry point
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── package.json               # Project dependencies

```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Generate test coverage report

## 🔧 Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Google Gemini AI** - AI chatbot integration
- **React Router** - Client-side routing (ready for expansion)
- **Vitest** - Unit testing framework
- **ESLint & Prettier** - Code quality and formatting

## 🤖 Chatbot Configuration

The AI chatbot uses Google's Gemini AI. To customize the chatbot's behavior, edit:
- `src/config/gemini.config.ts` - System instructions and model configuration
- `src/constants/siteData.ts` - Chatbot greeting message

## 🚀 Deployment

For detailed deployment instructions to GitHub Pages, see [DEPLOYMENT.md](./DEPLOYMENT.md).

**Quick Deploy:**
```bash
npm run build
npm run deploy
```

Your site will be live at: `https://nchand02.github.io/photography/`

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: { ... },  // Amber color scheme
      dark: { ... },     // Gray/dark color scheme
    }
  }
}
```

### Content

Update content in:
- `src/constants/courses.ts` - Course information
- `src/constants/testimonials.ts` - Student testimonials
- `src/constants/gallery.ts` - Gallery images
- `src/constants/siteData.ts` - Site-wide content

## 📄 License

This project is private and proprietary.

## 👤 Author

**Navdeep Singh**
- Website: [nchand02.github.io/photography](https://nchand02.github.io/photography/)
- GitHub: [@nchand02](https://github.com/nchand02)

## 🙏 Acknowledgments

- Images provided by [Picsum Photos](https://picsum.photos)
- Icons from [Heroicons](https://heroicons.com)
- AI powered by [Google Gemini](https://ai.google.dev)
