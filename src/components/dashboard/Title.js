import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../../context/context";
import { SET_INPUT, SET_DEFAULT } from "../../context/action";
function Title() {
  const { input, setInput, dispatch } = useGlobalContext();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="dashboard__title">
      <AiOutlineSearch />
      <input
        type="text"
        placeholder="Search by event name and league"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>s</button>
    </form>
  );
}

export default Title;
