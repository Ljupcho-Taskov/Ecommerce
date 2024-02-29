import React from "react";
import ProductItem from "./ProductItem";
import { ProductsType } from "../types/types";

interface Props {
  relatedData: ProductsType[];
}

const RelatedProducts: React.FC<Props> = ({ relatedData }) => {
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex flex-wrap">
            {relatedData.map((product) => (
              <ProductItem key={`relateProduct-${product.id}`} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
