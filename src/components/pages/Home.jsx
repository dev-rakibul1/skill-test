import { faCocktail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { QuizContext } from "../../root/Root";
import heroImages from "../images/hero_2.jpg";
import Quiz from "./Quiz";

const Home = () => {
  const quizData = useContext(QuizContext);
  console.log(quizData);
  return (
    <>
      <div className="md:w-[90%] mx-auto px-3 grid sm:grid-cols-1 sm:py-2 md:my-2 md:grid-cols-2 py-28">
        <div className="text-center">
          <article className="hero-info flex flex-col items-center justify-center h-full">
            <FontAwesomeIcon icon={faCocktail} className="text-7xl" />
            <h1 className="sm:text-5xl text-xl uppercase py-4 text-lime-700">
              Conquer the test
            </h1>
            <p className="tracking-[5px]	sm:text-xl ">Winner upto 90%</p>
          </article>
        </div>
        <div>
          <div className="thumb md:py-2 py-4 md:mx-2">
            <img
              src={heroImages}
              alt="hero"
              className="max-w-full w-full rounded-md"
            />
          </div>
        </div>
      </div>

      {/* quiz section */}
      <div className="md:w-[90%] mx-auto px-3 mt-10 grid grid-cols-4 gap-7">
        {quizData.map((info) => (
          <Quiz info={info} />
        ))}
      </div>
    </>
  );
};

export default Home;
