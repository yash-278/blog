import React from "react";
import { useRouter } from "next/router";
import { getPosts, getPostDetails } from "../../services";
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from "../../components";
import Head from "next/head";
import { motion } from "framer-motion";
import { fadeInUp } from "../../services/animation";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <motion.div>
      <div className="dark:text-dark-headline container mx-auto px-4 pb-8">
        <Head>
          <title>{post.title}</title>
        </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            key={post.slug}
            className="col-span-1 lg:col-span-8"
          >
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </motion.div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky lg:top-8">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const post = await getPostDetails(params.slug);
  return { props: { post }, revalidate: 10 };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
