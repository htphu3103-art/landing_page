export interface Spec {
  id: string
  category: string
  items: { label: string; value: string }[]
}

export const specifications: Spec[] = [
  {
    id: 'design',
    category: 'Thiết kế',
    items: [
      { label: 'Chất liệu', value: 'Titanium Grade 5' },
      { label: 'Trọng lượng', value: '4.2g' },
      { label: 'Độ dày', value: '2.88mm' },
      { label: 'Kháng nước', value: '5ATM (50m)' },
    ],
  },
  {
    id: 'sensors',
    category: 'Cảm biến',
    items: [
      { label: 'Quang học', value: 'PPG 4 kênh' },
      { label: 'Gia tốc', value: '6-axis IMU' },
      { label: 'Nhiệt độ', value: 'NTC Sensor' },
      { label: 'Độ chính xác HR', value: '±1 BPM' },
    ],
  },
  {
    id: 'battery',
    category: 'Pin & Kết nối',
    items: [
      { label: 'Thời lượng pin', value: 'Lên đến 7 ngày' },
      { label: 'Sạc đầy', value: '60 phút' },
      { label: 'Bluetooth', value: '5.3 Low Energy' },
      { label: 'Tương thích', value: 'iOS 16+ / Android 10+' },
    ],
  },
  {
    id: 'ai',
    category: 'AI & Phần mềm',
    items: [
      { label: 'AI Coach', value: 'Gemini-powered' },
      { label: 'Cập nhật', value: 'OTA tự động' },
      { label: 'Bảo mật', value: 'AES-256 Encrypted' },
      { label: 'Lưu trữ', value: 'Cloud + Local' },
    ],
  },
]
