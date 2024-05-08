import Checkbox from "./Checkbox"
import deselectAllCheckbox from "../../public//js/helpers";

const Selector = ({ setLevel }) => {

    // const [checked, setChecked] = useState(false);

    const onClick = (e) => {
        deselectAllCheckbox();
        setLevel(e.target.value);
    }

    return (
        <div id='selector-content' className='section-content'>
            <h4>Toggle Leagues</h4>
            <div>
                <Checkbox label="MLB" value="MLB" onClick={(e) => {onClick(e)}}/>
                <Checkbox label="AAA" value="AAA" onClick={(e) => {onClick(e)}}/>
                <Checkbox label="AA" value="AA" onClick={(e) => {onClick(e)}}/>
                {/* <Checkbox label="High A" value="HA" onClick={(e) => {onClick()}}/>
                <Checkbox label="A" value="A" onClick={(e) => {onCkick()}}/> */}
            </div>
        </div>
    )
}

export default Selector