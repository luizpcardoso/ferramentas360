import { tools } from '@/data/tools';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ferramentas360.com.br';
  return tools.map(tool => ({
    url: `${baseUrl}${tool.href}`, // aqui o ajuste
    lastModified: new Date(),
  }));
  
}
