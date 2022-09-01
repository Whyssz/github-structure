import { useState, useMemo } from 'react';
import PostFilter from '../components/filter/PostFilter';

import Form from '../components/form/Form';
import PostList from '../components/posts/PostList';
import MyModal from '../components/UI/modal/MyModal';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'A-JavaSriprt', body: 'Text - b' },
    { id: 2, title: 'C-React', body: 'Text - a' },
    { id: 3, title: 'B-Redux', body: 'Text - c' },
  ]);

  const [filter, setFilter] = useState({ sort: '', search: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [posts, filter.sort]);

  const searchSortedPost = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(filter.search)
    );
  }, [sortedPosts, filter.search]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="app">
      <MyModal>
        <Form addPost={addPost} />
      </MyModal>
      <hr style={{ marginTop: 15 }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <hr style={{ marginTop: 15 }} />
      <PostList
        deletePost={deletePost}
        posts={searchSortedPost}
        title={'Posts list 1'}
      />
    </div>
  );
};

export default App;
