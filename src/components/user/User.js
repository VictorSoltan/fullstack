export default function User({item}) {
    return (
        <div>
            {item.nick_name} - {item.email} - {item.password}
        </div>
    );
}
