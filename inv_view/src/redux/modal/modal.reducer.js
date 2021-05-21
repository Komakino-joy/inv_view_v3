import { 
  TOGGLE_DAILY_ENTRY_REPORT
} from "./modal.actions";  
  
  const INITIAL_STATE = {
    seenDailyEntry: false
  }
  
  // eslint-disable-next-line import/no-anonymous-default-export
  const modalState = (state = INITIAL_STATE  , { type }) => {
    switch (type) {
      
      case TOGGLE_DAILY_ENTRY_REPORT:
        return {
          ...state,
          seenDailyEntry: !state.seenDailyEntry
        };

      default:
        return state;
    }
  };
  
  export default modalState; 