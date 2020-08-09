import React from 'react';

class SearchBar extends React.Component {

  state = {term: null};

  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.handleSubmit(this.state.term);
  }

  render() {
    return(
      <div className="ui segment" >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search:</label>
            <input type="text" value={this.state.value} onChange={(e) => this.setState({term: e.target.value})} ></input>
          </div>
        </form>
      </div>);
  }
}

export default SearchBar;