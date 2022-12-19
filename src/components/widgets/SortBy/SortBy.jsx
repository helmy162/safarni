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
    <div className={styles.sortBy} style={{flexBasis:'35%'}}>
        <h5 style={{flexBasis:'20%'}}>Sort by:</h5>
        <select defaultValue="default" name="format" id="format" style={{flexBasis:'80%'}}>
            <option value="recommended">Recommended</option>
            <option value="low_price">Lowest Price</option>
            <option value="high_price">Highest Price</option>
            <option value="alphabetical">A - Z</option>
            <option value="reverse_alphabetical">Z - A</option>
        </select>
    </div>  
  );
};
