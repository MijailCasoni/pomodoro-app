import React from 'react';
import Switch from 'react-switch';

function ThemeSwitcher({checked, onChange}) {
    return (
        <label>
            <span>🌞</span>
            <Switch
                onChange = {onChange}
                checked = {checked}
                offColor = "#888"
                onColor = "#000"
                uncheckedIcon = {false}
                checkedIcon = {false}  
            />
            <span>🌜</span>
        </label>
    );
}

export default ThemeSwitcher;