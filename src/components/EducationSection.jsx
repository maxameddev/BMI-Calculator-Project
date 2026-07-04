import {
  BookOpen,
  Layers,
  Target,
  AlertTriangle,
  Lightbulb,
  ShieldAlert,
} from 'lucide-react';
import { EDUCATION_CONTENT } from '../data/somaliContent';
import { getHealthyWeightRange } from '../utils/bmi';

function SectionCard({ icon: Icon, title, children, iconColor = 'text-primary-600 dark:text-primary-400', iconBg = 'bg-primary-100 dark:bg-primary-900/40' }) {
  return (
    <article className="card card-hover p-6 md:p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${iconBg}`}>
          <Icon className={`w-5 h-5 ${iconColor}`} aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      {children}
    </article>
  );
}

export default function EducationSection({ height }) {
  const { whatIsBmi, categories, healthyWeight, risks, generalTips, disclaimer } = EDUCATION_CONTENT;
  const healthyRange = height ? getHealthyWeightRange(Number(height)) : null;

  return (
    <section aria-labelledby="education-heading" className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 id="education-heading" className="section-title mb-3">
          Waxbarasho Caafimaad
        </h2>
        <p className="section-subtitle">
          Baro wax badan oo ku saabsan BMI iyo caafimaadkaaga
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard icon={BookOpen} title={whatIsBmi.title}>
          <div className="space-y-4">
            {whatIsBmi.sections.map((section) => (
              <div key={section.heading}>
                <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {section.heading}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard icon={Layers} title={categories.title} iconColor="text-green-600 dark:text-green-400" iconBg="bg-green-100 dark:bg-green-900/40">
          <div className="space-y-3">
            {categories.items.map((cat) => (
              <div
                key={cat.id}
                className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900 dark:text-white text-sm">
                    {cat.label}
                  </span>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-md">
                    BMI {cat.range}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{cat.labelEn}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard icon={Target} title={healthyWeight.title} iconColor="text-green-600 dark:text-green-400" iconBg="bg-green-100 dark:bg-green-900/40">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            {healthyWeight.content}
          </p>
          {healthyRange && (
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
              <p className="text-sm font-medium text-green-800 dark:text-green-300 mb-1">
                Miisaankaaga caafimaadka leh (dhererka {height} cm):
              </p>
              <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                {healthyRange.min} — {healthyRange.max} kg
              </p>
            </div>
          )}
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 italic">
            {healthyWeight.note}
          </p>
        </SectionCard>

        <SectionCard icon={AlertTriangle} title={risks.title} iconColor="text-amber-600 dark:text-amber-400" iconBg="bg-amber-100 dark:bg-amber-900/40">
          <div className="space-y-4">
            {risks.sections.map((section) => (
              <div key={section.heading}>
                <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {section.heading}
                </h4>
                <ul className="space-y-1.5" role="list">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard icon={Lightbulb} title={generalTips.title} iconColor="text-amber-600 dark:text-amber-400" iconBg="bg-amber-100 dark:bg-amber-900/40">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
          {generalTips.items.map((tip) => (
            <li
              key={tip}
              className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-sm text-gray-600 dark:text-gray-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" aria-hidden="true" />
              {tip}
            </li>
          ))}
        </ul>
      </SectionCard>

      <div className="card p-6 md:p-8 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 shrink-0">
            <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {disclaimer.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {disclaimer.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
