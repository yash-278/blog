import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { Categories, MobileNav, PostCard, PostWidget } from "../components";
import { getRecentPosts } from "../services";
import { fadeInUp, stagger } from "../services/animation";

export default function Home({ posts }) {
  const router = useRouter();

  return (
    <motion.div
      exit={{ opacity: 0, scale: 2 }}
      animate="animate"
      initial="initial"
      key={router.asPath}
    >
      <div className=" container mx-auto  px-4 pb-8 md:px-10">
        <Head>
          <title>Yash Kadam</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          <motion.div key={router.asPath} variants={stagger} className="col-span-1 lg:col-span-8">
            <h1 className=" dark:text-dark-headline text-light-headline pb-4 text-xl font-semibold tracking-wider">
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
