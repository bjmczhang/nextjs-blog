import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

// export async function getStaticProps() {
//   const fileName = fs.readFileSync("app/about/content/about.md", "utf-8");
//   const { content } = matter(fileName);
//   return {
//     props: content,
//   };
// }
import HelloWorld from "../hello.mdx";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import AboutMe from "../../content/about/about.mdx";

// const About = () => {
//   const fileName = fs.readFileSync("content/about/about.md", "utf-8");
//   const { content } = matter(fileName);
//   return (
//     <>
//       <div className="prose prose-slate max-w-none mx-auto">
//         <div
//           dangerouslySetInnerHTML={{ __html: md().render(content) }}
//           className="w-full"
//         />
//       </div>
//       <div className="prose">
//         <HelloWorld />
//       </div>
//     </>
//   );
// };

const About = () => {
  return (
    <>
      <div className="prose max-w-none">
        <AboutMe />
      </div>
    </>
  );
};

export default About;
