import { Component } from "react";

class ListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: [
        { id: 1, text: "내용" },
        { id: 2, text: "메모를 만들었습니다" },
      ],
      
      inputId: 3,
      inputText: "",
    };
  }
  
  deleteSeason = (id) => {
    const nextSeason = this.state.season.filter((s) => s.id !== id);
    this.setState({ season: nextSeason });
  };


  changeText = (e) => this.setState({ [e.target.name]: e.target.value });


  getText = () => {
    const nextSeason = this.state.season.concat({
      id: this.state.inputId,
      text: this.state.inputText,
    });

    this.setState({ season: nextSeason });
    this.setState((prevState) => ({ inputId: prevState.inputId + 1 }));
  };

  render() {
    const { season } = this.state;

    return (
      <div>
        <h1>메모</h1>
        <input 
          type="text" 
          name="inputText" 
          onChange={this.changeText}
          placeholder="메모를 적어주세요"
          >
          </input>
        <button onClick={this.getText}>추가</button>
        <ul>
          {season.map((s) => (
            <li
              key={s.id}
            >
              {s.text}
              <span id="del" 
                onClick={() => {
                this.deleteSeason(s.id);}}
                class="material-symbols-outlined"
              >
                delete_forever
              </span>
            </li>
            
          ))}
        </ul>

        
        
      </div>
    );
  }
}
export default ListClass;
