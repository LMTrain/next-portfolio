import Layout from '../components/Layout';
import Link from 'next/link';

export default function Index() {
    return (
        <Layout title="Home">
            <Link href="/profile">
                <a>Click on My profile</a>
            </Link>
            <Link href="/profile">
                <a>Click on My profile</a>
            </Link>
        </Layout>
    )
}