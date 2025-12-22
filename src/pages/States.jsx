const STATES = [
  { key: 'loading', title: 'Loading', desc: '조금만 기다려주세요 ⏳' },
  { key: 'empty', title: 'Empty', desc: '아직 데이터가 없어요.' },
];

export default function States() {
  return (
    <div style={{ padding: 16 }}>
      <h2>States</h2>

      {STATES.map((s) => (
        <div
          key={s.key}
          style={{ marginTop: 12, padding: 16, border: '1px solid #ddd' }}
        >
          <strong>{s.title}</strong>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
