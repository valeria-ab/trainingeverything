import React from "react";

type AccordionItemsPropsType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (value:boolean) => void
    onClick: (value:any) => void
    /**
     * optional color of header text
     */
    color?: string
    /**
     * Elements that are showed when is opened. Each item should be ItemType
     */
    //чтобы посмотреть такой коммент нужно нажать ctrl+Q
    items: AccordionItemsPropsType[]
}


export function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle titleValue={props.titleValue}
                        color={props.color}
                        onChange={() => props.onChange(!props.collapsed)}
        />
        {!props.collapsed && <AccordionBody  items={props.items} onClick={props.onClick}/>}
    </div>
}


type AccordionTitlePropsType = {
    titleValue: string;
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 style={{color: props.color ? props.color : "black"}}
            onClick={(e) => props.onChange()}>{props.titleValue}</h3>
    )
}
type AccordionBodyPropsType = {
    items: AccordionItemsPropsType[]
    onClick: (value: any) => void
}



function AccordionBody(props:AccordionBodyPropsType) {

    return <div>
            <ul>
                { props.items.map( (i, index) =>
                    <li key={index}
                        onClick={() => props.onClick(i.value)}
                >{i.title}</li> ) }
            </ul>
    </div>
}
