import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyHeader.scss';

const MyHeader = props => (
	<div>This is a component called MyHeader.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class MyHeader extends React.Component {
//   render() {
//     return <div>This is a component called MyHeader.</div>;
//   }
// }

const MyHeaderPropTypes = {
	// always use prop types!
};

MyHeader.propTypes = MyHeaderPropTypes;

export default MyHeader;
