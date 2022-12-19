import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./Filters.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Button } from "../../elements";
import { Options } from "../../elements";

export default ({ data = [] }) => {


  const s = 'stays';
  const [selected, setSelected] = useState( s? s : 'stays');

  const handleChange = (event) => {
    setSelected(event.target.value);
  };


  return (
    <div className={styles.filters_section}>
      <h1 >Filter by</h1>
      <div className={styles.filter}>
        <h2>Stops</h2>
        <label>
          <input type="checkbox" /><span className="checkmark"></span> One
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> Two
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> Three
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> Four
        </label>
      </div>
      <div className={styles.filter}>
        <h2>Stops</h2>
        <label>
          <input type="checkbox" /><span className="checkmark"></span> One
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> Two
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> Three
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> Four
        </label>
      </div>
    </div>
  );
};
