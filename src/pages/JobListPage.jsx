import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import JobCard from "../components/JobCard";
import { jobPostingsMock } from "../mocks/jopPostings";

export default function JobListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const stack = searchParams.get("stack") || "";

  const isLoading = false;

  const jobs = useMemo(() => {
    if (!stack) return jobPostingsMock;

    const normalized = stack.toLowerCase();
    return jobPostingsMock.filter((job) =>
      job.techStack.some((t) => t.toLowerCase() === normalized)
    );
  }, [stack]);

  const handleSelectStack = (next) => {
    if (!next) {
      setSearchParams({});
      return;
    }
    setSearchParams({ stack: next });
  };

  if (isLoading) {
    return <p style={styles.state}>채용 공고를 불러오는 중이에요...</p>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.topRow}>
        <h2 style={{ margin: 0 }}>채용 공고 요약</h2>

        <div style={styles.filters}>
          <button
            type="button"
            onClick={() => handleSelectStack("")}
            style={{
              ...styles.filterBtn,
              ...(stack === "" ? styles.filterActive : {}),
            }}
          >
            전체
          </button>
          <button
            type="button"
            onClick={() => handleSelectStack("React")}
            style={{
              ...styles.filterBtn,
              ...(stack === "React" ? styles.filterActive : {}),
            }}
          >
            React
          </button>
          <button
            type="button"
            onClick={() => handleSelectStack("Spring")}
            style={{
              ...styles.filterBtn,
              ...(stack === "Spring" ? styles.filterActive : {}),
            }}
          >
            Spring
          </button>
          <button
            type="button"
            onClick={() => handleSelectStack("AWS")}
            style={{
              ...styles.filterBtn,
              ...(stack === "AWS" ? styles.filterActive : {}),
            }}
          >
            AWS
          </button>
        </div>
      </div>

      {jobs.length === 0 ? (
        <p style={styles.state}>
          {stack ? `${stack} 스택 공고가 없어요.` : "아직 수집된 공고가 없어요."}
        </p>
      ) : (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 920,
    margin: "0 auto",
    padding: 24,
  },
  topRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 16,
  },
  filters: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  filterBtn: {
    border: "1px solid #eee",
    backgroundColor: "#fff",
    padding: "8px 10px",
    borderRadius: 10,
    cursor: "pointer",
    fontSize: 13,
    color: "#555",
  },
  filterActive: {
    backgroundColor: "#f2f4f7",
    color: "#111",
    borderColor: "#e6e6e6",
    fontWeight: 600,
  },
  state: {
    maxWidth: 920,
    margin: "100px auto",
    textAlign: "center",
    color: "#666",
    fontSize: 14,
  },
};
