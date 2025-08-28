import { tools } from '@/data/tools';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ferramentas360.com.br';

  const routes = ['/', ...tools.map((tool) => tool.href)];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
