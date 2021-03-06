import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../../context/context";

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
    </form>
  );
}

export default Title;
