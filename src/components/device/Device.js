import {NavLink} from "react-router-dom";
import {GameBuy} from "../gameBuy/GameBuy";

const Device = ({item, devices}) => {
    const {type, brand, name} = item;
    return (
        <div>
            <NavLink to={{pathname: '/devices/' + item._id}}>
                {name} <b>{type}</b> -- {brand}
            </NavLink>
            <GameBuy key={devices._id} device={devices}/>
        </div>
    );
}

export {Device};
