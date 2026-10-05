---
title: Brief Phase 0
description: Mục tiêu, phạm vi, ba module và quality gates của Nemo Waves
---

# Brief Phase 0

**ID:** `nemo-waves-brief-001` · **Version:** `0.2` · **Status:** `draft` · **Ngày rà soát:** `2026-10-05`

## 1. Mục tiêu

Nemo Waves giúp Nemo12 tìm, hiểu, kiểm định, lưu trữ, tái sử dụng và phân phối content truyền thông. Một content gốc có thể tạo ra nhiều phiên bản theo audience và kênh mà vẫn giữ đúng sự thật, quyền sử dụng và thông điệp Nemo12.

Sau mỗi chu kỳ, hệ thống cần tích lũy tri thức về audience, content và phân phối. [Media Capital](https://docs.nemo12.com/strategy/media-capital) của Nemo12 xác định giá trị lâu dài nằm ở các loại vốn này, không chỉ số bài được đăng.

## 2. Hai nguồn nguyên liệu

| Nguồn | Ví dụ | Điều kiện để dùng |
|---|---|---|
| **Market Research** | Nghiên cứu đối thủ, chủ đề, audience và thị trường Việt Nam, Thái Lan, toàn cầu | Có nguồn, thời điểm, thị trường, bằng chứng và giới hạn suy luận |
| **Tư liệu Nemo12** | Ảnh học sinh, sản phẩm website, 4F Reflection, câu chuyện gia đình, testimonial, tin nhắn | Có nguồn gốc và quyền dùng cho đúng mục đích truyền thông |

Tư liệu của learner và gia đình có thể rất giàu giá trị kể chuyện. Quyền sử dụng cần được kiểm tra **trước** khi một agent đưa nội dung vào brief hoặc bản nháp công khai. [QG-008](https://docs.nemo12.com/quality/quality-gates) của Nemo12 đặt child-data, consent và media moderation vào quality gate.

## 3. Ba module

### Content Processing

Nhận nguyên liệu, loại bỏ thứ thiếu nguồn hoặc thiếu quyền dùng, tìm insight, tạo content brief và draft. Một draft cần ghi được: audience, JTBD, một claim chính, bằng chứng, nguồn, CTA/offer và ràng buộc sử dụng.

**Gate P1:** nguồn và quyền dùng rõ; claim có proof; không bịa số; không hứa tính năng chưa live; draft bám [Rules của Compass](https://compass.nemo12.com/rules).

### Content Governance

Lưu brief, draft, bản duyệt, version và lịch sử quyết định. Người duyệt có thể trả lại Processing với lý do cụ thể. Content được gắn trạng thái rõ ràng, không sửa âm thầm một bản đã duyệt.

**Gate P2:** kiểm tra fact, quyền dùng, brand voice, claim, offer, người duyệt và phiên bản chính thức. Điểm chất lượng tự động là tín hiệu hỗ trợ, không thay cho phán đoán của người chịu trách nhiệm. Cách này phù hợp với bài học từ [Content Foundry](https://docs.nemo12.com/architecture/sdd-027-content-foundry).

### Content Distribution

Lấy **approved asset**, chọn channel và audience, chuyển thành phiên bản phù hợp, lên lịch, đăng và ghi kết quả. Channel profile phải có vai trò, format, nhịp, owner và quyền đăng. [Compass Channels](https://compass.nemo12.com/channels) là nguồn chuẩn hiện có; lịch cụ thể cần kiểm tra tại thời điểm chạy.

**Gate P3:** đúng bản đã duyệt, đúng kênh và format, không lộ tư liệu nhạy cảm, lịch được duyệt; việc đăng thành công có URL/log, việc đăng lỗi có lý do và đường xử lý.

## 4. Luồng và trạng thái

<div class="flow-card">
  <p><strong>Source</strong> → kiểm tra nguồn & quyền → insight + brief → draft → review → approved asset → phiên bản theo kênh → kiểm tra trước đăng → publish + measure.</p>
  <p>Thiếu nguồn/quyền: giữ lại để bổ sung. Review chưa đạt: quay về brief/draft. Bản theo kênh chưa đạt: sửa trước khi đăng.</p>
</div>

Trạng thái đề xuất: `raw → eligible → briefed → draft → in_review → approved → scheduled → published → measured`. Đường trả lại: `needs_source`, `needs_consent`, `needs_revision`, `publish_failed`. Tên trạng thái là đề xuất Phase 0, chưa phải hợp đồng kỹ thuật.

## 5. Cách Agent làm việc

1. Đọc Brief Nemo Waves bản **active** mới nhất.
2. Tìm từ khóa của tác vụ: audience, JTBD, sản phẩm, claim, campaign, channel, asset.
3. Đọc trang liên quan trong [Docs](https://docs.nemo12.com/) và [Compass](https://compass.nemo12.com/). Nếu nguồn không đọc được, ghi rõ thiếu thông tin.
4. Ghi nguồn, phiên bản và ngày đọc vào work record.
5. Thực hiện công việc trong phạm vi quyền; chạy gate của module.
6. Đề xuất cập nhật tài liệu khi phát hiện thông tin mới. Owner duyệt trước khi thay đổi canonical.

Nemo Waves cần đọc trực tiếp nguồn chuẩn, tránh giữ một bản copy brand message hoặc lịch kênh rồi để nó cũ đi.

## 6. Ranh giới với hệ hiện có

- **[Nemo12 Docs](https://docs.nemo12.com/):** chiến lược, sản phẩm, yêu cầu, kiến trúc và quality gates của hệ Nemo12.
- **[Compass](https://compass.nemo12.com/):** thông điệp, claim, story, kênh, chiến dịch và luật truyền thông. Đây là nguồn chuẩn cho những gì Nemo12 nói ra ngoài.
- **[Coral](https://docs.nemo12.com/architecture/sdd-013-coral-content-plane) và [Content Foundry](https://docs.nemo12.com/architecture/sdd-027-content-foundry):** học liệu cho learner. Nemo Waves tập trung vào content truyền thông.

## 7. MVP đề xuất

Đầu tiên chạy 10–20 content từ nguồn thật qua đủ ba gate. Chọn kênh dựa trên vai trò và tình trạng vận hành hiện tại trong Compass, ưu tiên kênh gốc và kênh chuyển đổi trước khi mở rộng. Giữ một người duyệt cuối và một bảng trạng thái chung.

Mục tiêu “phân phối một phát đến 1.000 kênh” là hướng mở rộng. Phase 0 chưa chứng minh được quyền đăng, giới hạn API, định dạng và cơ chế phê duyệt cho quy mô đó.

## 8. Tiêu chí hoàn thành Phase 0

Brief chuyển sang `active` khi owner duyệt mục tiêu, phạm vi, cách dùng Compass, danh sách nguồn, người chịu trách nhiệm consent, audience/kênh MVP, các gate và bộ case mẫu. Danh sách cụ thể ở [Quyết định & quality gate](/decisions).
