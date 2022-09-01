import { useState, useMemo } from 'react';

import Form from '../components/form/Form';
import PostList from '../components/posts/PostList';
import MyInput from '../components/UI/input/MyInput';
import MySelect from '../components/UI/select/MySelect';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'A-JavaSriprt', body: 'Text - b' },
    { id: 2, title: 'C-React', body: 'Text - a' },
    { id: 3, title: 'B-Redux', body: 'Text - c' },
  ]);

  const [sortSelected, setSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    if (sortSelected) {
      return [...posts].sort((a, b) =>
        a[sortSelected].localeCompare(b[sortSelected])
      );
    }
    return posts;
  }, [posts, sortSelected]);

  const searchSortedPost = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(searchQuery)
    );
  }, [sortedPosts, searchQuery]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const changeSort = (select) => {
    setSort(select);
  };

  return (
    <div className="app">
      <Form addPost={addPost} />
      <hr style={{ marginTop: 15 }} />
      <MyInput
        value={searchQuery}
        style={{ marginTop: 15 }}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <hr style={{ marginTop: 15 }} />
      <MySelect
        defaultValue="Sorting"
        name="sorting"
        value={sortSelected}
        changeSort={changeSort}
        options={[
          { value: 'title', name: 'Sort by Name' },
          { value: 'body', name: 'Sort by Description' },
        ]}
      />
      <hr style={{ marginTop: 15 }} />

      {searchSortedPost.length !== 0 ? (
        <PostList
          deletePost={deletePost}
          posts={searchSortedPost}
          title={'Posts list 1'}
        />
      ) : (
        <h2 style={{ textAlign: 'center', fontSize: 33 }}>There are no post</h2>
      )}
    </div>
  );
};

export default App;
