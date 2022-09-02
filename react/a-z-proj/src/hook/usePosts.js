import { useMemo } from 'react';

export const useSortedPost = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [posts, sort]);
  return sortedPosts;
};

export const usePosts = (posts, sort, search) => {
  const sortedPosts = useSortedPost(posts, sort);

  const searchSortedPost = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(search)
    );
  }, [sortedPosts, search]);
  return searchSortedPost;
};
