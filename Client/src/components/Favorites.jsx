import Card from "./Card";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {

        const dispatch = useDispatch();

        const [aux, setAux] = useState(false)

        const handleOrder = (event) => {
            dispatch(orderCards(event.target.value))
            setAux(true)
        }

        const handleFilter = (event) => {
            dispatch(filterCards(event.target.value))
        }

    return (
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendete</option>
                <option value="D">Descendete</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Famale">Famale</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>

            {myFavorites?.map((fav) => {
                <Card
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    species={fav.species}
                    gender={fav.gender}
                    image={fav.image}
                    onClose={fav.onClose}
                />;
            })}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps, null)(Favorites);
