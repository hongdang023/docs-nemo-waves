---
title: Nemo Waves
description: Brief Phase 0 của Content Factory Platform cho Nemo12
---

# Nemo Waves

<div class="home-intro">

**Brief Phase 0 · Draft để thảo luận**

Nemo Waves là Content Factory Platform được đề xuất cho Nemo12: biến market research và tư liệu thật thành content có nguồn, được duyệt và đến đúng người qua đúng kênh.

</div>

::: info Trạng thái tài liệu
Đây là bản thiết kế ban đầu, chưa được đưa vào hệ `docs/` canonical của Nemo12 và chưa được duyệt để agent tự triển khai. Những quyết định còn thiếu được ghi tại [Quyết định mở](/decisions).
:::

## Luồng một content

<div class="flow-card">
  <p><strong>Market research + tư liệu thật</strong> → Processing → Governance → Distribution → Audience và kênh</p>
  <p>Content chưa đạt quay lại bước cần sửa. Kết quả sau đăng trở thành dữ liệu cho vòng sau.</p>
</div>

| Module | Câu hỏi nó trả lời | Kết quả |
|---|---|---|
| **Content Processing** | Nguyên liệu nào đáng dùng và kể câu chuyện gì? | Insight, brief, draft có nguồn |
| **Content Governance** | Content này đã đúng, được phép dùng và sẵn sàng chưa? | Bản được duyệt hoặc yêu cầu sửa |
| **Content Distribution** | Đăng cho ai, ở đâu, dưới dạng nào, khi nào? | Phiên bản theo kênh, lịch, kết quả |

## Hai nguyên tắc nền

**Compass giữ thông điệp.** Nemo Waves đọc [Brand Architecture](https://compass.nemo12.com/message-architecture), [Rules](https://compass.nemo12.com/rules), [Claims](https://compass.nemo12.com/claims/) và [Channels](https://compass.nemo12.com/channels) trước khi tạo hoặc phân phối content. Nó không tự lập một bộ thông điệp thứ hai.

**Mỗi content phải truy ngược được.** Từ bài đã đăng, team có thể tìm lại bản được duyệt, draft, brief, insight và tư liệu gốc. Điều này kế thừa tinh thần một nguồn sự thật và traceability của [Nemo12 Docs](https://docs.nemo12.com/conventions).

## Đọc tiếp

- [Brief đầy đủ](/brief): mục tiêu, phạm vi, luồng và tiêu chuẩn chốt chặn.
- [Bản đồ nguồn chuẩn](/sources): Nemo Waves lấy điều gì từ Docs, Compass và nguồn nội bộ.
- [Quyết định mở](/decisions): những việc phải chốt trước Phase 1.
