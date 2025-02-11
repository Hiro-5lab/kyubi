import React, { useState, useEffect } from "react";
import HitButton from "../Layout/HitButton";

function HitForm({ initialData, onSubmit }) {
    const [hits, setHits] = useState(initialData || Array(20).fill(null));
    const rounds = ["1立目", "2立目", "3立目", "4立目", "5立目"];

    const handleHitChange = (index, value) => {
        const newHits = [...hits];
        newHits[index] = value;
        setHits(newHits);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(hits);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="p-6 border rounded-md">
                <div className="grid grid-cols-5 gap-2">
                    {rounds.map((rowLabel, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                            <span className="flex justify-center items-center">
                                {rowLabel}
                            </span>
                            {hits
                                .slice(rowIndex * 4, (rowIndex + 1) * 4)
                                .map((value, colIndex) => (
                                    <HitButton
                                        key={rowIndex * 4 + colIndex}
                                        value={value}
                                        onChange={(value) =>
                                            handleHitChange(
                                                rowIndex * 4 + colIndex,
                                                value
                                            )
                                        }
                                    />
                                ))}
                        </React.Fragment>
                    ))}
                </div>
            </form>
        </>
    );
}

export default HitForm;
