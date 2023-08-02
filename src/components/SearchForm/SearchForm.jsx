import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ searchParams, setSearchParams, loading }) => {
    const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');

    return (
        <div className='searchForm'>
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    setSearchParams(new URLSearchParams({ keyword }));
                }}
            >
                <input
                    placeholder='nombre de usuario...'
                    type='search'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button disabled={loading}>Buscar</button>
            </form>
        </div>
    );
};

SearchForm.propTypes = {
    searchParams: PropTypes.any,
    setSearchParams: PropTypes.func,
    loading: PropTypes.bool,
};

export default SearchForm;
