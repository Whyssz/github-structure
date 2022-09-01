import { useState } from 'react';
import Form from '../components/form/Form';
import PostList from '../components/posts/PostList';
import MyButton from '../components/UI/button/MyButton.jsx';
import MyInput from '../components/UI/input/MyInput';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, label: 'JavaSriprt', body: 'Smth text' },
    { id: 2, label: 'Ract', body: 'Smth text' },
    { id: 3, label: 'Redux', body: 'Smth text' },
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="app">
      <Form addPost={addPost} />
      <PostList posts={posts} title={'Posts list 1'} />
    </div>
  );
};

export default App;
