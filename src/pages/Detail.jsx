import React from "react";
import {useParams} from "react-router-dom"

function Detail () {
    const id = useParams();
    console.log(id)        
    return(
        <div>
            <div>id</div>
            <button>이전으로</button>
            <h1>리액트</h1>
            <main>리액트를배워봅시다</main>
        </div>

    )
}
// test 입니다
export default Detail