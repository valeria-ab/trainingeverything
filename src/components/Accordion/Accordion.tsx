import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}



export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle titleValue={props.titleValue} onChange={props.onChange}/>
        { !props.collapsed && <AccordionBody /> }
    </div>
}


type AccordionTitlePropsType = {
    titleValue: string;
    onChange: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.onChange}>{props.titleValue}</h3>
    )
}


function AccordionBody() {
    console.log('AccordionBody rendering');
    return <div>
        <ul>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>

            </ul>
        </ul>
    </div>
}
