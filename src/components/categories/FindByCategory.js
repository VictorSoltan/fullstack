const FindByCategory = ({onClickCategory}) => {
    const categories = ['electronics', 'laptops', 'kitchen'];

    return (
        <div>
            <ul>
                {
                    categories.map((categoryName, index) => (
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

export {FindByCategory};
