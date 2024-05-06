
const Selector = ({ level, setLevel }) => {

    return (
        <div>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>            
                <option value="MLB">MLB</option>
                <option value="AAA">AAA</option>
                <option value="AA">AA</option>
            </select>
        </div>
    )
}

export default Selector