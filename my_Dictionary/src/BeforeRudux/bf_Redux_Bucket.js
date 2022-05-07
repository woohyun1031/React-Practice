import React from "react";
import styled from "styled-components";
import { MdDelete } from 'react-icons/md';

const BucketList = (props) => {    
    const my_list = props.list;
    const onRemove = props.onRemove    
    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <ListStyle>
            {my_list.map((list,index) =>( //return을 안 써도 되는건가
                        <ItemStyle key={index}>   
                            <div id = "wrap">
                                <div id="left_side">                     
                                    <div id="head">
                                        <span id="title">{list.title}</span> 
                                        <span id="contents">{list.contents}</span>
                                    </div>
                                    <div id="foot">
                                        <p>{list.example}</p>
                                    </div>
                                </div>
                                <div id="right_side">                        
                                    <MdDelete onClick={() => onRemove(list.id)}>Del</MdDelete>
                                </div>
                            </div>
                            <div>                           
                                <hr/>
                            </div>
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
    transition: transform 0.9s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    hr{
        height:0.7px;
        background-color: #20c997;
    } 
    &:hover{
        transform:translate(0,-7px);
        ${"#right_side"} {
            visibility: visible;
          }
    }
    #wrap{
        display: flex;
        flex-direction: rows;
        justify-content: space-between;
    }
    #right_side{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left:20px;
        color: #dee2e6;
        font-size: 24px;
        cursor: pointer;
        &:hover {
          color: #ff6b6b;
        }
        visibility: hidden;
    }
    #head{
        display: flex;
        flex-direction: rows;
        justify-content: space-between;
    }
    #title{
        display:block;
        min-width:60px;
        font-size: 25px;
        font-weight:800;
        margin-right:20px;
    }
    #contents{
        display:block;
        margin-top:4px;
        text-align: left;
    }
    p{
        text-align: left;    
        font-size: 10px;
        text-decoration: underline;
        color:blue;
    }
`;

export default BucketList