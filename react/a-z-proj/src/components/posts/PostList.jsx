import PostItem from './PostItem';

const PostList = ({ posts, title, deletePost }) => {
  return (
    <div className="app">
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          deletePost={deletePost}
          number={index}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
