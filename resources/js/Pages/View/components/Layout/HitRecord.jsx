import React, {useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

/**
 * import HitRecord from "./components/Layout/HitRecord.jsx";
 * <HitRecord hits={}/>
 */

function HitRecord({hits = []}) {
    const rounds = ["１立目", "２立目", "３立目", "４立目", "５立目"];

    return (
        <div>
            {rounds.map((round, i) => {
                const hitsArray = Array.from({ length: 4 }, (_, j) => hits[0]?.[`hit${i * 4 + j + 1}`]);

                return (
                    <React.Fragment key={i}>
                        <p className="mx-2">
                            {round}
                            {hitsArray.join(", ")}
                        </p>
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default HitRecord;
