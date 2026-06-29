export interface Feature {
  id: string
  icon: string
  title: string
  description: string
  color: string
}

export const features: Feature[] = [
  {
    id: 'heart-rate',
    icon: 'Heart',
    title: 'Heart Rate',
    description: 'Theo dõi nhịp tim 24/7 với độ chính xác lâm sàng.',
    color: 'text-rose-400',
  },
  {
    id: 'spo2',
    icon: 'Droplets',
    title: 'SpO2',
    description: 'Đo nồng độ oxy trong máu liên tục, cảnh báo sớm bất thường.',
    color: 'text-blue-400',
  },
  {
    id: 'hrv',
    icon: 'Activity',
    title: 'HRV',
    description: 'Phân tích Heart Rate Variability để đánh giá mức độ phục hồi.',
    color: 'text-green-400',
  },
  {
    id: 'sleep',
    icon: 'Moon',
    title: 'Sleep Tracking',
    description: 'Phân tích chu kỳ giấc ngủ sâu, REM và thức giấc.',
    color: 'text-purple-400',
  },
  {
    id: 'temperature',
    icon: 'Thermometer',
    title: 'Nhiệt độ cơ thể',
    description: 'Theo dõi nhiệt độ da liên tục, phát hiện dấu hiệu bệnh sớm.',
    color: 'text-orange-400',
  },
  {
    id: 'activity',
    icon: 'Zap',
    title: 'Activity',
    description: 'Đếm bước, calo tiêu thụ và phân tích vận động hàng ngày.',
    color: 'text-yellow-400',
  },
]
