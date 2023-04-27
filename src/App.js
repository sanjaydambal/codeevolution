import React from 'react';
import './App.css';
// import ArrayHook from './Components/ArrayHook';
import CompC from './Components/CompC';
import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';
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
export const userContext = React.createContext()
export const channelContext = React.createContext()

function App() {
  return (
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
     <CounterTwo/>
    </div>
  );
}

export default App;
