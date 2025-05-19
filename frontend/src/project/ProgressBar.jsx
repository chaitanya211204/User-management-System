import { ProgressBar as BootstrapProgressBar } from 'react-bootstrap';

const ProgressBar = ({ percentage }) => (
  <div className="mb-4">
    <label>Overall Progress</label>
    <BootstrapProgressBar now={percentage} label={`${percentage}%`} />
  </div>
);

export default ProgressBar;
