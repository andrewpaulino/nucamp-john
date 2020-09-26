import React from 'react';

export const CommentModule = ({name, message}) => {
    return (
        <> 
            <div>
                {name} - {message}
            </div>
        </>
    );
}