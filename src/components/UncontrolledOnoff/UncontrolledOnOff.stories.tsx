import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOff} from "../OnOff/OnOff";
import {UncontrolledOnOff, UncontrolledOnOffPropsType} from "./UncontrolledOnOff";
import {Story} from "@storybook/react";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callback = action('clicked');


const Template: Story<UncontrolledOnOffPropsType> = (args) => <UncontrolledOnOff {...args} />

const callbacksProps = {
    onChange: callback
}

export const OnMode = Template.bind({});
OnMode.args = {
    ...callbacksProps,
    defaultOn: true
}

export const OffMode = Template.bind({});
OffMode.args = {
    ...callbacksProps,
    defaultOn: false
}

export const ModeChanging: Story<UncontrolledOnOffPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff {...args} on={value} onChange={() => setValue(!value)} />
}

