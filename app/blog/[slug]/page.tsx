import { getPostBySlug } from "@/lib";

const getPageContent = async (slug: any) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params: any }) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title };
}

const Page = async ({ params: any }) => {
  const { content } = await getPageContent(params.slug);

  return (
    <section className="">
      <div className="prose max-w-none">{content}</div>
    </section>
  );
};

export default Page;
