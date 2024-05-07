import s from './EditTransactionForm.module.css';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { format } from 'date-fns';
import { selectCategories } from '../../redux/Statistics/selectors';
import { useSelector } from 'react-redux';
import { selectIsEditID, closeEditModal } from '../../redux/Modals/slice';
import { selectTransactions } from '../../redux/Transactions/selectors';
import { useDispatch } from 'react-redux';
import { editTransactions } from '../../redux/Transactions/operations';

function EditTransactionForm() {
    const categories = useSelector(selectCategories);
    const transactions = useSelector(selectTransactions);
    const [isChecked, setIsChecked] = useState(true);
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const dispatch = useDispatch();

    const IdForEdit = useSelector(selectIsEditID);

    const foundObject = transactions.find(item => item.id === IdForEdit);

    useEffect(() => {
        if (foundObject.type === 'INCOME') {
            setIsChecked(false);
        } else if (foundObject.type === 'EXPENSE') {
            setIsChecked(true);
        }
    }, [foundObject.type]);

    const amountDefaultValue = Math.abs(foundObject.amount);
    const startDateDefaultValue = new Date(foundObject.transactionDate);
    const commentDefaultValue = foundObject.comment;

    const categoriesForSelect = categories.map(category => ({ value: category.id, label: category.name }));

    const selectDefaultValue = categoriesForSelect.find(item => item.value === foundObject.categoryId);

    const [selectedOption] = useState(null);

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
        comment: yup.string().required('Comment is required'),
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
        } else if (selectedOption) {
            data.categoryId = selectedOption.value;
            data.type = 'EXPENSE';
            data.amount = Math.abs(data.amount);
        }

        data.type = foundObject.type;
        const originalDate = new Date(data.transactionDate);
        const formattedDate = format(originalDate, 'yyyy-MM-dd');
        data.transactionDate = formattedDate;

        if (foundObject.type === 'INCOME') {
            data.categoryId = foundObject.categoryId;
            data.amount = Math.abs(data.amount);
        } else {
            if (selectedOption) {
                data.categoryId = selectedOption.value;
            } else {
                data.categoryId = foundObject.categoryId;
            }
            data.amount = Math.abs(data.amount) * -1;
        }
        delete data.switch;

        dispatch(editTransactions({ id: IdForEdit, transaction: data }));
        dispatch(closeEditModal());
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
                {isChecked && <div className={s.comment}>{selectDefaultValue.label}</div>}
                <div className={s.sum_data_wrap}>
                    <div className={s.sum_wrap}>
                        <input {...register('amount')} type="number" autoComplete="off" placeholder="0.00" defaultValue={amountDefaultValue} className={s.sum} />
                        {errors.amount && <span className={s.comment_err}>{'Enter a number'}</span>}
                    </div>
                    <div className={s.data_wrap} onClick={() => setIsDatePickerOpen(true)}>
                        <Controller
                            name="transactionDate"
                            className={s.date}
                            control={control}
                            render={({ field }) => (
                                <>
                                    <DatePicker
                                        selected={field.value || startDateDefaultValue}
                                        onChange={date => {
                                            field.onChange(date);
                                            setIsDatePickerOpen(false);
                                        }}
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
                <div className={clsx(s.comment, s.comment_bottom)}>
                    <input {...register('comment')} type="text" className={s.input} placeholder="Comment" defaultValue={commentDefaultValue} autoComplete="off" />
                    {errors.comment && <span className={s.comment_err}>{'Enter a comment'}</span>}
                </div>
                <div className={s.btn_wrap}>
                    <button className={clsx(s.btn, s.btn_add)} type="submit">
                        Save
                    </button>
                    <button
                        className={clsx(s.btn, s.btn_cancel)}
                        type="button"
                        onClick={() => {
                            dispatch(closeEditModal());
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
}

export default EditTransactionForm;
