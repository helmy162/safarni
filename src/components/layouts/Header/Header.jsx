import React, { useState, useEffect, Fragment } from "react";
import styles from "./Header.module.scss";
import Layout from "../Layout/Layout";
import { Button, Link, Logo } from "../../elements";
import { useCustomState } from "../../../state/state";

export default ({ data = [] }) => {
  const [sticky, setSticky] = useState(false);
  const actions = useCustomState()[1];

  const handleResize = () => {
    setSticky(window.pageYOffset > 200 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  const menu = data.map((item, index) => {
      return (
        <li key={index}>
          <Link url={item.url} hoverStyle={{ color: "#26735b" }}>
            {item.name}
          </Link>
        </li>
      );
  });

  const header = (
    <Layout style={{margin:'0px',}}>
      <div className={styles.header} style={{borderBottom:'1px solid #0d261e',  minHeight:'61px'}}>
        <Link url="/">
          <Logo dark={sticky} />
        </Link>

        <ul className={styles.menu}>{menu}</ul>

        <Link url="/" hoverStyle={{ color: "#26735b", background:'#fff', border:'1px solid #26735b', transition:'all 0.5s ease-in-out'}} className={styles.accountbtn}>
            Account
        </Link>
        <Link url="/" hoverStyle={{ color: "#26735b", background:'#fff', border:'1px solid #26735b', transition:'all 0.5s ease-in-out'}} className={styles.accountbtn2}>
            <i className='fa-solid fa-user'></i>
        </Link>


        <div
          className={styles.btn_mobile}
          onClick={() => actions.toogleSidebar()}
        >
          <Button
            after="&#xf0c9;"
            type="solid-white-tb"
            hoverType="solid-gray-tb"
          />
        </div>
      </div>
    </Layout>
  );

  return (
    <Fragment>
      <div className={styles.wrapper}>{header}</div>
      <div
        className={[
          styles.wrapper,
          sticky ? styles.sticky : styles.hidden,
        ].join(" ")}
      >
        {header}
      </div>
    </Fragment>
  );
};
