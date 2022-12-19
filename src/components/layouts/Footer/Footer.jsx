import React from "react";
import styles from "./Footer.module.scss";
import Layout from "../Layout/Layout";
import { Logo, Link, Subscribe } from "../../elements";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];
  return (
    <Layout col="1" padding style={{ background: "rgb(255,255,255)", paddingTop:'0px'}}>
      <div className={styles.footer}>
        <div className={styles.logo_area}>
          <Logo dark={false} />
          <p>
            SAFARNI © 2022. All rights reserved. <br />
          </p>
        </div>

        <div className={styles.link_area}>
          <div className={styles.links}>
            <h4>Company</h4>
            <Link
              url={"/teams/windbridge"}
              hoverStyle={{ color: '#1A4C3C' }}
            >
              <i className="las la-angle-right" />
              About Us
            </Link>
            <Link
              url={"/teams/clear-comms"}
              hoverStyle={{ color: '#1A4C3C' }}
            >
              <i className="las la-angle-right" />
              Destinations
            </Link>
            <Link
              url={"/teams/clear-comms"}
              hoverStyle={{ color: '#1A4C3C' }}
            >
              <i className="las la-angle-right" />
              Contact
            </Link>
          </div>
          <div className={styles.links}>
            <h4>Help</h4>
            <Link
              url={"/help/faqs"}
              hoverStyle={{ color: '#1A4C3C' }}
            >
              <i className="las la-angle-right" />
              FAQ
            </Link>
            <Link
              url={"/help/cancelation-policy"}
              hoverStyle={{ color: '#1A4C3C' }}
            >
              <i className="las la-angle-right" />
              Cancelation
            </Link>
            <Link
              url={"/help/press"}
              hoverStyle={{ color: '#1A4C3C' }}
            >
              <i className="las la-angle-right" />
              Press
            </Link>
          </div>
          <div className={styles.links}>
            <h4>More</h4>
            <Link
              url={"/rent"}
              hoverStyle={{ color: '#1A4C3C' }}
            >
              <i className="las la-angle-right" />
              Rent
            </Link>
            <Link
              url={"/suggestions"}
              hoverStyle={{ color: '#1A4C3C' }}
            >
              <i className="las la-angle-right" />
              Suggestions
            </Link>
          </div>
          <div className={styles.links}>
            <h4>Terms & Conditions</h4>
            <Link
              url={"/privacy-policy"}
              hoverStyle={{ color: '#1A4C3C' }}
            >
              <i className="las la-angle-right" />
              Privacy
            </Link>
            <Link
              url={"/terms-of-use"}
              hoverStyle={{ color: '#1A4C3C' }}
            >
              <i className="las la-angle-right" />
              Terms of Use
            </Link>
            <Link
              url={"/accessibility"}
              hoverStyle={{ color: '#1A4C3C' }}
            >
              <i className="las la-angle-right" />
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
