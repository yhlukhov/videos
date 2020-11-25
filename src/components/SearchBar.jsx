import React, { useState } from 'react';

const SearchBar = ({onSearch}) => {
    const [term, setTerm] = useState("buildings")

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearch(term);
    }

    return (
        <div className="ui segment search-bar">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Search Video</label>
                    <input
                        type="text"
                        value={term}
                        onChange={(event)=>setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;



class SearchBar_Class_Implementation extends React.Component {
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