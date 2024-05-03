import s from './AddTransactionForm.module.css';
import { useState } from 'react';
import clsx from 'clsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { format } from 'date-fns';
import { selectCategories } from '../../redux/Statistics/selectors';
import { useSelector } from 'react-redux';
import Select from 'react-select';

function AddTransactionForm() {
    const categories = useSelector(selectCategories);
    // console.log(categories);
    const [isChecked, setIsChecked] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    const categoriesForSelect = categories.map(category => ({ value: category.id, label: category.name }));
    // console.log(categoriesForSelect);

    const [selectedOption, setSelectedOption] = useState(null);

    // if (!isChecked) {
    //     setSelectedOption(null);
    // }

    const currentDate = new Date(); // Получаем текущую дату и время
    const formattedDate = format(currentDate, "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX (zzz)"); // Форматируем дату
    // console.log(formattedDate); // Выводим отформатированную дату в консоль

    const schema = yup.object().shape({
        amount: yup.number().required('number invalid value'),
        transactionDate: yup
            .date()
            .required('Date is required')
            .default(() => new Date(formattedDate)),
        switch: yup.boolean(),
        category: yup.string(),
        comment: yup.string(),
    });

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        console.log(selectedOption);
        // '2024-05-20'

        if (!isChecked) {
            // data.categoryId = '063f1132-ba5d-42b4-951d-44011ca46262' Income;
            const categoryId = categories.filter(el => el.name === 'Income');
            console.log(categoryId[0].id);
            data.categoryId = categoryId[0].id;
        } else if (selectedOption) {
            // const categoryId = categories.filter(el => el.name === data.category);
            // console.log(categoryId[0].id);
            data.categoryId = selectedOption.value;
        }

        const originalDate = new Date(data.transactionDate);
        const formattedDate = format(originalDate, 'yyyy-MM-dd');
        data.transactionDate = formattedDate;
        console.log(data);
        // console.log(formattedDate); // Выведет: '2024-05-08'
        const { category, ...income } = data;
        // isChecked ? console.log(data) : console.log(income);
        // console.log(isChecked);
    };

    const customStyles = {
        control: (provided, state) => ({
            // class attribute : class=" css-i32vvf-control"
            ...provided,
            background: 'transparent',
            color: 'transparent',
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
        menu: provided => ({
            // 'menu' is from the div class too.
            ...provided,
            background: 'linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%)',
        }),
        indicatorSeparator: () => {},
        dropdownIndicator: (provider, state) => ({
            ...provider,
            color: state.isFocused ? 'black' : 'black',
        }),
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.switch__wrapper}>
                {!isChecked ? <span className={clsx(s.span_text, s.income_active)}>Income</span> : <span className={s.span_text}>Income</span>}
                <label htmlFor="switch" className={s.switch}>
                    <input {...register('switch')} type="checkbox" id="switch" checked={isChecked} onChange={handleChange} className={s.switch__input} />
                    {isChecked ? (
                        <span className={s.switch__slider}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
                                <g filter="url(#filter0_d_61_794)">
                                    <circle cx="37" cy="31" r="22" fill="#FF868D" />
                                </g>
                                <path d="M27 31L47 31" stroke="white" stroke-width="2" />
                                <defs>
                                    <filter id="filter0_d_61_794" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="6" />
                                        <feGaussianBlur stdDeviation="7.5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.52549 0 0 0 0 0.552941 0 0 0 0.5 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61_794" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_61_794" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </span>
                    ) : (
                        <span className={s.switch__slider}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
                                <g filter="url(#filter0_d_60_139)">
                                    <circle cx="37" cy="31" r="22" fill="#FFB627" />
                                </g>
                                <path d="M37 21V41" stroke="#FBFBFB" stroke-width="2" />
                                <path d="M27 31L47 31" stroke="#FBFBFB" stroke-width="2" />
                                <defs>
                                    <filter id="filter0_d_60_139" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="6" />
                                        <feGaussianBlur stdDeviation="7.5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.780392 0 0 0 0 0.152941 0 0 0 0.5 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_139" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_139" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </span>
                    )}
                </label>
                {isChecked ? <span className={clsx(s.span_text, s.expense_active)}>Expense</span> : <span className={s.span_text}>Expense</span>}
            </div>
            {isChecked && (
                <div className={s.comment}>
                    {/* <select className={s.select_style} {...register('category')} type="text" className={s.input} placeholder="Select a category" autoComplete="off">
                        {categories.map(item => (
                            <option key={item.id} className={s.select}>
                                {item.name}
                            </option>
                        ))}
                    </select> */}
                    <Select
                        classNamePrefix="select"
                        // {...register('category')}
                        styles={customStyles}
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={categoriesForSelect}
                        placeholder="Select a category"
                    />
                </div>
            )}
            <div className={s.sum_data_wrap}>
                <div className={s.sum_wrap}>
                    <input {...register('amount')} type="text" autoComplete="off" placeholder="0.00" className={s.sum} />
                    {errors.number && <span>{'amount'}</span>}
                    {errors.transactionDate && <span>{errors.transactionDate.message}</span>}
                    {errors.switch && <span>{'switch'}</span>}
                    {errors.comment && <span>{'comment'}</span>}
                </div>
                <div className={s.data_wrap}>
                    <Controller
                        name="transactionDate"
                        control={control}
                        render={({ field }) => (
                            <>
                                <DatePicker selected={field.value || formattedDate} onChange={date => field.onChange(date)} dateFormat="dd.MM.yyyy" />
                            </>
                        )}
                    />
                    <div className={s.svg_wrap}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_60_133)">
                                <path
                                    d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"
                                    fill="#734AEF"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_60_133">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={s.comment}>
                <input {...register('comment')} type="text" className={s.input} placeholder="Comment" autoComplete="off" />
            </div>
            <button className={clsx(s.btn, s.btn_add)} type="submit">
                Add
            </button>
            <button className={clsx(s.btn, s.btn_cancel)} type="button">
                Cancel
            </button>
        </form>
    );
}

export default AddTransactionForm;
