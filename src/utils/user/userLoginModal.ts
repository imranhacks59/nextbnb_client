import { create } from 'zustand';

interface LoginModaStore {
    isOpen: boolean,
    open: () => void,
    close: () => void,
}

const useLoginModal = create<LoginModaStore>((set)=>({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useLoginModal;



