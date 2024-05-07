import { ErrorMessage, Field } from 'formik';
import { useState } from 'react';

import style from './customField.module.css';
import { Icon } from '../../Icons';

import Icons from '../../sprite.svg';

const CustomField = ({ type, name, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className={style.field}>
            <label className={style.label}>
                <Field className={style.input} type={showPassword ? 'text' : type} name={name} placeholder={placeholder} autocomplete="off" />
                {type === 'password' ? (
                    <svg className={`${style.icon} ${style.iconPassword}`} onClick={() => setShowPassword(!showPassword)}>
                        <use href={`${Icons}${showPassword ? '#icon-eye-blocked' : '#icon-eye'}`} />
                    </svg>
                ) : (
                    <Icon id={name === 'email' ? '#icon-email' : '#icon-user'} className={style.icon} />
                )}
            </label>
            <ErrorMessage name={name} component={'p'} className={style.errorMessage} />
        </div>
    );
};

export default CustomField;
