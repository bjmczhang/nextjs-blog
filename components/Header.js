"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <aside className="mb-16">
        <div className="lg:top-20 flex justify-between">
          <div className="logo flex items-center px-0 pb-0 font-bold bg-gradient-to-br from-purple-500 via-pink-500 to-white bg-clip-text text-transparent">
            <p>{`<BjmZhang />`}</p>
          </div>
          <nav className="flex px-0 pb-0" id="nav">
            <div className="flex flex-row space-x-0">
              <Link
                className={`${
                  pathname === "/" ? "text-neutral-900" : ""
                }  transition-all hover:text-neutral-900 flex align-middle text-neutral-500`}
                href="/"
              >
                <span
                  className={`${
                    pathname === "/" ? "border-b border-neutral-300" : ""
                  } relative py-1`}
                >
                  home
                </span>
              </Link>
              <Link
                className={`${
                  pathname === "/blog" ? "text-neutral-900" : ""
                } pl-6 transition-all hover:text-neutral-900 flex align-middle text-neutral-500`}
                href="/blog"
              >
                <span
                  className={`${
                    pathname === "/blog" ? "border-b  border-neutral-300" : ""
                  } relative py-1`}
                >
                  blog
                </span>
              </Link>
              <Link
                className={`${
                  pathname === "/about" ? "text-neutral-900" : ""
                } pl-6 transition-all hover:text-neutral-900 flex align-middle text-neutral-500`}
                href="/about"
              >
                <span
                  className={`${
                    pathname === "/about" ? "border-b  border-neutral-300" : ""
                  } relative py-1`}
                >
                  about
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Header;
