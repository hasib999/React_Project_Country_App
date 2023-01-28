/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import style from "./search.module.css";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const [showTotal,setShowTotal] = useState(false);
  const handleChange=(e)=>{
    setSearchText(e.target.value);
    setShowTotal(e.target.value !== "")
  }
  useEffect(()=>{
    props.onSearch(searchText)
  },[searchText])
  return (
    <>
        <div style={{textAlign:"center"}}>
            <input type="text" placeholder="Search Country" value={searchText} onChange={handleChange}/>
        </div>
        {showTotal && <span className={style.span}>Total: {props.count}</span>}
    </>
  );
};

export default Search;
