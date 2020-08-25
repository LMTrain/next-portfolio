import Link from 'next/Link'

const Index = () => (
    <div>
        <h1>Home</h1>
        <Link href="/about">
            <a>Go to About</a>
        </Link>
        <p>Welcome to the ome page</p>
    </div>
);

export default Index;