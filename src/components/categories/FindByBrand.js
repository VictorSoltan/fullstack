const FindByBrand = ({onClickCategory}) => {
    const categories = ['Samsung', 'Lenovo', 'Apple', 'LG'];

    return (
        <div>
            <ul>
                {categories.map((categoryName, index) => (
                    <li key={index}
                    onClick={() => onClickCategory(categoryName)}>
                        {categoryName}
                    </li>
                    )
                )}
            </ul>
        </div>
    )
}

export {FindByBrand};
