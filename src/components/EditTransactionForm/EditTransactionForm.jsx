import s from './EditTransactionForm.module.css';
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
import { customStyles } from '../AddTransactionForm/customStyles';

function EditTransactionForm() {
    const categories = useSelector(selectCategories);
    const [isChecked, setIsChecked] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    const categoriesForSelect = categories.map(category => ({ value: category.id, label: category.name }));

    const [selectedOption, setSelectedOption] = useState(null);

    const currentDate = new Date();
    const formattedDate = format(currentDate, "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX (zzz)");

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
        if (!isChecked) {
            const categoryId = categories.filter(el => el.name === 'Income');
            data.categoryId = categoryId[0].id;
        } else if (selectedOption) {
            data.categoryId = selectedOption.value;
        }

        const originalDate = new Date(data.transactionDate);
        const formattedDate = format(originalDate, 'yyyy-MM-dd');
        data.transactionDate = formattedDate;
        console.log(data);
        const { category, ...income } = data;
    };

    return (
        <>
            <div className={s.type}>
                <div className={`${s.type_income} ${s.type_text} ${!isChecked ? s.income_active : ''}`}>Income</div>
                <div className={s.type_svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="22" viewBox="0 0 10 22" fill="none">
                        <path d="M8.80108 1.09786L1.19895 20.9021" stroke="#E0E0E0" strokeWidth="2" />
                    </svg>
                </div>
                <div className={`${s.type_expense} ${s.type_text} ${isChecked ? s.expense_active : ''}`}>Expense</div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {isChecked && (
                    <div className={s.comment}>
                        <Select
                            classNamePrefix="react-select"
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
                <div className={s.comment}>
                    <input {...register('comment')} type="text" className={s.input} placeholder="Comment" autoComplete="off" />
                </div>
                <button className={clsx(s.btn, s.btn_add)} type="submit">
                    Save
                </button>
                <button className={clsx(s.btn, s.btn_cancel)} type="button">
                    Cancel
                </button>
            </form>
        </>
    );
}

export default EditTransactionForm;
