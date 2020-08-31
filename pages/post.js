import Layout from '../components/Layout';
import { withRouter } from 'next/router';


const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <p>Lorem kjahak jajh ja na vah hfna vna va nbv hgbafhgvsadg hgdfnu fhuyga ufajag fayjavna jkhahvah aac jycf
            ghsgak nhgayua jgagjhhasgc ma hvag ahf chsa ahfch jhgahsfch sdy jhsgj agc hah sn hgvdsfacuyw zk ewhganv j   hafchfn nvsnfa
             hsgvhs has sah h vhgc khas ngus c gcjgjsgcu.
        </p>
    </Layout>
);

export default withRouter(Post);