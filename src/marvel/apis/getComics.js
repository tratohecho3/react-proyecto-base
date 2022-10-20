import { URL_API_MAPPING } from '../../helpers/urls';

export const getComics = async (query) => {
  const url = `${URL_API_MAPPING['CHARACTERS_URL']}/${query}/comics${URL_API_MAPPING['AUTH']}`;
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
  };

  const resp = await fetch(url, {
    method: 'GET',
    headers,
  });

  const { data } = await resp.json();
  const comics = data.results.map((comic) => ({
    id: comic.id,
    title: comic.title,
    modified: comic.modified,
    image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
    description: comic.description,
    price: comic.prices.price,
    count: data.count,
    total: data.total,
  }));
  return comics;
};
