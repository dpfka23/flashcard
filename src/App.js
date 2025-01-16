import mockData from "./data/mockData";
import Home from "./components/Home";
import { useState } from "react";
import DetailList from "./components/DetailList";
import Learning from "./components/Learning";
import Result from "./components/Result";

const App = () => {
  const [selected,setSelected] = useState(null);
  const [learningMode,setlearningMode] = useState(false);
  const [exitMode,setExitMode] = useState(false);

  const handleSelected = (obj)=>{
    setSelected(obj);
  }
  const handleChangeMode = (data)=>{
    setlearningMode(data);
  }
  return (
    <div className="app">
      {
        !selected &&
      <Home categories={mockData.categories} onSelected={handleSelected} />
      }
      {
        selected && !learningMode &&
      <DetailList onChangeMode = {handleChangeMode} 
      selected={selected} onSelected={handleSelected} />
      }
      {
        learningMode && !exitMode &&
      <Learning flashcards={selected.flashcards} 
      onExit={()=>{
        setSelected(null);
        setlearningMode(false);
      }}
      onResult={()=>{
        setExitMode(true);
      }}
      />
    }
    {
      exitMode &&
      <Result onExit={()=>{
        setSelected(null);
        setlearningMode(false);
        setExitMode(false);
      }}/>
    }
    </div>
  );
};

export default App;