// src/data/news.js
// Импортируем изображения из src/assets (Vite позаботится о бандлинге)
import img1 from '../assets/img-5.jpg'
import img2 from '../assets/img-6.jpg'
import img3 from '../assets/img-7.jpg'

const news = [
  {
    id: '1',
    date: '2025-08-14',
    image: img1,
    title: {
      uz: "Fergana School xususiy maktabida avtobus qatnovi yo‘lga qo‘yildi. ",
      ru: "В частной школе Fergana School организовано движение школьных автобусов.",
      en: "School Bus Service at Fergana School"
    },
    excerpt: {
      uz: "O‘quvchilarimizning maktabga xavfsiz va qulay tarzda yetib kelishini ta’minlash maqsadida maxsus avtobuslar tashkil etildi.",
      ru: "В целях обеспечения безопасности и удобства учащихся для них организован специальный автобусный транспорт.",
      en: "To ensure the safety and convenience of our students, Fergana School has organized a dedicated school bus service."
    },
    content: {
      uz: "O‘quvchilarimizning maktabga xavfsiz va qulay tarzda yetib kelishini ta’minlash maqsadida maxsus avtobuslar tashkil etildi. Avtobuslar Farg‘ona shahrining turli hududlaridan qatnovchi belgilangan marshrut va jadval asosida har kuni o‘quvchilarni olib keladi hamda darslardan so‘ng uylariga qaytaradi.",
      ru: "В целях обеспечения безопасности и удобства учащихся для них организован специальный автобусный транспорт. Автобусы курсируют по различным районам города Ферганы в соответствии с утверждённым маршрутом и расписанием, ежедневно доставляя учеников в школу и обратно домой после занятий.",
      en: "To ensure the safety and convenience of our students, Fergana School has organized a dedicated school bus service. The buses operate along designated routes and schedules across different districts of Fergana City, transporting students to school in the morning and bringing them back home after classes."
    }
  },
  {
    id: '2',
    date: '2025-08-09',
    image: img2,
    title: { 
      uz: "Fergana School oshxonasida o‘quvchilar uchun mazali va sifatli ovqatlar tayyorlanmoqda.", 
      ru: "В школьной столовой Fergana School готовятся вкусные и качественные блюда.", 
      en: "Delicious and high-quality meals are prepared at the Fergana School cafeteria." 
    },
    excerpt: { 
      uz: "Bolalar salomatligi va to‘g‘ri ovqatlanishini ta’minlash maqsadida menyu mutaxassislar tomonidan ishlab chiqilgan bo‘lib, faqatgina sifatli hamda toza mahsulotlardan foydalaniladi.", 
      ru: "Для обеспечения здоровья и правильного питания учащихся меню составлено специалистами, при этом используются только свежие и качественные продукты.", 
      en: "To ensure the health and proper nutrition of our students, the menu is carefully designed by specialists and prepared using only fresh and high-quality ingredients." },
    content: { 
      uz: "Fergana School oshxonasida o‘quvchilar uchun mazali va sifatli ovqatlar tayyorlanmoqda. Bolalar salomatligi va to‘g‘ri ovqatlanishini ta’minlash maqsadida menyu mutaxassislar tomonidan ishlab chiqilgan bo‘lib, faqatgina sifatli hamda toza mahsulotlardan foydalaniladi.", 
      ru: "В школьной столовой Fergana School готовятся вкусные и качественные блюда. Для обеспечения здоровья и правильного питания учащихся меню составлено специалистами, при этом используются только свежие и качественные продукты. Блюда не только вкусные, но и полезные, способствующие полноценному развитию детей.", 
      en: "Delicious and high-quality meals are prepared at the Fergana School cafeteria. To ensure the health and proper nutrition of our students, the menu is carefully designed by specialists and prepared using only fresh and high-quality ingredients. The meals are not only tasty but also nutritious, supporting the students’ overall growth and development." }
  },
  {
    id: '3',
    date: '2025-07-9',
    image: img3,
    title: { 
      uz: "Fergana School xususiy maktabida dars jarayonlari zamonaviy metodika asosida tashkil etilgan.", 
      ru: "Учебный процесс в частной школе Fergana School организован на основе современных методик.", 
      en: "The learning process at Fergana School is organized based on modern educational methods." },
    excerpt: { 
      uz: "Ta’lim jarayonida ilg‘or pedagogik texnologiyalar, interaktiv metodlar va amaliy mashg‘ulotlarga alohida e’tibor qaratiladi.", 
      ru: "В образовательном процессе используются передовые педагогические технологии, интерактивные методы и практические занятия.", 
      en: "Advanced teaching technologies, interactive methods, and practical activities are actively applied during lessons." },
    content: { 
      uz: "Fergana School xususiy maktabida dars jarayonlari zamonaviy metodika asosida tashkil etilgan. Ta’lim jarayonida ilg‘or pedagogik texnologiyalar, interaktiv metodlar va amaliy mashg‘ulotlarga alohida e’tibor qaratiladi. Har bir fan bo‘yicha o‘quvchilarning bilim olish jarayoni nazariy va amaliy mashg‘ulotlar uyg‘unligida olib boriladi.", 
      ru: "Учебный процесс в частной школе Fergana School организован на основе современных методик. В образовательном процессе используются передовые педагогические технологии, интерактивные методы и практические занятия. По каждому предмету обучение строится в гармонии теории и практики.", 
      en: "The learning process at Fergana School is organized based on modern educational methods. Advanced teaching technologies, interactive methods, and practical activities are actively applied during lessons. For each subject, the learning process combines both theory and practice to ensure effective education." }
  }
]

export default news
