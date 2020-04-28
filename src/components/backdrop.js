import React from "react"

const backdrop = props =>
  props.show2 ? (
    <div
      style={{
        opacity: props.show3 ? 1 : 0,
        transition: "opacity .5s ease-out",
      }}
      className="Backdrop"
      onClick={props.clicked}
    >
      {" "}
    </div>
  ) : null

export default backdrop
