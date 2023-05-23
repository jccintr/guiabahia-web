import React, {useState,useEffect} from 'react';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import SearchField from '../../components/searchField/SearchField';
import CityCard from '../../components/cityCard/CityCard';
import { database } from '../../firebaseConfig';
import { collection,onSnapshot, orderBy, query,getDocs} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [searchText,setSearchText] = useState('');
  const [aviso,setAviso] = useState('');
  const [cidades,setCidades] = useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
    const getAviso = async () => {
      const collectionRef = collection(database,'Parametros');
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setAviso(doc.data().aviso);
      });
    }
    getAviso();

  }, []);

  useEffect(()=>{
    const collectionRef = collection(database,'Cidades');
    const q = query(collectionRef, orderBy('nome','asc'));
    const unsuscribe = onSnapshot(q,querySnapshot => {
       setCidades(querySnapshot.docs.map(doc => ( {id: doc.id, nome: doc.data().nome} )))
    })
    return unsuscribe;

}, []);

const onCityClick = (cidade) => {
    navigate('/districts',{state: {cidade}});
  
}

  return (
    <div className={styles.container}>
       <Header title="Guia Bahia" subTitle="Extremo Sul" showBackIcon={false}/>
       <p className={styles.sloganText}>A sua busca completa em um único lugar !</p>
       <p className={styles.avisoText}>{aviso}</p>
       <SearchField 
         placeholder='Digite a cidade'
         value={searchText}
         onChangeText={setSearchText}
       />
       
       <div className={styles.body}>
        
       {cidades.filter((cidade)=>cidade.nome.toUpperCase().includes(searchText.toUpperCase())).map(cidade => <CityCard onClick={()=>onCityClick(cidade)} key={cidade.id} cidade={cidade.nome}/>)}
        
       </div>
    </div>
  )
}

export default Home