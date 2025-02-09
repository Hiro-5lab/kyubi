import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";

/**
 * import HitRecord from "./components/Layout/HitRecord.jsx";
 * <HitRecord hits={}/>
 */

function HitRecord({ Data }) {
    console.log(Data);

    return (
        <div className="p-2">
            <h3>
                <Hit Data={Data} />
            </h3>
            <h3 className="flex justify-end font-plex">
                {Data.hits}
                {Data.sum}
            </h3>
        </div>
    );
}

function Hit({ Data }) {
    const rounds = ["１立目", "２立目", "３立目", "４立目", "５立目"];
    const nums = [1, 2, 3, 4];

    return (
        <div>
            {rounds.map((round, roundIndex) => (
                <div key={roundIndex}>
                    <p>{round}</p>
                    {nums.map((num) => (
                        <span key={num} className="mr-2">
                            <Looks hit={Data[`hit${num}`]} />
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}

function Looks({ hit }) {
    const looks = ["×", "〇", "ー"];

    const styles = {
        1: "text-[#fc8947] font-bold", // 〇
        0: "text-[#47bafc] font-bold", // ×
        2: "text-[#cccccc] italic", // ー
    };

    return (
        <span className={`font-plex ${styles[hit ?? 2]}`}>
            {looks[hit ?? 2]}
        </span>
    );
}
export default HitRecord;
