import React, { Component } from 'react'

import './style.css'

export default class ModalWindow extends Component{

	render(){
		return (
			<div className="modal">
				<div className="modal-dialog">
					<div className='modal-header'>
						<h3 className="modal-title">Chyngyz Bektemirow</h3>
						<span className="modal-close">x</span>
					</div>
					<div className="modal-body">
						<div className="modal-content">
							content
						</div>
					</div>
					<div className="modal-footer">
						Закрыть
					</div>
				</div>
			</div>
		);
	}
}
