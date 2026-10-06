import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://infrasenseai.online';
  
  const routes = [
    '',
    '/about',
    '/solution',
    '/technology',
    '/road-intelligence',
    '/climate-impact',
    '/research',
    '/innovation',
    '/contact',
    '/legal/privacy',
    '/legal/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
