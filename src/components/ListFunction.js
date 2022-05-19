import { useState } from "react";
const ListFunction = () => {
  //useState통해서 state 작성
  const [season, setSeason] = useState([
    // key값 위해서 id를 작성
    { id: 1, text: "내용" },
    { id: 2, text: "메모를 만들었습니다" },
    
  ]);
  const [inputText, setInputText] = useState("");
  const [inputId, setInputId] = useState(3);



  const deleteSeason = (id) => {
    const nextSeason = season.filter((s) => s.id !== id);
    setSeason(nextSeason);
  };

  const changeText = (e) => {setInputText(e.target.value)};

  const getText = () =>{
    const nextSeason = season.concat({
      id: inputId,
      text: inputText,
    });
    setSeason(nextSeason);
    setInputId(inputId+1);
  }

  return (
    <div>
      <input type="text" name="inputText" onChange={changeText}></input>
      <button onClick={getText}>추가</button>
      <ul>
        {season.map((s) => (
          <li
            key={s.id}
          >
            {s.text}
            <button onClick={() => {
              deleteSeason(s.id);
            }}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListFunction;
