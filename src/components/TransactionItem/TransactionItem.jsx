import clsx from 'clsx';
import useMedia from '../../hooks/useMedia';
import { Icon } from '../../Icons';

import s from './TransactionItem.module.css';

function TransactionItem({ transaction, first = false }) {
    const { isMobile } = useMedia();
    return isMobile ? (
        <ul>
            {[...Object.keys(transaction)].map((tKey, idx) => {
                return (
                    <li key={idx} className={s.row_item}>
                        <span>{tKey}</span>
                        <span>{transaction[tKey]}</span>
                    </li>
                );
            })}
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
