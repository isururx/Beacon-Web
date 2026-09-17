type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({params,}: ArticlePageProps) {const { slug } = await params;

  return (
    <main className="min-h-screen px-6 py-20">
      <p className="text-sm uppercase tracking-widest text-gray-500">
        Colombo Beacon
      </p>

      <h1 className="mt-4 text-4xl font-bold">
        Article: {slug}
      </h1>

      <p className="mt-4 text-gray-500">
        This is a dynamic article page.
      </p>
    </main>
  );
}