const FindByBrand = ({onClickCategory}) => {
    const categories = ['Samsung', 'Lenovo', 'Apple', 'LG', 'Xiaomi'];

    return (
            <ul className="ulWithBrandsAndTypes">
                {categories.map((categoryName, index) => (
                    <li className="findBy" key={index}
                    onClick={() => onClickCategory(categoryName)}>
                        {categoryName}
                    </li>
                    )
                )}
            </ul>
    )
}

export {FindByBrand};
