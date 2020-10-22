interface Course {
    courseId: number;
    courseName: string;
    wishListFlag: boolean;
}

export interface InitialState {
    courses: Course[]
}

export const initialState: InitialState = {
    courses: [
        {
            courseId: 0,
            courseName: "Erste Cavaletti-Übungen für das 4-jährigen Pferdes",
            wishListFlag: false
        },
        {
            courseId: 1,
            courseName: "Erste Ausbildung für das 3-jährige Pferdes",
            wishListFlag: false
        },
        {
            courseId: 2,
            courseName: "Handarbeit in der klassischen Ausbildung",
            wishListFlag: true
        },
        {
            courseId: 3,
            courseName: "Erste Ausbildung für das 3-jährige Pferdes",
            wishListFlag: false
        },
        {
            courseId: 4,
            courseName: "Besser Reiten durch Yoga",
            wishListFlag: true
        }
    ]
}

export const TOGGLE_ACTION = 'TOGGLE_ACTION'

interface ToggleFlagAction {
    type: typeof TOGGLE_ACTION
    payload: number
  }

export type ActionTypes = ToggleFlagAction

export const rootReducer = (state = initialState, action: ActionTypes) => {
    
    if (action.type === TOGGLE_ACTION) {
        const newState = { ...state }
        const index = newState.courses?.findIndex((course) => course.courseId === action.payload)
        
        if (newState.courses[index] != null) {
            newState.courses[index].wishListFlag = !newState.courses[index].wishListFlag
        }
        
        return newState
    } else return state
}