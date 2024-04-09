import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.testimonialContainerWrapper}>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialPanel}>
          <FrameComponent2
            rectangle20="/quote-box@2x.png"
            oneOfTheStandoutFeaturesO="One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance."
            ellipse12="/ellipse-12@2x.png"
            arleneMcCoy="Arlene McCoy"
            mcDonalds="McDonald's"
          />
          <FrameComponent2
            rectangle20="/rectangle-21@2x.png"
            oneOfTheStandoutFeaturesO="Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming."
            ellipse12="/ellipse-13@2x.png"
            arleneMcCoy="Kathryn Murphy"
            mcDonalds="General Electric"
            propWidth="235.4px"
            propLineHeight="110.6%"
            propMinWidth="89px"
            propRight="33.7px"
          />
        </div>
        <div className={styles.socialEngagementPanelWrapper}>
          <div className={styles.socialEngagementPanel}>
            <div className={styles.socialMediaIcons}>
              <img
                className={styles.socialMediaIconsChild}
                alt=""
                src="/group-39.svg"
              />
            </div>
            <img
              className={styles.engagementIndicatorIcon}
              alt=""
              src="/engagement-indicator@2x.png"
            />
            <div className={styles.socialEngagementPanelInner}>
              <img className={styles.frameChild} alt="" src="/group-40.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
