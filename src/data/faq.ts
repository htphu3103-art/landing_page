export interface FAQ {
  id: string
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'HelioRing X1 có chống nước không?',
    answer:
      'Có. HelioRing X1 đạt chuẩn 5ATM, có thể đeo khi bơi lội, tắm và hoạt động dưới nước ở độ sâu tối đa 50m.',
  },
  {
    id: '2',
    question: 'Pin dùng được bao lâu?',
    answer:
      'Pin lithium tích hợp cho thời lượng lên đến 7 ngày với mức sử dụng thông thường. Sạc đầy chỉ mất 60 phút với dock sạc từ tính.',
  },
  {
    id: '3',
    question: 'AI Coach hoạt động như thế nào?',
    answer:
      'AI Coach phân tích dữ liệu sức khỏe của bạn theo thời gian thực và đưa ra gợi ý cá nhân hóa về giấc ngủ, vận động và phục hồi mỗi ngày.',
  },
  {
    id: '4',
    question: 'Dữ liệu của tôi có an toàn không?',
    answer:
      'Toàn bộ dữ liệu được mã hóa AES-256 và lưu trữ trên cloud bảo mật. Bạn toàn quyền kiểm soát và xóa dữ liệu bất kỳ lúc nào.',
  },
  {
    id: '5',
    question: 'HelioRing X1 tương thích với thiết bị nào?',
    answer:
      'Tương thích với iPhone chạy iOS 16 trở lên và Android 10 trở lên. Kết nối qua Bluetooth 5.3 Low Energy.',
  },
]
