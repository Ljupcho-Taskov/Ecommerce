import React from "react";
import { BlogsType } from "../types/types";
import Link from "next/link";

interface Props {
  relatedBlog: BlogsType[];
}

const RelatedBlogs: React.FC<Props> = ({ relatedBlog }) => {
  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        {relatedBlog.map((blog) => (
          <Link href={`${blog.id}`} key={blog.id}>
            <li className="mb-4">
              <a className="wrao-pic-w">
                <img src={blog.img} alt="PRODUCT" className="img-fluid" />

                <div className="p-t-8 mt-1">
                  <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">
                    {blog.title}
                  </div>
                </div>
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
