// import {useState} from 'react';
import {useMutation, useQuery} from '@tanstack/react-query';
import {useCounterStore} from './useCounterStore';

const Counter = () => {
  const counter = useCounterStore(store => store.counter);
  const setCounter = useCounterStore(store => store.setCounter);

  const {
    data,
    isLoading,
    error,
    isError,
    isFetching,
    isFetched,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ['key'],
    queryFn: async () => {
      const resp = await fetch('google.com');
      const response = await resp.json();
      return response;
    },
    useErrorBoundary: true,
    refetchOnMount: true,
    staleTime: Infinity,
    // refetchOnWindowFocus: false,
    enabled: false,
  });

  const onClickHandler = () => {
    // prepare data
    refetch();
  };

  return (
    <>
      <p>counter value is {counter}</p>
      <button onClick={() => setCounter()}>increase</button>
    </>
  );
};

// const Counter = () => {
//   const [counter, setCounter] = useState(0);
//   return (
//     <>
//       <p>counter value is {counter}</p>
//       <button onClick={() => setCounter(prevCount => prevCount + 1)}>
//         increase
//       </button>
//     </>
//   );
// };

export default Counter;
