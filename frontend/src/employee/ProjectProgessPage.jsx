import React from 'react';
import Header from '../project/Header.jsx';
import ProjectOverview from '../project/ProjectOverview';
import TaskList from '../project/TaskList';
import MilestoneList from '../project/MileStoneList';
import ActivityFeed from '../project/ActivityFeed';

const sampleData = {
  title: "Website Redesign",
  description: "Revamp the landing page, dashboard, and user flow.",
  startDate: "2025-05-01",
  endDate: "2025-06-30",
  progress: 65,
  tasks: [
    { id: 1, title: "Setup Backend", assignee: "Khushi", deadline: "May 20", status: "Complete" },
  ],
  milestones: [
    { id: 1, title: "Backend Complete", status: "Done" },
  ],
  activity: [
    "Khushi completed 'Setup Backend'",
  ]
};

const ProjectProgressPage = () => (
  <div className="container mt-4">
    <Header projectTitle={sampleData.title} />
    <ProjectOverview 
      description={sampleData.description}
      startDate={sampleData.startDate}
      endDate={sampleData.endDate}
    />
    <TaskList tasks={sampleData.tasks} />
    <MilestoneList milestones={sampleData.milestones} />
    <ActivityFeed activities={sampleData.activity} />
  </div>
);

export default ProjectProgressPage;
