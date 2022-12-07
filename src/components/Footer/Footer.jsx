import React from "react";
import cv from "../../assets/OliviaBucklandCV.pdf";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLinks}>
        <a href="mailto:oliviabuckland@hotmail.com" target="_blank">
          <FontAwesomeIcon className={styles.icons} icon={faEnvelope} />
        </a>

        <a href="https://github.com/OBuckland" target="_blank">
          {" "}
          <FontAwesomeIcon className={styles.icons} icon={faGithub} />
        </a>

        <a
          href="https://linkedin.com/in/olivia-buckland-43b0a4167"
          target="_blank"
        >
          <FontAwesomeIcon className={styles.icons} icon={faLinkedin} />
        </a>

        <a href={cv} target="_blank">
          {" "}
          <FontAwesomeIcon className={styles.icons} icon={faFile} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
