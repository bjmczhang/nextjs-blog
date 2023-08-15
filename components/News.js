"use client";

import { useEffect, useState } from "react";

const APIKey = process.env.NEWS_API_KEY;

const News = () => {
  const [news, setNews] = useState([]);

  // https://currentsapi.services/
  useEffect(() => {
    fetch(
      `https://api.currentsapi.services/v1/latest-news?language=en&category=programming&apiKey=${APIKey}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // Filter out articles with null image
        const newsWithImages = res.news.filter(
          (post) =>
            post.image !== null &&
            post.image !== "" &&
            post.image !== undefined &&
            post.image !== "None"
        );
        setNews(newsWithImages);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-16 mb-4">
      <h3 className="text-lg font-semibold mb-8">tech headlines today</h3>
      <div className="w-full grid sm:grid-cols-2 gap-3">
        {news.slice(0, 4).map((post) => (
          <a
            target="_blank"
            href={post.url}
            className="h-40 border border-neutral-200 bg-neutral-50 rounded-lg flex w-full overflow-hidden"
            key={post.id}
          >
            <div className="w-1/4">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover h-full"
              />
            </div>
            <div className="w-3/4 py-2 px-4">
              <small className="text-xs text-gray-400">{post.published}</small>
              <h3 className="text-sm font-semibold my-2">
                {post.title.split(" ").slice(0, 10).join(" ")} ...
              </h3>
              <p className="text-gray-500 tracking-tight text-xs mt-4">
                {post.description.split(" ").slice(0, 10).join(" ")} ...
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;
