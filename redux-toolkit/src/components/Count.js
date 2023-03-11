import styled from "styled-components";
import { useState } from "react";
import { increment, decnement, addment, reset } from "../slice/counter-reducer";
import { useDispatch, useSelector } from "react-redux";

const Layout = styled.div`
  flex: 1;

  .click {
    display: flex;
    text-align: center;
    & > * {
      font-size: 4rem;
      flex: 1;
    }
  }

  .payload-click {
    display: flex;
    justify-content: center;
  }
`;

export const Count = () => {
  const [value, setValue] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleClick(e) {
    if (e === "+") {
      dispatch(increment());
    } else if (e === "-") {
      dispatch(decnement());
    }
  }



  return (
    <Layout>
      <div className="click">
        <button onClick={() => handleClick("+")}>+</button>
        <h1>{count}</h1>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div className="payload-click">
        <input type="text" value={value} onChange={ e => setValue(e.target.value)}/>
        <button onClick={()=>dispatch(addment(parseInt(value)))}>입력</button>
        <button onClick={()=>dispatch(reset(value))}>리셋</button>
      </div>
    </Layout>
  );
};
