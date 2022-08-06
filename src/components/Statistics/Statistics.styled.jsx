import styled from "styled-components";
const setBg = () => Math.floor(Math.random()*16777215).toString(16);

export const Stats = styled.ul`
    align-items:center;
    margin:0;
    padding:0;
    display:flex;
    list-style-type: none;
`

export const StatsItem = styled.li`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:16px;
    background-color:#${setBg};
    width:100%;

    &:first-child{
        border-radius: 0px 0px 0px 15px;
    }

    &:last-child{
        border-radius: 0px 0px 15px 0px;
    }
    
`

export const Container = styled.div`
    margin:16px;
    max-width:350px;
    border:1px solid #000;
    border-radius:15px;
`
export const StatsLabel = styled.span`
    font-weight: bold;
    font-size:20px;
    margin-bottom:8px;
`

export const StatisticsTitle = styled.h2`
    color: rgb(27, 27, 27);
    text-align:center;
    font-size:35px;
    margin:18px auto;

`
