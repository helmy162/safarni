import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./Card.module.scss";
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
    <div className={styles.cards}>
      <div className={styles.card}>
        <div style={{width:'100%', display:'flex'}}>
          <div style={{flexBasis: '33%'}}>
            <h1>4:35pm - 8:20am</h1>
            <h3>Cairo (CAI) - London (LHR)</h3>
            <h3> <i className="fa-regular fa-clock"></i> Lufthansa</h3>
          </div>
          <div style={{flexBasis: '33%'}}>
            <h3>17h 45m (1 stop)</h3>
            <h3>11h 30m in Vienna (VIE)</h3>
          </div>
          <div style={{flexBasis: '33%', alignItems:'end', justifyContent:'end'}}>
            <h1 style={{fontSize:'26px'}}>$743</h1>
            <h3>Round trip per traveler</h3>
          </div>
        </div>
        <div style={{flexBasis: '100%', borderTop:'1px solid #0d261e', margin:'10px -15px -10px', padding:'5px 15px'}}>
          <h2>Carry-on included</h2>
        </div>
      </div>
      <div className={styles.card}>
        <div style={{width:'100%', display:'flex'}}>
          <div style={{flexBasis: '20%'}}>
            <img src="https://i.ibb.co/xLX4jVf/04f5c0900b780dc7c9a4e6c4ea1d4c5e.png" alt="" />
          </div>
          <div style={{flexBasis: '50%'}}>
            <h1>Hyundai Tucson</h1>
            <br />
            <h3>SUV</h3>
            <h3>4 Seater</h3>
            <h3>Automatic</h3>
          </div>
          <div style={{flexBasis: '20%', alignItems:'end'}}>
            <div style={{display:'flex', flexDirection:'column' ,alignItems:'end'}}>
              <h1 style={{fontSize:'26px'}}>$1200</h1>
              <h3>per week</h3>
            </div>
            <div className={styles.btnlist}>
              <button>
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card} style={{padding:'0px', minHeight:'256px', flexDirection:'row', border:'none'}}>
        <div style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
          <div style={{flexBasis: '40%', flexDirection:'row'}}>
            <img src="https://i.ibb.co/9cL1vwS/pexels-donald-tong-189296.jpg" alt="" />
          </div>
          <div className={styles.hotel_info} style={{flexBasis: '45%', padding:'15px', justifyContent:'space-between'}}>
            <h1>Hyatt Place London  <br />
            {
              [...Array(5)].map((e, i) => <i className="fa-solid fa-star" key={i}></i>)
            }
            </h1>
            <h3 style={{fontSize:'12px'}}>Consider a stay at Hyatt Place London Heathrow Airport and take advantage of dry cleaning/laundry services, a bar, and a gym. The onsite restaurant, Gallery Café, features British cuisine. Free in-room WiFi, with speed of 500+ Mbps.</h3>
            <h2> <b>9.0/10</b>  Wonderful (1,200 reviews)</h2>
          </div>
          <div style={{padding:'15px', flexBasis: '10%', alignItems:'end', justifyContent:'end'}}>
            <h1 style={{fontSize:'32px'}}>$121</h1>
            <h3>per night</h3>
          </div>
        </div>
      </div>
      <div className={styles.btnlist}>
        <button>
          See More
        </button>
      </div>
    </div>
  );
};
