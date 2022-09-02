import { useState, useEffect } from 'react';
import { usePosts } from '../hook/usePosts';
import PostFilter from '../components/filter/PostFilter';
import Form from '../components/form/Form';
import PostList from '../components/posts/PostList';

import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/modal/MyModal';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hook/useFetching';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', search: '' });
  const [modal, setModal] = useState(false);
  const [fetchPosts, isPostLoading, error] = useFetching(async () => {
    const response = await PostService.getAll();
    setPosts(response);
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

  useEffect(() => {
    fetchPosts();
  }, [filter]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="app">
      <MyButton onClick={setModal}>Create post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <Form addPost={addPost} setModal={setModal} />
      </MyModal>
      <hr style={{ marginTop: 15 }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <hr style={{ marginTop: 15 }} />
      {isPostLoading ? (
        // <h1 style={{ textAlign: 'center', marginTop: 20 }}>Loading...</h1>
        <Loader />
      ) : (
        <PostList
          deletePost={deletePost}
          posts={sortedAndSearchedPosts}
          title={'Posts list 1'}
        />
      )}
    </div>
  );
};

export default App;
