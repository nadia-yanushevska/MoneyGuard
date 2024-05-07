// export const customStyles = {
//     control: (provided, state) => ({
//         ...provided,
//         background: 'transparent',
//         color: 'transparent',
//         border: 0,
//         boxShadow: 'none',
//         display: 'flex',
//         flexWrap: 'nowrap',
//         borderColor: 'transparent',
//         outline: 'transparent',
//     }),
//     valueContainer: val => ({
//         ...val,
//         color: 'red',
//     }),
//     placeholder: provider => ({
//         ...provider,
//         color: 'rgba(255, 255, 255, 0.60)',
//     }),
//     menuList: val => ({
//         ...val,
//         overflow: 'auto',
//         scrollBar: 'none',
//         '::-webkit-scrollbar': {
//             width: '0px',
//             height: '0px',
//         },
//     }),
//     singleValue: val => ({
//         ...val,
//         color: 'rgba(251, 251, 251, 1)',
//         fontSize: '18px',
//         fontWeight: 400,
//     }),
//     menu: provided => ({
//         ...provided,
//         background: 'linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%)',
//         color: 'rgba(251, 251, 251, 1)',
//     }),
//     indicatorSeparator: () => {},
//     dropdownIndicator: (provider, state) => ({
//         ...provider,
//         color: state.isFocused ? 'black' : 'black',
//     }),
// };

import { CgOverflow } from 'react-icons/cg';

export const customStyles = {
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
        border: 0,

        background: 'transparent',
        color: 'transparent',
        boxShadow: 'none',
        display: 'flex',
        flexWrap: 'nowrap',
        borderColor: 'transparent',
        outline: 'transparent',
        padding: '0px',
        // paddingLeft: '11px',
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
            padding: '0',

            '@media screen and (max-width: 767.98px)': {
                paddingLeft: '9px',
            },
        };
    },

    menu: (provided, state) => {
        return {
            ...provided,
            background: 'linear-gradient(0deg,rgba(83, 61, 186, 1) 0%,rgba(80, 48, 154, 1) 36%,rgba(106, 70, 165, 1) 61%,rgba(133, 93, 175, 1) 100%)',
            borderRadius: '8px',
            blur: '5px',
            scrollBar: 'none',
            '::-webkit-scrollbar': {
                width: '0px',
                height: '0px',
            },
        };
    },
    menuList: base => ({
        ...base,

        // 'overflow-y': 'none', // Отключаем прокрутку по вертикали
        '::-webkit-scrollbar': {
            display: 'none', // Скрыть скроллбар WebKit
        },
        scrollbarWidth: 'none', // Скрыть скроллбар Firefox
        paddingTop: '0px',
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
            // padding: '12px 20px 20px 12px',

            minWidth: '100%',
            caretColor: 'transparent',
        };
    },
};
