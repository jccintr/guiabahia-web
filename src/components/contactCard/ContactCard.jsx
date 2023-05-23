import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.css";

const ContactCard = ({contato,onClick}) => {
  return (
    <div onClick={onClick} className={styles.container}>
       <p className={styles.contactNameText}>{contato.nome}</p>
       <FaWhatsapp className={styles.icon} size={24} /> 
    </div>
  )
}

export default ContactCard