import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail'
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                imgsrc={faker.image.avatar()}
                author="Sam"
                date="Today at 5:00 PM"
                comment="Nice Post!" />
            <CommentDetail
                imgsrc={faker.image.avatar()}
                author="Jane"
                date="Today at 4:00 PM"
                comment="Amazing!" />
            <CommentDetail
                imgsrc={faker.image.avatar()}
                author="Alex"
                date="Today at 8:00 PM"
                comment="Just Chill Baby!" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))