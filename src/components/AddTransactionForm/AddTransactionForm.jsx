import s from './AddTransactionForm.module.css';
import { useState } from 'react';
import clsx from 'clsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function AddTransactionForm() {
    const [isChecked, setIsChecked] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    const schema = yup.object().shape({
        number: yup.number().required('number invalid value'),
        date: yup.date().required('date invalid value'),
        switch: yup.boolean(),
        // selectedOption: yup.string().when('switch', {
        //     is: true,
        //     then: yup.string().required('Please select an option'),
        //     otherwise: yup.string().notRequired(),
        // }),
        comment: yup.string(),
    });

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.switch__wrapper}>
                {!isChecked ? <span className={clsx(s.span_text, s.income_active)}>Income</span> : <span className={s.span_text}>Income</span>}
                <label htmlFor="switch" className={s.switch}>
                    <Controller
                        name="switch"
                        control={control}
                        render={({ field }) => <input {...field} type="checkbox" id="switch" checked={isChecked} onChange={handleChange} className={s.switch__input} />}
                    />
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
                    <input type="text" className={s.input} placeholder="Select a category" />
                </div>
            )}
            <div className={s.sum_data_wrap}>
                <div className={s.sum_wrap}>
                    <Controller name="number" defaultValue="" control={control} render={({ field }) => <input {...field} type="text" placeholder="0.00" className={s.sum} />} />
                    {errors.number && <span>{'number'}</span>}
                    {errors.date && <span>{errors.date.message}</span>}
                    {errors.switch && <span>{'switch'}</span>}
                    {errors.comment && <span>{'comment'}</span>}
                </div>
                <div className={s.data_wrap}>
                    <Controller
                        name="date"
                        control={control}
                        render={({ field }) => (
                            <DatePicker
                                selected={startDate} // Используйте значение из field.value
                                onChange={date => setStartDate(date)} // Обновите значение с помощью field.onChange
                                dateFormat="dd.MM.yyyy"
                            />
                        )}
                    />
                    {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="dd.MM.yyyy" /> */}
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
                <input type="text" className={s.input} placeholder="Comment" />
            </div>
            <button className={clsx(s.btn, s.btn_add)}>Add</button>
            <button className={clsx(s.btn, s.btn_cancel)}>Cancel</button>
        </form>
    );
}

export default AddTransactionForm;
