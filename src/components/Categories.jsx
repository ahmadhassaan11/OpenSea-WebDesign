import styled from "styled-components"
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import React, {Component} from 'react';

const Container= styled.div`
display: flex;
padding:70px;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
    return (
        <Container>
            {categories.map((item)=>(
                <CategoryItem item= {item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
