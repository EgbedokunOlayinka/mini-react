// const element = <h2 title="heading">Test Header</h2>;
// const container = document.getElementById("root");
// ReactDOM.render(element, container);

// const element = React.createElement(
//   "h1",
//   { title: "foo" },
//   "Hello"
// )

const element = {
  type: 'h2',
  props: {
    title: 'heading',
    children: 'Test Header',
  },
};

const container = document.getElementById('root');

// reactdom.render
const node = document.createElement(element.type);
node['title'] = element.props.title;

const text = document.createTextNode('');
text['nodeValue'] = element.props.children;

node.appendChild(text);
container.appendChild(node);
