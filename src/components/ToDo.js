import { connect } from "react-redux";
import { actionCreators, remove } from "../store";

function ToDo({ text, onBtnClick }) {
  return (
    <>
      <li>{text}</li>
      <button onClick={onBtnClick}>DEL</button>
    </>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log("디버깅", ownProps.id);
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
