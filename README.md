# 🚀 Portfolio Website

A modern, high-performance personal portfolio website showcasing projects, skills, and professional experience as a software engineer. Built with cutting-edge technologies for optimal performance and user experience.

## ✨ Features

- **⚡ Lightning-Fast Performance** - Built with Vite for instant page loads and hot module replacement
- **🎯 Responsive Design** - Mobile-first approach with Tailwind CSS
- **📱 Modern UI Components** - Radix UI for accessible, unstyled components
- **🔄 Real-time Updates** - React Query for efficient data fetching and caching
- **📊 Interactive Charts** - Recharts for beautiful data visualizations
- **🎨 Smooth Animations** - Tailwind animations and custom transitions
- **♿ Accessibility** - WCAG compliant with semantic HTML and ARIA labels
- **📝 Form Handling** - React Hook Form with Zod validation
- **🌙 Dark Mode Support** - Theme switching with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript (96.2%)
- **Build Tool**: Vite + TanStack Start
- **Styling**: Tailwind CSS (3.1%) + CSS (0.7%)
- **UI Library**: Radix UI Components
- **Form Handling**: React Hook Form + Zod
- **State Management**: React Query (TanStack Query)
- **Routing**: TanStack React Router
- **Icons**: Lucide React
- **Linting & Formatting**: ESLint + Prettier

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/rokesh-venkat/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will be available at `http://localhost:5173`

## 🚀 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Preview production build locally
npm run preview

# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── routes/          # File-based routing (TanStack Start)
│   │   └── __root.tsx   # Root layout
│   ├── components/      # Reusable React components
│   ├── styles/          # CSS files
│   └── lib/             # Utility functions
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── tailwind.config.ts   # Tailwind CSS configuration
```

## 🔄 File-Based Routing

This project uses TanStack Start's file-based routing. Key conventions:

| File | Route |
|------|-------|
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `projects/index.tsx` | `/projects` |
| `projects/$id.tsx` | `/projects/:id` |
| `__root.tsx` | App shell (wraps all pages) |

## 🎨 Customization

### Add a New Page

Create a new `.tsx` file in `src/routes/`:

```typescript
export default function NewPage() {
  return <div>New Page Content</div>;
}
```

### Modify Tailwind Theme

Edit `tailwind.config.ts` to customize colors, fonts, and other theme properties.

### Update Styling

Global styles are in `src/styles/`. Component-specific styles use Tailwind CSS classes.

## 📊 Performance Optimizations

- **Code Splitting**: Automatic with Vite and React Router
- **Image Optimization**: Use optimized image formats
- **Tree Shaking**: Unused code is removed during build
- **Lazy Loading**: Implement route-based code splitting with React Router

## 🔒 Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
VITE_API_URL=https://api.example.com
```

## 🚢 Deployment

### Vite Production Build

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Deployment Platforms

- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag and drop `dist/` folder or connect Git repo
- **GitHub Pages**: Configure in repository settings
- **Railway/Render**: Deploy Node.js application with build command

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Rokesh Venkat**
- GitHub: [@rokesh-venkat](https://github.com/rokesh-venkat)
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- [TanStack Start](https://tanstack.com/start/latest) - React framework
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Vite](https://vitejs.dev/) - Next-generation build tool

## 📝 Notes

- This project uses TypeScript for type safety and better development experience
- ESLint and Prettier are configured for code quality and consistency
- All components are fully typed for better IDE support and error detection

## 🔗 Quick Links

- [GitHub Repository](https://github.com/rokesh-venkat/portfolio)
- [Live Demo](https://your-portfolio-url.com)
- [Report Issues](https://github.com/rokesh-venkat/portfolio/issues)
- [Request Features](https://github.com/rokesh-venkat/portfolio/discussions)

---

**Happy coding! 🎉**

*Last updated: 2026-06-10*