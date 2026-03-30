import { time } from "framer-motion";

export const scheduleData = {
  ru: {
    "1-класс": {
      monday: [
        { time: "08:30-09:20", subject: "Русский язык", room: "11" },
        { time: "09:30-10:20", subject: "Математика", room: "11" },
        { time: "10:30-11:20", subject: "Чтение", room: "11" },
        { time: "11:30-12:20", subject: "Робототехника", room: "11" },
        { time: "13:00-13:50", subject: "Арабский язык", room: "11" },
        { time: "14:00-14:50", subject: "Математика", room: "11" },
        { time: "15:00-15:50", subject: "Воспитание", room: "11" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Русский язык", room: "11" },
        { time: "09:30-10:20", subject: "Математика", room: "11" },
        { time: "10:30-11:20", subject: "Чтение", room: "11" },
        { time: "11:30-12:20", subject: "Чтение", room: "11" },
        { time: "13:00-13:50", subject: "Английский язык", room: "11" },
        { time: "14:00-14:50", subject: "Таэквандо", room: "11" },
        { time: "15:00-15:50", subject: "Воспитание", room: "11" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Информатика", room: "11" },
        { time: "09:30-10:20", subject: "Математика", room: "11" },
        { time: "10:30-11:20", subject: "Чтение", room: "11" },
        { time: "11:30-12:20", subject: "Арабский язык", room: "11" },
        { time: "13:00-13:50", subject: "Корейский язык", room: "11" },
        { time: "14:00-14:50", subject: "Английский язык", room: "11" },
        { time: "15:00-15:50", subject: "Технология", room: "11" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Математика", room: "11" },
        { time: "09:30-10:20", subject: "Естествознание", room: "11" },
        { time: "10:30-11:20", subject: "Русский язык", room: "11" },
        { time: "11:30-12:20", subject: "Робототехника", room: "11" },
        { time: "13:00-13:50", subject: "Таэквандо", room: "11" },
        { time: "14:00-14:50", subject: "Математика", room: "11" },
        { time: "15:00-15:50", subject: "Воспитание", room: "11" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Математика", room: "11" },
        { time: "09:30-10:20", subject: "Русский язык", room: "11" },
        { time: "10:30-11:20", subject: "Воспитание", room: "11" },
        { time: "11:30-12:20", subject: "Чтение", room: "11" },
        { time: "13:00-13:50", subject: "Корейский язык", room: "11" },
        { time: "14:00-14:50", subject: "Английский язык", room: "11" },
        { time: "15:00-15:50", subject: "Воспитание", room: "11" }
      ],
      saturday: []
    },

    "2-класс": {
      monday: [
        { time: "08:30-09:20", subject: "Русский язык", room: "4" },
        { time: "09:30-10:20", subject: "Арабский язык", room: "10" },
        { time: "10:30-11:20", subject: "Чтение", room: "4" },
        { time: "11:30-12:20", subject: "Математика", room: "4" },
        { time: "13:00-13:50", subject: "Робототехника", room: "10" },
        { time: "14:00-14:50", subject: "Английский язык", room: "10" },
        { time: "15:00-15:50", subject: "Воспитание", room: "10" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Русский язык", room: "4" },
        { time: "09:30-10:20", subject: "Математика", room: "4" },
        { time: "10:30-11:20", subject: "Математика", room: "4" },
        { time: "11:30-12:20", subject: "Чтение", room: "4" },
        { time: "13:00-13:50", subject: "Таэквондо", room: "спортзал" },
        { time: "14:00-14:50", subject: "Информатика", room: "10" },
        { time: "15:00-15:50", subject: "Воспитание", room: "10" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Русский язык", room: "10" },
        { time: "09:30-10:20", subject: "Корейский язык", room: "10" },
        { time: "10:30-11:20", subject: "Математика", room: "4" },
        { time: "11:30-12:20", subject: "Чтение", room: "4" },
        { time: "13:00-13:50", subject: "Арабский язык", room: "10" },
        { time: "14:00-14:50", subject: "Музыка", room: "4" },
        { time: "15:00-15:50", subject: "Английский язык", room: "4" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Логика-развитие", room: "4" },
        { time: "09:30-10:20", subject: "Русский язык", room: "4" },
        { time: "10:30-11:20", subject: "Естествознание", room: "4" },
        { time: "11:30-12:20", subject: "Математика", room: "4" },
        { time: "13:00-13:50", subject: "Робототехника", room: "10" },
        { time: "14:00-14:50", subject: "Таэквондо", room: "спортзал" },
        { time: "15:00-15:50", subject: "Воспитание", room: "4" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Русский язык", room: "4" },
        { time: "09:30-10:20", subject: "Корейский язык", room: "10" },
        { time: "10:30-11:20", subject: "Изобразительное искусство", room: "4" },
        { time: "10:30-11:20", subject: "Чтение", room: "4" },
        { time: "11:30-12:20", subject: "Английский язык", room: "4" },
        { time: "12:30-13:00", subject: "Логика-развитие", room: "10" },
        { time: "13:00-13:50", subject: "Воспитание", room: "4" }
      ],
      saturday: []
    },

    "3-класс": {
      monday: [
        { time: "08:30-09:20", subject: "Русский язык", room: "10" },
        { time: "09:30-10:20", subject: "Арабский язык", room: "10" },
        { time: "10:30-11:20", subject: "Чтение", room: "10" },
        { time: "11:30-12:20", subject: "Математика", room: "10" },
        { time: "13:00-13:50", subject: "Робототехника", room: "10" },
        { time: "14:00-14:50", subject: "Английский язык", room: "10" },
        { time: "15:00-15:50", subject: "Воспитание", room: "10" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Русский язык", room: "10" },
        { time: "09:30-10:20", subject: "Математика", room: "10" },
        { time: "10:30-11:20", subject: "Математика", room: "10" },
        { time: "11:30-12:20", subject: "Чтение", room: "10" },
        { time: "13:00-13:50", subject: "Таэквондо", room: "спортзал" },
        { time: "14:00-14:50", subject: "Информатика", room: "10" },
        { time: "15:00-15:50", subject: "Воспитание", room: "10" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Русский язык", room: "10" },
        { time: "09:30-10:20", subject: "Корейский язык", room: "10" },
        { time: "10:30-11:20", subject: "Математика", room: "10" },
        { time: "11:30-12:20", subject: "Чтение", room: "10" },
        { time: "13:00-13:50", subject: "Арабский язык", room: "10" },
        { time: "14:00-14:50", subject: "Музыка", room: "10" },
        { time: "15:00-15:50", subject: "Английский язык", room: "10" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Логика-развитие", room: "10" },
        { time: "09:30-10:20", subject: "Русский язык", room: "10" },
        { time: "10:30-11:20", subject: "Естествознание", room: "10" },
        { time: "11:30-12:20", subject: "Математика", room: "10" },
        { time: "13:00-13:50", subject: "Робототехника", room: "10" },
        { time: "14:00-14:50", subject: "Английский язык", room: "10" },
        { time: "15:00-15:50", subject: "Воспитание", room: "10" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Классный час", room: "10" },
        { time: "09:30-10:20", subject: "Корейский язык", room: "10" },
        { time: "10:30-11:20", subject: "Изобразительное искусство", room: "10" },
        { time: "10:30-11:20", subject: "Таэквондо", room: "спортзал" },
        { time: "11:30-12:20", subject: "Чтение", room: "10" },
        { time: "13:00-13:50", subject: "Логика-развитие", room: "10" },
        { time: "14:00-14:50", subject: "Воспитание", room: "10" }
      ],
      saturday: []
    },

    "4-класс": {
      monday: [
        { time: "08:30-09:20", subject: "Арабский язык", room: "6" },
        { time: "09:30-10:20", subject: "Робототехника", room: "6" },
        { time: "10:30-11:20", subject: "Русский язык", room: "6" },
        { time: "11:30-12:20", subject: "Чтение", room: "6" },
        { time: "13:00-13:50", subject: "Таэквондо", room: "спортзал" },
        { time: "14:00-14:50", subject: "Воспитание", room: "6" },
        { time: "15:00-15:50", subject: "Английский язык", room: "6" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Русский язык", room: "6" },
        { time: "09:30-10:20", subject: "IT", room: "6" },
        { time: "10:30-11:20", subject: "Чтение", room: "6" },
        { time: "11:30-12:20", subject: "Математика", room: "6" },
        { time: "13:00-13:50", subject: "Математика", room: "6" },
        { time: "14:00-14:50", subject: "Математика", room: "6" },
        { time: "15:00-15:50", subject: "Воспитание", room: "6" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Английский язык", room: "6" },
        { time: "09:30-10:20", subject: "Арабский язык", room: "6" },
        { time: "10:30-11:20", subject: "Корейский язык", room: "6" },
        { time: "11:30-12:20", subject: "Русский язык", room: "6" },
        { time: "13:00-13:50", subject: "Математика", room: "6" },
        { time: "14:00-14:50", subject: "Чтение", room: "6" },
        { time: "15:00-15:50", subject: "Естествознание", room: "6" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Русский язык", room: "6" },
        { time: "09:30-10:20", subject: "Математика", room: "6" },
        { time: "10:30-11:20", subject: "Музыка", room: "6" },
        { time: "11:30-12:20", subject: "Математика", room: "6" },
        { time: "13:00-13:50", subject: "Английский язык", room: "6" },
        { time: "14:00-14:50", subject: "Робототехника", room: "6" },
        { time: "15:00-15:50", subject: "Естествознание", room: "6" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Изобразительное искусство", room: "6" },
        { time: "09:30-10:20", subject: "Русский язык", room: "6" },
        { time: "10:30-11:20", subject: "Корейский язык", room: "6" },
        { time: "10:30-11:20", subject: "Таэквондо", room: "спортзал" },
        { time: "11:30-12:20", subject: "Чтение", room: "6" },
        { time: "13:00-13:50", subject: "Воспитание", room: "6" },
        { time: "14:00-14:50", subject: "Английский язык", room: "6" }
      ],
      saturday: []
    },

    "5-6-класс": {
      monday: [
        { time: "08:30-09:20", subject: "Русский язык", room: "7" },
        { time: "09:30-10:20", subject: "Математика", room: "7" },
        { time: "10:30-11:20", subject: "Арабский язык", room: "7" },
        { time: "11:30-12:20", subject: "Английский язык", room: "7" },
        { time: "13:00-13:50", subject: "Английский язык", room: "7" },
        { time: "14:00-14:50", subject: "Таэквондо", room: "7" },
        { time: "15:00-15:50", subject: "История", room: "7" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "IT", room: "7" },
        { time: "09:30-10:20", subject: "Математика", room: "7" },
        { time: "09:30-10:20", subject: "Математика", room: "7" },
        { time: "10:30-11:20", subject: "Узбекский язык", room: "7" },
        { time: "11:30-12:20", subject: "Английский язык", room: "7" },
        { time: "13:00-13:50", subject: "История", room: "7" },
        { time: "14:00-14:50", subject: "Д/З", room: "7" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Корейский язык", room: "7" },
        { time: "09:30-10:20", subject: "Математика", room: "7" },
        { time: "10:30-11:20", subject: "Арабский язык", room: "7" },
        { time: "11:30-12:20", subject: "Таэквондо", room: "7" },
        { time: "13:00-13:50", subject: "Естествознание", room: "7" },
        { time: "14:00-14:50", subject: "Биология", room: "7" },
        { time: "15:00-15:50", subject: "Биология", room: "7" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Математика", room: "7" },
        { time: "09:30-10:20", subject: "Русский язык", room: "7" },
        { time: "10:30-11:20", subject: "Узбекский язык", room: "7" },
        { time: "11:30-12:20", subject: "IT", room: "7" },
        { time: "13:00-13:50", subject: "Английский язык", room: "7" },
        { time: "14:00-14:50", subject: "Английский язык", room: "7" },
        { time: "15:00-15:50", subject: "Д/З", room: "7" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Корейский язык", room: "7" },
        { time: "09:30-10:20", subject: "Литература", room: "7" },
        { time: "10:30-11:20", subject: "IT", room: "7" },
        { time: "11:30-12:20", subject: "Биология", room: "7" },
        { time: "11:30-12:20", subject: "История", room: "7" },
        { time: "13:00-13:50", subject: "Узбекский язык", room: "7" },
        { time: "14:00-14:50", subject: "Воспитание", room: "7" }
      ],
      saturday: [
        { time: "08:30-09:20", subject: "Русский язык", room: "7" },
        { time: "09:30-10:20", subject: "Английский язык", room: "7" },
        { time: "10:30-11:20", subject: "Таэквондо", room: "спортзал" },
        { time: "11:30-12:20", subject: "Литература", room: "7" }
      ]
    },

    "7-8-класс": {
      monday: [
        { time: "08:30-09:20", subject: "Математика", room: "19" },
        { time: "09:30-10:20", subject: "Русский язык", room: "19" },
        { time: "10:30-11:20", subject: "Таэквондо", room: "спортзал" },
        { time: "11:30-12:20", subject: "Арабский язык", room: "19" },
        { time: "13:00-13:50", subject: "История", room: "19" },
        { time: "14:00-14:50", subject: "Химия", room: "19" },
        { time: "15:00-15:50", subject: "Правоведение", room: "19" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Математика", room: "19" },
        { time: "09:30-10:20", subject: "Литература", room: "19" },
        { time: "10:30-11:20", subject: "Английский язык", room: "19" },
        { time: "11:30-12:20", subject: "Английский язык", room: "19" },
        { time: "12:30-13:20", subject: "Д/З", room: "19" },
        { time: "13:00-13:50", subject: "Математика", room: "19" },
        { time: "14:00-14:50", subject: "История", room: "19" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Арабский язык", room: "19" },
        { time: "09:30-10:20", subject: "Таэквондо", room: "19" },
        { time: "10:30-11:20", subject: "Английский язык", room: "19" },
        { time: "11:30-12:20", subject: "Корейский язык", room: "19" },
        { time: "11:30-12:20", subject: "Биология", room: "19" },
        { time: "13:00-13:50", subject: "История", room: "19" },
        { time: "14:00-14:50", subject: "IT", room: "19" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "IT", room: "19" },
        { time: "09:30-10:20", subject: "Математика", room: "19" },
        { time: "10:30-11:20", subject: "Английский язык", room: "19" },
        { time: "10:30-11:20", subject: "Английский язык", room: "19" },
        { time: "11:30-12:20", subject: "Математика", room: "19" },
        { time: "13:00-13:50", subject: "История", room: "19" },
        { time: "14:00-14:50", subject: "Русский язык", room: "19" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "IT", room: "19" },
        { time: "09:30-10:20", subject: "Биология", room: "19" },
        { time: "10:30-11:20", subject: "Биология", room: "19" },
        { time: "11:30-12:20", subject: "Корейский язык", room: "19" },
        { time: "11:30-12:20", subject: "Русский язык", room: "19" },
        { time: "13:00-13:50", subject: "Химия", room: "19" },
        { time: "14:00-14:50", subject: "Д/З", room: "19" }
      ],
      saturday: [
        { time: "08:30-09:20", subject: "Английский язык", room: "19" },
        { time: "09:30-10:20", subject: "Литература", room: "19" },
        { time: "10:30-11:20", subject: "Математика", room: "19" },
        { time: "11:30-12:20", subject: "Таэквондо", room: "19" }
      ]
    },

    "Юридика": {
      monday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "09:30-10:20", subject: "Русский / английский язык", room: "12" },
        { time: "10:30-11:20", subject: "Право", room: "12" },
        { time: "11:30-12:20", subject: "Право", room: "12" },
        { time: "13:00-13:50", subject: "Право", room: "12" },
        { time: "14:00-14:50", subject: "История", room: "12" },
        { time: "15:00-15:50", subject: "Математика", room: "зал" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "09:30-10:20", subject: "Русский / английский язык", room: "12" },
        { time: "10:30-11:20", subject: "Д/З", room: "12" },
        { time: "11:30-12:20", subject: "Русский язык", room: "12" },
        { time: "11:30-12:20", subject: "История", room: "12" },
        { time: "13:00-13:50", subject: "Физра", room: "спортзал" },
        { time: "14:00-14:50", subject: "IT", room: "зал" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "09:30-10:20", subject: "Русский / английский язык", room: "12" },
        { time: "10:30-11:20", subject: "Право", room: "12" },
        { time: "10:30-11:20", subject: "Право", room: "12" },
        { time: "10:30-11:20", subject: "Право", room: "12" },
        { time: "13:00-13:50", subject: "Математика", room: "12" },
        { time: "14:00-14:50", subject: "История", room: "12" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "09:30-10:20", subject: "Русский / английский язык", room: "12" },
        { time: "10:30-11:20", subject: "Русский язык", room: "12" },
        { time: "11:30-12:20", subject: "Физкультура", room: "12" },
        { time: "13:00-13:50", subject: "IT", room: "инф" },
        { time: "13:00-13:50", subject: "Д/З", room: "12" },
        { time: "14:00-14:50", subject: "Воспитание", room: "12" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "09:30-10:20", subject: "Русский / английский язык", room: "12" },
        { time: "10:30-11:20", subject: "Право", room: "12" },
        { time: "11:30-12:20", subject: "Право", room: "12" },
        { time: "11:30-12:20", subject: "Право", room: "12" },
        { time: "13:00-13:50", subject: "История", room: "12" },
        { time: "14:00-14:50", subject: "Математика", room: "12" }
      ],
      saturday: [
        { time: "09:30-10:20", subject: "Математика", room: "12" },
        { time: "09:30-10:20", subject: "Математика", room: "12" },
        { time: "10:30-11:20", subject: "Русский язык", room: "12" },
        { time: "11:30-12:20", subject: "Д/З", room: "12" }
      ]
    },

    "Экономика": {
      monday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "09:30-10:20", subject: "Русский / английский язык", room: "12" },
        { time: "10:30-11:20", subject: "Математика", room: "15" },
        { time: "10:30-11:20", subject: "Математика", room: "15" },
        { time: "11:30-12:20", subject: "IT", room: "15" },
        { time: "13:00-13:50", subject: "История", room: "15" },
        { time: "14:00-14:50", subject: "Математика", room: "зал" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "09:30-10:20", subject: "Русский язык", room: "15" },
        { time: "10:30-11:20", subject: "Математика", room: "15" },
        { time: "11:30-12:20", subject: "Математика", room: "15" },
        { time: "13:00-13:50", subject: "Физкультура", room: "спортзал" },
        { time: "14:00-14:50", subject: "Д/З", room: "15" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "10:30-11:20", subject: "Математика", room: "15" },
        { time: "10:30-11:20", subject: "Математика", room: "15" },
        { time: "11:30-12:20", subject: "IT", room: "15" },
        { time: "13:00-13:50", subject: "Математика", room: "15" },
        { time: "14:00-14:50", subject: "История", room: "15" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },  
        { time: "10:30-11:20", subject: "Математика", room: "15" },
        { time: "11:30-12:20", subject: "Математика", room: "15" },
        { time: "13:00-13:50", subject: "Д/З", room: "15" },
        { time: "13:00-13:50", subject: "Русский язык", room: "15" },
        { time: "14:00-14:50", subject: "Воспитание", room: "зал" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" }, 
        { time: "10:30-11:20", subject: "Математика", room: "15" },
        { time: "10:30-11:20", subject: "Математика", room: "15" },
        { time: "11:30-12:20", subject: "Д/З", room: "15" },
        { time: "13:00-13:50", subject: "История", room: "15" },
        { time: "14:00-14:50", subject: "Математика", room: "15" }

      ],
      saturday: [
        { time: "08:30-09:20", subject: "Математика", room: "зал" },
        { time: "09:30-10:20", subject: "Математика", room: "зал" },
        { time: "10:30-11:20", subject: "Русский язык", room: "зал" },
        { time: "11:30-12:20", subject: "Математика", room: "15" }
      ]
    },

    "Медицина": {
      monday: [
        { time: "08:30-09:20", subject: "Химия", room: "14" },
        { time: "09:30-10:20", subject: "Химия", room: "14" },
        { time: "10:30-11:20", subject: "Химия", room: "14" },
        { time: "10:30-11:20", subject: "Химия", room: "14" },
        { time: "11:30-12:20", subject: "IT", room: "15" },
        { time: "13:00-13:50", subject: "История", room: "14" },
        { time: "14:00-14:50", subject: "Математика", room: "зал" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" }, 
        { time: "09:30-10:20", subject: "Русский язык", room: "15" },
        { time: "11:30-12:20", subject: "Биология", room: "15" },
        { time: "13:00-13:50", subject: "Биология", room: "15" },
        { time: "13:00-13:50", subject: "Биология", room: "15" },
        { time: "14:00-14:50", subject: "Биология", room: "15" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Химия", room: "14" },
        { time: "09:30-10:20", subject: "Химия", room: "14" },
        { time: "10:30-11:20", subject: "Химия", room: "14" },
        { time: "10:30-11:20", subject: "Химия", room: "14" },
        { time: "11:30-12:20", subject: "IT", room: "14" },
        { time: "13:00-13:50", subject: "Математика", room: "14" },
        { time: "14:00-14:50", subject: "История", room: "14" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Биология", room: "14" },
        { time: "09:30-10:20", subject: "Биология", room: "14" },
        { time: "10:30-11:20", subject: "Биология", room: "14" },
        { time: "10:30-11:20", subject: "Биология", room: "14" },
        { time: "11:30-12:20", subject: "Д/З", room: "14" },
        { time: "14:00-14:50", subject: "Русский язык", room: "14" },
        { time: "14:00-14:50", subject: "Воспитание", room: "14" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Химия", room: "14" },
        { time: "09:30-10:20", subject: "Химия", room: "14" },
        { time: "10:30-11:20", subject: "Химия", room: "14" },
        { time: "10:30-11:20", subject: "Химия", room: "14" },
        { time: "11:30-12:20", subject: "Д/З", room: "14" },
        { time: "12:30-13:00", subject: "История", room: "14" },
        { time: "13:00-13:50", subject: "Математика", room: "14" }
      ],
      saturday: [
        { time: "08:30-09:20", subject: "Биология", room: "14" },
        { time: "09:30-10:20", subject: "Биология", room: "14" },
        { time: "09:30-10:20", subject: "Биология", room: "14" },
        { time: "10:30-11:20", subject: "Биология", room: "14" }
      ]
    },

    "Филология": {
      monday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" }, 
        { time: "09:30-10:20", subject: "Русский язык", room: "13" },
        { time: "10:30-11:20", subject: "Русский язык", room: "13" },
        { time: "11:30-12:20", subject: "IT", room: "15" },
        { time: "13:00-13:50", subject: "История", room: "13" },
        { time: "14:00-14:50", subject: "Математика", room: "зал" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" }, 
        { time: "10:30-11:20", subject: "Русский язык", room: "12" },
        { time: "10:30-11:20", subject: "Русский язык", room: "12" },
        { time: "11:30-12:20", subject: "История", room: "12" },
        { time: "13:00-13:50", subject: "Физра", room: "спортзал" },
        { time: "14:00-14:50", subject: "IT", room: "12" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" }, 
        { time: "09:30-10:20", subject: "Русский язык", room: "13" },
        { time: "09:30-10:20", subject: "Русский язык", room: "13" },
        { time: "10:30-11:20", subject: "IT", room: "14" },
        { time: "13:00-13:50", subject: "Математика", room: "15" },
        { time: "14:00-14:50", subject: "История", room: "15" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" }, 
        { time: "09:30-10:20", subject: "Русский язык", room: "13" },
        { time: "10:30-11:20", subject: "Русский язык", room: "13" },
        { time: "10:30-11:20", subject: "Русский язык", room: "13" },
        { time: "13:00-13:50", subject: "Д/З", room: "13" },
        { time: "11:30-12:20", subject: "Воспитание", room: "13" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" },
        { time: "08:30-09:20", subject: "Русский / английский язык", room: "12" }, 
        { time: "09:30-10:20", subject: "Русский язык", room: "13" },
        { time: "10:30-11:20", subject: "Русский язык", room: "13" },
        { time: "11:30-12:20", subject: "Д/З", room: "13" },
        { time: "12:30-13:00", subject: "История", room: "13" },
        { time: "13:00-13:50", subject: "Математика", room: "зал" }
      ],
      saturday: [
        { time: "08:30-09:20", subject: "Математика", room: "13" },
        { time: "09:30-10:20", subject: "Математика", room: "13" },
        { time: "10:30-11:20", subject: "Русский язык", room: "13" },
        { time: "10:30-11:20", subject: "Д/З", room: "13" }
      ]
    }
  },

  uz: {
    "3-4-sinf": {
      monday: [
        { time: "08:30-09:20", subject: "O‘qish", room: "5" },
        { time: "09:30-10:20", subject: "Matematika", room: "5" },
        { time: "10:30-11:20", subject: "Robototexnika", room: "5" },
        { time: "11:30-12:20", subject: "Ona tili", room: "5" },
        { time: "13:00-13:50", subject: "Taekwondo", room: "5" },
        { time: "14:00-14:50", subject: "Tabiiy fan", room: "5" },
        { time: "15:00-15:50", subject: "Dars soati", room: "5" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "O‘qish", room: "5" },
        { time: "09:30-10:20", subject: "Arab tili", room: "5" },
        { time: "10:30-11:20", subject: "Rus tili", room: "5" },
        { time: "11:30-12:20", subject: "IT", room: "5" },
        { time: "13:00-13:50", subject: "Matematika", room: "5" },
        { time: "14:00-14:50", subject: "PMT", room: "5" },
        { time: "15:00-15:50", subject: "Dars soati", room: "5" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Matematika", room: "5" },
        { time: "09:30-10:20", subject: "Ona tili", room: "5" },
        { time: "10:30-11:20", subject: "PMT", room: "5" },
        { time: "11:30-12:20", subject: "Mental", room: "5" },
        { time: "13:00-13:50", subject: "Rus tili", room: "5" },
        { time: "14:00-14:50", subject: "Ingliz tili", room: "5" },
        { time: "15:00-15:50", subject: "Dars soati", room: "5" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Matematika", room: "5" },
        { time: "09:30-10:20", subject: "O‘qish", room: "5" },
        { time: "10:30-11:20", subject: "PMT", room: "5" },
        { time: "11:30-12:20", subject: "Arab tili", room: "5" },
        { time: "13:00-13:50", subject: "Ingliz tili", room: "5" },
        { time: "14:00-14:50", subject: "Ingliz tili", room: "5" },
        { time: "15:00-15:50", subject: "Robototexnika", room: "5" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Ona tili", room: "5" },
        { time: "09:30-10:20", subject: "Taekwondo", room: "5" },
        { time: "10:30-11:20", subject: "Matematika", room: "5" },
        { time: "11:30-12:20", subject: "Ingliz tili", room: "5" },
        { time: "13:00-13:50", subject: "Mental", room: "5" },
        { time: "14:00-14:50", subject: "Tarbiyaviy soat", room: "5" },
        { time: "15:00-15:50", subject: "Dars soati", room: "5" }
      ],
      saturday: [
        { time: "08:30-09:20", subject: "Dam olish kuni" }
      ]
    },

    "5-6-sinf": {
      monday: [
        { time: "08:30-09:20", subject: "Biologiya", room: "9" },
        { time: "09:30-10:20", subject: "IT", room: "INF" },
        { time: "10:30-11:20", subject: "Matematika", room: "9" },
        { time: "11:30-12:20", subject: "Kimyo", room: "9" },
        { time: "13:00-13:50", subject: "Tabiiy fanlar", room: "9" },
        { time: "14:00-14:50", subject: "Ona tili", room: "9" },
        { time: "15:00-15:50", subject: "Ingliz tili", room: "9" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Arab tili", room: "9" },
        { time: "09:30-10:20", subject: "Adabiyot", room: "9" },
        { time: "10:30-11:20", subject: "Tarix", room: "9" },
        { time: "11:30-12:20", subject: "Rus tili", room: "9" },
        { time: "13:00-13:50", subject: "Ingliz tili", room: "9" },
        { time: "14:00-14:50", subject: "Ona tili", room: "9" },
        { time: "15:00-15:50", subject: "Dars soati", room: "9" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Biologiya", room: "9" },
        { time: "09:30-10:20", subject: "Turk tili", room: "9" },
        { time: "10:30-11:20", subject: "Taekwondo", room: "sportzal" },
        { time: "11:30-12:20", subject: "Tarix", room: "9" },
        { time: "13:00-13:50", subject: "Ingliz tili", room: "9" },
        { time: "14:00-14:50", subject: "IT", room: "inf" },
        { time: "15:00-15:50", subject: "Dars soati", room: "9" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Kimyo", room: "9" },
        { time: "09:30-10:20", subject: "Matematika", room: "9" },
        { time: "10:30-11:20", subject: "Matematika", room: "9" },
        { time: "11:30-12:20", subject: "Ona tili", room: "9" },
        { time: "13:00-13:50", subject: "Arab tili", room: "9" },
        { time: "14:00-14:50", subject: "Dars soati", room: "9" },
        { time: "15:00-15:50", subject: "Ingliz tili", room: "9" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Biologiya", room: "9" },
        { time: "09:30-10:20", subject: "IT", room: "INF" },
        { time: "10:30-11:20", subject: "Matematika", room: "9" },
        { time: "11:30-12:20", subject: "Matematika", room: "9" },
        { time: "13:00-13:50", subject: "Adabiyot", room: "9" },
        { time: "14:00-14:50", subject: "Ingliz tili", room: "9" },
        { time: "15:00-15:50", subject: "Dars soati", room: "9" }
      ],
      saturday: [
        { time: "08:30-09:20", subject: "Taekwondo", room: "9" },
        { time: "09:30-10:20", subject: "Rus tili", room: "9" },
        { time: "10:30-11:20", subject: "PMT", room: "9" },
        { time: "11:30-12:20", subject: "PMT", room: "9" }
      ]
    },
    "7-sinf": {
      monday: [
        { time: "08:30-09:20", subject: "IT", room: "INF" },
        { time: "09:30-10:20", subject: "Biologiya", room: "18" },
        { time: "10:30-11:20", subject: "Kimyo", room: "18" },
        { time: "11:30-12:20", subject: "Tarix", room: "18" },
        { time: "13:00-13:50", subject: "Adabiyot", room: "18" },
        { time: "14:00-14:50", subject: "Ingliz tili", room: "18" },
        { time: "15:00-15:50", subject: "Dars soati", room: "17" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Matematika", room: "18" },
        { time: "09:30-10:20", subject: "Turk tili / SAT", room: "18" },
        { time: "10:30-11:20", subject: "Arab tili", room: "18" },
        { time: "11:30-12:20", subject: "Matematika", room: "18" },
        { time: "13:00-13:50", subject: "Ona tili", room: "18" },
        { time: "14:00-14:50", subject: "Ingliz tili", room: "18" },
        { time: "15:00-15:50", subject: "Tabiiy fanlar", room: "18" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Huquq", room: "16" },
        { time: "09:30-10:20", subject: "Biologiya", room: "18" },
        { time: "10:30-11:20", subject: "Rus tili", room: "18" },
        { time: "11:30-12:20", subject: "Kimyo", room: "18" },
        { time: "13:00-13:50", subject: "Taekwondo", room: "sportzal" },
        { time: "14:00-14:50", subject: "Rus tili", room: "18" },
        { time: "15:00-15:50", subject: "Dars soati", room: "18" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Matematika", room: "18" },
        { time: "09:30-10:20", subject: "Ingliz tili", room: "18" },
        { time: "10:30-11:20", subject: "Ingliz tili", room: "18" },
        { time: "11:30-12:20", subject: "Huquq", room: "16" },
        { time: "13:00-13:50", subject: "Ona tili", room: "18" },
        { time: "14:00-14:50", subject: "Arab tili", room: "18" },
        { time: "15:00-15:50", subject: "Dars soati", room: "18" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Matematika", room: "17" },
        { time: "09:30-10:20", subject: "Biologiya", room: "18" },
        { time: "10:30-11:20", subject: "Ona tili", room: "18" },
        { time: "11:30-12:20", subject: "Adabiyot", room: "16" },
        { time: "13:00-13:50", subject: "IT", room: "18" },
        { time: "14:00-14:50", subject: "Dars soati", room: "18" },
        { time: "15:00-15:50", subject: "Ingliz tili", room: "18" }
      ],
      saturday: [
        { time: "08:30-09:20", subject: "Turk tili / SAT", room: "18" },
        { time: "10:30-11:20", subject: "Tarix", room: "18" },
        { time: "09:30-10:20", subject: "Rus tili", room: "18" },
        { time: "11:30-12:20", subject: "Taekwondo", room: "18" }
      ]
    },
"8-sinf": {
      monday: [
        { time: "08:30-09:20", subject: "Matematika", room: "17" },
        { time: "09:30-10:20", subject: "Matematika", room: "17" },
        { time: "10:30-11:20", subject: "Taekwondo", room: "sportzal" },
        { time: "11:30-12:20", subject: "Tarix", room: "17" },
        { time: "13:00-13:50", subject: "Ingliz tili", room: "17" },
        { time: "14:00-14:50", subject: "IT", room: "INF" },
        { time: "15:00-15:50", subject: "Dars soati", room: "17" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Kimyo", room: "17" },
        { time: "09:30-10:20", subject: "Rus tili / SAT", room: "17" },
        { time: "10:30-11:20", subject: "Biologiya", room: "17" },
        { time: "11:30-12:20", subject: "Arab tili", room: "17" },
        { time: "13:00-13:50", subject: "Ona tili", room: "17" },
        { time: "14:00-14:50", subject: "Tabiiy fanlar", room: "17" },
        { time: "15:00-15:50", subject: "Ingliz tili", room: "17" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Turk tili", room: "17" },
        { time: "09:30-10:20", subject: "Matematika", room: "17" },
        { time: "10:30-11:20", subject: "Matematika", room: "17" },
        { time: "11:30-12:20", subject: "Rus tili", room: "17" },
        { time: "13:00-13:50", subject: "Taekwondo", room: "sportzal" },
        { time: "14:00-14:50", subject: "Dars soati", room: "17" },
        { time: "15:00-15:50", subject: "Ingliz tili", room: "17" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Ingliz tili", room: "17" },
        { time: "09:30-10:20", subject: "Kimyo", room: "17" },
        { time: "10:30-11:20", subject: "Biologiya", room: "17" },
        { time: "11:30-12:20", subject: "Huquq", room: "16" },
        { time: "13:00-13:50", subject: "Ona tili", room: "17" },
        { time: "14:00-14:50", subject: "Dars soati", room: "17" },
        { time: "14:00-14:50", subject: "Arab tili", room: "17" },
      ],
      friday: [
        { time: "08:30-09:20", subject: "Matematika", room: "16" },
        { time: "09:30-10:20", subject: "Turk tili", room: "16" },
        { time: "10:30-11:20", subject: "Taekwondo", room: "16" },
        { time: "11:30-12:20", subject: "Kimyo", room: "16" },
        { time: "13:00-13:50", subject: "Ingliz tili", room: "17" },
        { time: "13:00-13:50", subject: "IT", room: "17" },
        { time: "14:00-14:50", subject: "Dars soati", room: "sportzal" }
      ],
      saturday: [
        { time: "08:30-09:20", subject: "Rus tili / SAT", room: "17" },
        { time: "09:30-10:20", subject: "Tarix", room: "17" },
        { time: "10:30-11:20", subject: "Biologiya", room: "17" },
        { time: "11:30-12:20", subject: "Ona tili", room: "17" }
      ]
    },
    "Yuridika": {
      monday: [
        { time: "08:30-09:20", subject: "Tarix / ingliz tili", room: "ZAL" },
        { time: "09:30-10:20", subject: "Tarix / ingliz tili", room: "ZAL" },
        { time: "10:30-11:20", subject: "Ingliz tili / turk tili / tarix", room: "22" },
        { time: "11:30-12:20", subject: "Ingliz tili / turk tili / matematika", room: "22" },
        { time: "13:00-13:50", subject: "Matematika", room: "ZAL" },
        { time: "14:00-14:50", subject: "Ona tili", room: "ZAL" },
        { time: "15:00-15:50", subject: "Dars soati", room: "22" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Huquq", room: "16" },
        { time: "09:30-10:20", subject: "Huquq", room: "16" },
        { time: "10:30-11:20", subject: "Matematika", room: "ZAL" },
        { time: "11:30-12:20", subject: "Huquq", room: "16" },
        { time: "13:00-13:50", subject: "Turk tili / IT", room: "22" },
        { time: "14:00-14:50", subject: "Ona tili", room: "ZAL" },
        { time: "15:00-15:50", subject: "Dars soati", room: "ZAL" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "IT / ingliz tili", room: "INF" },
        { time: "09:30-10:20", subject: "Tarix / ingliz tili", room: "ZAL" },
        { time: "10:30-11:20", subject: "Ingliz tili / turk tili / tarix", room: "22" },
        { time: "11:30-12:20", subject: "Ingliz tili / turk tili / IT", room: "22" },
        { time: "13:00-13:50", subject: "Matematika", room: "ZAL" },
        { time: "14:00-14:50", subject: "Ona tili", room: "ZAL" },
        { time: "15:00-15:50", subject: "Dars soati", room: "ZAL" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Huquq", room: "16" },
        { time: "09:30-10:20", subject: "Huquq", room: "16" },
        { time: "10:30-11:20", subject: "Huquq", room: "16" },
        { time: "11:30-12:20", subject: "Turk tili", room: "INF" },
        { time: "13:00-13:50", subject: "Matematika", room: "ZAL" },
        { time: "14:00-14:50", subject: "Ona tili", room: "ZAL" },
        { time: "15:00-15:50", subject: "Tarbiyaviy soat", room: "ZAL" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Tarix / ingliz tili", room: "ZAL" },
        { time: "09:30-10:20", subject: "Tarix / ingliz tili", room: "ZAL" },
        { time: "10:30-11:20", subject: "Ingliz tili / turk tili", room: "22" },
        { time: "11:30-12:20", subject: "Ingliz tili / turk tili", room: "22" },
        { time: "13:00-13:50", subject: "Taekwondo", room: "sportzal" },
        { time: "14:00-14:50", subject: "Dars soati", room: "22" },
        { time: "15:00-15:50", subject: "Tarix", room: "22" }
      ],
      saturday: [
        { time: "08:30-09:20", subject: "Huquq / ingliz tili", room: "16" },
        { time: "09:30-10:20", subject: "Ingliz tili / Turk tili", room: "16" },
        { time: "10:30-11:20", subject: "Huquq / ingliz tili ", room: "16" },
         { time: "10:30-11:20", subject: "Huquq / ingliz tili / turk tili", room: "16" }
      ]
    },

    "Aniq": {
      monday: [
        { time: "08:30-09:20", subject: "Tarix / ingliz tili", room: "ZAL" },
        { time: "09:30-10:20", subject: "Tarix / ingliz tili", room: "ZAL" },
        { time: "10:30-11:20", subject: "Ingliz tili / turk tili / tarix", room: "22" },
        { time: "11:30-12:20", subject: "Ingliz tili / turk tili / matematika", room: "22" },
        { time: "13:00-13:50", subject: "Matematika", room: "ZAL" },
        { time: "14:00-14:50", subject: "Ona tili", room: "ZAL" },
        { time: "15:00-15:50", subject: "Dars soati", room: "22" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Matematika", room: "21" },
        { time: "09:30-10:20", subject: "Matematika", room: "21" },
        { time: "10:30-11:20", subject: "Matematika", room: "21" },
        { time: "11:30-12:20", subject: "Matematika", room: "21" },
        { time: "13:00-13:50", subject: "Turk tili / IT", room: "22" },
        { time: "14:00-14:50", subject: "Ona tili", room: "ZAL" },
        { time: "15:00-15:50", subject: "Dars soati", room: "ZAL" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "IT / ingliz tili", room: "INF" },
        { time: "09:30-10:20", subject: "Tarix / ingliz tili", room: "ZAL" },
        { time: "10:30-11:20", subject: "Ingliz tili / turk tili / tarix", room: "22" },
        { time: "11:30-12:20", subject: "Ingliz tili / turk tili / IT", room: "22" },
        { time: "13:00-13:50", subject: "Matematika", room: "ZAL" },
        { time: "14:00-14:50", subject: "Ona tili", room: "ZAL" },
        { time: "15:00-15:50", subject: "Dars soati", room: "ZAL" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Matematika", room: "21" },
        { time: "09:30-10:20", subject: "Matematika", room: "21" },
        { time: "10:30-11:20", subject: "Matematika", room: "21" },
        { time: "11:30-12:20", subject: "Matematika", room: "21" },
        { time: "13:00-13:50", subject: "Matematika", room: "21" },
        { time: "14:00-14:50", subject: "Ona tili", room: "ZAL" },
        { time: "15:00-15:50", subject: "Tarbiyaviy soat", room: "ZAL" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Tarix / ingliz tili", room: "ZAL" },
        { time: "09:30-10:20", subject: "Tarix / ingliz tili", room: "ZAL" },
        { time: "10:30-11:20", subject: "Ingliz tili / turk tili", room: "22" },
        { time: "11:30-12:20", subject: "Ingliz tili / turk tili", room: "22" },
        { time: "13:00-13:50", subject: "Taekwondo", room: "22" },
        { time: "14:00-14:50", subject: "Dars soati", room: "22" },
        { time: "15:00-15:50", subject: "Tarix", room: "22" }
      ],
      saturday: [
        { time: "08:30-09:20", subject: "Matematika / ingliz tili", room: "21" },
        { time: "09:30-10:20", subject: "Matematika / ingliz tili", room: "22" },
        { time: "09:30-10:20", subject: "Matematika / ingliz tili", room: "22" },
        { time: "10:30-11:20", subject: "Matematika / ingliz tili", room: "22" }
      ]
    },

    "Filologiya": {
      monday: [
        { time: "08:30-09:20", subject: "Tarix / ingliz tili", room: "ZAL" },
        { time: "09:30-10:20", subject: "Tarix / ingliz tili", room: "ZAL" },
        { time: "10:30-11:20", subject: "Ingliz tili / turk tili / tarix", room: "22" },
        { time: "11:30-12:20", subject: "Ingliz tili / turk tili / matematika", room: "22" },
        { time: "13:00-13:50", subject: "Matematika", room: "ZAL" },
        { time: "14:00-14:50", subject: "Ona tili", room: "ZAL" },
        { time: "15:00-15:50", subject: "Dars soati", room: "22" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Ona tili", room: "22" },
        { time: "09:30-10:20", subject: "Ona tili", room: "22" },
        { time: "10:30-11:20", subject: "Matematika", room: "22" },
        { time: "11:30-12:20", subject: "Ona tili", room: "22" },
        { time: "13:00-13:50", subject: "Turk tili / IT", room: "22" },
        { time: "14:00-14:50", subject: "Ona tili", room: "ZAL" },
        { time: "15:00-15:50", subject: "Dars soati", room: "ZAL" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "IT / Ingliz tili", room: "22" },
        { time: "09:30-10:20", subject: "Tarix / Ingliz tili", room: "22" },
        { time: "10:30-11:20", subject: "Ingliz tili / Turk tili / Tarix", room: "22" },
        { time: "10:30-11:20", subject: "Ingliz tili / Turk tili / IT", room: "22" },
        { time: "13:00-13:50", subject: "Matematika", room: "22" },
        { time: "14:00-14:50", subject: "Ona tili", room: "ZAL" },
        { time: "15:00-15:50", subject: "Dars soati", room: "ZAL" }
      ],
      thursday: [
        { time: "14:00-14:50", subject: "Ona tili", room: "22" },
        { time: "14:00-14:50", subject: "Ona tili", room: "22" },
        { time: "14:00-14:50", subject: "Ona tili", room: "22" },
        { time: "11:30-12:20", subject: "Turk tili", room: "20" },
        { time: "13:00-13:50", subject: "Matematika", room: "20" },
        { time: "14:00-14:50", subject: "Ona tili", room: "20" },
        { time: "15:00-15:50", subject: "Tarbiyaviy soat", room: "ZAL" }
      ],
      friday: [
        { time: "08:30-09:20", subject: "Tarix / Ingliz tili", room: "20" },
        { time: "08:30-09:20", subject: "Tarix / Ingliz tili", room: "20" },
        { time: "08:30-09:20", subject: "Ingliz tili / Turk tili", room: "20" },
        { time: "08:30-09:20", subject: "Ingliz tili / Turk tili", room: "20" },
        { time: "11:30-12:20", subject: "Taekwondo", room: "20" },
        { time: "13:00-13:50", subject: "Dars soati", room: "20" },
        { time: "14:00-14:50", subject: "Tarix", room: "20" },
      ],
      saturday: [
        { time: "14:00-14:50", subject: "Ona tili", room: "22" },
        { time: "14:00-14:50", subject: "Ona tili", room: "22" },
        { time: "10:30-11:20", subject: "Ingliz tili", room: "20" },
        { time: "11:30-12:20", subject: "Ingliz tili", room: "20" }
      ]
    },

    "Tabiiy": {
      monday: [
        { time: "08:30-09:20", subject: "Kimyo", room: "20" },
        { time: "09:30-10:20", subject: "Kimyo", room: "20" },
        { time: "10:30-11:20", subject: "Biologiya", room: "20" },
        { time: "11:30-12:20", subject: "Biologiya", room: "20" },
        { time: "13:00-13:50", subject: "Matematika", room: "20" },
        { time: "14:00-14:50", subject: "Ona tili", room: "20" },
        { time: "15:00-15:50", subject: "Dars soati", room: "22" }
      ],
      tuesday: [
        { time: "08:30-09:20", subject: "Biologiya", room: "20" },
        { time: "09:30-10:20", subject: "Biologiya", room: "20" },
        { time: "10:30-11:20", subject: "Matematika", room: "20" },
        { time: "11:30-12:20", subject: "Kimyo", room: "20" },
        { time: "13:00-13:50", subject: "Kimyo", room: "20" },
        { time: "14:00-14:50", subject: "Ona tili", room: "20" },
        { time: "15:00-15:50", subject: "Dars soati", room: "ZAL" }
      ],
      wednesday: [
        { time: "08:30-09:20", subject: "Kimyo", room: "20" },
        { time: "09:30-10:20", subject: "Kimyo", room: "20" },
        { time: "10:30-11:20", subject: "Biologiya", room: "20" },
        { time: "11:30-12:20", subject: "Biologiya", room: "20" },
        { time: "13:00-13:50", subject: "Matematika", room: "20" },
        { time: "14:00-14:50", subject: "Tarix", room: "20" },
        { time: "15:00-15:50", subject: "Ona tili", room: "ZAL" }
      ],
      thursday: [
        { time: "08:30-09:20", subject: "Biologiya", room: "20" },
        { time: "09:30-10:20", subject: "Biologiya", room: "20" },
        { time: "10:30-11:20", subject: "Kimyo", room: "20" },
        { time: "11:30-12:20", subject: "Kimyo", room: "20" },
        { time: "13:00-13:50", subject: "Matematika", room: "20" },
        { time: "14:00-14:50", subject: "Ona tili", room: "20" },
        { time: "15:00-15:50", subject: "Tarbiyaviy soat", room: "ZAL" }
      ],
      friday: [
        { time: "10:30-11:20", subject: "Kimyo", room: "20" },
        { time: "11:30-12:20", subject: "Kimyo", room: "20" },
        { time: "08:30-09:20", subject: "Biologiya", room: "20" },
        { time: "09:30-10:20", subject: "Biologiya", room: "20" },
        { time: "13:00-13:50", subject: "Taekwondo", room: "20" },
        { time: "14:00-14:50", subject: "Dars soati", room: "20" },
        { time: "15:00-15:50", subject: "Tarix", room: "ZAL" }
      ],
      saturday: [
        { time: "08:30-09:20", subject: "Biologiya", room: "20" },
        { time: "09:30-10:20", subject: "Biologiya", room: "20" },
        { time: "10:30-11:20", subject: "Kimyo", room: "20" },
        { time: "11:30-12:20", subject: "Kimyo", room: "20" }
      ]
    }
  }
}