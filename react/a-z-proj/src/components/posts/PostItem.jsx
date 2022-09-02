import MyButton from '../UI/button/MyButton';

const PostItem = ({ post, deletePost }) => {
  const { id, title, body } = post;

  return (
    <div className="post">
      <div className="post-content">
        <h3>
          {id}. {title}
        </h3>
        <p>{body}</p>
      </div>
      <div className="post-btn">
        <MyButton onClick={() => deletePost(id)} className="btn">
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
