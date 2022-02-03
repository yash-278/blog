import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="md:px-10 container px-4 mx-auto mb-8 text-white">
      <Head>
        <title>Yash Kadam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:grid-cols-12 lg:gap-12 grid grid-cols-1">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard key={post.node.id} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky lg:top-8 relative">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return { props: { posts }, revalidate: 10 };
}
