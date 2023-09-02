
export default (props) => {
    return <div className='flex flex-row bg-blue-400'>
        <div className='w-64'>
            {props.sideMenus}
        </div>
        <div className='bg-pink-300 flex-auto'>
            {props.children}
            {/*{props.articleContent}*/}
        </div>
    </div>
}