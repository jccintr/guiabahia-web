import React, { useState,useEffect } from 'react'
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import icone from "../../assets/icon.png";
import MenuSobre from '../../components/menuSobre/MenuSobre';
import { GiInfo,GiHelp } from "react-icons/gi";
import { BiUserPlus } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";
//import {FaInstagram } from "react-icons/fa";
import { database } from '../../firebaseConfig';
import { collection,query,getDocs } from 'firebase/firestore';


const Sobre = () => {
    const [telefone,setTelefone] = useState('');


    useEffect(()=>{
        const getTelefone = async () => {
          const collectionRef = collection(database,'Parametros');
          const q = query(collectionRef);
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            setTelefone(doc.data().telefone);
          });
        }
        getTelefone();
      
      }, []);

    const onAjudaClick = () =>{
        const mensagem = "Estou precisando de ajuda com o App Guia Bahia Extremo Sul.";
        window.location.replace(`whatsapp://send?phone=55${telefone}&text=${mensagem}`);
      }
      
      
      const onSugestoesClick = () =>{
        const mensagem = "Tenho sugestões ou reclamações a fazer sobre o App Guia Bahia Extremo Sul.";
        window.location.replace(`whatsapp://send?phone=55${telefone}&text=${mensagem}`);
      }
      
      
      const onNovosCadastrosClick = () =>{
        const mensagem = "Tenho interesse em fazer parte do App Guia Bahia Extremo Sul.";
        window.location.replace(`whatsapp://send?phone=55${telefone}&text=${mensagem}`);
      }
      /*
      const onInstagramClick = () => {
        window.location.replace('https://instagram.com/guiabahiaextremosul?igshid=YmMyMTA2M2Y=');
      }
*/





    return (
        <div className={styles.container}>
           <Header title="Guia Bahia" subTitle="Extremo Sul" showBackIcon={true}/>
           
           <img className={styles.icone} src={icone} alt="Icone" />
          
           
           <div className={styles.body}>
            
            <MenuSobre icone={<GiHelp color='#ffffff'  size={24} />} label="Central de Ajuda" onClick={onAjudaClick}/>
            <MenuSobre icone={<BsMegaphone  color='#ffffff' size={24} />} label="Sugestões ou reclamações" onClick={onSugestoesClick}/>
            <MenuSobre icone={<BiUserPlus color='#ffffff' size={24} />} label="Novos Cadastros" onClick={onNovosCadastrosClick}/>
            <MenuSobre icone={<GiInfo color='#ffffff' size={24} />} label="Sobre o Guia Bahia" onClick={()=>{}}/>
            {/*<MenuSobre icone={<FaInstagram color='#ffffff' size={24} />} label="Visite nosso Instagram" onClick={onInstagramClick}/>*/}
           
            
           </div>
        </div>
      )
}

export default Sobre