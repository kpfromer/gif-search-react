import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends PureComponent {

  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    // Clears the whole form
    e.currentTarget.reset();
  };
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search"
               name="search"
               ref={input => this.query = input}
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
    );
  }
}