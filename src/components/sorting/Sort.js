import {useState} from "react";

const Sort = ({onChangeSort, activeSortType}) => {
    const [open, setOpen] = useState(false);
    const list = [
        {name: 'Рейтингу', sortProperty: 'rating'},
        // {name: 'популярности по возрастанию', sortProperty: '+rating'},
        {name: 'Від дорогих до дешевих', sortProperty: 'price'},
        {name: 'Від дешевих до дорогих', sortProperty: '+price'},
        {name: 'Алфавіту (від Я до А)', sortProperty: 'name'},
        {name: 'Алфавіту (від А до Я)', sortProperty: '+name'}
    ];
    const activeLabel = list.find((obj) => obj.sortProperty === activeSortType).name;

    const onClickListItem = (i) => {
        onChangeSort(i);
        setOpen(false)
    };

    return (
        <div className="sortProperty">

                <div onClick={() => setOpen(!open)}>
                    <b>Sort by:  </b>
                    <span>{activeLabel}</span>
                </div>

            {open && (
                <div className="dropdown-content">
                    <ul>
                        {list.map((obj, i) => (
                            <li key={i}
                                onClick={() => onClickListItem(obj)}>
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export {Sort};
