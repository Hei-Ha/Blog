import { create } from 'zustand'


interface StoreType {
    theme: 'light' | 'dark';
    actions: {
        [key: string]: Function;
    }
}


export const useStore = create<StoreType>((set, get) => ({
    theme: 'light',
    actions: {
        switchTheme: (params) => set((state) => {
            return {
                theme: params
            }
        })
    }
}))