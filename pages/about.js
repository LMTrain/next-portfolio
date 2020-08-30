import Link from 'next/Link';
import Layout from '../components/Layout';
// import fetch from "isomorphic-unfetch";
import { Component } from 'react';

export default class About extends Component {
    // state = {
    //     user: null
    // };
    static async getInitialProps() {
            const res = await fetch('https://api.github.com/users/lmtrain')
            const data = await res.json();
            
            return { user: data};
    }
    // componentDidMount() {
    //     fetch('https://api.github.com/users/lmtrain') npm i isomorphic-unfetch
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({
    //                 user: data
    //             });
    //         })
    // }
    render() {
        const { user } = this.props;
        return (
            <Layout title="About">
                
                <p>{user.name}</p>
                <img src={user.avatar_url} alt="LMTrain Pic" height="200px"/>
                <img src="https://lmtrain.github.io/lm-images/assets/images/bugatti_5.jpg" alt="React logo" height="200px"/>
            </Layout>
        );

    }
}

// About.getInitialProps = () => {

// }
    
