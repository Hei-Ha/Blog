

export const revalidate = 0
export default (props) => {
    return <div className='flex flex-row h-full w-full'>
        {/*大屏显示的内容*/}
        <div className='smScreens:hidden flex flex-row pt-2'>
            <div className='w-1/4 h-full flex justify-end min-w-min'>
                {props.sideMenus}
            </div>
            <div className='min-w-800px  max-w-3/4 flex-auto'>
                {props.articleContent}
            </div>
        </div>
        {/*小屏幕显示内容*/}
        <div className='mdScreens:hidden lgScreens:hidden flex flex-col w-full'>
            <div>
                {props.sideMenus}
            </div>
            <div>
                {props.articleContent}
            </div>
        </div>
    </div>
}