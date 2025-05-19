const ActivityFeed = ({ activities }) => (
  <div>
    <h5>Recent Activity</h5>
    <ul className="list-unstyled">
      {activities.map((activity, idx) => (
        <li key={idx} className="mb-1">• {activity}</li>
      ))}
    </ul>
  </div>
);

export default ActivityFeed;
