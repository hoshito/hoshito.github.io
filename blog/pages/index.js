import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
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

