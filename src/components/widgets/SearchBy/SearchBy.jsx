import React, { Fragment } from "react";
import {
  Slider,
  ParallaxHeader,
} from "../../widgets";
import { Layout } from "../../layouts";
import styles from "../../pages/Search/Search.module.scss";
import {Options, InputForm, Filters} from "../../widgets"
import { Link } from "../../elements";

import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <div className={styles.searchBy}  style={{flexBasis:'60%', justifyContent:'space-between'}}>
        <input type="search" placeholder="Search By Property Name ..." style={{flexBasis:'90%', display:'flex', alignItems:'center'}}/>
        <button type="submit" style={{flexBasis:'10%'}}>Search</button>
    </div>
  );
};
