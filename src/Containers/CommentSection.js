import React from 'react';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [{name: "Andrew", message: "Get well Soon John!"}]
        }
    }

    addNewComment = (message) => {
        
    }

    render() {
        return (
            <> 

            </>
        )
    }
}

export default CommentSection;