import React from "react";
import style from "./country.module.css";

const Country = (props) => {
  const { name, flags, capital, population, area, currencies, languages } = props.country;
  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };

  //get currency
  var currency;
  for(var curr in currencies)
  {
    currency = currencies[curr].name +" ("+ currencies[curr].symbol +")"
  }
  //get language
  var language;
  for(var lang in languages)
  {
    language = languages[lang]
  }
  return (
    <article className={style.country}>
      <div>
        <img className={style.flags} src={flags.png} alt={name.common} />
        <h3>Name: {name.common}</h3>
        <h3>Population: {population.toLocaleString()}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Currency: {currency}</h3>
        <h3>Area: {area.toLocaleString()} K.M</h3>
        <h3>Language: {language}</h3>
        <button
          className={style.btn}
          onClick={() => handleRemoveCountry(name.common)}
        >
          Remove Country
        </button>
      </div>
    </article>
  );
};

export default Country;
