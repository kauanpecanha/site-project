import React from "react";
import "./Home.css"

import Card1 from "../../layout/Card1/Card1";
import Card2 from "../../layout/Card2/Card2";

const Home = props => {

    return(

        <div className = "home">
            <div className="add">
                <img src={require("../../assets/ad1.jpeg")}></img>
            </div>

            <div className="news">
                <Card1 title="Novo Governo" descriptionRed="Lula tomará medidas já nas primeiras horas para evitar instabilidade, afirma Dino" descriptionGray="Futuro ministro da justiça falou sobre atos golpistas em Brasiília e presão de bolsonarista que tentou explodir caminhão."/>                
                <div className="right-news">
                    <Card1 title="Nevasca Histórica"descriptionRed="Sobre para 50 o número de mortos em onda de frio nos EUA."/>
                    <Card1 title="Nevasca Histórica" descriptionRed="Sobre para 50 o número de mortos em onda de frio nos EUA."/>
                </div>
            </div>


        </div>

    )
}

export default Home;