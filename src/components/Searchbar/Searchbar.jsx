import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Header, SearchForm, SearchButton, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.input.value;
    this.props.onSubmit(query);
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <BsSearch size="2em" />
          </SearchButton>

          <Input
            name="input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}


