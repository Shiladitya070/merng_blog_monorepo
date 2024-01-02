'use client';

import { useEffect, useState } from "react";

export default ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState("");
    useEffect(() => {
        setToken(localStorage.getItem('token') || "");
    }, [token])

    if (!token) {
        return (
            <>
                {children}
            </>

        )
    }
    return (<>
        <h1>You are already logged in</h1>
    </>)

}