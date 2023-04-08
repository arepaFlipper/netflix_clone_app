import { create } from 'zustand';

export interface ModalStoreInterface {
  movieId: string;
  isOpen: boolean;
  openModal: (movieId: string) => void;
  closeModal: () => void;
}

const modalinfo = {
  movieId: undefined,
  isOpen: false,
  openModal: (movieId: string) => set({ isOpen: true, movieId }),
  onClose: () => set({ isOpen: false, movieId: undefined }),
}
const useInfoModal = create<ModalStoreInterface>((set) => (modalinfo))

export default useInfoModal;
