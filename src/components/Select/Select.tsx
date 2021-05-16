import React, {useEffect, useState, KeyboardEvent} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active);
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    if (props.items[i + 1]) {
                        props.onChange(props.items[i + 1].value)
                    }
                    break
                }
            }
        }
    }


    return (
        <>

            {/*           <select>
                    <option value="Moscow" >Moscow</option>
                    <option value="St. Petersburg" >St. Petersburg</option>
                    <option value="Ekaterinburg" >Ekaterinburg</option>
                </select>*/}


            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
               <span className={styles.main} onClick={toggleItems}>
                   {selectedItem && selectedItem.title}
               </span>
                {
                    active &&

                    <div className={styles.items}>
                        {props.items.map(i =>
                            <div
                                key={i.value}
                                className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                                onClick={() => onItemClick(i.value)}
                                onMouseEnter={() => setHoveredElementValue(i.value)}
                            >{i.title}</div>
                        )}
                    </div>
                }
            </div>
        </>
    )
}


export default Select;