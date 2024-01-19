const React = require("react");

function BookComment({ comment }) {
  return (
    <div className="comment_coc20">
      <div className="card-body">
        <div className="qwery">{comment.text}</div>
      </div>
    </div>
  );
}

module.exports = BookComment;
