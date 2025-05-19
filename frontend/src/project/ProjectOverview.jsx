const ProjectOverview = ({ description, startDate, endDate }) => (
  <div className="mb-3">
    <p>{description}</p>
    <small>Start: {startDate} | Due: {endDate}</small>
  </div>
);

export default ProjectOverview;
