import React from 'react';
import Dashboard from '../dashboard';


class CategoryItem extends React.Component {
	render () {
		let {category} = this.props;
		let {name, budget} = this.props.category;
		let {onUpdate, onRemove} = this.props;
		return (
			<div className='single-item'>
				<h2>{name}: {budget}</h2>
				<button onClick={() => onRemove(category)}> Delete </button>
				<button onClick={() => onUpdate(category)}> Update </button>
			</div>
		);
	};
}

export default CategoryItem;