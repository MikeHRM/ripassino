import {create} from 'zustand';

interface UseCounterStore {
  counter: number;
  anotherCounter: number;
  setCounter: () => void;
}

export const useCounterStore = create<UseCounterStore>(set => ({
  counter: 0,
  anotherCounter: 100,
  setCounter: () => set(state => ({counter: state.counter + 1})),
}));
