import React, { Fragment } from "react";
import {
  Slider,
  ParallaxHeader,
} from "../../widgets";
import { Layout } from "../../layouts";
import styles from "./Home.module.scss";
import {Options, InputForm} from "../../widgets"
import { Link } from "../../elements";

import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <article >
        <Layout
          style={{
            background: "rgba(0,0,0,0)",
            boxShadow:'none',
            marginTop:'130px',
            paddingBottom: '10rem',
          }}
          col="1"
          mode="dark"
        >
          <div className={styles.slide}>
            <div className={styles.intro}>
              <h1>Travel Made Easy</h1>
              <Options/>
              <InputForm/>
              <div className={styles.imgsection} style={{backgroundImage:'url(https://images.squarespace-cdn.com/content/v1/594a6bb8c534a58bb4b04c8b/1500370615885-NYQL0WR5U79B6WLSBW2Q/airplane-plane-flight-900.jpg)', width:'100%', height:'500px', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
                <h1>Your safety matters</h1>
                <Link hoverStyle={{background:'#1a4c3c', color:'#fff'}} className={styles.imgsection_btn} url="/about">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </Fragment>
  );
};
