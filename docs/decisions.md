---
title: Quyết định & quality gate
description: Việc cần chốt trước Phase 1 và tiêu chuẩn hoàn thành Phase 0
---

# Quyết định & quality gate

Trang này là danh sách quyết định mở của Brief, không phải một danh sách đã được phê duyệt. Owner cần cập nhật trước khi chuyển Brief từ `draft` sang `active`.

## Quyết định mở

| ID | Cần chốt | Tác động |
|---|---|---|
| NW-Q01 | Ai là owner và người duyệt Brief? | Agent cần biết ai được biến đề xuất thành quy tắc |
| NW-Q02 | Brief canonical sẽ đặt ở đâu trong hệ Nemo12? | Tránh hai nguồn sự thật |
| NW-Q03 | Nemo Waves được đọc Compass bằng cơ chế và quyền nào; gửi đề xuất cập nhật ngược ra sao? | Giữ thông điệp và channel playbook luôn đúng |
| NW-Q04 | Tư liệu nội bộ nằm ở đâu và ai được truy cập? | Thiết kế intake và quyền hạn |
| NW-Q05 | Ai xác nhận consent cho ảnh, tin nhắn và chuyện của learner/gia đình? | Chặn sử dụng sai quyền |
| NW-Q06 | Audience, content pillar và kênh MVP đầu tiên là gì? | Khoanh phạm vi để thử trên dữ liệu thật |
| NW-Q07 | Ai duyệt cuối trước khi đăng? Trường hợp nào cho phép tự động đăng? | Thiết kế approval |
| NW-Q08 | Metric thành công của MVP là gì? | Đo giá trị tích lũy, không chỉ số bài |

## Gate để kết thúc Phase 0

- [ ] Có owner và người duyệt được nêu tên.
- [ ] Brief được đặt tại một địa chỉ canonical; website này dẫn về đó hoặc được công nhận là nguồn chính thức.
- [ ] Cách đọc Docs/Compass và cập nhật tri thức được phê duyệt.
- [ ] Có inventory nguồn dữ liệu nội bộ và quy tắc quyền dùng theo loại asset.
- [ ] Audience, content pillar và kênh MVP được chốt.
- [ ] Gate của Processing, Governance và Distribution có tiêu chí kiểm được.
- [ ] Có 10–20 case mẫu, gồm cả trường hợp phải từ chối hoặc trả lại.
- [ ] Agent có quy tắc đọc Brief, truy vết nguồn và báo xung đột.

## Bước kế tiếp

Khi gate Phase 0 đạt, bắt đầu **Content Processing Module** bằng một luồng nhỏ: `source record → insight → content brief → draft`. Dùng case thật để kiểm tra luồng tạo, luồng từ chối và việc truy ngược nguồn.
