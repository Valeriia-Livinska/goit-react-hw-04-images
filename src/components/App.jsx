import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from 'Api/Api';
import { Wrapper } from './App.styled';
import { GallerySkeleton } from 'GallerySkeleton/GallerySkeleton';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function getImages() {
      setIsLoading(true);

      try {
        const data = await fetchImages(query, page);

        setImages(prevImages =>
          page === 1 ? data.hits : [...prevImages, ...data.hits]
        );

        setTotalHits(prevState =>
          page === 1
            ? data.totalHits - data.hits.length
            : prevState - data.hits.length
        );

        setError(null);
      } catch {
        setError('error');
        notify();
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [error, page, query]);

  const getQuery = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const incrementPage = () => {
    setPage(state => state + 1);
  };

  function notify() {
    toast.error('Sorry, an error occurred, please try again...', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  return (
    <Wrapper>
      <Searchbar onSubmit={getQuery} />
      {page === 1 && isLoading ? (
        <GallerySkeleton />
      ) : (
        <ImageGallery images={images} />
      )}
      {!!totalHits &&
        query &&
        (!isLoading ? <Button onClick={incrementPage} /> : <Loader />)}
      <ToastContainer />
    </Wrapper>
  );
};
