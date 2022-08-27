import React from "react";
import "./NotFoundPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const NotFoundPage = () => {
  return (
    <div className="NotFoundPage">
      <span>
        404 Page Not Found {''}
        <FontAwesomeIcon icon={faCoffee} />
      </span>
    </div>
  );
};

export default NotFoundPage;
