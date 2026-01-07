import { useMemo, useState } from "react";
import { useParams, Link, useSearchParams  } from "react-router-dom";
import { jobPostingsMock } from "../mocks/jopPostings";

export default function JobDetailPage() {
  const { id } = useParams();
const [searchParams, setSearchParams] = useSearchParams();

const tab = searchParams.get("tab") === "raw" ? "raw" : "summary";

const setTab = (nextTab) => {
  setSearchParams({ tab: nextTab });
};

  const job = useMemo(() => {
    const numId = Number(id);
    return jobPostingsMock.find((j) => j.id === numId);
  }, [id]);

  if (!job) {
    return (
      <div style={styles.container}>
        <h2 style={{ marginTop: 0 }}>채용 공고 상세</h2>
        <p style={styles.muted}>해당 공고를 찾을 수 없어요.</p>
        <Link to="/" style={styles.backLink}>
          ← 목록으로
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backLink}>
        ← 목록으로
      </Link>

      <div style={styles.header}>
        <h2 style={styles.title}>{job.jobTitle}</h2>
        <p style={styles.sub}>
          {job.companyName} · {job.location} · {job.careerLevel} · {job.postedAt}
        </p>

        <div style={styles.stack}>
          {job.techStack.map((tech) => (
            <span key={tech} style={styles.chip}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button
          type="button"
          onClick={() => setTab("summary")}
          style={{
            ...styles.tabButton,
            ...(tab === "summary" ? styles.tabActive : {}),
          }}
        >
          요약
        </button>
        <button
          type="button"
          onClick={() => setTab("raw")}
          style={{
            ...styles.tabButton,
            ...(tab === "raw" ? styles.tabActive : {}),
          }}
        >
          원문
        </button>
      </div>

      {/* Content */}
      <div style={styles.panel}>
        {tab === "summary" ? (
          <>
            <h3 style={styles.panelTitle}>AI 요약</h3>
            <p style={styles.text}>{job.summary}</p>
          </>
        ) : (
          <>
            <h3 style={styles.panelTitle}>공고 원문</h3>
            <pre style={styles.pre}>{job.rawDescription}</pre>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 920,
    margin: "0 auto",
    padding: 24,
  },
  backLink: {
    display: "inline-block",
    marginBottom: 14,
    textDecoration: "none",
    color: "#555",
    fontSize: 13,
  },
  header: {
    padding: 16,
    border: "1px solid #eee",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  title: {
    margin: 0,
    fontSize: 20,
  },
  sub: {
    margin: "6px 0 12px",
    color: "#666",
    fontSize: 13,
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
  tabs: {
    display: "flex",
    gap: 8,
    marginTop: 14,
  },
  tabButton: {
    border: "1px solid #eee",
    backgroundColor: "#fff",
    padding: "8px 12px",
    borderRadius: 10,
    cursor: "pointer",
    fontSize: 13,
    color: "#555",
  },
  tabActive: {
    backgroundColor: "#f2f4f7",
    color: "#111",
    borderColor: "#e6e6e6",
    fontWeight: 600,
  },
  panel: {
    marginTop: 10,
    padding: 16,
    border: "1px solid #eee",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  panelTitle: {
    margin: "0 0 10px",
    fontSize: 14,
  },
  text: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.6,
    color: "#222",
  },
  pre: {
    margin: 0,
    fontSize: 13,
    lineHeight: 1.6,
    color: "#222",
    whiteSpace: "pre-wrap",
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  muted: {
    color: "#666",
    fontSize: 14,
  },
};
