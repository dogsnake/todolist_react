import React,{ useState } from 'react';

const IterationSample = () => {
    const [names,setNames] = useState([
        {id:1, text: "눈"},
        {id:2, text: "팥빙수"},
        {id:3, text: "귤"},
        {id:4, text: "붕어빵"}
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
    <button onClick={()=>onRemove(name.id)}>삭제</button></li>
    );
    return (
        <div>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>
                {namelists}
            </ul>
        </div>
    );
};

export default IterationSample;