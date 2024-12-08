import Didact from './didact.js';

// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// )
// const container = document.getElementById("root")
// ReactDOM.render(element, container)

// const element = React.createElement(
//   "div",
//   { id: "foo" },
//   React.createElement("a", null, "bar"),
//   React.createElement("b")
// )

const element = Didact.createElement(
  'div',
  {title: 'foo'},
  Didact.createElement('a', null, 'bar'),
  Didact.createElement('b', null),
  'ccc',
);

console.log(element);
