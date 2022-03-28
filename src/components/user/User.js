export default function User({item, filteredUsers}) {
    return (
        <div>
            {filteredUsers.map(item => (
                <p>item.nick_name</p>
            ))}
        </div>
    );
}
