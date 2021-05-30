import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Selectt, SelectPropsType} from "./Select2";

export default {
    title: 'Selectt',
    component: Selectt
}

export const WithValue = () =>
    <>
        <Selectt onChange={action('value changed')} value={3} items={[
            {title: "New York", value: 1},
            {title: "Chicago", value: 2},
            {title: "Los Angeles", value: 3},
            {title: "Palo Alto", value: 4}
        ]}/>
    </>

export const WithoutValue = () =>
    <>
        <Selectt onChange={action('value changed')} value={3} items={[
            {title: "New York", value: 1},
            {title: "Chicago", value: 2},
            {title: "Los Angeles", value: 3},
            {title: "Palo Alto", value: 4}
        ]}/>
    </>


