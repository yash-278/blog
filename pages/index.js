import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { Categories, PostCard, PostWidget } from "../components";
import { getRecentPosts } from "../services";

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home({ posts }) {
  const router = useRouter();

  return (
    <motion.div
      key={router.asPath}
      exit={{ opacity: 0, scale: 2 }}
      animate="animate"
      initial="initial"
    >
      <div className="container mx-auto mb-8 px-4 md:px-10">
        <Head>
          <title>Yash Kadam</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          <motion.div key={router.asPath} variants={stagger} className="col-span-1 lg:col-span-8">
            <h1 className=" pb-4 text-xl font-semibold tracking-wider text-white">
              Recently Published Posts
            </h1>
            {posts.map((post) => (
              <motion.div variants={fadeInUp} key={post.node.id}>
                <PostCard key={post.node.id} post={post.node} />
              </motion.div>
            ))}
          </motion.div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky lg:top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export async function getStaticProps() {
  const posts = (await getRecentPosts()) || [];
  return { props: { posts }, revalidate: 10 };
}
