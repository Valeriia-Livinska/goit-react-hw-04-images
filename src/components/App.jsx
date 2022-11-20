import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from 'Api/Api';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalHits: 0,
    error: null,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const { query, page } = this.state;
      this.setState({ isLoading: true });

      try {
        const data = await fetchImages(query, page);

        this.setState(prevState => ({
          images: page === 1 ? data.hits : [...prevState.images, ...data.hits],
          totalHits:
            page === 1
              ? data.totalHits - data.hits.length
              : data.totalHits - [...prevState.images, ...data.hits].length,
        }));
        this.setState({ error: null });
      } catch {
        this.setState({ error: 'error' });
        this.notify();
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  getQuery = query => {
    this.setState({ query, page: 1, images: [] });
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  notify = () => {
    toast.error('Sorry, an error occurred, please try again...', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  render() {
    const { images, isLoading, totalHits } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.getQuery} />
        <ImageGallery images={images} />
        {!!totalHits &&
          (!isLoading ? <Button onClick={this.incrementPage} /> : <Loader />)}
        <ToastContainer />
      </Wrapper>
    );
  }
}
