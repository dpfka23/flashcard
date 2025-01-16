
const Result = ({onExit}) => {
  return (
    <div className="result">
      <h2>학습종료</h2>
      <button onClick={onExit}>처음부터</button>
    </div>
  );
};

export default Result;