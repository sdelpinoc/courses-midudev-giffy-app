
import { useReducer } from 'react';

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating',
  UPDATE_LANG: 'update_lang',
  RESET_SEARCH: 'reset_search'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1
      };

    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload
      };

    case ACTIONS.UPDATE_LANG:
      return {
        ...state,
        lang: action.payload
      };

    case ACTIONS.RESET_SEARCH:
      return {
        ...state,
        keyword: '',
        rating: 'g',
        lang: 'en'
      };

    default:
      return state;
  }
}

export const useSearchForm = ({ initialKeyword, initialRating, initialLang }) => {
  const [state, dispatch] = useReducer(reducer, {
    keyword: initialKeyword,
    rating: initialRating,
    lang: initialLang,
    times: 0
  });

  const { keyword, times, rating, lang } = state;

  return {
    keyword,
    times,
    rating,
    lang,
    updateKeyword: keyword => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
    updateRating: rating => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
    updateLang: lang => dispatch({ type: ACTIONS.UPDATE_LANG, payload: lang }),
    resetSearch: () => dispatch({ type: ACTIONS.RESET_SEARCH, payload: {} })
  }
};