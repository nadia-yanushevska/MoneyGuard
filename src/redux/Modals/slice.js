import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    transaction: {
        transactionDate: '',
        type: '',
        categoryId: '',
        comment: '',
        amount: 0,
    },
    isEditModalOpen: false,
    isAddModalOpen: false,
};

const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    selectors: {
        selectTransaction: state => state.transaction,
        selectIsEditModalOpen: state => state.isEditModalOpen,
        selectIsAddModalOpen: state => state.isAddModalOpen,
    },
    reducers: {
        takeTransactionData: (state, { payload }) => {
            state.transaction = payload;
        },
        openEditModal: state => (state.isEditModalOpen = true),
        closeEditModal: state => (state.isEditModalOpen = false),
        openAddModal: state => (state.isAddModalOpen = true),
        closeAddModal: state => (state.isAddModalOpen = false),
    },
});

export const modalsReducer = modalsSlice.reducer;
export const { takeTransactionData, openEditModal, closeEditModal, openAddModal, closeAddModal } = modalsSlice.actions;
export const { selectTransaction, selectIsEditModalOpen, selectIsAddModalOpen } = modalsSlice.selectors;
