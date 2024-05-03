import Select from 'react-select';
import css from './Custom.module.css';

const CustomSelect = ({ placeholderText, value, onChange, options, defaultValue, isDisabled }) => {
    return (
        <div>
            <Select className={css.container} options={options} value={value} onChange={onChange} isDisabled={isDisabled} defaultValue={defaultValue} placeholder={placeholderText} />
        </div>
    );
};

export default CustomSelect;
