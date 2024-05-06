export const styleSelect = {
    option: provided => {
        return {
            ...provided,
            background: 'transparent',
            border: 'none',
            outline: 'none',

            fontSize: '18px',
            fontWeight: '400',
            color: 'var(--text-rgba)',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: 'var(--bg-form)',
                color: 'var(--red-color)',
                fontWeight: '400',
            },
            textAlign: 'left',
        };
    },
    control: styles => ({
        ...styles,

        color: 'var(--white, #FBFBFB)',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: ' normal',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        borderRadius: '8px',
        boxShadow: 'none',
        backgroundColor: 'rgba(74, 86, 226, 0.10)',
        cursor: 'pointer',
    }),

    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return {
            ...provided,
            opacity,
            transition,
            right: 5,
            color: 'var(--text-color)',
            padding: '8px 20px',
        };
    },

    menu: (provided, state) => {
        return {
            ...provided,
            background: 'linear-gradient(0deg,rgba(83, 61, 186, 1) 0%,rgba(80, 48, 154, 1) 36%,rgba(106, 70, 165, 1) 61%,rgba(133, 93, 175, 1) 100%)',
            borderRadius: '8px',
            blur: '5px',
        };
    },
    menuList: base => ({
        ...base,
        '::-webkit-scrollbar': {
            display: 'none',
        },
    }),

    indicatorSeparator: () => ({}),

    indicators: () => {
        return {
            cursor: 'pointer',
        };
    },

    input: provided => {
        return {
            ...provided,
            margin: '0px',
            color: 'var(--text-color)',
            padding: '12px 20px',

            minWidth: '100%',
        };
    },
};
