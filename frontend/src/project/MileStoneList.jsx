import { ListGroup } from 'react-bootstrap';

const MilestoneList = ({ milestones }) => (
  <div className="mb-4">
    <h5>Milestones</h5>
    <ListGroup>
      {milestones.map(m => (
        <ListGroup.Item key={m.id}>
          {m.title} - <strong>{m.status}</strong>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </div>
);

export default MilestoneList;
