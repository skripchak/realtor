import React, { Fragment } from "react";
import BlogItems from "../Data/BlogItems";
import Error from "../UI/Error";
import Loader from "../UI/Loader";

import { useGetRealEstateNewsQuery } from "../../redux/services/newsCatcher";

const BlogPosts = () => {
  const { data, isFetching, error } = useGetRealEstateNewsQuery();
  const resData = data?.articles;
  console.log(data?.articles);

  const mappedList = resData?.map((blog) => {
    return (
      <BlogItems
        key={blog._id}
        id={blog._id}
        title={blog.title}
        date={blog.published_date}
        url={blog.link}
      />
    );
  });

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="flex flex-col md:flex-row justify-center px-auto">
          <div className="mb-8">
            <h1 className="font-Poppins font-bold text-4xl text-center mb-3">
              Остання інформація{" "}
              <span className="text-blue">Життєпоказушник</span>
            </h1>
            <p className="text-center text-ash text-base">
              Будьте в курсі всієї інформації про наш список
              властивості.
            </p>
          </div>
        </div>
        <ul className="flex justify-center flex-col lg:flex-row lg:flex-wrap">
          {isFetching && <Loader />}
          {!isFetching && !error && mappedList}
          {!isFetching && mappedList.length === 0 && <Error />}
        </ul>
      </section>
    </Fragment>
  );
};

export default BlogPosts;
