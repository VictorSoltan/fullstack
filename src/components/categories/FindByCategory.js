const FindByCategory = ({onClickCategory}) => {
    const categories = ['electronics', 'laptops', 'phones'];

    return (
            <ul className="ulWithBrandsAndTypes">
                {
                    categories.map((categoryName, index) => (
                            <li key={index}
                                onClick={() => onClickCategory(categoryName)}>
                                {categoryName}
                            </li>
                        )
                    )}
            </ul>
    )
}

export {FindByCategory};
