import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";
import HitRecord from "../Layout/HitRecord.jsx";

function Records({ records }) {
    const handleDeleteRecord = (id) => {
        router.delete(`/View/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        });
    };

    return (
        <div className="my-2">
            {records.map((record) => (
                <div
                    key={record.id}
                    className="m-3 bg-[#fefefe] border-2 rounded-md border-[#9fdafc] hover:border-[#47bafc]"
                >
                    <Link href={`/View/${record.id}`}>
                        <div>
                            <div className="p-3 w-full flex justify-between">
                                <h2 className="mx-6">{record.title}</h2>
                                <div className="flex flex-row">
                                    <h2 className="mx-6">{record.date}</h2>
                                    <h2 className="mx-6">{record.place}</h2>
                                </div>
                            </div>
                            <div className="px-3">
                                {record.hit_id && (
                                    <HitRecord
                                        Data={record.hits_id}
                                        className="m-2"
                                    />
                                )}

                                {record.comment && (
                                    <div className="m-2">
                                        <h2>comment</h2>
                                        <p className="mx-2">{record.comment}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Link>
                    <div className="flex justify-end">
                        <button className="m-2 px-3 py-1 font-bold text-[#cccccc] hover:text-[#47bafc]">
                            フィードバック
                        </button>
                        <button
                            onClick={() => handleDeleteRecord(record.id)}
                            className="m-2 px-3 py-1 font-bold text-[#cccccc] hover:text-[#fc8947]"
                        >
                            削除
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Records;
