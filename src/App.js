import "./App.css";
import Box from "./component/Box";

// 1. 박스 2개가 보인다.
// 2. 유저가 선택한 가위바위보가 유저 박스에 넣어진다.
// 3. 컴퓨터는 랜덤으로 선택한다.
// 4. 결과값이 보인다.
// 5. 박스의 색도 달라진다.

const choice = {
  rock: {
    name: "Rock",
    img: "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3bdb2575-9a92-42f8-8472-bb78c7bd118a_720x405.jpeg",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
  scissor: {
    name: "Scissor",
    img: "https://media.istockphoto.com/id/1146263300/vector/scissors-vector-design-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=mwp4-CXaKtvIq9VLvJbFtt94KhWmBPXJC9fFgrcPi3k=",
  },
};

function App() {
  const play = (playerChoice) => {
    console.log("선택됨!", playerChoice);
  };

  return (
    <div>
      <div className="main">
        <Box title="You" />
        <Box title="Computer" />
      </div>

      <div className="main">
        <button className="element" onClick={() => play("Scissor")}>
          가위
        </button>
        <button className="element" onClick={() => play("Rock")}>
          바위
        </button>
        <button className="element" onClick={() => play("Paper")}>
          보
        </button>
      </div>
    </div>
  );
}

export default App;
