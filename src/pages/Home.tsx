import Footer from "../comp/layout/Footer";
import Header from "../comp/layout/Header";
import PricingCard from "../comp/shared/PricingCard";
import styles from "./Home.module.css";
interface Props  {
  selver: () => void ;
  gold: () => void ;
}
export default function Home({ selver, gold} : Props) {
  return (
    <>
      <Header />
      <section className={styles.hero}>
        <div className={`container ${styles.container}`}>
          <div className={styles.content}>
            <div>
              <h1>نحن نقدم التأمين الأفضل قيمة </h1>
              <p>خطوات بسيطة يمكنك اتخاذها لتحسين وضعك المالي لبقية حياتك</p>
            </div>
            <button className={styles.big}>باقات تامين الشركات</button>
          </div>
          <img src="/assets/imgs/hero.png" alt="" />
        </div>
      </section>
      <section className={styles.services}>
        <div className={`container ${styles.container}`}>
          <img className={styles.tabs} src="/assets/imgs/icon tabs.svg" alt="" />
          <div className={styles.content}>
            <div>
              <h2>التأمين على السيارات </h2>
              <p>
                وضع خطة لنشوء الحياة. ,نحن نحمي أغلى أصولك، مما يسمح لك بتخصيص
                وقتك وطاقتك لأشياء أكثر أهمية في الحياة.
              </p>
            </div>
            <button className={styles.md}>باقات تامين الشركات</button>
          </div>
          <img className={styles.banner} src="/assets/imgs/services.png" alt="" />
        </div>
      </section>
      <section className={styles.plans}>
        <div className={`container ${styles.container}`}>

          <h2>باقات تامين الشركات</h2>
          <div className={styles.cardCont}>
              <PricingCard
                title="25,000 ريال سعودى"
                sub="الباقة الفضية"
                points={[
                  "250,000 ريال سعودى حد اقصى للعلاج.",
                  "شبكة مستشفيات مكونة من 3 مستشفيات.",
                  "مستوى الاقامة غرفة مفردة الى جناح عادى.",
                  "تغطية الأسنان: مغطى ابتداء من 1000 ريال ",
                  "سعودي مع شمول تنظيف الأسنان من الجير لمرة واحدة بالسنة",
                  "تغطية النظارات الطبية: ابتداءً من 200 ريال سعودي",
                  "تغطية العيادات الداخلية: مغطى",
                ]}
                action="/payment"
                actionName="قدم الآن"
                select={selver}
              />
               <PricingCard
                title="50,000 ريال سعودى"
                sub="الباقة الذهبية"
                points={[
                  "500,000 ريال سعودى حد اقصى للعلاج.",
                  "شبكة مستشفيات مكونة من 7 مستشفيات.",
                  "مستوى الاقامة غرفة مفردة الى جناح عادى.",
                  "تغطية الأسنان: مغطى ابتداء من 2000 ريال ",
                  "سعودي مع شمول تنظيف الأسنان من الجير لمرة واحدة بالسنة",
                  "تغطية النظارات الطبية: ابتداءً من 400 ريال سعودي",
                  "تغطية العيادات الداخلية: مغطى",
                ]}
                action="/payment"
                actionName="قدم الآن"
                select={gold}
              />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
