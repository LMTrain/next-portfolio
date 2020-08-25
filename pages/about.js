import Link from 'next/Link'

export default () => (
    <div>
        <h1>About</h1>
        <Link href="/">
            <a>Go to home</a>
        </Link>
        <p>A JavaScript programmer</p>
        <img src="/static/logo512.png" alt="React logo" height="200px"/>
    </div>
);
