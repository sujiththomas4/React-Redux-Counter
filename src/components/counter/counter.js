import { useEffect } from "react";
import "./counter.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {initializeCounter,decrementCounter,incrementCounter,setCounter} from '../../actions/counterActions'

const Counter = () => {
  const dispatch = useDispatch();
  const {counter_val} = useSelector(state=>state);
  useEffect(()=>{
    dispatch(initializeCounter())
  },[dispatch]);
  return (
    <div className="fullWidthheight">
      <div className="counterWrapper">
        <div className="counterCtrl counterCtrl_dec" onClick={()=>dispatch(decrementCounter())}>
          <FaMinus className="counterDec_Icn" />
        </div>
        <div className="counterCtrl counterCtrl_Inp">
          <input type="number" value={counter_val} onChange={(event)=>dispatch(setCounter(parseInt(event.target.value )))}/>
        </div>
        <div className="counterCtrl counterCtrl_inc" onClick={()=>dispatch(incrementCounter())}>
          <FaPlus className="counterInc_Icn" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
