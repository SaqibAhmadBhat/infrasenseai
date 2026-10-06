# InfraSense AI

**Sense. Map. Analyze. Prioritize.**

AI-powered road infrastructure intelligence for continuous monitoring and smarter maintenance decisions.

## Architecture

This project is built using:
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Design System**: Component-driven architecture
- **Quality**: ESLint, Prettier

## Directory Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable UI components
- `/content` - Source of truth for factual company/product content
- `/config` - Global configuration files
- `/data` - Mock/Prototype data for data visualization
- `/styles` - Global CSS and design tokens
- `/public` - Static assets (images, icons)
- `/lib` - Utility functions
- `/types` - TypeScript type definitions
- `/docs` - Architecture and decision documentation

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Copy `.env.example` to `.env.local` and configure your variables.

## Content Updates

Do NOT hardcode company statistics or claims directly in components.
Update factual data in `/content/company.ts` and related files.

## Security Notes
- Never commit `.env` or `.env.local`
- Do not expose internal patent analysis or confidential legal strategies on the public website.
