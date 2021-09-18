function Weakness(props) {
    let allWeaknesses = [];
        let temp = props.flatMap((item) => {
            let { weaknesses } = item;
            return weaknesses;
        });
        temp.forEach((i) => {
            if (!allWeaknesses.includes(i)) {
                allWeaknesses.push(i);
            }
        });
        let final = allWeaknesses.sort().map((t, idx) => {
            return (
                <li key={idx}>
                    <input
                        data-key="weakness"
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

export default Weakness;