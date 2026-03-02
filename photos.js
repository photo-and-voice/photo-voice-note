// Photo & Voice データ
// 写真を追加するときはこの配列に新しいオブジェクトを追加し、
// images/ フォルダに画像ファイルを置く
// exif は撮影時のカメラ記録データ（なければ null）

const photos = [
  {
    id: "PH-001",
    src: "images/01_kuju_winter.jpg",
    voice: "九重の高原、日の出前。マクロレンズで霜柱を撮る。めっちゃ寒い。",
    contexts: ["写真合宿", "マクロ", "体感：寒"],
    place: "九重高原・大分",
    season: "冬",
    exif: {
      date: "2024.01.14",
      camera: "Phase One IQ260",
      lens: "105-210mm f/4.5",
      focal: "210mm",
      f: "f/5.6",
      iso: "ISO 100",
      ss: "1/30s"
    }
  },
  {
    id: "PH-002",
    src: "images/02_asagimadara.jpg",
    voice: "アサギマダラの聖地。お盆明けの少し遅れた夏休み。師匠と長野へ。",
    contexts: ["写真合宿", "マクロ"],
    place: "長野",
    season: "夏",
    exif: {
      date: "2025.08.24",
      camera: "OM-1",
      lens: "OM 90mm F3.5",
      focal: "90mm",
      f: "f/3.5",
      iso: "ISO 500",
      ss: "1/800s"
    }
  },
  {
    id: "PH-003",
    src: "images/03_takamiyama.jpg",
    voice: "夜明けと共に登る。暑くて大変。暗い杉林も夏場は助かる。",
    contexts: ["山", "体感：暑", "近畿の山"],
    place: "高見山・奈良",
    season: "夏",
    exif: {
      date: "2025.07.27",
      camera: "GFX 50S",
      lens: "GF35-70mm F4.5-5.6 WR",
      focal: "70mm",
      f: "f/5.6",
      iso: "ISO 1000",
      ss: "1/125s"
    }
  },
  {
    id: "PH-004",
    src: "images/04_iwawaki_surf.jpg",
    voice: "久しぶりの石脇。波は小さいけど楽しめた。最近なかなか行けていない。",
    contexts: ["海"],
    place: "石脇・鳥取",
    season: "夏",
    exif: {
      date: "2025.07.12",
      camera: "TG-7",
      lens: null,
      focal: "5mm",
      f: "f/9.0",
      iso: "ISO 100",
      ss: "1/1000s"
    }
  },
  {
    id: "PH-005",
    src: "images/05_shiraga_mushroom.jpg",
    voice: "キノコがいっぱい。低いけど良い山。秋の始まり、よく晴れた日。",
    contexts: ["山", "マクロ", "近畿の山"],
    place: "白髪岳・兵庫",
    season: "秋",
    exif: {
      date: "2025.09.21",
      camera: "GFX 50S",
      lens: "GF35-70mm F4.5-5.6 WR",
      focal: "70mm",
      f: "f/5.6",
      iso: "ISO 1600",
      ss: "1/125s"
    }
  },
  {
    id: "PH-006",
    src: "images/06_shakagatake.jpg",
    voice: "いつものトレーニングする山。この日はよく晴れた。ここは天気に恵まれにくい。",
    contexts: ["山", "近畿の山"],
    place: "釈迦ヶ岳・三重",
    season: "夏",
    exif: {
      date: "2025.06.21",
      camera: "OM-1",
      lens: "M.40-150mm F2.8 + MC-14",
      focal: "115mm",
      f: "f/10",
      iso: "ISO 200",
      ss: "1/400s"
    }
  },
  {
    id: "PH-007",
    src: "images/07_hyonosen.jpg",
    voice: "ハチ高原が見える。夏が暑い時には何とか登れる貴重な山。",
    contexts: ["山", "体感：暑", "近畿の山"],
    place: "氷ノ山・兵庫",
    season: "夏",
    exif: {
      date: "2025.06.29",
      camera: "GFX 50S",
      lens: "GF35-70mm F4.5-5.6 WR",
      focal: "61mm",
      f: "f/7.1",
      iso: "ISO 200",
      ss: "1/1250s"
    }
  },
  {
    id: "PH-008",
    src: "images/08_ryugatake.jpg",
    voice: "山頂には雪が残っていた。僕たちには少しきつい。春のように天気の良かった2月の山。白の世界。",
    contexts: ["山", "体感：寒", "近畿の山"],
    place: "竜ヶ岳・三重",
    season: "冬",
    exif: null
  }
];
