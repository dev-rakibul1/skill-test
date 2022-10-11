import React from "react";
import SingleBlog from "./blog/SingleBlog";

const blogData = [
  {
    id: 1,
    title: "What is the purpose of react-router?",
    des: "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application. Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.",
  },

  {
    id: 2,
    title: "How does work context API?",
    des: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to prop drilling or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.",
  },

  {
    id: 3,
    title: "How does work useRef?",
    des: "The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.",
  },
];

const Blog = () => {
  return (
    <div className="md:w-[60%] mx-auto">
      <div>
        <h2 className="text-2xl font-semibold sm:text-4xl text-center my-10 text-gray-600">
          Frequently Asked Questions
        </h2>
      </div>
      {blogData.map((blog) => (
        <SingleBlog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blog;
