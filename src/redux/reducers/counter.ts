export const INCREASE_COUNT: string = 'INCREASE_COUNT';
export const DECREASE_COUNT: string = 'DECREASE_COUNT';

interface StateType { count: number; }

const initialState: StateType = { count: 0 };

export default function(state = initialState, action: any): any {
	switch(action.type) {
		case INCREASE_COUNT: {
			return { count: state.count + 1 };
		}
		case DECREASE_COUNT: {
			return { count: state.count - 1 };
		}
		default: {
			return { state };
		}
	}
}
