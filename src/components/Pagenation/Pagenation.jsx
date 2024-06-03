import React from 'react';

const Pagenation = () => {
  const aboutPage = {
    totalPost:
      boardTitle === '최신글'
        ? posts.map((post) => <Post key={post.id} post={post} />).length
        : filteredPosts.map((post) => <Post key={post.id} post={post} />).length,
    postPerPage: 5,
    totalPage: Math.ceil(totalPost / postPerPage),
    pagePerBoard: 5,
    currentPage: 1
  };

  return <></>;
};

export default Pagenation;
