import JobCard from "../components/JobCard";
import { jobPostingsMock } from "../mocks/jopPostings";

export default function JobListPage() {
  const isLoading = false;
  const jobs = jobPostingsMock;

  if (isLoading) {
    return <p style={styles.state}>채용 공고를 불러오는 중이에요...</p>;
  }

  if (jobs.length === 0) {
    return <p style={styles.state}>아직 수집된 채용 공고가 없어요.</p>;
  }

  return (
    <div style={styles.container}>
      <h2>채용 공고 요약</h2>
      {jobs.map((job) => (
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
  state: {
    maxWidth: 720,
    margin: "100px auto",
    textAlign: "center",
    color: "#666",
    fontSize: 14,
  },
};
