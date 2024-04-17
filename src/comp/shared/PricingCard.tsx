import { NavLink } from "react-router-dom";
import Styles from "./PricingCard.module.css";

export default function PricingCard({
  title = "",
  sub = "",
  points = {},
  action = "",
  actionName = "",
}) {
  if (!points || !Array.isArray(points)) {
    return null; // or handle the case where points is not valid
  }
  return (
    <div className={Styles.card}>
      <div className={Styles.head}>
        <h3>{title}</h3>
        <span>{sub}</span>
      </div>
      <div className={Styles.body}>
        {points.map((point) => {
          return (
            <div className={Styles.point} key={point}>
              •<span>{point}</span>
            </div>
          );
        })}
      </div>
      <NavLink to={action}>
        <button className={Styles.md}>{actionName}</button>
      </NavLink>
    </div>
  );
}
