import styled from 'styled-components'

export const StyledHeader = styled.div`
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 90px;

    .circle{
        background-color: black;
        border: 2px solid dodgerblue;
        border-radius: 50px;
        height: 60px;
        width: 60px;
        margin-right: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .title{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 20%;
    }
    
    .routes{
        width: 45%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-right: 20px;
    }
    
    a{
        text-decoration: none;
        color: white;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 50px;
        height: 50px;
    }

    ul{
        list-style-type: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding-right: 10px;

        li{
            border: 1px solid dodgerblue;
            border-radius: 10px;
            width: 150px;
            height: 40px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background-color: black;

            a{
                color: white;
                padding: 3px 8px;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
            }
            
        }
    }


`