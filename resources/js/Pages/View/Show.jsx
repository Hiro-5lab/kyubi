import React, { useState } from "react";
import Header from "./components/Layout/Header.jsx";
import Detail from "./components/Show.jsx/Detail.jsx";

import { Link, router } from "@inertiajs/react";

const Show = (props) => {
    const { user } = props.auth; // const user = props.auth.user;
    const { record, feedbacks } = props;
    console.log(feedbacks);

    return (
        <div className="bg-[#f5f5f5] w-full x-auto min-h-screen">
            <Header user={user} />
            <div className="w-[70%] mx-auto mt-20 p-4">
                <Detail record={record} feedbacks={feedbacks} />
            </div>
        </div>
    );
};

export default Show;
