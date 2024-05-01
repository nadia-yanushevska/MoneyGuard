import s from './AddTransactionForm.module.css';
import { useState } from 'react';
import clsx from 'clsx';

function AddTransactionForm() {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div>
            <div className={s.switch__wrapper}>
                {!isChecked ? <span className={clsx(s.span_text, s.income_active)}>Income</span> : <span className={s.span_text}>Income</span>}
                <label htmlFor="switch" className={s.switch}>
                    <input type="checkbox" id="switch" checked={isChecked} onChange={handleChange} className={s.switch__input} />
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
        </div>
    );
}

export default AddTransactionForm;