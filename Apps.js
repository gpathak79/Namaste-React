/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 *      <div id="child">
 *          <h2></h2>
 *      </div>
 * </div>  
 */

 import React from "react";
 import ReactDOM  from "react-dom/client";
 
 // const parent = React.createElement(
 //   "div",
 //   { id: "parent" },
 //  [ React.createElement("div", { id: "child1" }, [
 //     React.createElement("h1", {}, "I am h1 tag"),
 //     React.createElement("h2", {}, "I am h2 tag"),
 //   ]),
 //   React.createElement("div", { id: "child2" }, [
 //     React.createElement("h1", {}, "I am h1 tag"),
 //     React.createElement("h2", {}, "I am h2 tag"),
 //   ])] 
 // );
 
 // console.log(parent);
 
 // const root = ReactDOM.createRoot(document.getElementById("root"));
 
 // root.render(parent);
 
 //JSX - is not HTML in Javascript
 //it is HTML like syntax it look like HTML
 //Babel - it is a javascript compiler JSX converted to React Code
 const elem = <span>React Element</span>
 const Header  = ()=> (
   <h1 className="heading">
     {elem}
     Namaste React using JSX
     </h1>
     );
 
 const data = 1000;
   //React Component
   //Class Based Component - OLD
   //Functional Component -it is a normal javascript function that returns JSX
 const HeadingComponent = ()=> (<div id="container">
   {data}
   <h1 className="heading">Namaste React Functional Component</h1>
   {<Header></Header>}
 </div>);
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<HeadingComponent/>)
 
 
 