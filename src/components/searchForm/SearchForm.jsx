import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchForm } from './useSearchForm';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];
const LANGUAGES = [
    { lang: 'en', description: 'English' },
    { lang: 'es', description: 'Spanish' },
    { lang: 'ja', description: 'Japonese' }
];

function SearchForm({ initialKeyword = '', initialRating = 'g', initialLang = 'en' }) {
    const pushLocation = useNavigate(); // Return a function to navigate to

    const {
        keyword, times, rating, lang, updateKeyword, updateRating, updateLang, resetSearch
    } = useSearchForm({ initialKeyword, initialRating, initialLang });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const url = (keyword) ? `/search/${keyword}/${rating}/${lang}` : '/';
        pushLocation(url);
    };

    const handleChange = evt => {
        updateKeyword(evt.target.value)
    };

    const handleChangeRating = evt => {
        updateRating(evt.target.value);
    };

    const handleChangeLanguage = evt => {
        updateLang(evt.target.value);
    };

    const handleClickReset = () => {
        resetSearch();
    };

    return (
        <form className="searchForm" onSubmit={handleSubmit}>
            <input
                type="text"
                value={keyword}
                onChange={handleChange}
                placeholder="Search a gif..."
            />
            <select value={rating} onChange={handleChangeRating}>
                <option value="" disabled>Select rating...</option>
                {
                    RATINGS.map(rating => (
                        <option key={rating} value={rating}>{rating}</option>
                    ))
                }
            </select>
            <select value={lang} onChange={handleChangeLanguage}>
                <option value="" disabled>Select language...</option>
                {
                    LANGUAGES.map(language => (
                        <option key={language.lang} value={language.lang}>{language.description}</option>
                    ))
                }
            </select>
            <input className="btn" type="submit" value="Search" aria-label="search" />
            {/* <small>{times}</small> */}
            <button className="btn" onClick={handleClickReset}>Reset</button>
        </form>
    )
}

// Memorize component to avoid re-rendering, except when its props change
export default memo(SearchForm);