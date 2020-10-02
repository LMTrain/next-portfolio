import Layout from '../components/Layout';
import { getUserProfile } from '../lib/auth';


export default class Profile extends React.Component {
    // Set a State
    state = {
        user: null
    };

    componentDidMount() {
        getUserProfile().then(user => this.setState({ user }));
    }

    render() {
        return (
        <Layout title="Profile">
            <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
        </Layout>
        )
    }
}

