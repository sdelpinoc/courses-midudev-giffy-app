import { memo, useState } from 'react';

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({keyword})
    };

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={keyword}
                onChange={handleChange}
                placeholder="Search a gif..."
            />
            <input type="submit" value="Search" />
        </form>
    )
}

// Memorize component to avoid re-rendering, except when its props change
export default memo(SearchForm);