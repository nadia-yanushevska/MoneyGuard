import s from './TransactionItem.module.css';

function TransactionItem({ transaction }) {
    return (
        <ul className={s.row}>
            {[...Object.values(transaction)].map((value, idx) => {
                return (
                    <li key={idx} className={s.row_item}>
                        {value}
                    </li>
                );
            })}
        </ul>
    );
}

export default TransactionItem;
