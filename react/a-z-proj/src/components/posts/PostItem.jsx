import { useNavigate } from 'react-router-dom';
import MyButton from '../UI/button/MyButton';

const PostItem = ({ post, deletePost }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post-content">
        <h3>
          {id}. {title}
        </h3>
        <p>{body}</p>
      </div>
      <div className="post-btn">
        <MyButton onClick={() => navigate(`${id}`)} className="btn">
          Open
        </MyButton>
        <MyButton onClick={() => deletePost(id)} className="btn">
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
