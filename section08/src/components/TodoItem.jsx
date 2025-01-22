import "./TodoItem.css";
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

export default TodoItem;