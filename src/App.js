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
    //This is the correct way to update state that depends on itself.
    setCount((currentCount) => {return currentCount+1;} );
    setCount((currentCount) => {return currentCount+1;} );    
  }

  return (
    <div>
      <ViewCount count={count}/>
      <IncrementButton handleIncrementButton={handleIncrementButton}/>
    </div>
  )
}

export default App;
