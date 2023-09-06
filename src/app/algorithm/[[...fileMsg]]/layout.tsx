

export const revalidate = 0
export default (props) => {
    return <div className='flex flex-row h-full w-full'>
        <div className='w-1/4 h-full flex justify-end min-w-min'>
            {props.sideMenus}
        </div>
        <div className='w-3/4'>
            {props.content}
        </div>
    </div>
}