import React from 'react';
import PostListItem from './../post-list-item/post-list-item';
import './post-list.scss';
import './post-list.css';
// import style from './app.module.css'



const PostList = ({ posts, onDelet, onOpenWindow, onToogleImportant, onToogleLike }) => {

  const elem = posts.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li key={item.id} >
        <PostListItem
          {...itemProps}
    // 72, 73 сабак
          onDelet={() => onDelet(id)}
          onToogleImportant={() =>onToogleImportant(id)}
          onToogleLike={() =>onToogleLike(id)}
          onOpenWindow={() =>onOpenWindow(id)}
        />
      </li>
    );

  });

  return (
    <ul className='app-list list-group'>
      {elem}
    </ul>
  )
}

export default PostList
