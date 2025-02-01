import React, {useState} from "react";
import Header from './Header.jsx';
import Operarion  from "./Operation.jsx";
import Records from "./Records.jsx";
import History from "./History.jsx";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from '@inertiajs/react'

const Index = (props) => {
    const { user } = props.auth; 
    // const user = props.auth.user;
    console.log(user.name);
    return (
        <div className ="bg-gray-50">
            <Header user = {user}/>
            <Operarion />
            <Records />
            <History />
        </div>
    );
}

export default Index;
