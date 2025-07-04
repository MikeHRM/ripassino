import {useCounterStore} from './useCounterStore';

const CounterValue = () => {
  const counter = useCounterStore(store => store.counter);
  const anotherCounter = useCounterStore(store => store.anotherCounter);

  const a = Math.random();
  const b = Math.random();

  if (a > 0.01) {
    return 'more';
  }

  return (
    <>
      <p>counter value is {counter}</p>
      <p>another counter value is {anotherCounter}</p>
    </>
  );
};

export default CounterValue;
