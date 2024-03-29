import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import PageTitle from "../../components/PageTitle";
import RelatedBlogs from "../../components/RelatedBlogs";
import { FeaturedBlogsType } from "../../types/types";
import { useEffect, useState } from "react";
import ScrollButton from "../../components/ScrollButton";

interface Props {
  blog: FeaturedBlogsType;
  allBlogsData: FeaturedBlogsType[];
}

const BlogDetail: NextPage<Props> = ({ blog, allBlogsData }) => {
  const [relatedBlogsData, setRelatedBlogsData] = useState<FeaturedBlogsType[]>(
    []
  );

  const fetchedRelatedBlogs = () => {
    const MIN_RELATED_BLOGS = 3;
    const relatedBlogs = [];
    const useIndex = new Set();

    while (relatedBlogs.length < MIN_RELATED_BLOGS) {
      const randomNo = Math.floor(Math.random() * allBlogsData.length);
      if (!useIndex.has(randomNo)) {
        useIndex.add(randomNo);
        relatedBlogs.push(allBlogsData[randomNo]);
      }
    }

    return relatedBlogs;
  };

  useEffect(() => {
    const relatedBlogs = fetchedRelatedBlogs();
    setRelatedBlogsData(relatedBlogs);
  }, [allBlogsData]);
  return (
    <>
      <Head>
        <title>Store - title</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title="Blog Detail" />

      <section className="bg0 p-t-52 p-b-20">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div>
                <div className="wrap-pic-w how-pos5-parent">
                  <img src={blog.img} alt="IMG-BLOG" />
                </div>

                <div className="p-t-32">
                  <span className="flex-w align-items-center flex-m stext-111 cl2 p-b-19">
                    <span className="flex-c-m mr-3 bor7 p-lr-15 trans-04">
                      category
                    </span>

                    <span>
                      <span className="cl4">By</span> {blog.author}
                      <span className="cl12 m-l-4 m-r-6">|</span>
                    </span>

                    <span>{blog.date}</span>
                  </span>

                  <h4 className="ltext-109 cl2 p-b-28">{blog.title}</h4>

                  <p className="stext-117 cl6 p-b-26">{blog.first_content}</p>

                  <p className="stext-117 cl6 p-b-26">{blog.second_content}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 p-b-80">
              <RelatedBlogs relatedBlog={relatedBlogsData} />
            </div>
            <ScrollButton />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const featuredBlogsRes = await fetch("http://localhost:5001/blogs");
  const featuredBlogsData: FeaturedBlogsType[] = await featuredBlogsRes.json();

  const paths = featuredBlogsData.map((blog) => {
    return {
      params: {
        id: blog.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allBlogsRes = await fetch("http://localhost:5001/blogs");
  const allBlogsData: FeaturedBlogsType[] = await allBlogsRes.json();

  let blog: FeaturedBlogsType | undefined = undefined;

  if (params?.id) {
    const featuredBlogsRes = await fetch(
      `http://localhost:5001/blogs/${params.id}`
    );
    blog = await featuredBlogsRes.json();
  }

  return {
    props: {
      blog,
      allBlogsData,
    },
  };
};
