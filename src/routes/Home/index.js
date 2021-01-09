import { useDispatch, useSelector } from 'react-redux';
import { getData } from './actions';

const HomeComponent = (props) => {
  const dispatch = useDispatch();
  const homeReducer = useSelector((state) => state.homeReducer);

  return (
    <div>
      Title: {homeReducer?.userData?.title}
      <button onClick={() => dispatch(getData())}>Call Api</button>
    </div>
  );
};
export default HomeComponent;
