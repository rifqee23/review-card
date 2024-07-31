import { reviews } from "./data";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { useEffect, useState } from "react";

function App() {
  const [current, setCurrent] = useState(0);

  function handleNext() {
    if (current < reviews.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  }

  function handlePrev() {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(reviews.length - 1);
    }
  }

  function handleRandom() {
    setCurrent(Math.floor(Math.random() * reviews.length));
  }

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center ">
        <h1 className="text-3xl text-red-400">Hello World</h1>
        <div className="max-w-md bg-slate-500 w-full p-4">
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src={reviews[current].image}
            alt=""
          />
          <h3 className="text-center text-white font-bold">
            {reviews[current].job}
          </h3>
          <p className="text-center text-white">{reviews[current].name}</p>

          <p className="text-center text-white">{reviews[current].text}</p>

          <div className="w-full flex justify-center">
            <button onClick={handlePrev}>
              <MdOutlineNavigateBefore size={40} color="#fff" />
            </button>
            <button onClick={handleNext}>
              <MdOutlineNavigateNext size={40} color="#fff" />
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleRandom}
              className="text-center text-white bg-black px-4 py-2"
            >
              Random
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
