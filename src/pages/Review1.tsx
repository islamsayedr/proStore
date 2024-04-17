import { useState } from "react";
import styles from "./Review1.module.css";
import Btn from "../comp/shared/Btn";
import Summary from "../comp/shared/Summary";

export default function Review2() {
  return (
    <div className={styles.container}>
      <Main />
      <Summary />
    </div>
  );
}

function Main() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  function confirm() {
    setIsConfirmed(!isConfirmed);
  }

  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h1>تاكيد الدفع والطلب</h1>
        <img src="./assets/imgs/pro.png" alt="" />
      </div>
      <div className={styles.mess}>
        <h2>سوف يتم دفع مبلغ 16,000 ر.س بعد 30 يوم</h2>
      </div>
      <div className={styles.terms} onClick={confirm}>
        <span className={isConfirmed ? styles.select : ""}></span>
        الموافقه على الشروط والاحكام
      </div>
      <div className={styles.actions}>
        <Btn name="رجوع" type="sec" />
        <Btn
          name="تاكيد الدفع والطلب"
          dir={isConfirmed ? "/confirm" : "/review1"}
        />
      </div>
    </div>
  );
}
