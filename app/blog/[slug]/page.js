import { getPostBySlug } from "@/lib";

const getPageContent = async (slug) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title };
}

const Page = async ({ params }) => {
  const { content } = await getPageContent(params.slug);

  return (
    <section className="">
      <div className="prose max-w-none">{content}</div>
    </section>
  );
};

export default Page;
