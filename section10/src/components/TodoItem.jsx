import "./TodoItem.css";
import { memo } from "react";
const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

    const onChanageCheckbox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return(
        <div className="TodoItem">
            <input checked={isDone} type="checkBox" onChange={onChanageCheckbox}/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
};

// 고차 컴퍼넌트(HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//     //반환값에 따라, props가 바뀌었는지 안바뀌었는지 판단
//     // T -> props 바뀌지 않음 -> 리렌더링 x
//     // F -> props 바뀜 -> 리렌더링 o

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// }); 
export default memo(TodoItem);