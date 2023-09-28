import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { incNumber,decNumber } from './actions';


function App() {

  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch()

  console.log("mySate " + myState)
   
  return (
    <div className="App">
      <header className="App-header">
        <h2>Increment/Decrement by Using React Redux</h2>
        <div>
          <button className="btnDec" onClick={() => dispatch(decNumber())}>DEC</button>
          <input type="text" value={myState} />
          <button className="btnInc" onClick={() => dispatch(incNumber())}>INC</button>
        </div>
      </header>
    </div>
  );
}

export default App;
