import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

/**
 * import HitRecord from "./components/Layout/HitRecord.jsx";
 * <HitRecord hits={}/>
 */

function Hit({hits = []}) {
    const rounds = ["１立目", "２立目", "３立目", "４立目", "５立目"];

    return (
        <div>
            {rounds.map((round, i) => {
                const hitsArray = Array.from({ length: 4 }, (_, j) => hits[0][`hit${i * 4 + j + 1}`]);
                const nextHit = hits[0][`hit${(i + 1) * 4 + 1}`];
                
                if (nextHit == null) return null;

                return (
                    <React.Fragment key={i}>
                        <p className="mx-2">
                            {round}
                            {hitsArray.map(value => (
                                value === "1" ? "〇" : value === "0" ? "×" : ""
                            )).join(", ")}
                        </p>
                    </React.Fragment>
                );
            })}
        </div>
    );
}

function HitRecord({hits = []}) {

    return(
        <div className="p-2 font-mono">
            <div>
                <Hit hits={hits}/>
            </div>
            <div className="flex justify-end">
                {hits[0].hits}
            </div>
        </div>
        
    )
}

export default HitRecord;
