export const customStyles = {
    control: (provided, state) => ({
        ...provided,
        background: 'transparent',
        color: 'transparent',
        border: 0,
        boxShadow: 'none',
        display: 'flex',
        flexWrap: 'nowrap',
        borderColor: 'transparent',
        outline: 'transparent',
    }),
    valueContainer: val => ({
        ...val,
        color: 'red',
    }),
    placeholder: provider => ({
        ...provider,
        color: 'rgba(255, 255, 255, 0.60)',
    }),
    menuList: val => ({
        ...val,
        overflow: 'auto',
        scrollBar: 'none',
        '::-webkit-scrollbar': {
            width: '0px',
            height: '0px',
        },
    }),
    singleValue: val => ({
        ...val,
        color: 'rgba(251, 251, 251, 1)',
        fontSize: '18px',
        fontWeight: 400,
    }),
    menu: provided => ({
        ...provided,
        background: 'linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%)',
        color: 'rgba(251, 251, 251, 1)',
    }),
    indicatorSeparator: () => {},
    dropdownIndicator: (provider, state) => ({
        ...provider,
        color: state.isFocused ? 'black' : 'black',
    }),
};
