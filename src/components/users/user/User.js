const User = ({item}) => {
    return (
        <div>
            {item.nick_name} - {item.email} - {item.password}
        </div>
    );
}

export {User};
