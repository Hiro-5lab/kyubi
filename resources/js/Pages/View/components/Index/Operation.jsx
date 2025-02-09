import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";

function Operarion() {
    return (
        <>
            <div className="p-3 flex justify-between w-full">
                <div className="my-2">
                    <Link href="/View/create">
                        <button className="mx-3 px-4 py-2 font-bold rounded-xl bg-[#47bafc] text-[#fefefe] transform hover:scale-105 hover:shadow-lg transition-all duration-170">
                            新しい記録の作成
                        </button>
                    </Link>
                </div>
                <div className="my-2">
                    <button className="mx-3 px-4 py-2 font-bold rounded-xl bg-[#47bafc] text-[#fefefe] transform hover:scale-105 hover:shadow-lg transition-all duration-170">
                        検索
                    </button>
                    <button className="mx-3 px-4 py-2 font-bold rounded-xl bg-[#47bafc] text-[#fefefe] transform hover:scale-105 hover:shadow-lg transition-all duration-170">
                        ソート
                    </button>
                </div>
            </div>
        </>
    );
}

export default Operarion;
