export default function JobCard({ job }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>{job.jobTitle}</h3>
        <span style={styles.company}>{job.companyName}</span>
      </div>

      <p style={styles.summary}>{job.summary}</p>

      <div style={styles.stack}>
        {job.techStack.map((tech) => (
          <span key={tech} style={styles.chip}>
            {tech}
          </span>
        ))}
      </div>

      <div style={styles.footer}>
        <span>{job.location}</span>
        <span>{job.careerLevel}</span>
        <span>{job.postedAt}</span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: 16,
    borderRadius: 12,
    border: "1px solid #eee",
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 8,
  },
  title: {
    margin: 0,
    fontSize: 18,
  },
  company: {
    fontSize: 14,
    color: "#666",
  },
  summary: {
    fontSize: 14,
    margin: "12px 0",
  },
  stack: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  chip: {
    padding: "4px 8px",
    borderRadius: 8,
    backgroundColor: "#f2f4f7",
    fontSize: 12,
  },
  footer: {
    display: "flex",
    gap: 12,
    marginTop: 12,
    fontSize: 12,
    color: "#888",
  },
};
