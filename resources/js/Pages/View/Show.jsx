import React, { useState } from "react";
import Header from "./components/Layout/Header.jsx";
import Detail from "./components/Show.jsx/Detail.jsx";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";

const Create = (props) => {
    const { user } = props.auth; // const user = props.auth.user;
    const { records } = props;

    return (
        <div className="bg-[#f5f5f5] w-full x-auto h-screen">
            <Header user={user} />
            <div className="w-[70%] mx-auto mt-20 p-4">
                <Detail props={props} />
            </div>
        </div>
    );
};

export default Create;
