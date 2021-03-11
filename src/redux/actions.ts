import { DECREASE_COUNT, INCREASE_COUNT } from './reducers/counter';

export const decrease = (): object => ({ type: DECREASE_COUNT });
export const increase = (): object => ({ type: INCREASE_COUNT });
