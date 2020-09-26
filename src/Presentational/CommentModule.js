import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

export const CommentModule = ({ name, message }) => {
	return (
		<React.Fragment>
			<Card>
				<CardBody>
					<CardText>{message}</CardText>
					<CardText>
						<small className='text-white'>{name}</small>
					</CardText>
				</CardBody>
			</Card>
		</React.Fragment>
	);
};
