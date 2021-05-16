import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {OnOff, OnOffType} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff
}

const callback = action('clicked');

const Template: Story<OnOffType> = (args) => <OnOff {...args} />
const callbacksProps = {
    onChange: callback
}

export const OnMode = Template.bind({});
OnMode.args = {
    ...callbacksProps,
    on: true
}

export const OffMode = Template.bind({});
OffMode.args = {
    ...callbacksProps,
    on: false
}

export const ModeChanging: Story<OnOffType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff {...args} on={value} onChange={() => setValue(!value)} />
}




