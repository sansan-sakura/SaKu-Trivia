import useSWR from "swr";

const fetcher = async (url) => {
  return await fetch(url).then((res) => res.json());
};

export const useGetData = (difficulty, id) => {
  const { data, error, isLoading } = useSWR(
    () => (difficulty && id ? `/get/quiz/${id}/${difficulty}` : null),
    () => fetcher(`https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${difficulty}`)
  );

  return { data, error, isLoading };
};

export const useGifs = (url, id) => {
  const { data, error, isLoading } = useSWR(`/get/gifs/${id}`, () => fetcher(url));

  return { data, error, isLoading };
};
