
const DetailList = ({selected,onSelected,onChangeMode}) => {
  return (
    <div className="detail-list">
      <h2>{selected.name} 플래시카드</h2>
      <ul>
        {
          selected.flashcards.map((obj)=>{
            return <li key={obj.id}>{obj.question}</li>
          })
        }
      </ul>
      <button onClick={onChangeMode(true)}>학습 시작</button>
      <button onClick={()=>{onSelected(null)}}>뒤로가기</button>
    </div>
  );
};

export default DetailList;