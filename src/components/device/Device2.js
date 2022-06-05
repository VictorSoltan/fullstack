// import {GameBuy} from "../gameBuy/GameBuy";

export default function Device2({item, devices}) {
    const {type, brand, name, rating, price} = item;

    return (
        <div>
                {name} <b>{type}</b>  {price}-- {brand} -- rating: {rating}
            {/*<GameBuy key={devices._id} device={devices}/>*/}

        </div>
    );
}
