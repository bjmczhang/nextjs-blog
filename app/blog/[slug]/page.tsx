import { getPostBySlug } from "@/lib";

const getPageContent = async (slug: any) => {
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

// export async function getStaticPaths() {
//   // Retrieve all slugs
//   const files = fs.readdirSync("content/blogs");
//   const paths = files.map((fileName) => ({
//     params: {
//       slug: fileName.replace(".md", ""),
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({
//   params: { slug },
// }: {
//   params: { slug: string };
// }) {
//   const fileName = fs.readFileSync(`content/blogs/${slug}.md`, "utf-8");

//   const { content } = matter(fileName);

//   return {
//     props: {
//       content,
//     },
//   };
// }
// const PostPage = ({ content }: { content: string }) => {
//   return (
//     <div className="prose prose-slate max-w-none mx-auto">
//       <div
//         dangerouslySetInnerHTML={{ __html: md().render(content) }}
//         className="w-full"
//       />
//     </div>
//   );
// };

// export default PostPage;
