import './search-panel.css';

const SearchPanel = () => {
    return (
        <input
            type="text"
            /* form-control search-input - Bootstrap class */
            className="form-control search-input"
            placeholder="Find employee" />
    );
};

export default SearchPanel;