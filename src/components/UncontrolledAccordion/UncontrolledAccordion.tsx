import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

export type UncontolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontolledAccordionPropsType) {

        //let [collapsed, setCollapsed] = useState(false)
        let [state, dispatch] = useReducer(reducer, {collapsed: false})
        return <div>
            <AccordionTitle titleValue={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    }

    type AccordionTitlePropsType = {
        titleValue: string
        onClick: () => void
    }


    function AccordionTitle(props: AccordionTitlePropsType) {
        return <h3 onClick={props.onClick}>{props.titleValue}</h3>
    }

    function AccordionBody() {
        return <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>

            </ul>
        </div>
    }