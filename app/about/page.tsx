import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import AboutMe from "../../content/about/about.mdx";

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
