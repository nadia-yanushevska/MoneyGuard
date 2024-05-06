import clsx from 'clsx';
import { useDispatch } from 'react-redux';

import useMedia from '../../hooks/useMedia';
import { deleteTransactions } from '../../redux/Transactions/operations';
import { openEditModal, addEditId } from '../../redux/Modals/slice';
import { getStyleByType } from '../../helpers/transactionsFormatter';

import s from './TransactionItem.module.css';
import { Icon } from '../../Icons';
import { getBalanceThunk } from '../../redux/Auth/operations';

function TransactionItem({ transaction, id }) {
    const dispatch = useDispatch();
    const { isMobile } = useMedia();
    const idForModal = id;
    const style = getStyleByType(transaction.type);

    function onEdit() {
        const newId = idForModal;
        dispatch(addEditId(newId));
        dispatch(openEditModal());
    }

    async function OnDelete() {
        await dispatch(deleteTransactions(id));
        dispatch(getBalanceThunk());
    }

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
                <button type="button" className={clsx(s.btn_edit, s.row_item)} onClick={onEdit}>
                    <Icon id="#icon-pen" className={s.edit}></Icon>
                </button>
                <button type="button" className={clsx(s.colored, 'btn_delete')} onClick={OnDelete}>
                    Delete
                </button>
            </li>
        </ul>
    ) : (
        <>
            
                <ul className={s.row} style={style}>
                    {[...Object.values(transaction)].map((value, idx) => {
                        return (
                            <li key={idx} className={s.row_item}>
                                {value}
                            </li>
                        );
                    })}
                    <li className={clsx(s.row_item, s.controls)}>
                        <button type="button" className={s.btn_edit} onClick={onEdit}>
                            <Icon id="#icon-pen" className={s.edit}></Icon>
                        </button>
                        <button type="button" className={clsx(s.colored, 'btn_delete')} onClick={OnDelete}>
                            Delete
                        </button>
                    </li>
                </ul>
        </>
    );
}

export default TransactionItem;
