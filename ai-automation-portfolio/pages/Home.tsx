import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Target, Mail, LayoutGrid, Github, Linkedin, Briefcase } from 'lucide-react';
import { CASE_STUDIES } from '../constants';
import { CaseStudy } from '../types';

const IconMap: Record<string, React.FC<any>> = {
  bot: Bot,
  target: Target,
  mail: Mail
};

const ColorMap: Record<string, string> = {
  indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:border-indigo-200',
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:border-emerald-200',
  rose: 'bg-rose-50 text-rose-600 border-rose-100 group-hover:border-rose-200'
};

const CaseCard: React.FC<{ data: CaseStudy }> = ({ data }) => {
  const Icon = IconMap[data.icon] || LayoutGrid;
  const colorClass = ColorMap[data.color];

  return (
    <Link 
      to={`/case/${data.id}`}
      className="group relative block h-full bg-white rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-10 transition-transform group-hover:scale-150 ${data.color === 'indigo' ? 'bg-indigo-500' : data.color === 'emerald' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
      
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${colorClass}`}>
          <Icon size={28} />
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {data.title}
        </h3>
        
        <p className="text-slate-600 leading-relaxed mb-6">
          {data.shortDescription}
        </p>

        <div className="flex items-center text-sm font-semibold text-indigo-600">
          Смотреть кейс <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
            Automation Engineer Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Автоматизирую рутину, <br />
            <span className="text-indigo-600">масштабирую бизнес</span>.
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
            Специализируюсь на создании AI-агентов, автоматизации CRM и построении сложных маркетинговых цепочек. Превращаю хаос в четкие алгоритмы.
          </p>
          
          <div className="flex gap-4 mb-12">
            <a href="#cases" className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
              Смотреть проекты
            </a>
            <a href="#" className="px-6 py-3 bg-white text-slate-700 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition-colors">
              Связаться
            </a>
          </div>

          <div className="flex gap-6 text-slate-400">
             <a href="#" className="hover:text-slate-900 transition-colors"><Github size={24} /></a>
             <a href="#" className="hover:text-indigo-600 transition-colors"><Linkedin size={24} /></a>
             <a href="#" className="hover:text-emerald-600 transition-colors"><Briefcase size={24} /></a>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section id="cases" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/50">
        <div className="flex justify-between items-end mb-12">
           <div>
             <h2 className="text-3xl font-bold text-slate-900 mb-2">Избранные кейсы</h2>
             <p className="text-slate-600">Реальные примеры внедрения автоматизации.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <CaseCard key={study.id} data={study} />
          ))}
        </div>
      </section>
    </div>
  );
};