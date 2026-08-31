import hadirinLogin from '@/assets/hadirin/login.webp'
import hadirinEventPage from '@/assets/hadirin/event page.webp'
import hadirinEventDetail from '@/assets/hadirin/event detail.webp'
import hadirinCreateEvent from '@/assets/hadirin/create event.webp'
import hadirinDesignStudio from '@/assets/hadirin/design studio.webp'
import hadirinListPeserta from '@/assets/hadirin/list peserta.webp'
import hadirinProfile from '@/assets/hadirin/profile.png'
import hadirinSelfCheckin from '@/assets/hadirin/self checkin.webp'
import hadirin2Svg from '@/assets/hadirin/hadirin 2.webp'
import hadirinLogo from '@/assets/hadirin/hadirin logo.webp'
import rjaLogo from '@/assets/rja/rja logo.webp'
import rjaSvg from '@/assets/rja/rja.webp'
import rjaDashboard from '@/assets/rja/dashboard.webp'
import rjaLogin from '@/assets/rja/login.webp'
import rjaGudang from '@/assets/rja/tab - gudang.webp'
import rjaPosKasir from '@/assets/rja/tab - pos kasir.webp'
// import skripsiSvg from '@/assets/skripsi/skripsi 1.svg'
import duitOnlenSvg from '@/assets/duitOnlen/duitOnlen.svg'
import duitOnlen2Svg from '@/assets/duitOnlen/duitOnlen2.svg'
import duitOnlenLogo from '@/assets/duitOnlen/duitOnlen logo.svg'
import telkom1 from '@/assets/telkom/telkom1.svg'
import telkom2 from '@/assets/telkom/telkom2.svg'
import telkom3 from '@/assets/telkom/telkom3.svg'
import telkom4 from '@/assets/telkom/telkom4.svg'
import pickieLogo from '@/assets/pickie/pickie logo.png'
import pickie1 from '@/assets/pickie/pickie1.webp'
import pickie2 from '@/assets/pickie/pickie2.webp'
import pickie3 from '@/assets/pickie/pickie3.webp'
import pickie4 from '@/assets/pickie/pickie4.webp'

export interface ProjectData {
  id: string
  num: string
  title: string
  subtitle: string
  tools: string
  description: string
  longDescription: string
  keyFeatures: string[]
  techStack: string[]
  liveUrl?: string
  playStoreUrl?: string
  appStoreUrl?: string
  githubUrl?: string
  repoLabel?: string
  category: string
  logo?: string
  coverImage?: string
  images?: string[]
}

export interface ExperienceData {
  role: string
  company: string
  year: string
  period: string
  description: string
}

export const personalInfo = {
  name: 'Ihsanul Hadi Alghifari',
  shortName: 'Ihsan Hadi',
  title: 'Mobile Flutter & Full-Stack Developer',
  email: 'ihsanhadi57@gmail.com',
  phone: '+6282377852004',
  github: 'https://github.com/ihsanhadi57',
  githubHandle: 'ihsanhadi57',
  linkedin: 'https://www.linkedin.com/in/ihsanul-hadi-alghifari-639779267/',
  education: 'Universitas Sriwijaya — Informatics Engineering (Aug 2022 - Dec 2025)',
  about:
    'Informatics Engineering graduate focused on Flutter mobile development with experience building production-ready apps. Backed by Android/Kotlin expertise and a deep learning background in YOLO-based face detection from my undergraduate thesis.',
}

export const experiences: ExperienceData[] = [
  {
    role: 'Freelance Flutter Engineer',
    company: 'Self Employed',
    year: 'NOW',
    period: '2025 to Present',
    description:
      'Building production ready Flutter applications such as hadir.in and Rumah Jahit Alya ERP, with clean BLoC and Riverpod architecture, Play Store publishing, and backend integrations.',
  },
  {
    role: 'Mobile Developer Learning Path',
    company: 'Bangkit 2024 Batch 2 (MSIB Batch 7)',
    year: '2024',
    period: '2024',
    description:
      'Completed 912 hours of Android and Kotlin training, from fundamentals to intermediate machine learning integration, with an average score of 87.46 across all 8 courses.',
  },
  {
    role: 'Mobile Developer (Capstone)',
    company: 'Braincore.id, Bangkit 2024 Batch 2',
    year: '2024',
    period: '2024',
    description:
      'Built DuitOnlen, an Android app with real time face liveness detection for secure authentication, using Kotlin and Jetpack Compose in a cross functional team.',
  },
  {
    role: 'Access Service Operation (Internship)',
    company: 'PT Telkom Indonesia, Witel Jambi',
    year: '2024',
    period: 'Jun 2024 - Aug 2024',
    description:
      'Supported operational service administration by managing operational data, ensuring reporting accuracy, and built an intern performance monitoring dashboard using Laravel, React, and Inertia.js, later adopted for future cohorts.',
  },
]

export const projects: ProjectData[] = [
  {
    id: 'pickie',
    num: '01',
    title: 'Pickie',
    subtitle: 'Pickleball Partner Matching App',
    tools: 'Flutter, Dart, Riverpod, Supabase, Firebase',
    description:
      'A pickleball partner matching app that connects players based on compatibility, playing style, skill level, and goals, not just location.',
    longDescription:
      'Contracted as the Flutter developer for Pickie, a mobile app built for the pickleball community. The app calculates a compatibility score to help players find partners who match their playing style, schedule, and experience, with mutual matching and in app chat once both players connect.',
    keyFeatures: [
      'Compatibility based player discovery filtered by skill level, play goals, frequency, and availability',
      'Smart matching that scores compatibility beyond simple location proximity',
      'Mutual match and in app chat once both players express interest',
      'Verified player profiles across the pickleball community',
      'Live on the Apple App Store and Play Store',
    ],
    techStack: ['Flutter', 'Dart', 'Riverpod', 'Supabase', 'Firebase'],
    category: 'Flutter & Supabase',
    appStoreUrl: 'https://apps.apple.com/us/app/pickie-court-chemistry/id6790645164',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pickie.app',
    logo: pickieLogo,
    coverImage: pickie1,
    images: [
      pickie1,
      pickie2,
      pickie3,
      pickie4,
    ],
  },
  {
    id: 'hadir-in',
    num: '02',
    title: 'hadir.in',
    subtitle: 'Event & Digital Ticket Platform',
    tools: 'Flutter, Dart, BLoC, Node.js, Express, Prisma, PostgreSQL',
    description:
      'Production-ready event & digital ticket management platform live on Google Play Store with dynamic QR attendance and GPS geofencing.',
    longDescription:
      'Built a full-stack event management platform featuring dynamic e-ticket generation, bulk email dispatch via Cloudinary & Sharp, QR scanning, GPS geofencing for fraud-proof attendance validation, and Midtrans payment gateway integration for pay-as-you-go quota top-up.',
    keyFeatures: [
      'Feature-First Clean Architecture using Flutter & BLoC state management',
      'Dynamic e-ticket engine with automated bulk email delivery',
      'Secure QR scanning & GPS geofencing for fraud-resistant attendance',
      'Midtrans payment gateway integration for automated email quota top-up',
      'Live and published on the Google Play Store',
    ],
    techStack: ['Flutter', 'Dart', 'BLoC', 'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'Midtrans'],
    liveUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7469003899421704192/',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hadirin.mobile',
    githubUrl: 'https://github.com/ihsanhadi57/hadir.in',
    category: 'Flutter & Node.js',
    logo: hadirinLogo,
    coverImage: hadirin2Svg,
    images: [
      hadirinLogin,
      hadirinEventPage,
      hadirinEventDetail,
      hadirinCreateEvent,
      hadirinDesignStudio,
      hadirinListPeserta,
      hadirinProfile,
      hadirinSelfCheckin,
    ],
  },
  {
    id: 'rumah-jahit-alya',
    num: '03',
    title: 'Rumah Jahit Alya',
    subtitle: 'Tailoring Operations ERP App',
    tools: 'Flutter, Dart, Firebase, Firestore, Riverpod, GoRouter',
    description:
      'Production-ready Flutter ERP app unifying POS, Inventory, and Payroll into a single cross-platform system with real-time Firestore sync.',
    longDescription:
      'Deployed to a real tailoring business client. Engineered transaction logic using Firestore Write Batches to automate stock updates, SPK auto-generation, and real-time wage calculation across interdependent tailoring operations.',
    keyFeatures: [
      'Multi-module Flutter architecture with Riverpod & GoRouter persistent navigation',
      'Firestore Write Batches for real-time stock, SPK, and payroll transaction consistency',
      'Automated tailoring POS and material inventory tracking',
      'Deployed and actively used in real tailoring business operations',
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Riverpod', 'GoRouter'],
    liveUrl: 'https://drive.google.com/file/d/13TDPurnzu_uNPHegsv8kFSZGHjOzciSm/view?usp=sharing',
    githubUrl: 'https://github.com/ihsanhadi57/Rumah-Jahit',
    category: 'Flutter & Firebase',
    logo: rjaLogo,
    coverImage: rjaSvg,
    images: [
      rjaLogin,
      rjaDashboard,
      rjaPosKasir,
      rjaGudang,
    ],
  },
  // {
  //   id: 'small-face-yolov11',
  //   num: '03',
  //   title: 'Small Face Detection with YOLOv11',
  //   subtitle: 'AI & Computer Vision System',
  //   tools: 'PyTorch, Python, YOLOv11, SAHI, Real-ESRGAN, OpenCV, Streamlit',
  //   description:
  //     'Optimized small-face detection system using YOLOv11, SAHI grid search, and Real-ESRGAN 2x super-resolution for low-resolution scenarios.',
  //   longDescription:
  //     'Developed an end-to-end AI detection pipeline for undergraduate thesis. Designed custom detection head architecture, SAHI inference acceleration, and Real-ESRGAN 2x super-resolution image quality enhancement deployed as an interactive Streamlit web app.',
  //   keyFeatures: [
  //     'Custom detection head architecture tailored for small-face detection',
  //     'SAHI (Slicing Aided Hyper Inference) grid search inference strategy',
  //     'Real-ESRGAN 2x super-resolution image quality enhancement',
  //     'Interactive AI web app interface built with Streamlit & PyTorch',
  //   ],
  //   techStack: ['PyTorch', 'Python', 'YOLOv11', 'SAHI', 'Real-ESRGAN', 'OpenCV', 'Streamlit'],
  //   githubUrl: 'https://repository.unsri.ac.id/189952/',
  //   repoLabel: 'Repository',
  //   category: 'AI & Vision',
  //   coverImage: skripsiSvg,
  // },
  {
    id: 'liveness-face-app',
    num: '04',
    title: 'Face Liveness Verification App',
    subtitle: 'Android AI Security Prototype',
    tools: 'Kotlin, Jetpack Compose, Android SDK, Deep Learning ML Model',
    description:
      'Mobile application prototype integrating real-time anti-spoof liveness detection to strengthen face authentication security.',
    longDescription:
      'Designed an intuitive and secure UI/UX authentication flow in Jetpack Compose, integrating a deep learning anti-spoofing liveness detection model for real-time face verification on Android.',
    keyFeatures: [
      'Real-time anti-spoofing face liveness detection model integration',
      'Modern Android architecture using Kotlin & Jetpack Compose UI',
      'Secure biometric authentication workflow prototype',
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Machine Learning', 'Figma'],
    githubUrl: 'https://github.com/liveness-detection-bangkit-team',
    category: 'Android Kotlin',
    liveUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7280369975612088320/',
    coverImage: duitOnlenSvg,
    logo: duitOnlenLogo,
    images: [
      duitOnlenSvg,
      duitOnlen2Svg,
    ],
  },
  {
    id: 'dashboard-intern-tracker',
    num: '05',
    title: 'Dashboard Intern Tracker',
    subtitle: 'Full-Stack Performance System',
    tools: 'Laravel, PHP, React, Inertia.js, SQLite, TailwindCSS',
    description:
      'Full-stack dashboard web system designed to monitor, evaluate, and track intern performance and contribution records.',
    longDescription:
      'Developed backend logic using Laravel with MVC architecture, SQLite relational database schema, server-side data validation, and seamless React frontend data handling via Inertia.js.',
    keyFeatures: [
      'Full-stack Laravel + React integration using Inertia.js',
      'Relational database schema with SQLite & Eloquent ORM',
      'Server-side validation & intern contribution analytics dashboard',
    ],
    techStack: ['Laravel', 'PHP', 'React', 'Inertia.js', 'SQLite', 'TailwindCSS'],
    category: 'Full Stack',
    coverImage: telkom1,
    images: [
      telkom1,
      telkom2,
      telkom3,
      telkom4,
    ],
  },
]
