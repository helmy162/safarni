import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./Options.module.scss";
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
    <div className={styles.filter}>
      <div className={styles.nav_menu}>
        <label>
          <input type="radio" name='nav-menu' value="stays" checked={selected === 'stays'} onChange={handleChange} />
          <span>Stays</span> 
        </label>
        <label>
          <input type="radio" name='nav-menu' value="flights" checked={selected === 'flights'} onChange={handleChange} />
          <span>Flights</span> 
        </label>
        <label>
          <input type="radio" name='nav-menu' value="car" checked={selected === 'car'} onChange={handleChange} />
          <span>Car Rentals</span> 
        </label>
        <label>
          <input type="radio" name='nav-menu' value="attractions" checked={selected === 'attractions'} onChange={handleChange} />
          <span>Attractions</span> 
        </label>
        <label>
          <input type="radio" name='nav-menu' value="cruises" checked={selected === 'cruises'} onChange={handleChange} />
          <span>Cruises</span> 
        </label>
        <label>
          <input type="radio" name='nav-menu' value="packages" checked={selected === 'packages'} onChange={handleChange} />
          <span>Packages</span> 
        </label>
      </div>
      <div className="filter_button">

      </div>
    </div>
  );
};
