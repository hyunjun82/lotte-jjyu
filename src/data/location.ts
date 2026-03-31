import type { Infrastructure } from "@/types";

export const infrastructureData: Infrastructure[] = [
  {
    category: "교육",
    categoryIcon: "🎓",
    items: [
      { name: "서초초등학교", distance: "300m", time: "도보 5분" },
      { name: "반포중학교", distance: "500m", time: "도보 8분" },
      { name: "서초고등학교", distance: "700m", time: "도보 10분" },
    ],
  },
  {
    category: "교통",
    categoryIcon: "🚇",
    items: [
      { name: "지하철 3호선", distance: "200m", time: "도보 3분" },
      { name: "지하철 9호선", distance: "400m", time: "도보 5분" },
      { name: "경부고속도로 IC", distance: "2km", time: "차량 5분" },
    ],
  },
  {
    category: "편의시설",
    categoryIcon: "🛒",
    items: [
      { name: "이마트", distance: "500m", time: "도보 7분" },
      { name: "신세계백화점", distance: "1.2km", time: "차량 5분" },
      { name: "코스트코", distance: "3km", time: "차량 10분" },
    ],
  },
  {
    category: "의료",
    categoryIcon: "🏥",
    items: [
      { name: "서울성모병원", distance: "1km", time: "차량 5분" },
      { name: "삼성서울병원", distance: "3km", time: "차량 10분" },
    ],
  },
  {
    category: "자연환경",
    categoryIcon: "🌳",
    items: [
      { name: "한강시민공원", distance: "500m", time: "도보 7분" },
      { name: "반포한강공원", distance: "800m", time: "도보 12분" },
      { name: "서리풀공원", distance: "1km", time: "도보 15분" },
    ],
  },
];
