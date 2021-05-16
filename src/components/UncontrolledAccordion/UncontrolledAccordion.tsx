import React, {useState} from "react";

export type UncontolledAccordionPropsType = {
    titleValue: string
}


export function UncontrolledAccordion(props: UncontolledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)
    return <div>
        <AccordionTitle titleValue={props.titleValue} onClick = { () =>  setCollapsed(!collapsed) }/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    titleValue: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
   return  <h3 onClick={props.onClick}>{props.titleValue}</h3>
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