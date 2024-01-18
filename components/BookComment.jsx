const React = require("react")

function BookComment ({comment}){
    return(
<div className="comment_coc20">
  <div className="card-body">
    {comment.text}
  </div>
</div>
    )
}

module.exports = BookComment