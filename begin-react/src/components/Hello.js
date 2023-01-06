import React from "react";
function Hello({name, message, isSpecial}){
    return (
        <>
            <div className='hello'>
                { isSpecial && <b> * </b> }
                {/* { isSpecial ? <b> * </b> : null } 랑 { isSpecial && <b> * </b> }는 같음 */ }
                {name} {message}
            </div>
        </>
    )
}
//기본값 설정
Hello.defaultProps = {
    name : "모험"
}
export default Hello;