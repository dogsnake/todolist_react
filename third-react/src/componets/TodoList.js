import React,{ useState } from 'react';

const TodoList = () => {
    const [names,setNames] = useState([
        {id:1, text: "점심 식당 고르기"},
        {id:2, text: "점심 메뉴 고르기"},
        {id:3, text: "점심 후식 고르기"},
    ])
    //인풋 상태 관리
    const [inputText, setInputText] = useState("");
    //id 상태 관리
    const [nextId, setNextId] = useState(5);
    //버튼 클릭시 실행된 함수
    const onClick = () => {
        const nextNames = [
            ...names,
            { id: nextId , text: inputText }
        ];
        setNextId(nextId+1); //다음 아이디 값 업데이트
        setNames(nextNames); // names 배열 업데이트
        setInputText(""); //inputText 비우기
    }
    //함수 표현식
    const onChange = (e) => setInputText(e.target.value);
    //항목을 삭제하는 함수
    const onRemove = (id) => {
        const nextNames = names.filter(name=> name.id !== id);
        setNames(nextNames);
    }
    const namelists = names.map((name,index)=>
    <li key={index}>{name.text}
    <button onClick={()=>onRemove(name.id)}>x</button></li>
    );
    return (
        <div>
            <div class='header'>
                <header>
                <h1>To do List</h1>
                <input value={inputText} onChange={onChange}/>
                <button onClick={onClick}>+</button>
                </header>
            </div>
            <ul class='contents'>
                {namelists}
            </ul>
        </div>
    );
};

export default TodoList;