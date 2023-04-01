import React from 'react';

const ExperienceCard = ({ data }) => {
  return (
    <div className="timeline">
      <div className="icon"></div>
      <div className="date-content">
        <div className="date-outer">
          <span className="date">
            <span className="monthYear">{data.startDate} - </span>
            <br />
            <span className="monthYear">{data.endDate}</span>
          </span>
        </div>
      </div>
      <div className="timeline-content">
        <h5 className="role">{data.role}</h5>
        <p className="description">
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;