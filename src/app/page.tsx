'use client'
export default () => {
    return <div>
        page222
        <button
            onClick={() => {
                throw new Error('Something went wrong!');
            }}
        >click</button>
    </div>
}