export default function Device({item}) {
    return (
        <div>
            <b>{item.type}</b> - {item.brand} - {item.name} {item.price}
        </div>
    );
}
