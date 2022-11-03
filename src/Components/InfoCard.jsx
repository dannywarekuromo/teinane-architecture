import React from "react";
import "./InfoCard.css";

const InfoCard = ( {title, desc, text, infoCard, infoTitle, infoItem, infoDesc, infoText} ) => {
  return (
    <div className={infoCard}>
      <ul className={infoTitle}>
        <li className={infoItem}>{title}</li>
      </ul>
      <p className={infoDesc}>{desc}</p>
      <p className={infoText}>{text}</p>
    </div>
  );
};

InfoCard.defaultProps = {
    infoCard: "info-card",
    infoTitle: "info-title",
    infoItem: "info-item",
    infoDesc: "info-desc",
    infoText: "info-text",
}

export default InfoCard;
