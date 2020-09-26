import React from 'react';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import { CommentModule } from '../Presentational/CommentModule';

// 1. Group the form elements
// 2. Style the list
// 3. Background color
// 4. Font color
// 6. Reformat each comment

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			commentValue: '',
			nameValue: '',
			comments: [
				{ name: 'Andrew', message: 'Get well Soon John!' },
				{ name: 'Bobbi', message: "Get well soon John! I hope you're back at NuCamp soon!" },
				{ name: 'Brad', message: 'Get well Soon John! Hit me up on Slack anytime.' },
				{ name: 'Krystal', message: 'Get well Soon John!' },
				{ name: 'James', message: 'Get well soon. Hope you get back to coding soon!' }
			]
		};
	}

	addNewComment = () => {
		// BAD: this.array.push(value) => this.state.comments = [];
		// GOOD: comments: [...this.state.comments, {name: this.state.nameValue, mess}]
		this.setState({
			comments: [ ...this.state.comments, { name: this.state.nameValue, message: this.state.commentValue } ]
		});
	};

	onChangeValue = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		console.log(this.state.commentValue);
		const renderComments = this.state.comments.map((comment) => {
			return <CommentModule name={comment.name} message={comment.message} />;
		});
		return (
			<div className='container commentList mt-5'>
				<div className='card-columns mb-5'>{renderComments}</div>
				<Form className='text-dark'>
					<FormGroup row>
						<Col sm={4}>
							<Label className='formText' htmlFor='messsageinput'>
								Message:
							</Label>
						</Col>
						<Col sm={8}>
							<input
								name='commentValue'
								type='text'
								onChange={(e) => this.onChangeValue(e)}
								value={this.state.commentValue}
								id='messageinput'
								className='inputBox'
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Col sm={4}>
							<Label className='formText' htmlFor='nameinput'>
								Name:
							</Label>
						</Col>
						<Col sm={8}>
							<input
								name='nameValue'
								type='text'
								onChange={(e) => this.onChangeValue(e)}
								value={this.state.nameValue}
								id='nameinput'
								className='inputBox'
							/>
						</Col>
					</FormGroup>
					<Button outline size='lg' id='inputButton' onClick={() => this.addNewComment()}>
						Add Comment
					</Button>
				</Form>
			</div>
		);
	}
}

export default CommentSection;
