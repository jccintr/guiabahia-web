import React from 'react'

import { IoLocation } from "react-icons/io5";
import { HiChevronRight } from "react-icons/hi";
import styles from "./styles.module.css";

const CityCard = ({cidade}) => {
  return (
    <div className={styles.container}>

       <IoLocation className={styles.icon} size={24} /> 
       <p className={styles.cityNameText}>{cidade}</p>
       <HiChevronRight className={styles.icon} size={24} /> 
       
    </div>
  )
}

export default CityCard