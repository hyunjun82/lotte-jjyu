import type { GalleryItem } from "@/types";

export const galleryItems: GalleryItem[] = [
  {
    id: "ext-1",
    type: "photo",
    title: "단지 조감도",
    src: "/images/gallery/bird-eye-view.png",
    thumbnail: "/images/gallery/bird-eye-view.png",
    category: "외관",
  },
  {
    id: "ext-2",
    type: "photo",
    title: "외부 조감도",
    src: "/images/gallery/exterior-view.png",
    thumbnail: "/images/gallery/exterior-view.png",
    category: "외관",
  },
  {
    id: "ext-3",
    type: "photo",
    title: "한강 투시도",
    src: "/images/gallery/han-river-view.jpg",
    thumbnail: "/images/gallery/han-river-view.jpg",
    category: "외관",
  },
  {
    id: "ext-4",
    type: "photo",
    title: "일러스트 투시도",
    src: "/images/gallery/illustration-view.jpg",
    thumbnail: "/images/gallery/illustration-view.jpg",
    category: "외관",
  },
  {
    id: "vid-1",
    type: "video",
    title: "펜트힐 캐스케이드 주거 홍보영상",
    src: "/videos/penthill-cascade-residential.mp4",
    thumbnail: "/images/gallery/video-thumb.jpg",
    category: "영상",
  },
];
