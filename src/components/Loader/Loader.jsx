import { LineWave } from 'react-loader-spinner';
import s from './Loader.module.css';

function Loader() {
    return (
        <LineWave
            visible={true}
            height="100"
            width="100"
            color="var(--text-color)"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass={s.div}
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
        />
    );
}

export default Loader;
