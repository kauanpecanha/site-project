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
        animation: App-logo-spin 4s cubic-bezier(0, .25, .7125, .1) infinite;

        @keyframes App-logo-spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }

    .title{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 20%;

        :hover{
            background-color: #1979d5;
            border-radius: 10px;
            transition: .4s ease-in;
        }
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
        transition: .4s ease-in;

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

            :hover{
                box-shadow: inset -10.5em 0 0 0 #1979d5, inset 10.5em 0 0 0 #1979d5;
                transition: .4s ease-in;
            }
            
        }
    }


`