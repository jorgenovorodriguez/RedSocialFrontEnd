import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ searchParams, setSearchParams, loading }) => {
    const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                setSearchParams(new URLSearchParams({ keyword }));
            }}
        >
            <input
                type='search'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button disabled={loading}>Buscar</button>
        </form>
    );
};

SearchForm.propTypes = {
    searchParams: PropTypes.any,
    setSearchParams: PropTypes.func,
    loading: PropTypes.bool,
};

export default SearchForm;
