// import React from 'react';
// import { Link } from 'react-router-dom';

// const Profile = ({ image, name, title, description }) => {
//   const profileSlug = name.replace(/\s+/g, '-').toLowerCase(); // create a URL-friendly slug

//   return (
//     <Link to={`/profile/${profileSlug}`}>
//       <div className="flex flex-col items-center bg-blue-600 p-4 rounded-lg shadow-lg w-48 cursor-pointer">
//         <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
//           <img src={image} alt={name} className="w-full h-full object-cover" />
//         </div>
//         <h2 className="text-white text-xl font-semibold">{name}</h2>
//         <h3 className="text-blue-200 text-sm">{title}</h3>
//         <p className="text-blue-100 text-center text-xs mt-2">{description}</p>
//         <button className="mt-4 bg-white text-blue-600 p-2 rounded-full">
//           <span className="text-xl">&#x27A4;</span>
//         </button>
//       </div>
//     </Link>
//   );
// };

// export default Profile;

// import React from "react";
// import { Link } from "react-router-dom";
// import './Profile.scss'; // Подключение CSS файла

// const Profile = ({ image, name, title, description }) => {
//   const profileSlug = name.replace(/\s+/g, "-").toLowerCase(); // create a URL-friendly slug

//   return (
//     <Link to={`/profile/${profileSlug}`}>
//       <div className="profile-card">
//         <div className="profile-image">
//           <img src={image} alt={name} />
//         </div>
//         <div className="profile-info">
//           <h2 className="profile-name">{name}</h2>
//           <h3 className="profile-title">{title}</h3>
//           <p className="profile-description">{description}</p>
//         </div>
//         <button className="profile-button">
//           <span className="arrow-icon">&#x27A4;</span>
//         </button>
//       </div>
//     </Link>
//   );
// };

// export default Profile;

import React from "react";
import "./Profile.scss"; // Подключение SCSS файла
import { Link } from "react-router-dom";
import Arrow from "./images/Arrow.svg";

const Profile = ({ image, name, title, description, circleImage }) => {
  const profileSlug = name.replace(/\s+/g, "-").toLowerCase(); // create a URL-friendly slug

  return (
    <div className="profile-card">
      <Link to={`/profile/${profileSlug}`}>
        <div className="profile-circle">
          <img src={circleImage} alt="" srcset="" />
          {/* Здесь можно разместить картинку */}
        </div>
        <h2 className="profile-name">{name}</h2>
        <h3 className="profile-title">{title}</h3>

        <div className="profile-arrow">
          {/* <span>&#x27A4;</span> */}
          <img src={Arrow} alt="" srcset="" className="arrow-img" />
        </div>
      </Link>
    </div>
  );
};

export default Profile;
