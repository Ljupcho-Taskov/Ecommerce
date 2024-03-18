import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import CategoryPicker from "../components/CategoryPicker";
import FeaturedBlogs from "../components/FeaturedBlogs";
import FeaturedProducts from "../components/FeaturedProducts";
import {
  BannerType,
  FeaturedBlogsType,
  FeaturedProductsType,
} from "../types/types";

interface HomeProps {
  data: BannerType;
  dataFeaturedProducts: FeaturedProductsType[];
  dataFeaturedBlogs: FeaturedBlogsType[];
}

const Home: NextPage<HomeProps> = ({
  data,
  dataFeaturedProducts,
  dataFeaturedBlogs,
}) => {
  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner {...data} />

      <CategoryPicker />

      <FeaturedProducts dataFeaturedProducts={dataFeaturedProducts} />

      <FeaturedBlogs dataFeaturedBlogs={dataFeaturedBlogs} />
      <div className="btn-back-top-top"></div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:5001/banner_content");
  const data: BannerType = await res.json();

  const resFeaturedProducts = await fetch(
    "http://localhost:5001/products/?_limit=4"
  );
  const dataFeaturedProducts: FeaturedProductsType[] =
    await resFeaturedProducts.json();

  const resFeaturedBlogs = await fetch("http://localhost:5001/blogs/?_limit=3");
  const dataFeaturedBlogs: FeaturedBlogsType[] = await resFeaturedBlogs.json();
  return {
    props: { data, dataFeaturedProducts, dataFeaturedBlogs },
  };
};
