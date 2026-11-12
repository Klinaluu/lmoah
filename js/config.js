// ============================================================
// CẤU HÌNH RIÊNG CHO KHÁCH: lmoah
// Điền nội dung vào đây rồi chạy:  python3 tools/build_customer.py lmoah
// Ảnh để trong customers/lmoah/assets/photos/ và trỏ tới bằng
// đường dẫn "assets/photos/<tên file>" (script tự thu nhỏ khi build).
// ============================================================

// ---------- thương hiệu ----------
export const GAME_TITLE = "MADE FOR US";
export const GAME_SUBTITLE = "Our love journey";
export const WINDOW_NAME = "MADE_FOR_US.EXE"; // chữ trên thanh tiêu đề cửa sổ

// ---------- lời thoại & văn bản ----------
// Game có 2 thứ tiếng: mặc định tiếng Anh, nút VIE ở màn hình mở đầu đổi sang tiếng Việt.
// Các câu dưới đây giữ nguyên câu mẫu tiếng Anh = tự dùng câu mẫu đúng thứ tiếng (js/i18n.js).
// Khách viết câu riêng: ghi 1 chuỗi (dùng cho cả hai thứ tiếng) hoặc { en: "...", vi: "..." }.
// Cách ghi { en, vi } dùng được cả cho GIFTS[].label, MILESTONES[].date/name, GAME_SUBTITLE.
export const TEXT = {
  // đoạn gặp nhau: câu chàng trai nói, rồi câu cô gái đáp lại (2 bong bóng thoại).
  // Câu riêng của từng khách (gửi ở khung chat của khách đó); để "" thì bong bóng đó không hiện.
  // Bản demo dùng câu mẫu bên dưới; khách mới tạo bằng tools/new_customer.py thì để trống sẵn.
  manLine: "em không yêu anh à?",
  womanLine: "em có màaa, em yêu anh nhất trái đất mà",
  // dòng chữ trên màn hình bầu trời sao sau khi gặp nhau
  meetText: "I'm on my solo mission but the stars guide me to you",
  // hộp thoại "System Message" ở chiếc hòm hồng
  systemMessage: "The next level is not unlocked yet.\nWould you like to continue the journey?",
  envelopeLabel: "Highly confidential document",
  // lá thư: thay bằng lời của bạn (xuống dòng bằng \n hoặc dùng chuỗi nhiều dòng)
  letterTitle: "Your love letter",
  letter: `Dear "my ride or die",

Thank you for coming into my life and choosing to stand by my side.
Baee, when you are at your worst, I will still choose you. When you look at yourself and say “I’m not worthy of love”, I will still choose you. When the whole world is backbiting you and calling you things you never did, I will still choose you. When distance makes it hard, I will still choose you. When you ask me "are you sure you love me?" for the 100th time, I will still choose you and prove it again.
Letting go is easy. You simply open your hands, turn around, and walk away. Anyone can do that. But staying? Choosing the same person every single morning, even when life gives you a hundred reasons to give up? Holding their hand when they’re struggling to hold themselves together? Praying to God to give them strength when they’ve run out of their own?
I know I can't fight every battle for you. I can't take away every burden you carry or make every difficult day disappear. But I can promise you this: you will never have to pretend to be okay just to keep me around. You don’t always have to be the strong one. On the days when you can't find the strength to keep going, let me be there to remind you that you are not alone.

I love you, Tuan Lam.

Your KO.`,
  // hiện khi chưa có file video
  videoMissing: "Wait for your video 🎬",
  // chữ trong khung ảnh còn trống
  photoPlaceholder: "(insert pictures here)",
  // nhắc xoay ngang trên điện thoại / máy tính bảng
  rotateTitle: "Please rotate to landscape",
  rotateText: "This journey is made for a sideways screen.",
  rotateTip: "⟳ Hold your device sideways to play",
  // Hướng dẫn thêm vào màn hình chính (chỉ hiện trên điện thoại / máy tính bảng).
  // Để trống thì dùng hướng dẫn mặc định (tiếng Anh / tiếng Việt) trong js/install.js.
  install: {},
};

// ---------- ảnh & video của khách ----------
// Thời gian hiện bong bóng thoại ở đoạn gặp nhau (mili giây, 1000 = 1 giây): chàng trai nói
// trước, cô gái đáp sau (mỗi bên chỉ hiện khi câu có chữ), hết thì sang màn bầu trời sao.
export const MEET_BUBBLE_MS = { man: 2500, woman: 3500 }; // câu của cô gái dài hơn → hiện lâu hơn

// Ảnh polaroid: đặt file vào assets/photos/ rồi điền đường dẫn vào từng mốc bên dưới.
// Video: đặt file .mp4 vào assets/video/ rồi điền tên vào đây (nên dưới 15MB).
export const VIDEO_SRC = "assets/video/video.mp4"; // khách gửi .mov 18s 1920x1080 → avconvert sang .mp4
// Nhạc nền: đặt file .mp3 vào assets/audio/ rồi điền tên vào đây. Để "" thì không có nhạc nền
// (vẫn còn đủ hiệu ứng nhảy/bấm nút). Tự tắt khi phát video, tự nhỏ lại một chút mỗi lần nhảy.
export const MUSIC_SRC = "assets/audio/bgm.mp3";
// Ảnh ở màn hình mở đầu (ảnh dọc kiểu photobooth rất hợp). Để "" thì hiện khung trống.
export const TITLE_PHOTO = "assets/photos/title-DSCF5798.jpg"; // ảnh áo dài khách gửi (gốc .jpeg, build đổi sang .jpg)
// true  = luôn vẽ khung ảnh trống kèm chữ hướng dẫn (dùng cho bản demo)
// false = mốc nào chưa có ảnh thì không treo khung
export const SHOW_EMPTY_PHOTO_FRAMES = false; // bản khách: mốc chưa có ảnh thì không treo khung

// Ảnh xe chở đôi. Để [] = dùng bộ 4 khung chạy xe mặc định. Chỉ có 1 ảnh thì ghi 1 file —
// game tự thêm hiệu ứng chạy (rung máy, khói, bụi, vệt gió) nên xe vẫn trông đang chạy.
//   export const COUPLE_FRAMES = ["assets/characters/Couple-Bike-Side-01.png"];
export const COUPLE_FRAMES = ["assets/characters/Couple-Bike-Side-01.png"];

// ---------- 5 món quà của chặng solo ----------
// icon: để trống ("") thì game tự vẽ hình thay thế.
// Lmoah: 5 icon riêng cắt từ trang 11 design Canva "Lmoah".
export const GIFTS = [
  { id: "matcha", label: { en: "Purple Heart", vi: "Trái tim tím" }, icon: "assets/characters/Item-PurpleHeart-01.png" },
  { id: "chocolate", label: { en: "Cassette", vi: "Băng cassette" }, icon: "assets/characters/Item-Cassette-01.png" },
  { id: "flower", label: { en: "Otter", vi: "Rái cá" }, icon: "assets/characters/Item-Otter-01.png" },
  { id: "lipstick", label: { en: "Guitar", vi: "Guitar" }, icon: "assets/characters/Item-Guitar-01.png" },
  { id: "letter", label: { en: "Pizza", vi: "Pizza" }, icon: "assets/characters/Item-Pizza-01.png" },
];

// ---------- các mốc của chặng đi đôi ----------
// Mỗi mốc là một khung polaroid treo trên nền, theo thứ tự thời gian.
//   date, name : chú thích in dưới khung ảnh — để "" thì khung không hiện chữ gì (như ở
//                đây, bản demo cố tình để trống); điền cả hai thì khung tự hiện caption
//   photo      : đường dẫn ảnh (để "" nếu chưa có)
//   sky        : hai màu gradient bầu trời [trên, dưới]
//   event      : "rain"  → trời mưa, nhảy chướng ngại để nhặt ô rồi mới đi tiếp
//                "chest" → hòm hồng: System Message → Level Unlocked → lá thư
//                "gift"  → hòm quà rơi từ trời → video
// Ba mốc có event là phần kịch bản, nên giữ nguyên thứ tự ở cuối danh sách và luôn để
// date/name trống (không phải ảnh kỷ niệm của khách).
export const MILESTONES = [
  { date: "01/2026", name: "", sky: ["#dfe9ff", "#f6c7d8"], photo: "assets/photos/01-26.jpg" },
  { date: "02/2026", name: "", sky: ["#3b2a5a", "#b57aa8"], photo: "assets/photos/02-26.jpg" },
  { date: "03/2026", name: "", sky: ["#bcd7ff", "#ffd9e8"], photo: "assets/photos/03-26.jpg" },
  { date: "04/2026", name: "", sky: ["#3b2a5a", "#b57aa8"], photo: "assets/photos/04-26.jpg" },
  { date: "05/2026", name: "", sky: ["#e3d3dc", "#b391a6"], photo: "assets/photos/05-26.jpg" },
  { date: "06/2026", name: "", sky: ["#ffe6c9", "#ffd9e8"], photo: "assets/photos/06-26.jpg" },
  { date: "07/2026", name: "", sky: ["#cfe6ff", "#ffe6c9"], photo: "assets/photos/07-26.jpg" },
  { date: "08/2026", name: "", sky: ["#ffd9c4", "#ffe7ef"], photo: "assets/photos/08-26.jpg" },
  {
    date: "", name: "", sky: ["#7fb7d9", "#cfe7f2"], photo: "",
    event: "rain",
    blocks: [{ x: 300 }, { x: 520, h: 2 }],
    platforms: [{ x: 640, w: 2, y: 110 }],
    itemAt: { x: 664, y: 166 },
  },
  { date: "", name: "", sky: ["#ffd9c4", "#ffe7ef"], photo: "", event: "chest" },
  { date: "", name: "", sky: ["#bfe0f2", "#e8f3ee"], photo: "", event: "gift" },
];

// ---------- nền parallax riêng (tuỳ chọn) ----------
// Để trống = dùng bộ nền 3 lớp mặc định (Hồ Gươm ban ngày + hoàng hôn, xem js/assets.js).
// Muốn nền riêng: bỏ ảnh vào customers/<slug>/assets/scenes/<id>/ rồi khai báo lớp (xa → gần)
// + tốc độ trôi (0 = đứng yên, 1 = trôi cùng đường). id: "ho-guom" (đi bộ, solo, gặp nhau),
// "ho-tay" (đi đôi). Ví dụ:
//   "ho-guom": { layers: ["L1.png", "L2.png", "L3.png"], speeds: [0.05, 0.16, 0.4] },
export const SCENE_LAYERS = {};
