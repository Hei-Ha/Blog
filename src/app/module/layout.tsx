import Script from 'next/script'


export default ({ children }) => {
    return <>
        {children}
        <Script
            type="module"
            src="https://gradio.s3-us-west-2.amazonaws.com/4.19.2/gradio.js"></Script>
    </>
}