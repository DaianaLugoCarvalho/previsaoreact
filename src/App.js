import React from 'react';
import './App.css';
import { tsPropertySignature } from '@babel/types';
import sol from './img/sol.png';
import nuvens from './img/nuvens.png'

const Previsao = props => {
  return(
    <div className="previsao-container"> 
      <div className="previsao">     
        <h1 className="previsao__data" > {props.data} </h1>
        <h2 className="previsao__resumo" > {props.previsao} </h2>
        <img className="previsao__img" src={props.img}/>
        <h4 className="previsao-temperatura">{props.temperatura} </h4>
        <h4 className="previsao-temperatura " > {props.maxima} </h4>
        <h4 className="previsao-temperatura"> {props.minima} </h4>
      </div>
    </div>
  )

}

function App() {
  return (
    <div>
      <Previsao 
        data="31/05/2019"
        previsao="Ensolarado"
        img={sol} 
        maxima="Maxima 31ªC"
        minima= "Minima 20ªC"
        />


      <Previsao 
        data="01/06/2019"
        previsao="nublado"
        img={nuvens}
        maxima="Maxima 25ªC"
        minima= "Minima 18ªC"
        />
      
    </div>
  );
}

export default App;
