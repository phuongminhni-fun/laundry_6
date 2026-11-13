# LAUNDRY RUSH – OMO Siêu Tốc 15 Phút

Prototype game mobile-first chạy trực tiếp trên trình duyệt, có thể deploy bằng GitHub Pages.

## Chạy local

Do dùng JavaScript ES Modules, không mở `index.html` bằng `file://`. Chạy một static server:

```bash
python3 -m http.server 8000
```

Mở http://localhost:8000

## Deploy GitHub Pages

1. Tạo repository mới và upload toàn bộ thư mục này.
2. Vào **Settings → Pages**.
3. Chọn **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save và chờ GitHub Pages build.

Không cần npm, build step hay API key.

## Gameplay hiện có

- 3 Chapter, số máy giặt và tốc độ khách tăng theo Chapter.
- Khách tối đa 4 người trong hàng chờ, thanh kiên nhẫn giảm theo thời gian.
- Chọn khách để nhận đơn; chọn OMO Xanh cho vết bẩn cứng đầu hoặc OMO Hồng cho đồ màu.
- Quy trình xử lý: giặt → sấy → gấp → giao khách.
- OMO sai làm tăng thời gian giặt; OMO đúng có điểm thưởng.
- Combo giao đơn trong vòng 3 giây, điểm tip theo kiên nhẫn.
- Booster trừ Coin, tăng tốc các công đoạn trong 10 giây.
- Điểm, Coin, sao, mở khóa Chapter và lưu tiến trình bằng localStorage.

## Cấu trúc

- `js/config.js`: cấu hình level, thời gian, target và asset path.
- `js/state.js`: trạng thái runtime.
- `js/storage.js`: lưu/đọc localStorage.
- `js/systems/`: logic khách hàng, đơn hàng, giặt, tính điểm, progression.
- `js/ui/`: HUD và thông báo.
- `assets/`: asset đã chuẩn hóa tên file ASCII, giữ nguyên hình gốc.

## Những phần cần asset bổ sung để đạt GDD đầy đủ

1. Sprite máy sấy riêng (hiện tại dùng biểu tượng UI; chưa có sprite máy sấy trong gói gốc).
2. Sprite hoạt ảnh giặt/sấy/gấp, quần áo theo từng trạng thái và hiệu ứng giao hàng.
3. Bộ biểu tượng vết bẩn riêng: bùn, dầu mỡ, cà phê, mồ hôi.
4. Bộ âm thanh thật cho click, wash, dry, fold, success và nhạc nền. Các MP3 trong ZIP gốc chỉ 10 bytes nên không dùng được.
5. Bộ asset máy giặt theo số lượng 2/3/4 và các trạng thái rảnh/đang chạy/hoàn tất.
6. UI level map 15 màn/chapter, daily missions, badge/trophy, upgrade shop và Endless Mode.

## Ghi chú phạm vi

Đây là vertical-slice playable để kiểm chứng vòng lặp gameplay và deploy web. Một số con số GDD đang được giữ ở dạng prototype và cần chốt lại trước production: 30/35 sao mở Chapter, 15 level + boss mỗi Chapter, revive bằng rewarded ads/diamond, máy giặt song song và xử lý nhiều đơn cùng lúc. Không tích hợp quảng cáo, thanh toán hoặc backend leaderboard trong bản này.
