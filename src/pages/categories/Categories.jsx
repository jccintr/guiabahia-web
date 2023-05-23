import React, {useState,useEffect} from 'react';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import SearchField from '../../components/searchField/SearchField';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import { collection,onSnapshot, orderBy, query} from 'firebase/firestore';
import { database } from '../../firebaseConfig';
import { useNavigate,useLocation } from 'react-router-dom';

const Categories = () => {
  const params = useLocation();
  const [searchText,setSearchText] = useState('');
  const [categorias,setCategorias] = useState([]);
  const navigate = useNavigate();
  const cidade = params.state.cidade;
  const distrito = params.state.distrito;

  useEffect(()=>{
    const collectionRef = collection(database,'Categorias');
    const q = query(collectionRef,orderBy('ordem','asc'));
    const unsuscribe = onSnapshot(q,querySnapshot => {
       setCategorias(querySnapshot.docs.map(doc => ( {id: doc.id, nome: doc.data().nome, ordem: doc.data().ordem} )))
    })
 
    return unsuscribe;

}, []);    

const onCategoryClick = (categoria) => {
  navigate('/contacts',{state: {cidade,distrito,categoria}});
}


  return (
    <div className={styles.container}>
       <Header title={cidade.nome} subTitle={distrito.nome} showBackIcon/>
       <SearchField 
         placeholder='Digite a categoria'
         value={searchText}
         onChangeText={setSearchText}
       />
       
       <div className={styles.body}>
           {categorias.filter((categoria)=>categoria.nome.toUpperCase().includes(searchText.toUpperCase())).sort((a,b)=> (a.ordem - b.ordem || a.nome.localeCompare(b.nome))).map(categoria => <CategoryCard key={categoria.id} category={categoria} onClick={()=>onCategoryClick(categoria)}/>)}
       </div>
    </div>
  )
}

export default Categories