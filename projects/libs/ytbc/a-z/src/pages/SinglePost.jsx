import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hook/useFetching';

const SinglePost = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const goBack = () => navigation(-1);
  // console.log(useLocation());
  // console.log(useSearchParams());//search-filter by url
  // console.log(useMatch());//end use Outlet
  const [post, setPosts] = useState({});
  const [comments, setComments] = useState([]);

  const [fethingPost, isPostLoading, errorPost] = useFetching(async () => {
    const response = await PostService.getPostById(id);
    setPosts(response.data);
  });
  const [fethingComm, isCommLoading, errorComm] = useFetching(async () => {
    const response = await PostService.getCommById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fethingPost(id);
    fethingComm(id);
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: 10 }}>Welcome, this is post - {id}</h1>
      {isPostLoading ? (
        <Loader />
      ) : !errorPost ? (
        <div>
          <h3>Title: {post.title}</h3>
          <h4>Description: </h4>
          <p style={{ fontSize: 20 }}>{post.body}</p>
        </div>
      ) : (
        <h2>Error : {errorPost.message}</h2>
      )}
      <hr style={{ margin: 15 }} />
      {isCommLoading ? (
        <Loader />
      ) : !errorComm ? (
        <div>
          <h4>Comments:</h4>
          {comments.map((comm) => (
            <div className="post_comm">
              <h4>{comm.email}</h4>
              <p>{comm.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <h2>Error : {errorComm.message}</h2>
      )}
      <MyButton onClick={goBack}>Go Back</MyButton>
    </div>
  );
};

export default SinglePost;
