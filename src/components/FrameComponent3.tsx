import { FunctionComponent } from "react";
import FrameComponent4 from "./FrameComponent4";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className={styles.teamMemberGrid}>
      <FrameComponent4
        rectangle6="/rectangle-6@2x.png"
        rectangle9="/rectangle-9@2x.png"
        ellipse5="/ellipse-5@2x.png"
        cameronWilliamson="Cameron Williamson"
        gillette="Gillette"
      />
      <FrameComponent4
        rectangle6="/rectangle-10@2x.png"
        rectangle9="/rectangle-111@2x.png"
        ellipse5="/ellipse-6@2x.png"
        cameronWilliamson="Dianne Russell"
        gillette="Louis Vuitton"
        propMinWidth="unset"
        propMinWidth1="unset"
      />
      <FrameComponent4
        rectangle6="/rectangle-121@2x.png"
        rectangle9="/rectangle-131@2x.png"
        ellipse5="/ellipse-7@2x.png"
        cameronWilliamson="Jane Cooper"
        gillette="MasterCard"
        propMinWidth="unset"
        propMinWidth1="unset"
      />
      <div className={styles.teamMemberCards}>
        <img
          className={styles.teamMemberCardsChild}
          alt=""
          src="/rectangle-14@2x.png"
        />
        <div className={styles.memberPhotoWrapper}>
          <img
            className={styles.memberPhotoIcon}
            loading="lazy"
            alt=""
            src="/rectangle-17@2x.png"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.corePhilosophiesParent}>
              <div className={styles.corePhilosophies}>core philosophies</div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/ellipse-8@2x.png"
                />
                <div className={styles.frameContainer}>
                  <div className={styles.codyFisherParent}>
                    <div className={styles.codyFisher}>Cody Fisher</div>
                    <div className={styles.theWaltDisney}>
                      The Walt Disney Company
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.vectorParent}>
            <img
              className={styles.frameItem}
              alt=""
              src="/rectangle-13@2x.png"
            />
            <div className={styles.liveDemo}>Live Demo</div>
          </button>
        </div>
      </div>
      <FrameComponent4
        rectangle6="/rectangle-15@2x.png"
        rectangle9="/rectangle-18@2x.png"
        ellipse5="/ellipse-9@2x.png"
        cameronWilliamson="Wade Warren"
        gillette="Gillette"
        propMinWidth="unset"
        propMinWidth1="unset"
      />
      <FrameComponent4
        rectangle6="/rectangle-16@2x.png"
        rectangle9="/rectangle-19@2x.png"
        ellipse5="/ellipse-10@2x.png"
        cameronWilliamson="Robert Fox"
        gillette="L'Oréal"
        propMinWidth="unset"
        propMinWidth1="unset"
      />
    </div>
  );
};

export default FrameComponent3;
