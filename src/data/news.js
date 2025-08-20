// src/data/news.js
// Импортируем изображения из src/assets (Vite позаботится о бандлинге)
import img1 from '../assets/news-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/news-3.jpg'

const news = [
  {
    id: '1',
    date: '2025-08-14',
    image: img1,
    title: {
      uz: "Fergana School aeroport filialida olimpiada o'tkazildi",
      ru: "В Fergana School прошла олимпиада",
      en: "Fergana School hosted an Olympiad"
    },
    excerpt: {
      uz: "Fergana Schoolning Aeroport filialida o‘quvchilarning ilmiy salohiyatini qo‘llab-quvvatlash maqsadida olimpiada o‘tkazildi.",
      ru: "В филиале Fergana School в Аэропорте была проведена олимпиада с целью поддержки научного потенциала учащихся.",
      en: "An olympiad was held at the Airport branch of Fergana School with the aim of supporting students’ scientific potential."
    },
    content: {
      uz: "18 avgust kuni Fergana Schoolning Aeroport filialida o‘quvchilar o‘rtasida fan olimpiadasi o‘tkazildi. Tadbirning maqsadi o‘quvchilarning fanlarga bo‘lgan qiziqishini oshirish, iqtidorli yoshlarni aniqlash hamda ularning ilmiy ko‘nikmalarini rivojlantirishdan iborat bo‘ldi.",
      ru: "18 августа в аэропортовском филиале Fergana School была проведена олимпиада по предметам среди учащихся. Цель мероприятия заключалась в повышении интереса школьников к наукам, выявлении одарённых молодых людей, а также в развитии их научных навыков.",
      en: "On August 18, a subject olympiad was held among students at the Airport branch of Fergana School. The purpose of the event was to increase students’ interest in sciences, identify talented youth, and develop their scientific skills."
    }
  },
  {
    id: '2',
    date: '2025-08-09',
    image: img2,
    title: { 
    uz: "Fergana School xususiy maktabida ochiq eshiklar kuni", 
    ru: "В частной школе Fergana School был проведён День открытых дверей.", 
    en: "An Open Doors Day was held at Fergana School private school." 
    },
    excerpt: { 
    uz: "Tadbirning asosiy maqsadi ota-onalar va o‘quvchilarga ta’lim jarayoni hamda yaratilgan shart-sharoitlar bilan yaqindan tanishtirishdan iborat bo‘ldi.", 
    ru: "Основной целью мероприятия было ознакомление родителей и учащихся с учебным процессом и созданными условиями.", 
    en: "The main purpose of the event was to familiarize parents and students with the educational process and the facilities provided." },
    content: { 
    uz: "Ochiq eshiklar kuni mehmonlarda katta taassurot qoldirdi. Ko‘plab ota-onalar va o‘quvchilar maktabning ta’lim sifati va yaratilgan shart-sharoitlarga yuqori baho berdilar.", 
    ru: "День открытых дверей произвёл большое впечатление на гостей. Многие родители и учащиеся высоко оценили качество образования и созданные условия в школе.", 
    en: "The Open Doors Day left a great impression on the guests. Many parents and students highly appreciated the quality of education and the facilities provided at the school." }
  },
  {
    id: '3',
    date: '2025-07-9',
    image: img3,
    title: { 
    uz: "Kelajakka qadam loyihasi doirasida Karyera kuni tashkil etildi", 
    ru: "В рамках проекта «Шаг в будущее» был организован День карьеры.", 
    en: "Creative Evening" },
    excerpt: { 
    uz: "Farg'ona davlat universiteti tashabbusi bilan Kelajakka qadam loyihasi doirasida Karyera kuni tashkil etildi.", 
    ru: "По инициативе Ферганского государственного университета в рамках проекта «Шаг в будущее» был организован День карьеры.", 
    en: "At the initiative of Fergana State University, a Career Day was organized within the framework of the “Step into the Future” project." },
    content: { 
    uz: "Tadbir dasturi doirasida ishtirokchilar uchun ma’ruzalar, mahorat darslari, panel suhbatlar, kasbiy yo‘naltirish testlari hamda HR-mutaxassislar bilan yakka tartibdagi konsultatsiyalar tashkil etildi.", 
    ru: "В рамках программы мероприятия для участников были организованы лекции, мастер-классы, панельные дискуссии, профориентационные тесты, а также индивидуальные консультации с HR-специалистами.", 
    en: "As part of the event program, participants attended lectures, master classes, panel discussions, career guidance tests, and individual consultations with HR specialists." }
  }
]

export default news
