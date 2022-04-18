import styles from "./alert.module.css";
import cn from "classnames";

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.success]: type === "error",
      })}
    >
      {children}
    </div>
  );
}
