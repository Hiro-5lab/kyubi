import React, {useState} from "react";
import Header from './components/Layout/Header.jsx';
import Operarion  from "./components/Index/Operation.jsx";
import Records from "./components/Index/Records.jsx";
import History from "./components/Index/History.jsx";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

const Index = (props) => {
    const { user } = props.auth; // const user = props.auth.user;
    const { records } = props;

    return (
        <div className ="bg-gray-50">
            <Header user = {user}/>
            <div className="mx-1 px-1 border-x-2 border-dashed">
                <Operarion />
                <Records records={records}/>
            </div>
            <History />
        </div>
    );
}

export default Index;
