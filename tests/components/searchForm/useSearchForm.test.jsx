import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useSearchForm } from '../../../src/components/searchForm/useSearchForm';

describe('Testing useSearchForm', () => {

    const initialState = {
        initialKeyword: '',
        initialRating: 'g',
        initiaLang: 'en'
    };

    test('Should change keyword', () => {
        const { result } = renderHook(() => useSearchForm(initialState));
        // console.log(result);
        act(() => {
            result.current.updateKeyword('Batman');
        });

        // console.log(result.current.keyword);
        expect(result.current.keyword).toBe('Batman');
    });


    test('Should update correctly times value', () => {
        const { result } = renderHook(() => useSearchForm(initialState));
        // console.log(result);
        act(() => {
            result.current.updateKeyword('Batman');
            result.current.updateKeyword('Superman');
        });

        // console.log(result.current.keyword);
        expect(result.current.times).toBe(2);
    });
});