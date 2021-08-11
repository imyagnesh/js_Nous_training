import Child from './Child';
// Component
// First Letter of Component should be Capital
// Return only single element
// style have a pass as a object and in camel case
// use className instead of class
const App = ({ name, title }) => {
  return (
    <>
      <input className="textInput" type="text" />
      <input type="checkbox" />
      <h1
        style={{
          color: "red",
          backgroundColor: "green",
        }}
      >
        {name}
      </h1>
      <h2>{title}</h2>
      <Child />
    </>
  );
};

export default App;
