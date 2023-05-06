import React, { createContext, useState } from 'react'

export const withModal = createContext(null)

export function ProvideModal({ children }) {
    const [modal, setModal] = useState(false)
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);
    function handleModal() {
        openModal(!modal)
    }

    const VALUES = {
        modal,
        openModal,
        closeModal,
        handleModal
    }
    return (
        <withModal.Provider value={VALUES}>
            {children}
        </withModal.Provider>
    )
}

export default withModal