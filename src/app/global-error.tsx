'use client'
import { useEffect } from "react";

const Error = ({error}) => {
    useEffect(() => {
        console.log(error)
        console.log(123)
    }, [error])
    return (
        <html>
        <body>
        something is wrong!
        </body>
        </html>
    )
}
export default Error