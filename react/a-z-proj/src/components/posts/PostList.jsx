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
