import React from 'react'
import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";

const Header = ({title,subTitle,showBackIcon}) => {
  const navigate = useNavigate();
  
  return (

    <header>
       {showBackIcon&&<BiArrowBack onClick={()=>{navigate(-1)}} className={styles.backicon} size={24} />}
       <p className={styles.title}>{title}</p>
       <p className={styles.subTitle}>{subTitle}</p>
    </header>
       
  )
}

export default Header