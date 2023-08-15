import { getPostBySlug } from "@/lib";
import { GetStaticProps, GetStaticPaths } from "next";

interface PageParams {
  slug: string;
}

interface PageMeta {
  title: string;
  // Add other meta properties here if needed
}

interface PageContent {
  meta: PageMeta;
  content: string;
}

const getPageContent = async (slug: string): Promise<PageContent> => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export const generateMetadata: GetStaticProps = async ({ params }) => {
  if (!params) {
    return { props: {} }; // Handle the case when params is undefined
  }

  const { meta } = await getPageContent(params.slug);
  return { props: { title: meta.title } };
};

const Page = async ({ params }: { params: PageParams }) => {
  if (!params) {
    return <div>Loading...</div>; // Handle the case when params is undefined
  }

  const { content } = await getPageContent(params.slug);

  return (
    <section className="">
      <div className="prose max-w-none">{content}</div>
    </section>
  );
};

export default Page;
