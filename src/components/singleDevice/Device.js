import {NavLink} from "react-router-dom";
import {GameBuy} from "../gameBuy/GameBuy";
import '../home/Search.css';
import styled from "styled-components";

const Device = ({item, devices}) => {
    const {type, brand, name, rating} = item;

    const Image = styled.img`
      height: 75%;
      z-index: 2;
    `;

    return (
        <div className="myClass">
            <NavLink to={{pathname: '/devices/' + item._id}}>
                <Image src={item.img}/>
                {name} <b>{type}</b> -- {brand}
                <br/>
                <p>rating: {rating}</p>
            </NavLink>
            <GameBuy key={devices._id} device={devices}/>
        </div>
    );
}

export {Device};
