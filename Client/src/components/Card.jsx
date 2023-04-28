import { Link } from 'react-router-dom'
import { addFav, removeFav } from '../redux/actions'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({ id, name, species, gender, image, onClose })
      }
   }

   useEffect(
      () => {
         myFavorites.forEach((fav)=> {
               if(fav.id === props.id) {
                  setIsFav(true)
               }
         })
      }, [myFavorites])


   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}></button>
            ) : (
               <button onClick={handleFavorite}></button>
            )
         }
         <button onClick={() => { onClose(id) }}> X </button>

         <Link to={`/detail/${id}`} >
            <h3 className="card-name">{name}</h3>
         </Link>

         <h2>{species}</h2>
         <h2>{gender}</h2>

         <img src={image} alt={name} />
      </div>
   );
}
const mapStateToProps = (state) => {
return{
   myFavorites: state.myFavorites
}
}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)