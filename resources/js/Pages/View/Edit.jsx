import React, { useState } from "react";
import Header from "./components/Layout/Header.jsx";
import FromEdite from "./components/Create/FormEdite.jsx";

 
import { Link, router } from "@inertiajs/react";

const Edit = (props) => {
    const { user } = props.auth; // const user = props.auth.user;

    return (
        <div className="bg-[#f5f5f5] w-full x-auto min-h-screen">
            <Header user={user} />
            <div className="w-[70%] mx-auto mt-20 p-4">
                <FromEdite props={props} />
            </div>
        </div>
    );
};

export default Edit;
