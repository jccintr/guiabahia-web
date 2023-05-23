import React from 'react'
import { HiChevronRight } from "react-icons/hi";
import styles from "./styles.module.css";

const MenuSobre = ({icone,label,onClick}) => {
    return (
        <div className={styles.menuArea} onClick={onClick}>
          {icone}
           <p className={styles.labelText}>{label}</p>
          <HiChevronRight className={styles.icon} size={24} /> 
        </div>
      )
}

export default MenuSobre