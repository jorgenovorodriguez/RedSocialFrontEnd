import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

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
                    placeholder='Buscar'
                    type='search'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button disabled={loading}>{<FaSearch />}</button>
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
