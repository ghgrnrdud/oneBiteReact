import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  // 이렇게 쓰면 첫 번째에서만 로그 나오고 그 담엔 실행 안됨.
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  // deps를 안쓰면 리렌더링 될 때마다 로그 출력
  // 업뎃 될때마다만 로그 출력하고싶다면 Ref 선언해서 넣어봐
  useEffect(() => {
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마툰트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even/> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
