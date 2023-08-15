import Link from "next/link";
import News from "@/components/News";
import SelectedList from "@/components/SelectedList";

export default function Home() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-1">Benjamin Zhang</h1>
      <em>Future Full-Stack Developer</em>
      <p className="mt-6 text-zinc-800">
        Hey there! 👋 I&#39;m Ben, a former designer who, after a few years of
        pixel pushing, realized that coding is my true passion. I absolutely
        love coding! You can read more about me here:
        <span>
          <Link
            href="/about"
            className="border border-neutral-200 bg-neutral-50 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 no-underline"
          >
            👉 about me
          </Link>
        </span>
      </p>
      <News />
      <p>
        As a developer, staying abreast of the latest technology trends,
        advancements, and innovations is crucial for professional growth and
        effective problem-solving. Regular learning, attending conferences, and
        engaging with the developer community are valuable practices.
      </p>
      <SelectedList />
      <p>
        I started writing a blog earlier this year to document the knowledge I
        have been acquiring through my learning journey. It has been an
        enriching experience where I get to share my insights, discoveries, and
        I am eager to continue this rewarding endeavor as I keep learning and
        growing.
      </p>
    </section>
  );
}
