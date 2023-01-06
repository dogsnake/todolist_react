import React,{useState} from 'react';

const InputSample = () => {
    const [inputs, setInputs] = useState({
        username: '',
        usernickname: ''
    });
    const { username, usernickname } =inputs;
        const onChange = (e) => {
            const { value, name } = e.target;
            setInputs({
                ...inputs,
                [name]:value
            });
        }
    const onReset = () => {
        setInputs({
            username:'',
            usernickname:''
        });
    }
    return (
        <div>
            <input name="username" onChange={onChange} value={username}/>
            <input name="usernickname" onChange={onChange} value={usernickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <span>값: {username}, {usernickname}</span>
            </div>
        </div>
    );
};

export default InputSample;