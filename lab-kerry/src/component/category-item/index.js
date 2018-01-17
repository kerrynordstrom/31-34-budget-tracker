import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component {
	render () {
		let {category, onUpdate, onRemove} = this.props;
		let {name, budget} = this.props.category;
		return (
			<div className='single-item'>
				<h2>{name}: ${budget}</h2>
				<button onClick={() => onRemove(category)}> Delete </button>
				<CategoryForm 
					category={category}
					onComplete={onUpdate}
					/>
			</div>
		);
	};
}

export default CategoryItem;