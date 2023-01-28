import React from "react";
import style from "./country.module.css";

const Country = (props) => {
    const {name,flags,capital,population,area} = props.country;
  return <article className={style.country}>
    <div>
        <img className={style.flags} src={flags.png} alt={name.common}/>
        <h3>Name: {name.common}</h3>
        <h3>Population: {population.toLocaleString()}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area.toLocaleString()} K.M</h3>
    </div>
  </article>;
};

export default Country;
