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
                <img src="https://lmtrain.github.io/lm-images/assets/images/bugatti_1.jpg" alt="React logo" height="200px"/>
                <img src="https://lmtrain.github.io/lm-images/assets/images/bugatti_5.jpg" alt="React logo" height="200px"/>
            </Layout>
        );

    }
}
    
