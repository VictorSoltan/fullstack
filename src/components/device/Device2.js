
// import {GameBuy} from "../gameBuy/GameBuy";

export default function Device2({item}) {
    const {type, brand, name} = item;
    return (
        <div>
                {name} <b>{type}</b> -- {brand}
            {/*<GameBuy device={devices}/>*/}
        </div>
    );
}
