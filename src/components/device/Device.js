import {NavLink} from "react-router-dom";
import {GameBuy} from "../gameBuy/GameBuy";

export default function Device({item, devices}) {
    const {type, brand, name} = item;
    return (
        <div>
            <NavLink to={{pathname: '/devices/' + item._id}}>
                {name} <b>{type}</b> -- {brand}
            </NavLink>
            <GameBuy device={devices}/>
        </div>
    );
}
