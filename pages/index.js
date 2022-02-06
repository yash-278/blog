import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";
import { getRecentPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto mb-8 px-4 md:px-10">
      <Head>
        <title>Yash Kadam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
        <div className="col-span-1 lg:col-span-8">
          <h1 className=" pb-4 text-xl font-semibold tracking-wider text-white">
            Recently Published Posts
          </h1>
          {posts.map((post) => (
            <PostCard key={post.node.id} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky lg:top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getRecentPosts()) || [];
  return { props: { posts }, revalidate: 10 };
}
