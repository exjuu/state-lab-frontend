import JobCard from "../components/JobCard";
import { jobPostingsMock } from "../mocks/jopPostings";

export default function JobListPage() {
  return (
    <div style={styles.container}>
      <h2>채용 공고 요약</h2>

      {jobPostingsMock.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 720,
    margin: "0 auto",
    padding: 24,
  },
};
