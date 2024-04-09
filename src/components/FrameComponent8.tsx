import { FunctionComponent } from "react";
import FrameComponent9 from "./FrameComponent9";
import styles from "./FrameComponent8.module.css";

const FrameComponent8: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.letYourMindExploreNewWorlWrapper}>
        <b className={styles.letYourMindContainer}>
          <span className={styles.letYourMindContainer1}>
            <span>{`Let your mind `}</span>explore
            <span> new world</span>
          </span>
        </b>
      </div>
      <div className={styles.callToAction}>
        <div className={styles.buttons}>
          <div className={styles.description}>
            <div className={styles.playingElectronicGames}>
              Playing electronic games, whether through consoles, computers,
              mobile phones or another medium altogether. Gaming is a nuanced
              term that suggests regular gameplay, possibly as a hobby.
            </div>
          </div>
          <FrameComponent9 buyNow="Buy now" />
        </div>
        <div className={styles.testimonialsDisplayWrapper}>
          <div className={styles.testimonialsDisplay}>
            <div className={styles.customerCards}>
              <div className={styles.customerAvatarsWrapper}>
                <b className={styles.customerAvatars}>300+</b>
              </div>
              <div className={styles.uniqueStyle}>Unique style</div>
            </div>
            <div className={styles.customerCards1}>
              <div className={styles.wrapper}>
                <b className={styles.b}>200+</b>
              </div>
              <div className={styles.projectFinished}>Project finished</div>
            </div>
            <div className={styles.customerCards2}>
              <div className={styles.container}>
                <b className={styles.b1}>500+</b>
              </div>
              <div className={styles.happyCustomer}>Happy customer</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/group-11@2x.png"
      />
    </section>
  );
};

export default FrameComponent8;
