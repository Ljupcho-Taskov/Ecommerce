import React from "react";
import ProductItem from "./ProductItem";
import { FeaturedProductsType } from "../types/types";

interface Props {
  dataFeaturedProducts: FeaturedProductsType[];
}

const FeaturedProducts: React.FC<Props> = ({ dataFeaturedProducts }) => {
  return (
    <section className="sec-product bg0 p-t-100 p-b-50">
      <div className="container">
        <div className="p-b-32">
          <h3 className="ltext-105 cl5 txt-center respon1">Store Overview</h3>
        </div>
        <div className="tab01">
          <div className="tab-content p-t-50">
            <div
              className="tab-pane fade show active"
              id="best-seller"
              role="tabpanel"
            >
              <div className="wrap-slick2">
                <div className="d-flex flex-wrap">
                  {dataFeaturedProducts.map((product) => (
                    <div
                      key={product.id}
                      className={`col-12 col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product.gender}`}
                    >
                      <ProductItem {...product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
