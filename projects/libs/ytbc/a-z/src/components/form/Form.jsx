import { useState } from 'react';

import React from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

const Form = ({ addPost, setModal }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    addPost(newPost);
    setModal(false);

    setPost({ title: '', body: '' });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        name="name"
        placeholder="Name"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        name="desc"
        placeholder="Desctiption"
      />
      <MyButton disabled={false} type="submit">
        Create
      </MyButton>
    </form>
  );
};

export default Form;
