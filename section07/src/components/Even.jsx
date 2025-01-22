import { useState, useEffect, useRef } from "react";
const Even = () => {
    useEffect(() => {
        //클린업, 정리함수
        //이것은 useEffect가 끝날때 실행됨 
        return () => {console.log("unmount")};
    }, [])
    return <div>짝수입니다.</div>
};

export default Even;