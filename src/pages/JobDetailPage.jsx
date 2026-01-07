import { useParams } from "react-router-dom";

export default function JobDetailPage() {
  const { id } = useParams();

  return (
    <div style={{ padding: 24 }}>
      <h2>채용 공고 상세</h2>
      <p>공고 ID: {id}</p>
      <p>상세 페이지는 추후 구현 예정입니다.</p>
    </div>
  );
}
