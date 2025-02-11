import React, { useState } from "react";
 
import { Link, router } from "@inertiajs/react";

/**
 * import HitBotton from "./components/Layout/HitButton.jsx";
 * <HitButton value={} onChange={}/>
 */

function HitButton({ value, onChange }) {
    const states = ["〇", "×", "ー"];
    const values = [1, 0, null];

    const initialIndex = value === null ? 2 : values.indexOf(value);
    const [count, setCount] = useState(initialIndex !== -1 ? initialIndex : 0);

    const getButtonClass = () => {
        switch (states[count]) {
            case "〇":
                return "text-[#fc8947]";
            case "×":
                return "text-[#47bafc]";
            case "ー":
                return "text-[#cccccc]";
            default:
                return "";
        }
    };

    const handleClick = () => {
        const newCount = (count + 1) % states.length;
        setCount(newCount);
        onChange(value[newCount]);
    };

    return (
        <button
            onClick={handleClick}
            className={`p-3 font-plex bg-[#f2f2f2] rounded-md ${getButtonClass()}`}
        >
            {states[count]}
        </button>
    );
}

export default HitButton;
