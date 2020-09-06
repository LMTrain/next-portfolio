import Comment from './Comment'
export default ({ comments }) => (
    <React.Fragment>
        {comments.map(comment => (
            <comment key={comment.id} comment={comment} />
        ))}
    </React.Fragment>
);