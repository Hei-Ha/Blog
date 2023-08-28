'use client'
import Test3 from '../../blogs/test3.mdx'

interface ListProps {
    RenderMDX: React.ReactNode;
}
export const MDXList = (props: ListProps) => {
    return <div>
        {props.RenderMDX}
    </div>
}


export const ShowText3 = () => {
    return <Test3 />
}