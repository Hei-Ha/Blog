import {getAPIUrl} from "@src/utils/utils";

const GET = (url: string, config?: any) => {
    return fetch( `${getAPIUrl()}/${url}`, {
        ...config,
        method: 'get',
        cache: "no-cache",
    } )
        .then( responseData => responseData.json() )
        .catch( err => {
            throw new Error(err)
        } )
}


const POST = (url: string, config?: any) => {
    return fetch( `${getAPIUrl()}/${url}`, {
        ...config,
        method: 'post',
    })
        .then( responseData => responseData.json() )
        .catch( err => {
            throw new Error(err)
        } )
}
export default {
    GET,
    POST,
}