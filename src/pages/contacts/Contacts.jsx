import React, {useState,useEffect} from 'react';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import SearchField from '../../components/searchField/SearchField';
import ContactCard from '../../components/contactCard/ContactCard';
import { collection,onSnapshot,query,where,getDocs } from 'firebase/firestore';
import { database } from '../../firebaseConfig';
import { useLocation } from 'react-router-dom';


const Contacts = () => {
  
  const params = useLocation();
  const {cidade,distrito,categoria} = params.state;
  const [mensagem,setMensagem] = useState('');
  const [searchText,setSearchText] = useState('');
  const [contatos,setContatos] = useState([]);


  useEffect(()=>{
    const collectionRef = collection(database,'Contatos');
    const q = query(collectionRef, where("cidadeId", "==", cidade.id),where("distritoId", "==", distrito.id),where("categoriaId", "==", categoria.id));

    const unsuscribe = onSnapshot(q,querySnapshot => {
      setContatos(querySnapshot.docs.map(doc => ( {id: doc.id, nome: doc.data().nome, telefone: doc.data().telefone} )))
    })
    return unsuscribe;
   // eslint-disable-next-line 
}, []);

useEffect(()=>{
  const getMensagem = async () => {

    const collectionRef = collection(database,'Parametros');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setMensagem(doc.data().mensagem);
    });

  }
  getMensagem();

}, []);

const onContatoClick = (contato) => {
 
  
  window.location.replace(`whatsapp://send?phone=55${contato.telefone}&text=${mensagem}`);
  
  
}


  
  return (
    <div className={styles.container}>
       <Header title={distrito.nome} subTitle={categoria.nome} showBackIcon/>
       <SearchField 
         placeholder='Pesquisar'
         value={searchText}
         onChangeText={setSearchText}
       />
       
       <div className={styles.body}>
           {contatos.filter((contato)=>contato.nome.toUpperCase().includes(searchText.toUpperCase())).sort((a,b)=>{return a.nome > b.nome}).map(contato => <ContactCard key={contato.id} contato={contato} onClick={()=>onContatoClick(contato)}/>)}
       </div>
    </div>
  )
}

export default Contacts