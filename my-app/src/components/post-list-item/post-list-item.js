import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {

  render() {
// 72 сабак
    const { label, onOpenWindow, onDelet, onToogleImportant, onToogleLike, important, like } = this.props;

    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }

    if (like) {
      classNames += " like";
    }

    return (
      // 72 сабак
      <div className={classNames}>
        <span className=' like app-list-item-label' onClick={onToogleLike}>{label}{important}</span>
        <div className='wss d-flex justify-content-center align-items-center'>
          <button className='btn-star btn-sm' onClick={onToogleImportant}>
            <i className='fa fa-star'></i>
          </button>
          <button className='btn-trash btn-sm' onClick={onDelet}>
            <i className='fa fa-trash-o'></i>
          </button>
          <button className='btn-trash btn-sm' onClick={onOpenWindow}>
            <i className='fa fa-arrow-right'></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    )

  }

}
