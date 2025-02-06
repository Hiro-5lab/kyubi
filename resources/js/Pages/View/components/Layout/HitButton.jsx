import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

/**
 * import HitBotton from "./components/Layout/HitButton.jsx";
 * <HitButton />
 */

function HitButton() {
    const states = ["〇", "×", "ー"];
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setCount((prevCount) => (prevCount + 1) % states.length);
    };
  
    return (
      <button onClick={handleClick} className="p-3 font-mono">
        {states[count]}
      </button>
    )
}

export default HitButton;
