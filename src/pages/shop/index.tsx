import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import router, { useRouter } from "next/router";
import { ProductsType } from "../../types/types";
import Link from "next/link";
import { useRef } from "react";

interface ShopProps {
  data: ProductsType[];
}

const Shop: NextPage<ShopProps> = ({ data }) => {
  const { asPath } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push({
      pathname: "/shop",
      query: {
        ...router.query,
        q: inputRef?.current?.value,
      },
    });
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <Link href="/shop">
                <button
                  className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                    asPath === "/shop" ? "how-active1 " : ""
                  }`}
                  data-filter="*"
                >
                  All Products
                </button>
              </Link>

              <Link href="/shop?gender=women">
                <button
                  className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                    asPath.includes("/shop?gender=women") ? "how-active1" : ""
                  }`}
                  data-filter=".women"
                >
                  Women
                </button>
              </Link>

              <Link href="/shop?gender=man">
                <button
                  className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                    asPath.includes("/shop?gender=man") ? "how-active1" : ""
                  }`}
                  data-filter=".men"
                >
                  Men
                </button>
              </Link>

              <Link href="/shop?q=belt">
                <button
                  className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                    asPath.includes("/shop?q=belt") ? "how-active1" : ""
                  }`}
                  data-filter=".bag"
                >
                  Belt
                </button>
              </Link>

              <Link href="/shop?q=converse">
                <button
                  className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                    asPath.includes("/shop?q=converse") ? "how-active1" : ""
                  }`}
                  data-filter=".shoes"
                >
                  Shoes
                </button>
              </Link>

              <Link href="/shop?q=watch">
                <button
                  className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                    asPath.includes("/shop?q=watch") ? "how-active1" : ""
                  }`}
                  data-filter=".watches"
                >
                  Watches
                </button>
              </Link>
            </div>

            <div className="flex-w flex-c-m m-tb-10">
              <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search show-search">
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                Search
              </div>
            </div>

            {/* search */}
            <div className="panel-search w-full p-t-10 p-b-15">
              <form className="bor8 dis-flex p-l-15" onSubmit={handleOnSubmit}>
                <button
                  type="submit"
                  className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04"
                >
                  <i className="zmdi zmdi-search"></i>
                </button>

                <input
                  ref={inputRef}
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>

          <div className="row isotope-grid">
            {data.length === 0 ? (
              <div className="col pb-5">
                <p>There are no results</p>
              </div>
            ) : (
              data.map((product) => (
                <Link href={`/shop/${product.id}`} key={product.id}>
                  <div
                    className={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product.gender}`}
                    key={product.id}
                  >
                    <div className="block2">
                      <div className="block2-pic hov-img0">
                        <img src={product.img} alt="IMG-PRODUCT" />

                        <a
                          href="#"
                          className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                        >
                          View Details
                        </a>
                      </div>

                      <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                          <a
                            href="product-detail.html"
                            className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                          >
                            {product.title}
                          </a>

                          <span className="stext-105 cl3">{product.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          <div className="flex-l-m flex-w w-full p-t-10 m-lr--7">
            <a
              href="#"
              className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1"
            >
              1
            </a>
            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
              2
            </a>
            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
              3
            </a>
            L
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let res: Response;
  let data: ProductsType[];

  if (query.gender && query.q) {
    res = await fetch(
      `https://eccomerce-data-oohm.onrender.com/products?gender_like=${query.gender}&q=${query.q}`
    );
  } else if (query.gender) {
    res = await fetch(
      `https://eccomerce-data-oohm.onrender.com/products?gender_like=${query.gender}`
    );
  } else if (query.q) {
    res = await fetch(
      `https://eccomerce-data-oohm.onrender.com/products?q=${query.q}`
    );
  } else {
    res = await fetch("https://eccomerce-data-oohm.onrender.com/products");
  }
  data = await res.json();
  return {
    props: { data },
  };
};
