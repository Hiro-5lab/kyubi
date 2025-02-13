import React, { useState } from "react";
import Feedback from "./Feedback";

import { Link, router } from "@inertiajs/react";

function Detail( {record, feedbacks} ) {
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
                    {record.comment && (
                        <div className="m-2">
                            <h2>メモ</h2>
                            <p className="mx-2">{record.comment}</p>
                        </div>
                    )}

                    <div className="bg-[#f2f2f2] rounded-lg mt-4 p-6">
                        <h2 className="text-xl font-semibold">
                            フィードバック
                        </h2>
                        {feedbacks.map((item) => (
                            <p key={item.id}>
                                <Feedback item={item} />
                            </p>
                        ))}
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
