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
import { customStyles } from './customStyles';
import { useDispatch } from 'react-redux';
import { addTransactions } from '../../redux/Transactions/operations';
import { closeAddModal } from '../../redux/Modals/slice';
import CustomDropIndicator from '../CustomDropIndicator/CustomDropIndicator';

function AddTransactionForm() {
    const categories = useSelector(selectCategories);
    const [isChecked, setIsChecked] = useState(false);
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    const dispatch = useDispatch();

    const categoriesForSelect = categories.map(category => ({ value: category.id, label: category.name }));

    const selectDefaultValue = categoriesForSelect.find(item => item.label === 'Main expenses');

    const [selectedOption, setSelectedOption] = useState(null);

    const currentDate = new Date();
    const formattedDate = format(currentDate, "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX (zzz)");

    const schema = yup.object().shape({
        amount: yup.number().required('Number invalid value'),
        transactionDate: yup
            .date()
            .required('Date is required')
            .default(() => new Date(formattedDate)),
        switch: yup.boolean(),
        category: yup.string(),
        comment: yup.string().required(),
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
        if (!isChecked) {
            const categoryId = categories.filter(el => el.name === 'Income');
            data.categoryId = categoryId[0].id;
            data.type = 'INCOME';
            data.amount = Math.abs(data.amount);
        } else if (selectedOption) {
            data.categoryId = selectedOption.value;
            data.type = 'EXPENSE';
            data.amount = Math.abs(data.amount) * -1;
        } else if (!selectedOption) {
            const categoryId = categories.filter(el => el.name === 'Main expenses');
            data.categoryId = categoryId[0].id;
            data.type = 'EXPENSE';
            data.amount = Math.abs(data.amount) * -1;
        }

        const originalDate = new Date(data.transactionDate);
        const formattedDate = format(originalDate, 'yyyy-MM-dd');
        data.transactionDate = formattedDate;

        delete data.switch;

        dispatch(addTransactions(data));
        dispatch(closeAddModal());
    };

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuIsOpen(true);
    };

    const handleMenuClose = () => {
        setMenuIsOpen(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
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
                                <path d="M27 31L47 31" stroke="white" strokeWidth="2" />
                                <defs>
                                    <filter id="filter0_d_61_794" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                                <path d="M37 21V41" stroke="#FBFBFB" strokeWidth="2" />
                                <path d="M27 31L47 31" stroke="#FBFBFB" strokeWidth="2" />
                                <defs>
                                    <filter id="filter0_d_60_139" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                    <Select
                        classNamePrefix="react-select"
                        styles={customStyles}
                        className={s.select_form}
                        defaultValue={selectDefaultValue}
                        onChange={setSelectedOption}
                        options={categoriesForSelect}
                        placeholder="Select a category"
                        onMenuOpen={handleMenuOpen}
                        onMenuClose={handleMenuClose}
                        components={{
                            DropdownIndicator: () => {
                                return menuIsOpen ? <CustomDropIndicator up={true} /> : <CustomDropIndicator up={false} />;
                            },
                        }}
                    />
                </div>
            )}
            <div className={s.sum_data_wrap}>
                <div className={s.sum_wrap}>
                    <input {...register('amount')} type="number" autoComplete="off" placeholder="0.00" className={s.sum} />
                    {errors.amount && <span className={s.comment_err}>{'Enter a number'}</span>}
                </div>
                <div className={s.data_wrap} onClick={() => setIsDatePickerOpen(true)}>
                    <Controller
                        name="transactionDate"
                        control={control}
                        render={({ field }) => (
                            <>
                                <DatePicker
                                    selected={field.value || formattedDate}
                                    onChange={date => field.onChange(date)}
                                    dateFormat="dd.MM.yyyy"
                                    open={isDatePickerOpen}
                                    onClickOutside={() => setIsDatePickerOpen(false)}
                                    className={s.customDatePicker}
                                    calendarClassName={s.calendarClassName}
                                    maxDate={formattedDate}
                                />
                            </>
                        )}
                    />
                    <div className={s.svg_wrap}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_60_133)">
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
            <div className={clsx(s.comment_bottom)}>
                <input {...register('comment')} type="text" className={s.input} placeholder="Comment" autoComplete="off" />
                {errors.comment && <span className={s.comment_err}>{'Enter a comment'}</span>}
            </div>
            <button className={clsx(s.btn, s.btn_add)} type="submit">
                Add
            </button>
            <button
                className={clsx(s.btn, s.btn_cancel)}
                type="button"
                onClick={() => {
                    dispatch(closeAddModal());
                }}
            >
                Cancel
            </button>
        </form>
    );
}

export default AddTransactionForm;
