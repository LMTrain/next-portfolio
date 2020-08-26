import Link from 'next/Link';

export default ({ children, title}) => (
    <div>
        <header>
            <Link href="/"><a>Home</a></Link>
        </header>

        <h1>{title}</h1>
        { children }

        <footer>footer</footer>
    </div>
);