import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <div className="flex flex-wrap container mx-auto px-4">
      {blog.map((blog) => (
        <div key={blog.id} className="w-96 px-2 py-2">
          <Link href={`/blog/${blog.id}`}>
            <a>
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <img className="w-full h-auto rounded-t-xl" src={blog.eyecatch.url} />
                <div className="p-4 md:p-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">{blog.title}</h3>
                </div>
              </div>
            </a>
          </Link>
          <div className="mt-12"></div>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
