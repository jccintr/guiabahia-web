import React, {useState,useEffect} from 'react';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { database } from '../../firebaseConfig';
import { collection,onSnapshot,query,where } from 'firebase/firestore';
import DistrictCard from '../../components/districtCard/DistrictCard';



const Districts = () => {
    const params = useLocation();
    const [distritos,setDistritos] = useState([]);
    const [cidade,setCidade] = useState(params.state.cidade);
    const navigate = useNavigate();
    
    useEffect(()=>{
        const collectionRef = collection(database,'Distritos');
        const q = query(collectionRef, where("cidadeId", "==", cidade.id));
          
        const unsuscribe = onSnapshot(q,querySnapshot => {
          setDistritos(querySnapshot.docs.map(doc => ( {id: doc.id, nome: doc.data().nome} )))
        })
       
        return unsuscribe;
    
    }, [cidade]);

  const onDistritoClick = (distrito) => {
      navigate('/categories',{state: {cidade,distrito}});
  }

    
  return (
    <div className={styles.container}>
    <Header title={params.state.cidade.nome} subTitle="Distritos" showBackIcon/>
    
    <p className={styles.frase}>Escolha uma localidade:</p>
    <div className={styles.body}>
     
    {distritos.map(distrito => <DistrictCard onClick={()=>onDistritoClick(distrito)} key={distrito.id} district={distrito}/>)}
     
    </div>
 </div>
  )
}

export default Districts