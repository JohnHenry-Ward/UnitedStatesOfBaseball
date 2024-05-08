import Checkbox from "./Checkbox"
import deselectAllCheckbox from "../../public//js/helpers";
import { useEffect } from "react";

const Selector = ({ setLevel }) => {

    const onClick = (e) => {
        deselectAllCheckbox();
        e.target.checked = true;
        setLevel(e.target.value);
    }

    // on initial load
    useEffect(() => {
        document.querySelector("#MLB-checkbox").checked = true
    }, [])

    return (
        <div id="selector-content" className="section-content">
            <h4 id="checkboxes-title">Toggle Leagues</h4>
            <div id="checkboxes">
                <Checkbox label="MLB" value="MLB" onClick={(e) => {onClick(e)}}/>
                <Checkbox label="AAA" value="AAA" onClick={(e) => {onClick(e)}}/>
                <Checkbox label="AA" value="AA" onClick={(e) => {onClick(e)}}/>
                <Checkbox label="A+" value="HA" onClick={(e) => {onClick()}}/>
                <Checkbox label="A" value="A" onClick={(e) => {onCkick()}}/>
            </div>
        </div>
    )
}

export default Selector