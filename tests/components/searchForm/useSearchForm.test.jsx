import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { useSearchForm } from '../../../src/components/searchForm/useSearchForm';

describe('Testing useSearchForm', () => {

  const initialState = {
    initialKeyword: '',
    initialRating: 'g',
    initialLang: 'en'
  };

  test('Should change keyword', () => {
    const { result } = renderHook(() => useSearchForm(initialState));

    act(() => {
      result.current.updateKeyword('Batman');
    });

    expect(result.current.keyword).toBe('Batman');
  });


  test('Should update correctly times value', () => {
    const { result } = renderHook(() => useSearchForm(initialState));

    act(() => {
      result.current.updateKeyword('Batman');
      result.current.updateKeyword('Superman');
    });

    expect(result.current.times).toBe(2);
  });
});