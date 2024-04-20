import { useState } from "react";
import styles from "./Payment.module.css";
import Btn from "../comp/shared/Btn";
import Summary from "../comp/shared/Summary";
import Options from "../comp/shared/Options";

export default function Payment({plan=""}) {
  return (
    <div className={styles.container}>
      <Main />
      <Summary plan={plan}/>
    </div>
  );
}

function Main() {
  const [state, setState] = useState("default");
  const [isSelected, setIsSelected] = useState("")


  function selectPro() {
    setState("options");
  }
  function select1() {
    setIsSelected("1");
  }function select2() {
    setIsSelected("2");
  }

  return (
    <div className={styles.main}>
      <h1>اختر وسيلة الدفع</h1>
      <div className={styles.PaymentMethods}>
        <img
          src={
            state === "default"
              ? "/assets/imgs/pro.png"
              : "/assets/imgs/selectedPro.png"
          }
          alt=""
          onClick={selectPro}
        />
        <img src="/assets/imgs/visa.png" alt="" />
        <img src="/assets/imgs/mada.png" alt="" />
        <img src="/assets/imgs/bank.png" alt="" />
      </div>
      {state === "options" && <Options select1={select1} select2={select2} selected={isSelected}/>}
      <div className={styles.actions}>
        <Btn name="رجوع" type="sec" />
        <Btn name="المتابعة" status={state === "default" ? "dis" : ""} dir={isSelected ==="2" ? "/review1" : "/review2"}/>
      </div>
    </div>
  );
}
