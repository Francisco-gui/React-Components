import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';



const App = () => {
  
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:55 PM" 
        content="Nice post mate!"
        avatar="https://source.unsplash.com/random"
      />
      <CommentDetail 
        author="Alex" 
        timeAgo="Today at 6:25 PM" 
        content="I liked this post"
        avatar="https://source.unsplash.com/random"
      />
      <CommentDetail 
        author="Jame" 
        timeAgo="Yesterday at 1:00 PM" 
        content="Really good content"
        avatar="https://source.unsplash.com/random"
      />
    </div>
  );

};

ReactDOM.render( <App /> , document.querySelector('#root'));