export default function Item({ data }) {
    console.log(data[0].name);
    return (
        <>
            <div>
                {data.map((item,i) => (
                    <div>{item.name}    {i}</div>
                ))}
            </div>

        </>
    )
}