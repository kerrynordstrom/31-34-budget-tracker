import './_drop-zone.scss';
import React from 'react';

class DropZone extends React.Component {
	constructor(props) {
		super(props);

		let memberFunctions = Object.getOwnPropertyNames(DropZone.prototype);
		for (let functionName of memberFunctions) {
			if (functionName.startsWith('handle')) {
				this[functionName] = this[functionName].bind(this);
			}
		};
	}

	handleDragOver(event) {
		event.preventDefault();
		
	}

	handleDrop(event) {
		//Exception may be thrown when parsing drag data.
		try{
			let dragData = JSON.parse(event.dataTransfer.getData('application/json'));
			// This onComplete function will be the one to update state
			this.props.onComplete(dragData);
		} catch(error) {
			console.log('__BAD_DRAG_DATA__', error);
		}
	}

	render() {
		return ( <div className='drop-zone' onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
		{this.props.children}
		</div>
		);
	}
}

export default DropZone;