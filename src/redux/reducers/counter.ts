const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';

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
