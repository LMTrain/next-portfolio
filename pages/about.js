import Layout from '../components/Layout';
// import fetch from "isomorphic-unfetch";
import Error from './_error';
import { Component } from 'react';

export default class About extends Component {
    static async getInitialProps() {
            const res = await fetch('https://api.github.com/users/lmtrain')
            const statusCode = res.status > 200 ? res.status : false;
            const data = await res.json();
            
            console.log(data)
            return { user: data, statusCode};
    }
   
    render() {
        const { user, statusCode } = this.props;

        if (statusCode) {
            return <Error statusCode={statusCode} />;
        }
        return (
            <Layout title="About">
                
                <p>{user.name}</p>
                        <img src={user.avatar_url} alt="LMTrain Pic" height="200px"/>
                
                <img src="https://lmtrain.github.io/lm-images/assets/images/bugatti_5.jpg" alt="React logo" height="200px"/>
                <img src="https://lmtrain.github.io/lm-images/assets/images/bugatti_3.jpg" alt="React logo" height="200px"/>
            </Layout>
        );

    }
}

