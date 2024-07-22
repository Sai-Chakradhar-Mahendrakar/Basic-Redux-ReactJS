import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';


const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.value)
  const showCounter = useSelector(state => state.counter.showCounter)
  const toggleCounterHandler = () => {
    // dispatch({type: 'toggle'})
    dispatch(counterActions.toggle())
  };

  const incrementHandler = () => {
    // dispatch({type: 'increment'})
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    // dispatch({type: 'increase', payload: 19})
    dispatch(counterActions.increase(5))
  }

  const decrementHandler = () => {
    // dispatch({type: 'decrement'})
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
