import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, deletePost }) => {
  if (!posts.length) {
    return (
      <h2 style={{ textAlign: 'center', fontSize: 33 }}>There are no post</h2>
    );
  }

  return (
    <div className="app">
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem deletePost={deletePost} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
