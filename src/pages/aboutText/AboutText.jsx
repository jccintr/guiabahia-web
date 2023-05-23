import React from 'react'
import Header from '../../components/header/Header';
import styles from "./styles.module.css";


const AboutText = () => {
    return (
        <div className={styles.container}>
           <Header title="Sobre" subTitle="Guia Bahia Extremo Sul" showBackIcon={true}/>
           
           
          
           
           <div className={styles.body}>
            
                    <p className={styles.aboutText}>O APP GUIA BAHIA EXTREMO SUL é uma ferramenta que busca conectar os usuários aos serviços que necessitam.</p>
                    <p className={styles.aboutText}>Esta ferramenta de interação social foi desenvolvida com base nas necessidades de informação e contatos relevantes sobre as mais diversas localidades do Extremo Sul da Bahia.</p>
                    <p className={styles.aboutText}>A idéia do APP GUIA BAHIA EXTREMO SUL é se popularizar no meio social, mantendo se como um guia, de forma contínua e constante, com sua base de dados atualizada conforme as demandas forem surgindo.</p>
                    <p className={styles.aboutText}>A ferramenta conecta os usuários as informações que buscam diretamente no aplicativo de comunicação conhecido como WhatsApp.</p>
                    <p className={styles.aboutText}>Contamos com serviços intermitentes na busca de informações que porventura não estejam presentes em nossa plataforma, bem como colaboradores que se fazem presentes para melhor atender aos usuários do Guia Bahia Extremo Sul.</p>
                    <p className={styles.aboutText}>Esperamos contribuir com a melhor interação social e ajuda mútua entre os envolvidos.</p>
                    <p className={styles.aboutText}>Agradecemos a preferência.</p>
                    <p className={styles.aboutText}>Desejamos que tenha uma excelente experiência!</p>
                    <p className={styles.aboutText}>Atenciosamente, toda a Equipe Envolvida.</p>
                    <p className={styles.aboutText}>ASFX PROJECTS CEO</p>
           
            
           </div>
        </div>
      )
}

export default AboutText