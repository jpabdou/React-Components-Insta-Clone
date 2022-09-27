import React from 'react';
import Post from './Post';
import PostHeader from './PostHeader';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map(post=>
        <div key={post.id}>
          <PostHeader thumbnailUrl={post.thumbnailUrl} key={post.id+ 100} username={post.username} />
          <Post post={post} likePost={likePost} />
        </div>
      )}
      {/* Check the implementation of Post to see what props it requires! imageUrl={post.imageUrl} thumbnailUrl={post.thumbnailUrl} */}
    </div>
  );
};

export default Posts;
