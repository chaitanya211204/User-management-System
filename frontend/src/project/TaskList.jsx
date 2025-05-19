import { Card, Badge } from 'react-bootstrap';

const TaskList = ({ tasks }) => (
  <div className="mb-4">
    <h5>Tasks</h5>
    {tasks.map(task => (
      <Card key={task.id} className="mb-2">
        <Card.Body>
          <Card.Title>{task.title}</Card.Title>
          <Card.Text>
            Assigned to: {task.assignee} | Due: {task.deadline}
          </Card.Text>
          <Badge bg={
            task.status === 'Complete' ? 'success' :
            task.status === 'In Progress' ? 'warning' : 'secondary'
          }>
            {task.status}
          </Badge>
        </Card.Body>
      </Card>
    ))}
  </div>
);

export default TaskList;
