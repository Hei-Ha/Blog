import BlogCard from '@/components/Card';


const getData = async () => {
    const getData = await fetch('https://www.fastmock.site/mock/c740744be8f5c78b88c9b102e2e19ae6/blog/blog/test1')
    return getData.json();
}

export default async () => {
    
    const data = await getData();
    
    return <div className='w-full'>
        <BlogCard
        title={'你好'}
        content={'hello'}
        date={'20202'}
        />
    </div>
}