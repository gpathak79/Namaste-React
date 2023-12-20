import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from './Header'



//Nested Header Element
const header = React.createElement("div", { class: "title" }, [
  ("h1", {}, "i m from h2 tag"),
  ("h2", {}, "i m from h2 tag"),
  ("h3", {}, "i m from h3 tag"),
]);

//Using JSX

const headerJsx =  (<div className="title">
  <h1>i m from h1 tag</h1>
  <h2>i m from h2 tag</h2>
  <h3>i m from h3 tag</h3>
</div>)

//Using functional component using JSX
const Headers = () =>(<div className="title">
  <h1>i m from h1 tag</h1>
  <h2>i m from h2 tag</h2>
  <h3>i m from h3 tag</h3>
</div>)

//Composition component

const CompositionComponent = ()=>
  (
    <Header></Header>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CompositionComponent></CompositionComponent>)