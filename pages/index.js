import Link from 'next/Link';
import Layout from '../components/Layout';

const Index = () => (
    <Layout title="Home">
       
        <Link href="/about">
            <a>Go to About</a>
        </Link>
        <p>Welcome to the ome page</p>
    </Layout>
);

export default Index;