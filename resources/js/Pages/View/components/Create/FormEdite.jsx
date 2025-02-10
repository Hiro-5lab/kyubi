import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";

import Authenticated from "@/Layouts/AuthenticatedLayout";

function FormEdit({ props }) {
    const { record } = props;
    const { data, setData, put } = useForm({
        title: record.title,
        date: record.date,
        place: record.place,
        comment: record.comment,
    });

    const handleSendRecords = (e) => {
        e.preventDefault();
        put(`/View/${record.id}`);
    };

    return (
        <div className="p-6 max-w-lg mx-auto border border-[#333333] rounded-lg shadow-lg bg-[#fefefe]">
            <form onSubmit={handleSendRecords}>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#333333] mb-2">
                        Title
                    </h2>
                    <input
                        type="text"
                        placeholder="タイトル"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="w-full p-3 border border-[#cccccc] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {props.errors.title && (
                        <span className="text-red-600 text-sm">
                            {props.errors.title}
                        </span>
                    )}
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#333333] mb-2">
                        Date
                    </h2>
                    <input
                        type="date"
                        value={data.date}
                        onChange={(e) => setData("date", e.target.value)}
                        className="w-full p-3 border border-[#cccccc] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {props.errors.date && (
                        <span className="text-red-600 text-sm">
                            {props.errors.date}
                        </span>
                    )}
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#333333] mb-2">
                        Place
                    </h2>
                    <input
                        type="text"
                        placeholder="場所"
                        value={data.place}
                        onChange={(e) => setData("place", e.target.value)}
                        className="w-full p-3 border border-[#cccccc] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {props.errors.place && (
                        <span className="text-red-600 text-sm">
                            {props.errors.place}
                        </span>
                    )}
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#333333] mb-2">
                        Comment
                    </h2>
                    <textarea
                        placeholder="コメント"
                        value={data.comment}
                        onChange={(e) => setData("comment", e.target.value)}
                        className="w-full p-3 border border-[#cccccc] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-[#47bafc] text-white rounded-xl font-semibold transform hover:scale-105 transition-all duration-300"
                    >
                        変更
                    </button>
                </div>
            </form>

            <div className="flex justify-center mt-4">
                <Link href="/View">
                    <button className="px-6 py-2 bg-[#47bafc] text-white rounded-xl font-semibold transform hover:scale-105 hover:shadow-lg transition-all duration-170">
                        戻る
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default FormEdit;
