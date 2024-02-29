import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import BlogItem from "../components/BlogItem";
import PageTitle from "../components/PageTitle";
import ProductItem from "../components/ProductItem";
import { BlogsType, ProductsType } from "../types/types";

interface SearchProps {
  dataBlog: BlogsType[];
  dataProduct: ProductsType[];
  noResultsBlogs: boolean;
  noResultsProducts: boolean;
}
const Search: NextPage<SearchProps> = ({
  dataBlog,
  dataProduct,
  noResultsBlogs,
  noResultsProducts,
}) => {
  return (
    <>
      <Head>
        <title>Store - Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title="Search" />

      <div className="bg0 m-t-23 p-b-140 mt-5">
        <div className="container">
          {/* blogs  */}

          <>
            <h2 className="mb-5">Blogs</h2>
            <div className="row isotope-grid">
              {/* blog skeleton - search result */}
              {noResultsBlogs ? (
                <div className="col pb-5">
                  <p>There are no blog results</p>
                </div>
              ) : (
                dataBlog.map((item) => (
                  <div className="col-4" key={item.id}>
                    <BlogItem {...item} />
                  </div>
                ))
              )}
              {/* !! */}
            </div>
          </>

          {/* products */}
          <>
            <h2 className="mb-5">Products</h2>
            <div className="row isotope-grid">
              {/* product skeleton */}
              {noResultsProducts ? (
                <div className="col pb-5">
                  <p>There are no product results</p>
                </div>
              ) : (
                dataProduct.map((item) => (
                  <ProductItem key={item.id} {...item} />
                ))
              )}
              {/* !! */}
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let res: Response;
  let dataBlog: BlogsType[] = [];
  let dataProduct: ProductsType[] = [];
  let noResultsBlogs = false;
  let noResultsProducts = false;

  if (query.searchTerm) {
    res = await fetch(
      `https://eccomerce-data-oohm.onrender.com/blogs?q=${query.searchTerm}`
    );

    dataBlog = await res.json();

    if (dataBlog.length === 0) {
      noResultsBlogs = true;
    }
  }

  if (query.searchTerm) {
    res = await fetch(
      `https://eccomerce-data-oohm.onrender.com/products?q=${query.searchTerm}`
    );

    dataProduct = await res.json();

    if (dataProduct.length === 0) {
      noResultsProducts = true;
    }
  }

  return {
    props: {
      dataBlog,
      dataProduct,
      noResultsBlogs,
      noResultsProducts,
    },
  };
};
