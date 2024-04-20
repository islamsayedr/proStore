import { useState } from "react";
import styles from "./Review2.module.css";
import Btn from "../comp/shared/Btn";
import Summary from "../comp/shared/Summary";

export default function Review1({plan=""}) {
  return (
    <div className={styles.container}>
      <Main plan={plan}/>
      <Summary plan={plan}/>
    </div>
  );
}

function Main({plan=""}) {
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

      <div className={styles.sum}>
        <div className={styles.row}>
          <span className={styles.cell}>عدد الدفعات</span>
          <div className={styles.cell}>3</div>
        </div>
        <div className={styles.row}>
          <span className={styles.cell}>قيمة الدفعة</span>
          <div className={styles.cell}>{plan==="selver" ?"8,333":"16,666"}</div>
        </div>
      </div>
      <div className={styles.milestones}>
        <span>الدفعات</span>
        <div className={styles.row}>
          <Milestone
            num="1"
            name="الدفعةالاولى"
            money={plan==="selver" ?"8,333":"16,666"}
            date="22/10/2024"
          />
          <Milestone
            num="2"
            name="الدفعة الثانية"
            money={plan==="selver" ?"8,333":"16,666"}
            date="22/11/2024"
          />
        </div>
        <Milestone
          num="3"
          name="الدفعة الثالثة"
          money={plan==="selver" ?"8,333":"16,666"}
          date="22/12/2024"
        />
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

function Milestone({
  num = "1",
  name = "الدفعة الاولى",
  money = "4,000",
  date = "22/10/2024",
}) {
  return (
    <div className={styles.mile}>
      <h3 className={styles.xhead}>
        <span>{num}</span>
        {name}
      </h3>
      <div className={styles.xrow}>
        <span className={styles.xcell}>قيمة الدفعة</span>
        <div className={styles.xcell}>{money}</div>
      </div>
      <div className={styles.xrow}>
        <span className={styles.xcell}>موعد السداد</span>
        <div className={styles.xcell}>{date}</div>
      </div>
      <div className={styles.xrow}>
        <span className={styles.xcell}>الحالة</span>
        <div className={styles.xcell}>غير مدفع</div>
      </div>
    </div>
  );
}
