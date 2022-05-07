import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={styles.banner}>
                <img
                    src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b47e97673b956ef015df1b6fe7ec9949e830eeb1dcf0e33a67494b1c8a4c04e4._RI_V_TTW_.jpg"
                    alt=""/>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.avaDes}>
                    <div className={styles.avatar}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png"
                            alt=""/>
                    </div>
                    <div className={styles.descr}>
                        <div className={styles.descrItem}>
                            Alex R.
                        </div>
                        <div className={styles.descrItem}>
                            Date of birth: 10 July
                        </div>
                        <div className={styles.descrItem}>
                            Education: TPU
                        </div>
                        <div className={styles.descrItem}>
                            Web Site: github.com/vegvisir46
                        </div>
                    </div>
                </div>

                <MyPosts />
            </div>

        </div>
    );
};

export default Profile;