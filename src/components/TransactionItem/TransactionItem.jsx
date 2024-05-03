import clsx from 'clsx';
import useMedia from '../../hooks/useMedia';
import { Icon } from '../../Icons';

import s from './TransactionItem.module.css';

function TransactionItem({ transaction, first = false }) {
    const { isMobile } = useMedia();
    return isMobile ? (
        <ul className={s.card}>
            {[...Object.keys(transaction)].map((tKey, idx) => {
                return (
                    <li key={idx} className={s.row}>
                        <span className={s.row_item}>{tKey}</span>
                        <span className={s.row_item}>{transaction[tKey]}</span>
                    </li>
                );
            })}

            <li className={s.row}>
                <button type="button" className={clsx(s.btn_edit, s.row_item)}>
                    <Icon id="#icon-pen" className={s.edit}></Icon>
                </button>
                <button type="button" className={clsx(s.btn_edit, s.row_item, 'btn_delete')}>
                    Delete
                </button>
            </li>
        </ul>
    ) : (
        <>
            {first && (
                <ul className={s.row}>
                    {[...Object.keys(transaction)].map((value, idx) => {
                        if (value !== 'id')
                            return (
                                <li key={idx} className={s.row_item}>
                                    {value}
                                </li>
                            );
                    })}
                    <li className={s.row_item}></li>
                </ul>
            )}
            <ul className={s.row}>
                {[...Object.values(transaction)].map((value, idx) => {
                    return (
                        <li key={idx} className={s.row_item}>
                            {value}
                        </li>
                    );
                })}
                <li className={clsx(s.row_item, s.controls)}>
                    <button type="button" className={s.btn_edit}>
                        <Icon id="#icon-pen" className={s.edit}></Icon>
                    </button>
                    <button type="button" className="btn_delete">
                        Delete
                    </button>
                </li>
            </ul>
        </>
    );
}

export default TransactionItem;
