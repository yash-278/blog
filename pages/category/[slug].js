import React from "react";

import { useRouter } from "next/router";
import { getPosts, getCategoryPosts } from "../../services";
import { Loader, CategoryPostCard } from "../../components";
import Head from "next/head";

import { motion } from "framer-motion";
import { container, fadeInUp, listItem } from "../../services/animation";

const PostDetails = ({ posts, params }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="dark:text-dark-headline text-light-headline container relative z-20 mx-auto mb-8 px-4 md:px-10">
      <Head>
        <title>{params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} Articles</title>
      </Head>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-3xl font-bold capitalize tracking-wider md:text-5xl">{params.slug}</h2>
        <p className="dark:text-dark-subheadline text-light-subheadline font-semibold">
          {" "}
          {posts.length} Articles
        </p>
      </div>

      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        key={router.asPath}
        className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:place-items-stretch lg:grid-cols-3 xl:grid-cols-4"
      >
        {posts.map((post) => (
          <CategoryPostCard key={post.node.id} post={post.node} />
        ))}
      </motion.div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPosts(params.slug);
  return { props: { posts, params }, revalidate: 10 };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
