# Agent Instructions — HelioRing X1

## Working Directory
src/

## Folder Structure
components/common/     → Button, Container, SectionTitle, Badge, ThemeToggle
components/layout/     → Navbar, Footer
components/sections/   → mỗi section = folder/index.tsx + sub-components
data/                  → features.ts, specifications.ts, testimonials.ts, faq.ts
hooks/                 → useScrollAnimation.ts, useTheme.ts
services/              → webhook.ts
utils/                 → cn.ts
styles/                → globals.css

## Rules
- Tạo file đúng path, không hỏi lại
- Dùng cn() từ @/utils/cn
- Data tách riêng, không hardcode trong JSX
- Mobile-first Tailwind
- Export default cuối file