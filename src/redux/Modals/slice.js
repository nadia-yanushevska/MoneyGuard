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
    isEditId: '',
};

const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    selectors: {
        selectTransaction: state => state.transaction,
        selectIsEditModalOpen: state => state.isEditModalOpen,
        selectIsAddModalOpen: state => state.isAddModalOpen,
        selectIsEditID: state => state.isEditId,
    },
    reducers: {
        takeTransactionData: (state, { payload }) => {
            state.transaction = payload;
        },
        openEditModal: state => {
            state.isEditModalOpen = true;
        },
        closeEditModal: state => {
            state.isEditModalOpen = false;
            state = initialState;
        },
        openAddModal: state => {
            state.isAddModalOpen = true;
        },
        closeAddModal: state => {
            state.isAddModalOpen = false;
            state = initialState;
        },
        addEditId: (state, { payload }) => {
            state.isEditId = payload;
        },
    },
});

export const modalsReducer = modalsSlice.reducer;
export const { takeTransactionData, openEditModal, closeEditModal, openAddModal, closeAddModal, addEditId } = modalsSlice.actions;
export const { selectTransaction, selectIsEditModalOpen, selectIsAddModalOpen, selectIsEditID } = modalsSlice.selectors;
