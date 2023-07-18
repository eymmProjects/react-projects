import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchWidget() {
    // STATES
    const [search, setSearch] = useState('');
    // HANDLER
    const searchHandler = (e) => {
        setSearch(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="single-sidebar-widget">
            <div className="wid-title">
                <h3>Search Objects</h3>
            </div>
            <div className="search_widget">
                <form action="#">
                    <input
                        value={search}
                        onChange={searchHandler}
                        type="text"
                        placeholder="Search your keyword..."
                    />
                    <button onSubmit={submitHandler} type="submit">
                        <FaSearch />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SearchWidget;
