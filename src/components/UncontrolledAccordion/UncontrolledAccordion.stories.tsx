import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontolledAccordionPropsType, UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}
const callback = action('accordion mode change event fired');
const onClickCallback = action('clicked');



export const ModeChanging: Story<UncontolledAccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <UncontrolledAccordion {...args} />
}
ModeChanging.args = {
    titleValue: 'Users'

}