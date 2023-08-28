import Nav from '@/components/Nav';

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
    return <section className='w-screen h-screen'>
        <Nav />
        <div className='flex justify-center flex-col max-w-5xl mx-auto px-3'>
            {children}
        </div>
    </section>
}
export default GlobalLayout;