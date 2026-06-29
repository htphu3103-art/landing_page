export interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  rating: number
  content: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jessica M.',
    role: 'Fitness Enthusiast',
    avatar: 'JM',
    rating: 5,
    content:
      'HelioRing X1 nhẹ đến mức tôi quên mình đang đeo nó. Dữ liệu giấc ngủ chính xác hơn bất kỳ thiết bị nào tôi từng dùng.',
  },
  {
    id: '2',
    name: 'David L.',
    role: 'Entrepreneur',
    avatar: 'DL',
    rating: 5,
    content:
      'AI Coach thực sự hữu ích — nó biết khi nào tôi cần nghỉ ngơi trước khi cơ thể tôi kịp nhận ra. Game changer.',
  },
  {
    id: '3',
    name: 'Sarah K.',
    role: 'Healthcare Professional',
    avatar: 'SK',
    rating: 4,
    content:
      'Là một chuyên gia y tế, tôi ấn tượng với độ chính xác của SpO2 và HRV. Đây là thiết bị theo dõi sức khỏe nghiêm túc.',
  },
]
