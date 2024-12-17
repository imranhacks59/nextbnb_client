import { create } from 'zustand';

interface SignupModaStore {
    isOpen: boolean,
    open: () => void,
    close: () => void,
}

const useSignupModal = create<SignupModaStore>((set)=>({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useSignupModal;



