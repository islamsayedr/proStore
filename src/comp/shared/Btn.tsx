import styles from './Btn.module.css'

export default function Btn({name="", type="", status="", action=()=>{}}) {
  return <button className={`${styles.btn} ${type ==="sec" && styles.sec} ${status ==="dis" && styles.dis} `} onClick={action}>{name}</button>;
}
