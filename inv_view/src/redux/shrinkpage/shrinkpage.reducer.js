import { 
    RECEIVE_DAILY_SHRINK_DATA,  
    RECEIVE_WEEKLY_SHRINK_DATA,
    RECEIVE_MONTHLY_SHRINK_DATA, 
    RECEIVE_YEARLY_SHRINK_DATA,
    FSC_RECEIVE_DAILY_SHRINK_DATA, 
    FSC_RECEIVE_WEEKLY_SHRINK_DATA, 
    FSC_RECEIVE_MONTHLY_SHRINK_DATA, 
    FSC_RECEIVE_YEARLY_SHRINK_DATA, 
} from './shrinkpage.actions';

const INITIAL_STATE = {}


const shrinkData = (state = INITIAL_STATE, {type, dailyShrink, weeklyShrink, monthlyShrink, yearlyShrink}) => {
    switch (type) {
        case RECEIVE_DAILY_SHRINK_DATA:
            return {...state, dailyShrink}

        case RECEIVE_WEEKLY_SHRINK_DATA:
            return {...state, weeklyShrink}

        case RECEIVE_MONTHLY_SHRINK_DATA:
            return {...state, monthlyShrink}

        case RECEIVE_YEARLY_SHRINK_DATA:
            return {...state, yearlyShrink}

        case FSC_RECEIVE_DAILY_SHRINK_DATA:
            return {...state, dailyShrink}

        case FSC_RECEIVE_WEEKLY_SHRINK_DATA:
            return {...state, weeklyShrink}

        case FSC_RECEIVE_MONTHLY_SHRINK_DATA:
            return {...state, monthlyShrink}

        case FSC_RECEIVE_YEARLY_SHRINK_DATA:
            return {...state, yearlyShrink}
            

        default:
            return state;
    }
};

export default shrinkData;