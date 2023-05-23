import React from 'react';
import styles from "./styles.module.css";
import { FaSearch } from "react-icons/fa";

const SearchField = ({placeholder, value, onChangeText}) => {
  return (
    <div className={styles.inputArea}>
      <FaSearch className={styles.icon} size={22} /> 
      
     <input 
         type="text"
         className={styles.input}
         placeholder={placeholder}
         value={value}
         onChange={(e)=>onChangeText(e.target.value)}
         
       />
    </div>
  )
}

export default SearchField