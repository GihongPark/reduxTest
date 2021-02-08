import { takeEvery } from 'redux-saga/effects';

// 액션 타입
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => dispatch => {
    console.log("Thunk : INCREASE");
    dispatch(increase());
};
export const decreaseAsync = () => dispatch => {
    console.log("Thunk : DECREASE");
    dispatch(decrease());
};

function* increaseSaga() {
    console.log("Saga : INCREASE");
}
function* decreaseSaga() {
    console.log("Saga : DECREASE");
}

export function* counterSaga() {
    yield takeEvery(INCREASE, increaseSaga);
    yield takeEvery(DECREASE, decreaseSaga);
}

const initialState = 0;

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            console.log("Reducer : INCREASE");
            return state + 1;
        case DECREASE:
            console.log("Reducer : DECREASE");
            return state - 1;
        default:
            return state;
    }
}
