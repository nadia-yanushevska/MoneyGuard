import { ErrorMessage, Field } from 'formik';
import { useState } from 'react';

import style from './customField.module.css';
// import { Icon } from '../../Icons';

const CustomField = ({ type, name, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <label className={style.label}>
            <div>
                <Field className={style.input} type={showPassword ? 'text' : type} name={name} placeholder={placeholder} />
                {type === 'password' && (
                    <button className={style.buttonPassword} type="button" onClick={() => setShowPassword(!showPassword)}>
                        {/* <Icon id={showPassword ? 'eye-slash' : 'eye'} className={style.icon} size="18" /> */}
                    </button>
                )}
            </div>
            <ErrorMessage name={name} component={'p'} />
        </label>
    );
};

export default CustomField;
