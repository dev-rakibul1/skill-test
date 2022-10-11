import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/pages/Footer";

export const QuizContext = createContext([]);

const Root = () => {
  const loaderData = useLoaderData();
  return (
    <QuizContext.Provider value={loaderData.data}>
      <div>
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </QuizContext.Provider>
  );
};

export default Root;
