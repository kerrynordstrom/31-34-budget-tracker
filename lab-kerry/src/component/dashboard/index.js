import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import * as category from '../../action/category';

class Dashboard extends React.Component {
	render() {
		let {
			categories,
			categoryCreate,
			categoryUpdate,
			categoryRemove,
		} = this.props;

	return (
		<div className='dashboard'>
			<CategoryForm onComplete={categoryCreate} />
			{
				categories.map((section, index) => 
					<div key={index}>
					<h2>{category.title}</h2>
					<button onClick={() => categoryRemove(category)}> Delete </button>
					<CategoryForm category={category} onComplete={categoryUpdate} />
					</div>
			)}
		</div>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		categories: state,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		categoryCreate: (data) => dispatch(category.createAction(data)),
		categoryUpdate: (data) => dispatch(category.updateAction(data)),
		categoryRemove: (data) => dispatch(category.removeAction(data)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);