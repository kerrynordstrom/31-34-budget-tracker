import React from 'react';
import dragPhoto from '../../image/drag.jpg'

let image = dcoument.createElement('img');
img.src = dragPhoto;

class Draggable extends React.Component {
	constructor(props) {
		super(props);

		let memberFunctions = Object.getOwnPropertyNames(Draggable.prototype);
		for (let functionName of memberFunctions) {
			if (functionName.startsWith('handle')) {
				this[functionName] = this[functionName].bind(this);
			}
		};
	}

	handleDragStart(event) {
		event.dataTransfer.setData('application/json', JSON.stringify(this.props.data));
	}

	render() {
		return(
			<div draggable onDragStart={this.handleDragStart}>
			{this.props.children}
			</div>
		);
	}
}

export default Draggable;