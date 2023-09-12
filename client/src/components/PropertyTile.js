// PropertyTile.js

import React from 'react';

const PropertyTile = ({ property }) => {
  return (
    <div className="property-tile">
      <h2>{property.address}</h2>
      <p>Price: £{property.price}</p>
      <p>Beds: {property.beds}</p>
      <p>Baths: {property.baths}</p>
      <p>Pets: {property.pets ? 'Allowed' : 'Not Allowed'}</p>
      <p>Description: {property.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PropertyTile;



// an object with image / link / title details to simplify the upcoming map
/*export default function Portfolio() {
  const projects = {
    TLDR: {
      title: "TL;DR Social Media Platform",
      imgSrc: "https://user-images.githubusercontent.com/126515415/256316571-e21256ea-253d-4f4f-9cb8-186700886cb2.png",
      gitHub: "https://github.com/elleinadseer/tldr-web"
    },
    MongoDBWebAPI: {
      title: "MongoDB Web API",
      imgSrc: "https://user-images.githubusercontent.com/126515415/264110581-8485e4fb-52f2-4adb-8a5c-d260939afac0.png",
      gitHub: "https://github.com/elleinadseer/social-API-w18"
    },
    SequelizeCommerceBackend: {
      title: "Sequelize Commerce Backend",
      imgSrc: "https://user-images.githubusercontent.com/126515415/251889645-bcb22d3a-cbd4-4530-8715-c889ec826c5a.png",
      gitHub: "https://github.com/elleinadseer/sequelize-commerce-w13"
    },
    ExpressNoteTaker: {
      title: "Express Note Taker",
      imgSrc: "https://user-images.githubusercontent.com/126515415/250735965-43cab838-e990-42ef-984d-2d1b2ab1996d.png",
      gitHub: "https://github.com/elleinadseer/note-taker-w11"
    },
    SQLEmployeeTracker: {
      title: "SQL Employee Tracker",
      imgSrc: "https://user-images.githubusercontent.com/126515415/250316321-5454a06f-ad7d-4c26-ae3f-1e85cd75c9f8.png",
      gitHub: "https://github.com/elleinadseer/employee-tracker-w12"
    },
    AudibleDictionary: {
      title: "Audible Dictionary",
      imgSrc: "https://user-images.githubusercontent.com/126515415/241711134-4341cbd1-a9ca-4819-949a-d2a47d331564.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTM0Mzg2NDQsIm5iZiI6MTY5MzQzODM0NCwicGF0aCI6Ii8xMjY1MTU0MTUvMjQxNzExMTM0LTQzNDFjYmQxLWE5Y2EtNDgxOS05NDlhLWQyYTQ3ZDMzMTU2NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwODMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDgzMFQyMzMyMjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jODFjNWQ4ZjgxMjRhYTg4ZjJlY2ZjNzhjNjE0N2EyYjBmZWIyNDBlNDhhNzA4MDUzMmE4YjgxNGE0YzQyNzQzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Wjfgb1RdHek3y3C-iurM3nrCYu1h-twdCvormVf9gOE",
      gitHub: "https://github.com/elleinadseer/speak-my-words"
    },
  };

  / map of links / text to place in HTML tags
  return (
    <div>
      <div className="centerPages">
        {Object.keys(projects).map((key) => (
          <div key={key} className="photobox">
            <a href={projects[key].gitHub}>
            <h4>{projects[key].title}</h4>
            <img
              src={projects[key].imgSrc}
              alt={projects[key].title}
              width="300px"
              height="200px"
            img/></a>
          </div>
        ))}
      </div>
    </div>
  );
} */