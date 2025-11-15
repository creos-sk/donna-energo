// import all articles via Astro glob (eager)
const modules = import.meta.glob('../content/articles/*.mdx', { eager: true });

export function getAllArticles() {
  const articles = Object.entries(modules).map(([path, mod]: [string, any]) => {
    return {
      slug: path.split('/').pop()?.replace('.mdx', ''),
      ...mod.frontmatter,
      Content: mod.default
    };
  });

 // Sort by date (newest first)
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string) {
  const articles = getAllArticles();
  return articles.find(a => a.slug === slug);
}
