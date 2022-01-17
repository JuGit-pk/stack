import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [stack, setStack] = useState([]);
  const [enteredValue, setEnteredValue] = useState("");
  const [statusFlow, setStatusFlow] = useState("");
  const [top, setTop] = useState("");
  const [count, setCount] = useState(0);

  const handleEnteredValue = (e) => {
    setEnteredValue(e.target.value);
  };
  const handlePush = () => {
    if (enteredValue.trim() != 0) {
      setStack((prev) => [...prev, enteredValue]);
      setStatusFlow("");
    }
    setEnteredValue("");
  };
  const handlePop = () => {
    const arr = stack;
    const check = arr.splice(-1, 1);
    if (check == "") setStatusFlow("underflow");
    setStack([...arr]);
  };
  useEffect(() => {
    setTop(stack[stack.length - 1]);
    if (stack.length !== 0) setCount(stack.length);
    if (stack.length == 0) setCount(0);
  }, [stack]);
  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="">Stack</h1>
      <div className=" bg-gray-800 w-11/12 py-5 px-10 flex flex-col justify-start items-start text-white ">
        <div class=" flex status text-2xl">
          Status:{"   "}
          <h1 className=" ml-6 text-yellow-200">{statusFlow}</h1>
        </div>
        <div class="flex status text-2xl">
          Top : {"   "}
          <h1 className=" ml-6">{top}</h1>
        </div>
        <div class="flex status text-2xl">
          Count :{"   "}
          <h1 className=" ml-6">{count}</h1>
        </div>
      </div>
      <div class="">
        <input
          type="text"
          placeholder=""
          class="retro-input"
          value={enteredValue}
          onChange={handleEnteredValue}
        ></input>
        <div className="flex justify-around my-10">
          <button className="btn_retro" onClick={handlePush}>
            Push
          </button>
          <button className="btn_retro ml-1" onClick={handlePop}>
            Pop{" "}
          </button>
        </div>
      </div>
      <div className=" bg-yellow-100 flex flex-col-reverse p-4 w-1/5 mb-6 retro-div">
        {stack.length != 0 ? (
          stack.map((m, i) => (
            <span
              key={i}
              className=" bg-gray-200 mx-auto text-center w-full border-x-4 border-b-4 border-black cage"
            >
              {m}
            </span>
          ))
        ) : (
          <p className="mx-auto text-center w-full">Stack is empty</p>
        )}
      </div>
    </div>
  );
}

export default App;
