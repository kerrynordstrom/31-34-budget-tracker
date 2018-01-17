import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import * as category from '../../action/category';
import '../../style/main.scss'

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
			<ul>
			{
				categories.map((category, i) => 
					<li key={i}>
							<CategoryItem category={category} onUpdate={categoryUpdate} onRemove={categoryRemove}/>
					</li>
			)}
			</ul>
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