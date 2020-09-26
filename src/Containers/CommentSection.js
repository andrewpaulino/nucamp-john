import React from 'react';
import { CommentModule } from '../Presentational/CommentModule';

// 1. Group the form elements
// 2. Style the list
// 3. Background color
// 4. Font color
// 5. Font face
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
				{ name: 'Krystal', message: 'Get well Soon John!' }
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
			<div className='commentList'>
				{renderComments}
				<div>
					Message:
					<input
						name='commentValue'
						type='text'
						onChange={(e) => this.onChangeValue(e)}
						value={this.state.commentValue}
						id='messageinput'
					/>
					Name:
					<input
						name='nameValue'
						type='text'
						onChange={(e) => this.onChangeValue(e)}
						value={this.state.nameValue}
						id='nameinput'
					/>
					<button id='inputButton' onClick={() => this.addNewComment()}>
						Add Comment
					</button>
				</div>
			</div>
		);
	}
}

export default CommentSection;
