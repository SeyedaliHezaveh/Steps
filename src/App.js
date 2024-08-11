import { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  switch(action.type) {
    case 'next':
      return {
        step: Math.min(3, state.step + 1)
      }
    case 'back':
      return {
        step: Math.max(0, state.step - 1)
      }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {step: 0})

  return (
    <div className="container">
      <div className="pages">
        <div style={{borderColor:  state.step >= 0 ? "rgb(70, 92, 216)"  : "gray"}}>1</div>
        <span style={{backgroundColor: state.step >= 1 ?  "rgb(70, 92, 216)" : "gray"}}></span>
        <div style={{borderColor:  state.step >= 1 ? "rgb(70, 92, 216)"  : "gray"}}>2</div>
        <span style={{backgroundColor: state.step >= 2 ?  "rgb(70, 92, 216)" : "gray"}}></span>
        <div style={{borderColor:  state.step >= 2 ? "rgb(70, 92, 216)"  : "gray"}}>3</div>
        <span style={{backgroundColor: state.step >= 3 ?  "rgb(70, 92, 216)" : "gray"}}></span>
        <div style={{borderColor:  state.step >= 3 ? "rgb(70, 92, 216)"  : "gray"}}>4</div>
      </div>
      <div className="btns">
        <button disabled={state.step === 0} style={{backgroundColor: state.step === 0 ? "gray": "rgb(70, 92, 216)"}}  data-testid="prevBtn" className="prevBtn" onClick={() => {
          dispatch({type: 'back'})
        }}>
          Prev
        </button>
        <button disabled={state.step === 3} style={{backgroundColor: state.step === 3 ? "gray": "rgb(70, 92, 216)"}}  data-testid="nextBtn" onClick={() => {
          dispatch({type: 'next'})
        }}>Next</button>
      </div>
    </div>
  );
}

export default App;

