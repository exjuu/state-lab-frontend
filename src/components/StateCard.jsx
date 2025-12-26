export default function StateCard({ title, desc }) {
  return (
    <div style={{ marginTop: 12, padding: 16, border: '1px solid #ddd' }}>
      <strong>{title}</strong>
      <p>{desc}</p>
    </div>
  );
}
