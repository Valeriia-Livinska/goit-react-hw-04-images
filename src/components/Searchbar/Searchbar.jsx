import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, SearchForm, SearchButton, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const queryValue = e.target.elements.input.value;
    const query = queryValue.trim();
    if (query === '') {
      notify();
    }
    onSubmit(query);
  };

  function notify() {
    toast.warn('Please, enter a search term', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
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
};
