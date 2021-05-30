import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";


const GetCategoryObj = (categoryName: string) => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            table: {
                ...GetCategoryObj('Color')
            }
        },
        onChange: {
            ...GetCategoryObj('Event')
        },
        onClick: {
            ...GetCategoryObj('Event')
        },
        items: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        titleValue: {...GetCategoryObj('Main')}
    }
}
const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');


//мы рисуем аккордион с какими-то аргументами(пропсами) которые могут к нам прийти
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}

//Template это функция, поэтому делаем её копию
export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: true,
    items: []
}

export const UncollapsedMode = Template.bind({});
UncollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false,
    items: [{title: "Micky", value: 1}, {title: "Bob", value: 2}, {title: "Rob", value: 3}]
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    let [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}
ModeChanging.args = {
    onClick: onClickCallback,
    titleValue: 'Users',
    items: [
        {title: "Micky", value: 1},
        {title: "Helena", value: 2},
        {title: "Rob", value: 3}]
}
