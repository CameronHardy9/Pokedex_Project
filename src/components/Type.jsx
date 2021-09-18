function Type(props) {
    let allTypes = [];
    let temp = props.pokemon.flatMap((item) => {
        let { type } = item;
        return type;
    });
    temp.forEach((i) => {
        if (!allTypes.includes(i)) {
            allTypes.push(i);
        }
    });
    console.log("allTypes: ", allTypes);
    let final = allTypes.map((t, idx) => {
        return (
            <li key={idx}>
                <input
                    data-key="type"
                    className="option"
                    type="checkbox"
                    name={t}
                />
                {t}
            </li>
        );
    });
    return <ul>{final}</ul>;
}

export default Type;
