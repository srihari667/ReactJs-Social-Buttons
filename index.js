const Button = (props) => {
  //  Write your code here.
  const { name, className } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading"> Social Buttons </h1>
    <div className="buttonsContainer">
      <Button name="Like" className="likeButton" />
      <Button name="Comment" className="commentButton" />
      <Button name="Share" className="shareButton" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
