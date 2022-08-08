export const LIGHT = 'LIGHT';
export const DARK = 'DARK';
export const TOGGLE = 'TOGGLE';

export const handleLight = (data) => ({
    type: LIGHT,
    payload:data
});
export const handleDark = (data) => ({
    type: DARK,
    payload:data

});

export const handleToggle = () => ({
    type: TOGGLE,
});
