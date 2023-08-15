import { getPostBySlug } from "@/lib";

interface PageParams {
  slug: string;
}

interface PageContent {
  meta: {
    title: string; // Assuming title is a string property
  };
  content: string; // Assuming content is a string
}

const getPageContent = async (slug: string): Promise<PageContent> => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }: { params: PageParams }) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title };
}

const Page = async ({ params }: { params: PageParams }) => {
  const { content } = await getPageContent(params.slug);

  return (
    <section className="">
      <div className="prose max-w-none">{content}</div>
    </section>
  );
};

export default Page;
