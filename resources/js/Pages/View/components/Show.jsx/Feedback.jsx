import React, { useState } from "react";

import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";

function Feedback({ props }) {
    const { user } = props.auth;
    const { feedback } = props;

    return (
        <>
            <span>
                {user.name}
                {feedback.create_at}
                {feedback.feedback}
            </span>
        </>
    );
}

export default Feedback;
