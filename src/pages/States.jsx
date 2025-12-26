import StateCard from '../components/StateCard';

const STATES = [
  { key: 'loading', title: 'Loading', desc: '조금만 기다려주세요 ⏳' },
  { key: 'empty', title: 'Empty', desc: '아직 데이터가 없어요.' },
];

export default function States() {
  return (
    <div style={{ padding: 16 }}>
      <h2>States</h2>

      {STATES.map((s) => (
        <StateCard key={s.key} title={s.title} desc={s.desc} />
      ))}
    </div>
  );
}
