import { Icon } from '../../Icons'
// import { useToggle } from '../../hooks/useToggle'
import s from './AddButton.module.css'

const AddButton = () => {
    // const {isOpen, closeModal, openModal} = useToggle()
  return (
    <div className={s.wrap}>
          <button className={s.btn} type="button" onClick = {()=>{}}> 
             <Icon id="#icon-plus" className={s.icon}></Icon>
          </button>
          {/* {isOpen &&
              <Modal title='Add Transaction' closeModal={closeModal}></Modal>} */}
          
    </div>
  )
}

export default AddButton
