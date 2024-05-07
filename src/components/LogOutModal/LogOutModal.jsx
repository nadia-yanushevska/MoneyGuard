import styles from './LogOutModal.module.css';
import { useMediaQuery } from 'react-responsive';

import FormButton from '../common/FormButton/FormButton';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/Auth/operations';
import { Icon } from '../../Icons';
import useMedia from '../../hooks/useMedia';

const LogOutModal = ({ closeModal }) => {
    const dispatch = useDispatch();
    const { isMobile } = useMedia();

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const addCloseEvent = event => {
            event.key === 'Escape' && closeModal();
        };
        document.addEventListener('keydown', addCloseEvent);

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', addCloseEvent);
        };
    });

    const closeOnClickOutside = event => {
        event.currentTarget === event.target && closeModal();
    };

    const screenCondition = useMediaQuery({ query: '(min-width: 768px)' });

    return (
        <div className={styles.logOutModal} onClick={closeOnClickOutside}>
            <div className={styles.modalContent}>
                {!isMobile && (
                    <div
                        className={styles.modal_close}
                        onClick={() => {
                            closeModal();
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M1 1L17 17" stroke="#FBFBFB" />
                            <path d="M1 17L17 0.999999" stroke="#FBFBFB" />
                        </svg>
                    </div>
                )}
                {screenCondition && <Icon id="#icon-logo_tab_desk" className={styles.homeIcon} />}

                <p>Are you sure you want to log out?</p>

                <div className={styles.buttonsWrapper}>
                    <FormButton type={'button'} text={'Logout'} variant={'multiColorButton'} handlerFunction={() => dispatch(logoutThunk())} />
                    <FormButton type={'button'} text={'cancel'} variant={'whiteButton'} handlerFunction={() => closeModal()} />
                </div>
            </div>
        </div>
    );
};

export default LogOutModal;
