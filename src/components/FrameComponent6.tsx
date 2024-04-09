import { FunctionComponent } from "react";
import FrameComponent9 from "./FrameComponent9";
import styles from "./FrameComponent6.module.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <div className={styles.merger}>
      <FrameComponent9
        buyNow="View All"
        propPadding="var(--padding-7xl) var(--padding-43xl) var(--padding-7xl) var(--padding-44xl)"
      />
    </div>
  );
};

export default FrameComponent6;
