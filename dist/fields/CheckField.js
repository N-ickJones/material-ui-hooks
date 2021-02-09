import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
export function CheckField(props) {
    const [value, setValue] = useState(props.value || false);
    function onChange(e, checked) {
        if (!props.locked) {
            props.onChange(e, e.target.name, checked);
            setValue(checked);
        }
    }
    return (React.createElement(FormControlLabel, { label: props.label, control: React.createElement(Checkbox, { name: props.name, checked: value, onChange: onChange, value: props.value }) }));
}