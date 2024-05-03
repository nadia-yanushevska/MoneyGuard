import { useState } from "react"


export const useToggle = () => {
    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)
    const toggle = () => setIsOpen(prev => !prev)

    return{ isOpen, closeModal, openModal, toggle}
}