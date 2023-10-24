import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);
  function DecreseHandler(){
    setCount(count-1);
  }
  function IncreaseHandler(){
    setCount(count+1);
  }
  function ResetHandler(){
    setCount(0);
  }
  return (
    <div className = "w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className = "text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-2 roumded-sm text-[25px] text-[#344151]">
        <button onClick={DecreseHandler} className="border-r-2 text-center w-20 text-5xl border-[#bfbfbf]">-</button>
        <div className="font-bold text-5xl gap-12">{count}</div>
        <button onClick={IncreaseHandler} className="border-l-2 text-center w-20 text-5xl border-[#bfbfbf]" >+</button>
      </div>
      <button onClick={ResetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>
    </div>
  );
}

export default App;
