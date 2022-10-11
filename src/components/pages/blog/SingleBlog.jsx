import React from "react";

const SingleBlog = ({ blog }) => {
  const { title, des } = blog;
  return (
    <div>
      <section className="">
        <div className="container flex flex-col justify-center px-4 mx-auto py-2">
          <div className="">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-lime-600">
                {title}
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 text-gray-600">
                {des}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlog;
