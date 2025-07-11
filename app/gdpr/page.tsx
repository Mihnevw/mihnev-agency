"use client"

import { MotionWrapper } from "@/components/motion-wrapper"
import { useTranslation } from "@/lib/hooks/useTranslation"

export default function GDPRCompliance() {
  const { t } = useTranslation()

  return (
    <main className="flex-1">
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <MotionWrapper className="prose dark:prose-invert prose-emerald mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
              {t("GDPR Compliance")}
            </h1>

            <div className="text-slate-600 dark:text-slate-300 space-y-6">
              <p>Последно обновяване: {new Date().toLocaleDateString()}</p>

              <h2>Нашата застъпност</h2>
              <p>
                На Mihnev Agency сме посветени на защитата и уважението към вашата лична информация в съответствие с Европейската общност за защита на личните данни (GDPR).
              </p>

              <h2>Вашите права върху личните данни</h2>
              <p>Под GDPR имате следните права:</p>
              <ul>
                <li>Право на достъп до вашата лична информация</li>
                <li>Право на коригиране на неточна информация</li>
                <li>Право на изтриване ("право да бъдете забранени")</li>
                <li>Право на ограничаване на обработката</li>
                <li>Право на пренасяне на данни</li>
                <li>Право на отказ от обработка</li>
              </ul>

              <h2>Обработка на лични данни</h2>
              <p>
                Ние обработваме лични данни само когато имаме законна основа за това, включително:
              </p>
              <ul>
                <li>Съгласие от лицето, което е обект на обработката</li>
                <li>Контрактна необходимост</li>
                <li>Правни задължения</li>
                <li>Правови интереси</li>
              </ul>

              <h2>Защита на личните данни</h2>
              <p>
                Ние прилагаме подходящи технически и организационни мерки, за да осигурим подходящ уровен на сигурност, включително:
              </p>
              <ul>
                <li>Шифриране на лични данни</li>
                <li>Редовни оценки на сигурността</li>
                <li>Обучение на персонала за защита на личните данни</li>
                <li>Контроли за достъп и удостоверяване</li>
              </ul>

              <h2>Международни пренос на данни</h2>
              <p>
                Когато пренасяме лични данни извън Европейската общност (ЕЕА), ние гарантираме, че са поставени подходящи мерки чрез стандартни контрактни клаузи или други одобрени механизми.
              </p>

              <h2>Нарушения на личните данни</h2>
              <p>
                Имаме процедури в сила за да се справим с всякакви подозрителни нарушения на личните данни и ще уведомяваме ви и приложимите регулатори, където е необходимо по закон.
              </p>

              <h2>Свържете се с нашия DPO</h2>
              <p>
                За всякакви въпроси относно GDPR, моля, свържете се с нашия Data Protection Officer на:
                <br />
                Email: stilianmihnev@gmail.com
                <br />
                Phone: +359 882851151
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </main>
  )
} 