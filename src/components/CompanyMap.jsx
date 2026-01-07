import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function CompanyMap({ address }) {
  const [pos, setPos] = useState(null); // { lat, lng }
  const [error, setError] = useState("");

  useEffect(() => {
    if (!address) return;

    const { kakao } = window;
    if (!kakao || !kakao.maps || !kakao.maps.services) {
      setError("카카오 지도 SDK가 아직 로드되지 않았어요.");
      return;
    }

    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, (result, status) => {
      if (status === kakao.maps.services.Status.OK && result?.[0]) {
        setPos({
          lat: Number(result[0].y),
          lng: Number(result[0].x),
        });
        setError("");
      } else {
        setError("주소를 좌표로 변환하지 못했어요.");
      }
    });
  }, [address]);

  if (!address) {
    return <p style={{ margin: 0, color: "#666", fontSize: 13 }}>주소 정보가 없어요.</p>;
  }

  if (error) {
    return <p style={{ margin: 0, color: "#666", fontSize: 13 }}>{error}</p>;
  }

  if (!pos) {
    return <p style={{ margin: 0, color: "#666", fontSize: 13 }}>지도를 불러오는 중이에요…</p>;
  }

  return (
    <Map
      center={pos}
      level={4}
      style={{ width: "100%", height: 260, borderRadius: 12 }}
    >
      <MapMarker position={pos} />
    </Map>
  );
}
