import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const {onCreate} = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if(e.keyCode === 13){
      onSubmit(); 
    }
  }
  const onSubmit = () => {
    if(content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        onKeyDown={onKeydown} //사용자가 키보드를 누를때 발생 이벤트
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 TODO...."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
