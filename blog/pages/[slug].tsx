import { client } from "../libs/client";

export default function BlogId({ blog }) {
  return (
    <main>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </main>
  );
}

export const getStaticProps = async (context) => {
  const slug = context.params?.slug;
  const draftKey = context.previewData?.draftKey;
  const content = await fetch(
   `https://nth-tech-blog.microcms.io/api/v1/blog/${slug}${
    draftKey !== undefined ? `?draftKey=${draftKey}` : ''
   }`,
   { headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY || '' } }
  )
  .then((res) => res.json());
  return {
    props: {
      blog: content
    }
  };
};

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/${content.id}`);
  return { paths, fallback: true };
};