import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Ser.css";
export default function Service(props) {
  return (
    <li>
      <BiCheck className="services__icon" />
      <div className="service">
        <p>{props.service}</p>
      </div>
    </li>
  );
}
