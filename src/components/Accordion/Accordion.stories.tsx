import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action('accordion mode change event fired');
const onClickCallback = action('clicked');


//мы рисуем аккордион с какими-то аргументами(пропсами) которые могут к нам прийти
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
const callbacksProps = {
    onChange: callback
}

//Template это функция, поэтому делаем её копию
export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true
}

export const UncollapsedMode = Template.bind({});
UncollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: false
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}
ModeChanging.args = {
    titleValue: 'Users'
}