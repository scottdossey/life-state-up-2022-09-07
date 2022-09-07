import React from 'react';

function IncrementButton(props) {

  return (
    <button onClick={props.handleIncrementButton}>Increase Count</button>
  );
}

function ViewCount(props) {
  return (
    <div>{props.count}</div>
  );
}


function App(props) {
  let [count, setCount] = React.useState(0);

  function handleIncrementButton() {
    setCount(count+1);
  }

  return (
    <div>
      <ViewCount count={count}/>
      <IncrementButton handleIncrementButton={handleIncrementButton}/>
    </div>
  )
}

export default App;
