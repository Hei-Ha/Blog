'use client'

interface ListProps {
    RenderMDX: React.ReactNode;
}
export const MDXList = (props: ListProps) => {
    return <div>
        {props.RenderMDX}
    </div>
}