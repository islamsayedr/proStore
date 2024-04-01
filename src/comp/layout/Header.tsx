import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>الوطنية للتامين</div>
        <ul className={styles.nav}>
          <li>الرئيسية</li>
          <li>الخدمات</li>
          <li>المدونة</li>
          <li>اتصل بنا</li>
        </ul>
        <div>
          <img src="/assets/icons/search.svg" alt="" />
          <div>
            <img src="/assets/icons/user.svg" alt="" />
            <div>
              <div>محمد على</div>
              <div>الشهد للمقاولات</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
