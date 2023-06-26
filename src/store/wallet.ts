import {create} from 'zustand';

interface ModalStore {
    isOpen: boolean;  
    modalType?: 'fund' | 'withdraw' |'transfer' 
    showModal?: ( ) => void;
    closeModal?: ( ) => void;
    setModal?: ( ) => void;
}






export const useModal = create<ModalStore>( (set) => ({
isOpen: false,
modalType: 'fund',
showModal: () => set( (state) => (
    {isOpen: true}
 ) ),
closeModal: () => set( (state) => (
    {isOpen: false}
 ) ),
setModal: () => set( (state) => (
    {isOpen: false}
 ) ),


}
)); 