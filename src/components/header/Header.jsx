import React from 'react'
import styles from "./styles.module.css";

const Header = ({title,subTitle}) => {
  return (
    <header>
       <p className={styles.title}>{title}</p>
       <p className={styles.subTitle}>{subTitle}</p>
    </header>
       
  )
}

export default Header