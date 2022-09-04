import { useState, useEffect, useRef } from 'react';
import { usePosts } from '../hook/usePosts';
import PostFilter from '../components/filter/PostFilter';
import Form from '../components/form/Form';
import PostList from '../components/posts/PostList';
import { useFetching } from '../hook/useFetching';
import { useObserver } from '../hook/useObserver';
import { getPageCount } from '../utils/pages';
import PostService from '../API/PostService';

import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/modal/MyModal';
import Pagination from '../components/UI/pagination/Pagination';
import Loader from '../components/UI/loader/Loader';
import MySelect from '../components/UI/select/MySelect';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', search: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currPage, setCurrPage] = useState(1);
  const lastElement = useRef();

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, currPage);
    const totalCount = response.headers['x-total-count'];
    setPosts([...posts, ...response.data]);
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, currPage < totalPages, isPostLoading, () =>
    setCurrPage(currPage + 1)
  );

  useEffect(() => {
    fetchPosts(limit, currPage);
  }, [currPage, limit]);

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
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        name="selectCount"
        defaultValue="Items Count"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Show all' },
        ]}
      />
      <hr style={{ marginTop: 15 }} />
      {postError && (
        <h1 style={{ textAlign: 'center', marginTop: 20 }}>
          Error # {postError.message}:
        </h1>
      )}
      <PostList
        deletePost={deletePost}
        posts={sortedAndSearchedPosts}
        title={'Posts list'}
      />
      <div ref={lastElement} style={{ height: 20, width: '100%' }}></div>
      {isPostLoading && <Loader />}
      <Pagination
        totalPages={totalPages}
        currPage={currPage}
        changePage={changePage}
      />
    </div>
  );
};

export default Posts;
