import React, { useState } from "react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";

function Detail({ props }) {
    const { record } = props;

    return (
        <div className="p-6 max-w-4xl mx-auto border border-[#333333] rounded-lg shadow-lg bg-[#fefefe]">
            <div className="m-4 p-6">
                <div className="mb-6">
                    <h1 className="font-bold">{record.title}</h1>
                    <ul className="text-xl text-[#666666] flex flex-row space-x-6 mt-2">
                        <li>{record.date}</li>
                        <li>{record.place}</li>
                    </ul>
                </div>
                <div className="p-4">
                    <p className="text-lg">{record.comment}</p>
                    <div className="bg-[#f2f2f2] rounded-lg mt-4 p-6">
                        <h2 className="text-xl font-semibold">
                            フィードバック
                        </h2>
                        <p className="text-lg text-[#666666] mt-2">
                            comment feedback
                        </p>
                    </div>
                </div>
                <div className="pt-6 flex justify-between mt-8">
                    <Link href={`/View/${record.id}/edit`}>
                        <button className="mx-3 px-6 py-3 font-bold rounded-xl bg-[#47bafc] text-[#fefefe] transform hover:scale-105 hover:shadow-lg transition-all duration-300">
                            編集
                        </button>
                    </Link>
                    <Link href="/View">
                        <button className="mx-3 px-6 py-3 font-bold rounded-xl bg-[#47bafc] text-[#fefefe] transform hover:scale-105 hover:shadow-lg transition-all duration-300">
                            戻る
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Detail;
