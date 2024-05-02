import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrencyData } from '../../redux/Currency/selectors';
import { useMediaQuery } from 'react-responsive';
import s from './Currency.module.css';
import image from '../../../public/img/currency.png';
import imageTab from '../../../public/img/currency.png';
import { getCurrency } from '../../redux/Currency/operations';

const Currency = () => {
    const currency = useSelector(selectCurrencyData);

    const dispatch = useDispatch();

    const isTablet = useMediaQuery({ query: '(max-width: 1279px' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

    useEffect(() => {
        dispatch(getCurrency());
    }, [dispatch]);
    console.log(currency);
    const rateBuyDollar = currency?.dollar.rateBuy.toFixed(2);
    const rateSellDollar = currency?.dollar.rateSell.toFixed(2);
    const rateSellEuro = currency?.euro.rateSell.toFixed(2);
    const rateBuyEuro = currency?.euro.rateBuy.toFixed(2);
    console.log(rateBuyDollar);
    return (
        <div className={s.currency_wrapper}>
            <table className={s.currency_table}>
                <thead className={s.currency_table_head}>
                    <tr>
                        <th className={s.currency_item}>Currency</th>
                        <th className={s.currency_item}>Purchase</th>
                        <th className={s.currency_item}>Sale</th>
                    </tr>
                </thead>
                <tbody className={s.body}>
                    <tr className={s.table}>
                        <td>USD</td>
                        <td>{rateBuyDollar}</td>
                        <td>{rateSellDollar}</td>
                    </tr>
                    <tr className={s.table}>
                        <td>EUR</td>
                        <td>{rateBuyEuro}</td>
                        <td> {rateSellEuro}</td>
                    </tr>
                </tbody>
            </table>
            {isDesktop && <img src={image} alt="" />}
            {isTablet && <img src={imageTab} alt="" />}
        </div>
    );
};

export default Currency;
