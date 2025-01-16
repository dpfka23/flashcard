import { useState } from "react";

const Learning = ({flashcards,onExit,onResult}) => {
  const [currentIdx,setCurrentIdx] = useState(0);
  const [showAnswer,setShowAnswer] = useState(false);
  const handleNext = ()=>{
    setShowAnswer(false);
    if(currentIdx+1 < flashcards.length){
    setCurrentIdx(currentIdx+1);
    } else {
      //   alert('학습완료!');
      //   onExit();
      onResult();
    }
  }
  return (
    <div className="learning">
      <h2>플래시카드 학습</h2>
      <p>질문: {flashcards[currentIdx].question}</p>
      {
        showAnswer &&
        <p>답변: {flashcards[currentIdx].answer}</p>
      }
      <button onClick={()=>{setShowAnswer(!showAnswer)}}>
        {
          showAnswer ? '답변닫기' : '답변보기'
        }
        </button>
      <button onClick={handleNext}>다음 카드</button>
      <button onClick={onExit}>학습 종료</button>
    </div>
  );
};

export default Learning;