import selectedlist from "../selected.json";
import { ArrowRightIcon, GotoIcon } from "../assets/icons";
import Link from "next/link";

const SelectedList = () => {
  return (
    <div className="selected-list">
      <h3 className="text-lg font-semibold mt-16 mb-8">selected posts</h3>

      <div className="mb-8">
        {selectedlist.length &&
          selectedlist.map((post, i) => {
            return (
              <Link
                href={`/post/${post.title}`}
                className="border border-neutral-200   bg-neutral-50  rounded flex items-center justify-between px-3 py-4 w-full mb-3"
                key={i}
              >
                <div className="flex flex-col relative w-full">
                  <h3 className="font-semibold text-neutral-800 ">
                    {post.title}
                  </h3>
                  <small className="text-neutral-600">
                    Published on {post.date} by {post.author}
                  </small>
                  <div className="text-neutral-700  absolute right-0 top-6">
                    <GotoIcon />
                  </div>
                </div>
              </Link>
            );
          })}
      </div>

      <Link
        href="/blog"
        className="inline-block border-gray-400 border-b-[1px] pb-1 mb-6"
      >
        see all 👉
      </Link>
    </div>
  );
};

export default SelectedList;
