import React from "react";
import styled from "styled-components";

const BucketList = (props) => {    
    const my_list = props.list;
    const onRemove = props.onRemove    
    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <ListStyle>
            {my_list.map((list,index) =>( //return을 안 써도 되는건가
                        <ItemStyle key={index}>                            
                            <p>단어</p>{list.title}
                            <p>설명</p>{list.contents}
                            <p>예시</p><span>{list.example}</span>
                            <button onClick={() => onRemove(list.id)}>Del</button>
                            {/*{index}*/}
                        </ItemStyle>                        
            ))}
        </ListStyle>
    );
}

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    cursor:pointer;
`;

const ItemStyle = styled.div`
    padding: 16px;
    margin: 8px;
    text-align: left; 
    font: italic 15px bold;
    background-color: aliceblue;    
    transition: transform 0.9s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    &:hover{
      transform:translate(0,-7px);
    }
    p{
        text-align: left;    
        font-size: 10px;
        text-decoration: underline;
    }
    span{
        color:blue;
    }
`;

export default BucketList