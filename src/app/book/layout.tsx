import React from "react";
import Header from "@src/components/Header";

export default ({children}) => {
    return <>
        <Header />
        {children}
    </>
}