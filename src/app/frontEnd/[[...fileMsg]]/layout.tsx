

export const revalidate = 0
export default (props) => {
    return <div className='flex flex-row'>
        <div className='w-64'>
            {props.sideMenus}
        </div>
        <div className='flex-auto'>
            {props.articleContent}
        </div>
    </div>
}