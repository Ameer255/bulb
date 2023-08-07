import React from 'react';
import onImage from './assets/on.jpg';
import offImage from './assets/off.jpg';
import './App.css';

function App() {

  let [state, setState] = React.useState({on : false});
  return (
    <div className="App">
     
     <div className='container'>
      <img src={state.on ? onImage : offImage} alt='bulb image'/>
     </div>

     <button onClick={()=>setState({on : !state.on})}
     style={{backgroundColor: state.on? 'red' : 'green'}}
     >
      {state.on ? 'Turn Off' : 'Turn On' }
      </button>

     
    </div>
  );
}

export default App;
