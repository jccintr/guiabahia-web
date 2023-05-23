import React from 'react';
import { HiChevronRight } from "react-icons/hi";
import styles from "./styles.module.css";

const CategoryCard = ({category,onClick}) => {
  return (
    <div onClick={onClick} className={styles.container}>
       <p className={styles.categoryNameText}>{category.nome}</p>
       <HiChevronRight className={styles.icon} size={24} /> 
    </div>
  )
}

export default CategoryCard