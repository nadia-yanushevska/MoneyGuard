import s from './Statistics.module.css';

function Statistics() {
    //TODO: Change div-s to components, remove temp classes
    return (
        <div className={s.container}>
            <div className={s.column}>
                <h2 className={s.heading}>Statistics</h2>
                <div className={s.temp_chart}>Chart</div>
            </div>

            <div className={s.column}>
                <div className={s.temp_selectors}>Selectors</div>
                <div className={s.temp_table}>Table</div>
            </div>
        </div>
    );
}

export default Statistics;
