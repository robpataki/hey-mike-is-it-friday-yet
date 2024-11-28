import { ReactNode } from "react";
import styles from "./Outcome.module.css";

type OutcomeProps = {
  children: ReactNode;
  isPositive?: boolean;
};

export const Outcome = (props: OutcomeProps) => {
  const { children, isPositive } = props;
  const className = `${styles.outcome} ${isPositive ? styles.outcomeYes : ""}`;
  return <div className={className}>{children}</div>;
};
