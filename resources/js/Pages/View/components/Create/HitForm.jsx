import React, { useState, useEffect } from "react";

function HitForm({ initialData, onSubmit }) {
    const [hits, setHits] = useState(initialData);
    const states = ["〇", "×", "ー"];
    const rounds = ["1立目", "2立目", "3立目", "4立目", "5立目"];

    const getButtonClass = (num) => {
        switch (states[num]) {
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

    const handleClick = (roundIndex, hitIndex) => {
        const index = roundIndex * 4 + hitIndex;
        const newHits = [...hits];
        newHits[index] = (newHits[index] + 1) % states.length;
        setHits(newHits);
    };

    const handleSubmit = () => {
        onSubmit(hits);
    };

    return (
        <>
            <div className="grid grid-cols-5 gap-2">
                {rounds.map((round, roundIndex) => (
                    <React.Fragment key={roundIndex}>
                        <div className="flex justify-center items-center">
                            {round}
                        </div>
                        {hits
                            .slice(roundIndex * 4, (roundIndex + 1) * 4)
                            .map((hit, hitIndex) => (
                                <div
                                    key={hitIndex}
                                    onClick={() => handleClick(roundIndex, hitIndex)}
                                    className={`p-3 font-plex bg-[#f2f2f2] flex justify-center items-center rounded-md 
                                    ${getButtonClass(hit)}`}
                                >
                                    {states[hit]}
                                </div>
                            ))}
                    </React.Fragment>
                ))}
            </div>
            <button onClick={handleSubmit} className="hidden">Submit</button>
        </>
    );
}

export default HitForm;
