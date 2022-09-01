const PostItem = (props) => {
  const { label, body } = props.post;

  return (
    <div className="post">
      <div className="post-content">
        <h3>
          {props.number + 1}. {label}
        </h3>
        <p>{body}</p>
      </div>
      <div className="post-btn">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
