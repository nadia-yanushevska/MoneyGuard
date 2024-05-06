import s from './Header.module.css';
import { Icon } from '../../Icons';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/Auth/selectors';
import { Link } from 'react-router-dom';
import useMedia from '../../hooks/useMedia';

import { useToggle } from '../../hooks/useToggle';
import LogOutModal from '../LogOutModal/LogOutModal';

function Header() {
    const isLogged = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const { isMobile } = useMedia();

    const { openModal, isOpen, closeModal } = useToggle();

    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link to="/" className={s.icon_wrap}>
                    {isMobile ? <Icon id="#icon-logo_mobile" className={s.icon_mob}></Icon> : <Icon id="#icon-logo_tab_desk" className={s.icon_tab_desk}></Icon>}
                </Link>

                <ul className={s.wrapper}>
                    <li>{isLogged ? <p className={s.text}>{user.name}</p> : 'Hello, Anonymous'}</li>
                    <li>
                        <div className={s.wrap}>
                            <button className={s.btn} onClick={openModal}>
                                <Icon id="#icon-exit" className={s.exit}></Icon>
                                {isMobile ? null : 'Exit'}
                            </button>
                            {isOpen && <LogOutModal closeModal={closeModal} />}
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
