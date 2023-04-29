import React,{useReducer} from 'react';
import './App.css';
// import ArrayHook from './Components/ArrayHook';
// import CompC from './Components/CompC';
// import CompA from './Components/CompA';
// import CompB from './Components/CompB';
import DataFetching1 from './Components/DataFetching1';
import DataFetchingTwo from './Components/DataFetchingTwo';
import ParentComp from './Components/ParentComp';
import Counter from './Components/Counter';
import FocusInput from './Components/FocusInput';
// import CounterOne from './Components/CounterOne';
// import CounterTwo from './Components/CounterTwo';
// import CounterThree from './Components/CounterThree';
// import DataFetching from './Components/DataFetching';
// // import ClassCounter from './Components/ClassCounter';
// import HookCounter from './Components/HookCounter';
// import HookCounterTwo from './Components/HookCounterTwo';
// import HookMouse from './Components/HookMouse';
// import HookUseEffect from './Components/HookUseEffect';
// import IntervalHookCounter from './Components/IntervalHookCounter';
// import MouseContainer from './Components/MouseContainer';
// import ObjectHook from './Components/ObjectHook';
// import Myform from './Components/Myform';
// import PostForm from './Components/PostForm';
// import PostalList from './Components/PostalList';
// export const userContext = React.createContext()
// export const channelContext = React.createContext()
// export const CountContext = React.createContext({count : 0})
// const intialState = 0
// const reducer = (state,action) => {
//     switch(action){
// case "Increment": return state+1
// case "Decrement":return state-1
// case "Reset": return intialState
// default:return state
//     }
// }

function App() {
  // const [count,dispatch] = useReducer(reducer,intialState)
  return (
    // <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className="App">
     {/* <PostalList/> */}
     {/* <PostForm/> */}
     {/* <Myform/> */}
     {/* <ClassCounter/> */}
     {/* <HookCounter/> */}
     {/* <HookCounterTwo/> */}
     {/* <ObjectHook/> */}
     {/* <ArrayHook/> */}
     {/* <HookUseEffect/> */}
     {/* <HookMouse/> */}
     {/* <MouseContainer/> */}
     {/* <IntervalHookCounter/> */}
     {/* <DataFetching/> */}
     {/* <userContext.Provider value={"Sanjay"}>
      <channelContext.Provider value={"code-evolution"}>
     <CompC/>
     </channelContext.Provider>
     </userContext.Provider> */}
     {/* <CounterOne/> */}
     {/* <CounterTwo/> */}
     {/* <CounterThree/> */}
     {/* <div>Count:{count}</div>
     <CompA/>
     <CompB/>
     <CompC/>
    
    </CountContext.Provider> */}
    {/* <DataFetching1/> */}
    {/* <DataFetchingTwo/> */}
    {/* <ParentComp/> */}
    {/* <Counter/> */}
    <FocusInput/>
    </div>
  );
}

export default App;
