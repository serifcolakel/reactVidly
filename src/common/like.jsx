const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) {
    classes += "-o";
    console.log(": Total unLike");
  }
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
//Class ile
//class Like extends Component {
// render() {
// let classes = "fa fa-heart";
//   if (!this.props.liked) {
//     classes += "-o";
//    console.log(": Total unLike");
//   }
//  return (
//  <i
//      onClick={this.props.onClick}
//      style={{ cursor: "pointer" }}
//    className={classes}
//      aria-hidden="true"
//  />
//  );
// }
//}
//export default Like;
