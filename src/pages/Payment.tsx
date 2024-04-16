import { useState } from "react";
import styles from "./Payment.module.css";
import Btn from "../comp/shared/Btn";

export default function Payment() {
  const [content, setContent] = useState("main");
  return (
    <div className={styles.container}>
      {content === "main" && <Main />}
      {content === "loading" && <Main />}
      {content === "sammary" && <Main />}
      <Sammary />
    </div>
  );
}

function Main() {
  const [state, setState] = useState("default");

  function selectPro() {
    setState("options");
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
      {state === "options" && (
        <div>
          <span>الخياريات المتاحة</span>
          <div className={styles.option}>
            <span></span>تقسيط المبلغ على 3 اقساط شهرية
          </div>
          <div className={styles.option}>
            <span></span>
            الدفع بعد 30يوم
          </div>
        </div>
      )}
      <div className={styles.actions}>
        <Btn name="رجوع" type="sec" />
        <Btn name="المتابعة" status={state === "default" ? "dis" : ""} />
      </div>
    </div>
  );
}

function Sammary() {
  return (
    <div className={styles.summary}>
      <h4> ملخص الطلب</h4>

      <div className={styles.col}>
        <label htmlFor="discond">كود الخصم</label>
        <input type="text" name="discond" placeholder="ادخل الكود..." />
      </div>

      <div className={`${styles.row} ${styles.group}`}>
        <div>
          <span>الشركة</span>
          <div>الشهد للمقاولات</div>
        </div>
        <div>
          <span>الحساب</span>
          <div>محمد على</div>
        </div>
      </div>

      <div className={`${styles.col} ${styles.group}`}>
        <div className={styles.row}>
          <span>سعر الباقة</span>
          <div>16,000 ر.س</div>
        </div>
        <div className={styles.row}>
          <span>تاريخ الطلب</span>
          <div>12 مارس 2024</div>
        </div>
        <div className={styles.row}>
          <span>نوع الباقة</span>
          <div>فضية</div>
        </div>
        <div className={styles.row}>
          <span>قيمة الخصومات</span>
          <div> 0 ر.س</div>
        </div>
      </div>

      <div className={`${styles.row} ${styles.group}`}>
        <span>اجمالى السعر بعد الخصم</span>
        <div>16,000 ر.س</div>
      </div>
    </div>
  );
}
