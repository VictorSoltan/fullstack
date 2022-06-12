import {NavLink} from "react-router-dom";
import {GameBuy} from "../gameBuy/GameBuy";
import '../home/Search.css';

const Device = ({item, devices}) => {
    const {type, brand, name, rating} = item;
    return (
        <div className="myClass">
            <NavLink to={{pathname: '/devices/' + item._id}}>
                {name} <b>{type}</b> -- {brand}
                <br/>
                <p>rating: {rating}</p>
            </NavLink>
            <GameBuy key={devices._id} device={devices}/>
        </div>
    );
}

export {Device};
