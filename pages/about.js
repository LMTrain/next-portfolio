import Link from 'next/Link';
import Layout from '../components/Layout';
import { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <Layout title="About">
       
                <Link href="/">
                    <a>Go to home</a>
                </Link>
                <p>A JavaScript programmer</p>
                <img src="/static/logo512.png" alt="React logo" height="200px"/>
            </Layout>
        );

    }
}
    
