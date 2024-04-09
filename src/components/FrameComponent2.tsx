import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  rectangle20?: string;
  oneOfTheStandoutFeaturesO?: string;
  ellipse12?: string;
  arleneMcCoy?: string;
  mcDonalds?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propLineHeight?: CSSProperties["lineHeight"];
  propMinWidth?: CSSProperties["minWidth"];
  propRight?: CSSProperties["right"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  rectangle20,
  oneOfTheStandoutFeaturesO,
  ellipse12,
  arleneMcCoy,
  mcDonalds,
  propWidth,
  propLineHeight,
  propMinWidth,
  propRight,
}) => {
  const reviewerDetailsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const mcDonaldsStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
      minWidth: propMinWidth,
    };
  }, [propLineHeight, propMinWidth]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  return (
    <div className={styles.quoteBlock}>
      <img className={styles.quoteBoxIcon} alt="" src={rectangle20} />
      <div className={styles.clientInfoPanel}>
        <img
          className={styles.clientInfoPanelChild}
          loading="lazy"
          alt=""
          src="/group-32.svg"
        />
        <div className={styles.oneOfThe}>{oneOfTheStandoutFeaturesO}</div>
      </div>
      <div className={styles.reviewDividerParent}>
        <div className={styles.reviewDivider} />
        <div className={styles.reviewCards}>
          <div className={styles.reviewerInfoCards}>
            <div
              className={styles.reviewerDetails}
              style={reviewerDetailsStyle}
            >
              <img
                className={styles.reviewerAvatarsIcon}
                loading="lazy"
                alt=""
                src={ellipse12}
              />
              <div className={styles.reviewerNameContainersWrapper}>
                <div className={styles.reviewerNameContainers}>
                  <div className={styles.arleneMccoy}>{arleneMcCoy}</div>
                  <div className={styles.mcdonalds} style={mcDonaldsStyle}>
                    {mcDonalds}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.reviewValidation}>
              <div className={styles.frameParent}>
                <img className={styles.frameChild} alt="" src="/group-34.svg" />
                <div className={styles.reviewStatusLabels}>
                  <div className={styles.verified}>Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.quoteBlockChild}
        loading="lazy"
        alt=""
        src="/group-1000001737.svg"
        style={groupIconStyle}
      />
    </div>
  );
};

export default FrameComponent2;
