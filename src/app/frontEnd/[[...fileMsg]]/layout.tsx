

export const revalidate = 0
export default (props) => {
    return <div className='flex flex-row h-full w-full'>
        {/*大屏幕显示的内容*/}
        <div className='smScreens:hidden flex flex-row pt-2 w-full'>
            {props.sideMenus}
            {props.articleContent}
            {/*<div className='w-64 h-full flex justify-end min-w-min'>*/}
            {/*    {props.sideMenus}*/}
            {/*</div>*/}
            {/*<div className='flex-auto relative w-[calc(100%-64px)]'>*/}
            {/*    {props.articleContent}*/}
            {/*</div>*/}
        </div>
        {/*小屏幕显示内容*/}
        <div className='mdScreens:hidden lgScreens:hidden flex flex-col w-full'>
            {props.sideMenus}
            {props.articleContent}
        </div>
    </div>
}