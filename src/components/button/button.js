import React from "react";

export const Button = (props) => {
  const content = props?.title ? props.title : props.text;

  return <button>{content}</button>;
};
