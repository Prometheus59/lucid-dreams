import React from "react"

const divStyle = {
  color: "white",
  padding: "10px",
  display: "flex",
  justifyContent: "space-around",
}

const cardStyle = {
  border: "2px",
  borderColor: "black",
  borderStyle: "solid",
  padding: "10vw 15vh 10vw 15vh",
  background: "lightslategrey",
  margin: "10vh",
}

export default class triplecard extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <div style={cardStyle}>item 1</div>
        <div style={cardStyle}>item 2</div>
        <div style={cardStyle}>item 3</div>
      </div>
    )
  }
}
