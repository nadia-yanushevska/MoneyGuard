import clsx from 'clsx';
import useMedia from '../../hooks/useMedia';
import { Icon } from '../../Icons';

import s from './TransactionItem.module.css';
import { getStyleByType } from '../../helpers/transactionsFormatter';
import { useDispatch } from 'react-redux';
import { deleteTransactions } from '../../redux/Transactions/operations';
import { openEditModal, takeTransactionData, addEditId } from '../../redux/Modals/slice';

function TransactionItem({ transaction, id, first = false }) {
    const dispatch = useDispatch();
    const { isMobile } = useMedia();
    const idForModal = id;
    const style = getStyleByType(transaction.type);

    return isMobile ? (
        <ul className={s.card} style={style}>
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
            <ul className={s.row} style={style}>
                {[...Object.values(transaction)].map((value, idx) => {
                    return (
                        <li key={idx} className={s.row_item}>
                            {value}
                        </li>
                    );
                })}
                <li className={clsx(s.row_item, s.controls)}>
                    <button
                        type="button"
                        className={s.btn_edit}
                        onClick={() => {
                            const newId = idForModal;
                            dispatch(addEditId(newId));
                            dispatch(openEditModal());
                        }}
                    >
                        <Icon id="#icon-pen" className={s.edit}></Icon>
                    </button>
                    <button type="button" className="btn_delete" onClick={() => dispatch(deleteTransactions(id))}>
                        Delete
                    </button>
                </li>
            </ul>
        </>
    );
}

export default TransactionItem;
