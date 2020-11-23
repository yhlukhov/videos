import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'buildings' }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    searchSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.term);
    }

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.searchSubmit}>
                    <div className="field">
                        <label>Search Video</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }

    componentDidMount() {
        this.props.search(this.state.term)
    }
}

export default SearchBar;