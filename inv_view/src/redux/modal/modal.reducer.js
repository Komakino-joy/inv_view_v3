import { 
  FSC_TOGGLE_DAILY_ENTRY_REPORT,
  CHG_TOGGLE_DAILY_ENTRY_REPORT
} from "./modal.actions";  
  
  const INITIAL_STATE = {
    seenDailyEntry: false
  }
  
  // eslint-disable-next-line import/no-anonymous-default-export
export  const FSC_modalState = (state = INITIAL_STATE  , { type }) => {
    switch (type) {
      
      case FSC_TOGGLE_DAILY_ENTRY_REPORT:
        return {
          ...state,
          seenDailyEntry: !state.seenDailyEntry
        };

      default:
        return state;
    }
  };

  // eslint-disable-next-line import/no-anonymous-default-export
 export const CHG_modalState = (state = INITIAL_STATE  , { type }) => {
    switch (type) {
      
      case CHG_TOGGLE_DAILY_ENTRY_REPORT:
        return {
          ...state,
          seenDailyEntry: !state.seenDailyEntry
        };

      default:
        return state;
    }
  };

