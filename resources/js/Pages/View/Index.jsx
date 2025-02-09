import React, { useState } from "react";
import Header from "./components/Layout/Header.jsx";
import Operarion from "./components/Index/Operation.jsx";
import Records from "./components/Index/Records.jsx";
import History from "./components/Index/History.jsx";
import News from "./components/Index/News.jsx";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";

const Index = (props) => {
    const { user } = props.auth; // const user = props.auth.user;
    const { records } = props;
    // const { hits } = props;
    console.log(props);

    return (
        <div className="bg-[#f5f5f5] w-full x-auto">
            <Header user={user} />
            <div className="grid grid-cols-12 gap-4 w-full mt-20 p-4">
                <News />
                <div className="col-span-8 w-full">
                    <Operarion />
                    <Records records={records} />
                </div>
                <History />
            </div>
        </div>
    );
};

export default Index;
