import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1 className="box-text">{props.title}</h1>
      <img
        className="item-img"
        src="https://media.istockphoto.com/id/1146263300/vector/scissors-vector-design-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=mwp4-CXaKtvIq9VLvJbFtt94KhWmBPXJC9fFgrcPi3k="
      ></img>
      <h2 className="box-text">WIN</h2>
    </div>
  );
};

export default Box;
