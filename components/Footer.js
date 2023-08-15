import {
  EmailIcon,
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  YoutubeIcon,
} from "../assets/icons";

const Footer = () => {
  return (
    <div className="w-full flex justify-between border-t mt-20  pt-4 text-sm leading-5">
      <div className="left w-2/5">
        <p className="mb-8">
          &copy; {new Date().getFullYear()} Benjamin Zhang{" "}
        </p>
        <div className="flex space-x-7">
          <a
            target="_blank"
            href="https://github.com/bjmczhang"
            aria-label="@bjmczhang on github"
          >
            {<GithubIcon />}
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/@theAceDev"
            aria-label="@theAceDev on youtube"
          >
            {<YoutubeIcon />}
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/benjamin-zhang-965359262/"
            aria-label="@bjmczhang on linkedin"
          >
            {<LinkedInIcon />}
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/benjamin.chao.zhang"
            aria-label="@bjmczhang on facebook"
          >
            {<FacebookIcon />}
          </a>
          <a
            target="_blank"
            href="mailto:bjmczhang@gmail.com"
            aria-label="@bjmczhang email"
          >
            {<EmailIcon />}
          </a>
        </div>
      </div>
      <div className="right w-3/5">
        <p className="mb-4">
          <em>
            Disclaimer: 👋 Hi there. I enjoy coding and like to summarize some
            of my personal thoughts. These are my opinions, and not necessarily
            the views of my employer.
          </em>
        </p>
        <p>
          Built with{" "}
          <span>
            <a target="_blank" href="https://react.dev/">
              React
            </a>
          </span>
          . Source code on{" "}
          <span>
            <a target="_blank" href="https://github.com/bjmczhang">
              GitHub
            </a>
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
