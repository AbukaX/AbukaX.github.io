import { CaseStudy } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ai-consultant-bot',
    title: 'AI-бот для первичной консультации',
    shortDescription: 'Интеллектуальный агент поддержки, сокращающий нагрузку на менеджеров и квалифицирующий лидов 24/7.',
    icon: 'bot',
    color: 'indigo',
    problem: 'Менеджеры тратили критически много времени на обработку однотипных первичных запросов, что приводило к выгоранию и задержкам ответов.',
    solution: {
      description: 'Разработан и внедрен автономный AI-агент на базе OpenAI, полностью берущий на себя первый этап воронки.',
      steps: [
        'Автоматические ответы на типовые вопросы в режиме реального времени.',
        'Сбор первичной информации (квалификация) перед переключением на человека.',
        'Бесшовная передача "горячих" лидов в отдел продаж.'
      ]
    },
    integrations: ['Telegram', 'WhatsApp', 'CRM (Bitrix24/Amo)', 'OpenAI API'],
    results: [
      'До 70% обращений обрабатывается полностью без участия человека.',
      'Время первого ответа сократилось с 45 минут до 10 секунд.',
      'Увеличение конверсии из обращения в квалифицированного лида.'
    ],
    stats: [
      { label: 'Автоматизация', value: '70%', desc: 'обращений без участия людей' },
      { label: 'Скорость', value: '10с', desc: 'среднее время ответа' },
      { label: 'Экономия', value: '40ч', desc: 'в неделю на отдел' }
    ]
  },
  {
    id: 'sales-automation',
    title: 'Автоматизация задач для отдела продаж',
    shortDescription: 'Система контроля и постановки задач, исключающая потерю лидов из-за человеческого фактора.',
    icon: 'target',
    color: 'emerald',
    problem: 'Человеческий фактор приводил к тому, что менеджеры забывали обрабатывать заявки вовремя, теряя потенциальную прибыль.',
    solution: {
      description: 'Настроена комплексная система автоматического создания задач и напоминаний на основе триггеров в CRM.',
      steps: [
        'Авто-постановка задач при поступлении новой заявки.',
        'Контроль SLA: уведомления руководителю при отсутствии ответа.',
        'Автоматическое планирование повторных касаний (follow-up).'
      ]
    },
    integrations: ['CRM System', 'Task Manager', 'Notification Service'],
    results: [
      'Сократилось количество "потерянных" лидов практически до нуля.',
      'Выросла скорость обработки заявок благодаря четким дедлайнам.',
      'Прозрачная аналитика эффективности работы менеджеров.'
    ],
    stats: [
      { label: 'Потери лидов', value: '0%', desc: 'сведено к минимуму' },
      { label: 'Обработка', value: '2x', desc: 'рост скорости реакции' },
      { label: 'Дисциплина', value: '100%', desc: 'соблюдение регламентов' }
    ]
  },
  {
    id: 'auto-newsletters',
    title: 'Система автоматических рассылок',
    shortDescription: 'Маркетинговая автоматизация для повышения LTV и возвращаемости клиентов через персонализированные касания.',
    icon: 'mail',
    color: 'rose',
    problem: 'Низкая вовлеченность текущей базы (LTV) и отсутствие системной работы с повторными продажами.',
    solution: {
      description: 'Внедрена омниканальная система триггерных рассылок, реагирующая на жизненный цикл и события клиента.',
      steps: [
        'Автоматические поздравления с Днем Рождения и праздниками.',
        'Триггерные сообщения после определенных действий (покупка, визит).',
        'Реактивация "спящих" клиентов персонализированными офферами.'
      ]
    },
    integrations: ['CRM', 'WhatsApp Business API', 'SMS Gateway', 'Email Service'],
    results: [
      'Значительное повышение повторных обращений (Retention Rate).',
      'Рост вовлеченности базы (Open Rate & Reply Rate).',
      'Дополнительная выручка без затрат на рекламный трафик.'
    ],
    stats: [
      { label: 'LTV', value: '+25%', desc: 'рост пожизненной ценности' },
      { label: 'Open Rate', value: '60%', desc: 'в канале WhatsApp' },
      { label: 'ROI', value: '300%', desc: 'возврат инвестиций' }
    ]
  }
];

export const SYSTEM_PROMPT = `
You are an AI assistant for a portfolio website belonging to an Automation Engineer specialized in AI bots, CRM automation, and marketing flows.
Your goal is to answer questions about the engineer's experience based strictly on these three case studies:

1. AI Consultant Bot: Solved high manager workload by automating primary consultations using OpenAI connected to Telegram/WhatsApp/CRM. Results: 70% auto-replies, response time down to seconds.
2. Sales Task Automation: Solved lost leads due to human error. Automated task creation for new leads, follow-ups, and no-response alerts. Results: eliminated lost leads, faster processing.
3. Automated Newsletters: Solved low customer retention. Implemented birthdays, holiday campaigns, and trigger-based messages via WhatsApp/SMS/Email. Results: Higher retention and engagement.

Tone: Professional, concise, enthusiastic, and helpful.
If asked about contact info, suggest they look at the "Contact" section of the site (dummy response).
Do not hallucinate projects not listed here.
`;