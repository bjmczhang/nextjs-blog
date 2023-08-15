import Link from "next/link";
import { getAllPostsMeta } from "@/lib";

const Page = async () => {
  const posts = await getAllPostsMeta();

  return (
    <section className="py-0">
      <h2 className="font-bold text-2xl mb-1">my blog</h2>
      <p className="mt-4 mb-8">
        {" "}
        I enjoy coding and like to summarize some of my personal thoughts.{" "}
      </p>

      <div className="flex flex-col hover:text-zinc-400">
        {posts?.map((post) => (
          <Link
            href={`blog/${post.slug}`}
            key={post?.title}
            className="mb-4 hover:text-black"
          >
            <h3 className="text-md font-semibold -mb-2">{post.title}</h3>

            <time className="text-[12px] text-gray-400">
              {post.publishDate}
            </time>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Page;
