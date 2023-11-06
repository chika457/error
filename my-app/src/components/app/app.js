import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status/post-status';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import ModalWindow from '../modal-window';

import './app'

export default class app extends Component {

	  constructor(props) {
	    super(props);
	    this.state = {
	      data: [
	        { label: "Статия номер 1", important: true, like: false, id: 1 },
	        { label: "Статия номер 2", important: false, like: false, id: 2 },
	        { label: "Статия номер 3", important: false, like: false, id: 3 }
	      ],
	      SearchValue: "",
	      filter: "all",
				modalVisible: false
	    }
	    // 72 сабак
	    this.onDelet = this.onDelet.bind(this);
	    // 73 sabak
	    this.addItem = this.addItem.bind(this);
	    this.onToogleImportant = this.onToogleImportant.bind(this);
	    this.onToogleLike = this.onToogleLike.bind(this);
	    this.onUpdateSearchPanel = this.onUpdateSearchPanel.bind(this);
	    this.onUpdateFilter = this.onUpdateFilter.bind(this);

	    this.id = 4;

	  }

	  // 72 сабак
	  onDelet(id) {
	    this.setState(({ data }) => {
	      const index = data.findIndex(elem => elem.id === id);

	      const before = data.splice(0, index);
	      const after = data.splice(index + 1);

	      const newData = [...before, ...after];

	      return {
	        data: newData
	      }

	    });

	  }

	  addItem(text) {
	    const newItem = {
	      label: text,
	      important: false,
	      id: this.id++
	    }

	    this.setState(({ data }) => {
	      const newArr = [...data, newItem]

	      return {
	        data: newArr
	      }

	    });

	  }

	  onToogleImportant(id) {
	    this.setState(({ data }) => {
	      const index = data.findIndex(elem => elem.id === id);

	      const before = data[index];
	      const newLike = { ...before, important: !before.important };

	      const newData = [...data.slice(0, index), newLike, ...data.slice(index + 1)];

	      return {
	        data: newData
	      }

	    });
	  }

	  onToogleLike(id) {
	    this.setState(({ data }) => {
	      const index = data.findIndex(elem => elem.id === id);

	      const before = data[index];
	      const newLike = { ...before, like: !before.like };

	      const newData = [...data.slice(0, index), newLike, ...data.slice(index + 1)];

	      return {
	        data: newData
	      }

	    });
	  }

	  searchPost(items, SearchValue) {
	    if (SearchValue.length === 0) {
	      return items
	    }

	    return items.filter((item) => {
	      return item.label.indexOf(SearchValue) > -1
	    })

	  }

	  onUpdateSearchPanel(value) {
	    this.setState({
	      SearchValue: value
	    })
	  }

	  filterPost(items, filter) {
	    if (filter === "like") {

	      return items.filter(item => item.like)

	    } else {
	      return items
	    }
	  }

	  onUpdateFilter(value) {
	    this.setState({
	      filter: value
	    })
	  }

	  onOpenWindow(id) {
	    this.setState({
	      modalVisible: !this.state.modalVisible
	    })
	  }


	render() {

		const { data, SearchValue, filter, modalVisible } = this.state;

		console.log(modalVisible)

		const likes = data.filter(item => item.like).length;

		const searchPost = this.filterPost(this.searchPost(data, SearchValue), filter);
		const allItems = searchPost.length;

		return (
		  <div>
		    <AppHeader
		      allPost={allItems}
		      likes={likes}
		    />
		    <div className='search-panel d-flex'>
		      <SearchPanel
		        onUpdateSearchPanel={this.onUpdateSearchPanel}
		      />
		      <PostStatusFilter
		        filter={filter}
		        onUpdateFilter={this.onUpdateFilter}
		      />
		    </div>
		    <PostList
		      posts={searchPost}
		      // 72 сабак
		      onDelet={this.onDelet}
		      // 73 сабак
		      onToogleImportant={this.onToogleImportant}
		      onToogleLike={this.onToogleLike}
					onOpenWindow={this.onOpenWindow}
		    />
		    <PostAddForm
		      addItem={this.addItem}
		    />

				{/* <ModalWindow /> */}

		  </div>
		)
	}

}
