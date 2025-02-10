import React, { useState } from "react";
import Header from "./components/Layout/Header.jsx";
import From from "./components/Create/Form.jsx";
import History from "./components/Index/History.jsx";
import News from "./components/Index/News.jsx";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";

const Create = (props) => {
    const { user } = props.auth; // const user = props.auth.user;
    const { records } = props;

    return (
        <div className="bg-[#f5f5f5] w-full x-auto min-h-screen">
            <Header user={user} />
            <div className="w-[70%] mx-auto mt-20 p-4">
                <From props={props} />
            </div>
        </div>
    );
};

export default Create;
