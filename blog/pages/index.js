import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}
                {blog.eyecatch ? (
                  <img
                    src={blog.eyecatch.url}
                    width={blog.eyecatch.width}
                    height={blog.eyecatch.height}
                  />
                ) : (<></>)}
              </a>
            </Link>
            <div className="mt-12">
          </div>
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
