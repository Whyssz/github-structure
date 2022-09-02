import { useState, useEffect } from 'react';
import { usePosts } from '../hook/usePosts';
import PostFilter from '../components/filter/PostFilter';
import Form from '../components/form/Form';
import PostList from '../components/posts/PostList';
import { useFetching } from '../hook/useFetching';
import { getPageCount } from '../utils/pages';
import PostService from '../API/PostService';

import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/modal/MyModal';
import Pagination from '../components/UI/pagination/Pagination';
import Loader from '../components/UI/loader/Loader';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', search: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currPage, setCurrPage] = useState(1);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, currPage);
    const totalCount = response.headers['x-total-count'];
    setPosts(response.data);
    setTotalPages(getPageCount(totalCount, limit));
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

  useEffect(() => {
    fetchPosts();
  }, [currPage]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const changePage = (pageNum) => {
    setCurrPage(pageNum);
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
      {postError && (
        <h1 style={{ textAlign: 'center', marginTop: 20 }}>
          Error # {postError.message}:
        </h1>
      )}
      {isPostLoading ? (
        <Loader />
      ) : (
        <PostList
          deletePost={deletePost}
          posts={sortedAndSearchedPosts}
          title={'Posts list 1'}
        />
      )}
      <Pagination
        totalPages={totalPages}
        currPage={currPage}
        changePage={changePage}
      />
    </div>
  );
};

export default App;
