import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Form, Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';


// const URL_BASE = 'http://be-a-rym.up.railway.app/api/character';
// const API_KEY = '017628fe09d0.fd38e3f830060d483d37';


const email ='valen@gmail.com';
const password = '123asd';

function App() {

   const location = useLocation();
   const navigate = useNavigate()

   const [characters, setCharacters]= useState([])

   const [access, setAccess] = useState(false)

   const login = ({userData}) => {

         if(userData.email === email && userData.password === password){
            setAccess(true);
            navigate('/home');
         }

   }

      useEffect(() => {
         !access && navigate('/')
      }, [access])



   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      // funciona parecido a lo de ajax que recibe una respuesta. Aca podria ser .then (response => response.data) y despues lo que sigue.
      //axios es un objeto gigante y solo queremos data
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
               alert('¡No hay personajes con este ID!');
         }
      });
   }
   
const onClose = (id) => {
   const charactersFiltered = characters.filter(character => character.id !==id)
   setCharacters(charactersFiltered)
}
   return (
      <div className='App'>
         {
            location.pathname !=='/' ?<Nav onSearch ={ onSearch}/> : null // o doble amperson && y sacas el null
         }

         
         <Routes>
         <Route path = '/' element= { <Cards characters={characters} onClose={onClose}/>}/>
         <Route path = '/about' element = {<About />} />
         <Route path = '/detail/:id' element ={ <Detail />}/>
         <Route path='/' element={<Form login = {login}/>} />
         <Route path= '/favorites' element={<Favorites/>} />
         
         </Routes>
      </div>
   );
}

export default App;
