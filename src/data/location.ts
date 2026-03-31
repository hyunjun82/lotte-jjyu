import type { Infrastructure } from "@/types";

export const infrastructureData: Infrastructure[] = [
  {
    category: "교통",
    categoryIcon: "🚇",
    items: [
      { name: "7호선 학동역", distance: "약 400m", time: "도보 5분" },
      { name: "수인분당선 강남구청역", distance: "약 600m", time: "도보 8분" },
      { name: "경부고속도로", distance: "인접", time: "차량 5분" },
      { name: "강남대로", distance: "인접", time: "도보 3분" },
    ],
  },
  {
    category: "교육",
    categoryIcon: "🎓",
    items: [
      { name: "논현초등학교", distance: "약 300m", time: "도보 5분" },
      { name: "영동중학교", distance: "약 500m", time: "도보 7분" },
      { name: "영동고등학교", distance: "약 700m", time: "도보 10분" },
    ],
  },
  {
    category: "편의시설",
    categoryIcon: "🛒",
    items: [
      { name: "강남 CGV", distance: "약 500m", time: "도보 7분" },
      { name: "현대백화점 무역센터점", distance: "약 1.5km", time: "차량 5분" },
      { name: "코엑스몰", distance: "약 2km", time: "차량 7분" },
    ],
  },
  {
    category: "의료",
    categoryIcon: "🏥",
    items: [
      { name: "강남세브란스병원", distance: "약 1km", time: "차량 5분" },
      { name: "삼성서울병원", distance: "약 2.5km", time: "차량 10분" },
    ],
  },
  {
    category: "자연환경",
    categoryIcon: "🌳",
    items: [
      { name: "도산공원", distance: "약 800m", time: "도보 10분" },
      { name: "한강시민공원", distance: "약 1.5km", time: "차량 5분" },
      { name: "선정릉", distance: "약 1.5km", time: "차량 7분" },
    ],
  },
];
