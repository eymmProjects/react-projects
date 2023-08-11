import React from "react";

export default function Button({
  text = "click",
  btnClass,
  icon,
  onClick,
  classNames,
}) {
  return (
    // <button className={`btn ${btnClass}`} onClick={onClick}>
    <button className={`classNames  ${btnClass}`} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
