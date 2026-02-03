import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Bot, Target, Mail, Layers, Zap, TrendingUp, Cpu } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CASE_STUDIES } from '../constants';

const IconMap: Record<string, React.FC<any>> = {
  bot: Bot,
  target: Target,
  mail: Mail
};

// Dummy data generator for charts based on case type
const getChartData = (type: string) => {
  if (type === 'ai-consultant-bot') {
    return [
      { name: 'До внедрения', value: 45, label: 'Время (мин)' },
      { name: 'После', value: 1, label: 'Время (мин)' },
    ];
  }
  if (type === 'sales-automation') {
    return [
      { name: 'Янв', leads: 85 },
      { name: 'Фев', leads: 92 },
      { name: 'Март', leads: 110 }, // Growth after automation
      { name: 'Апр', leads: 125 },
    ];
  }
  return [
    { name: 'Retention', val: 15 },
    { name: 'Retention (New)', val: 28 },
  ];
};

export const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const study = CASE_STUDIES.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
        <button onClick={() => navigate('/')} className="text-indigo-600 hover:underline">Return Home</button>
      </div>
    );
  }

  const MainIcon = IconMap[study.icon];
  const chartData = getChartData(study.id);
  const barColor = study.color === 'indigo' ? '#6366f1' : study.color === 'emerald' ? '#10b981' : '#f43f5e';

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center text-slate-600 hover:text-slate-900 transition-colors font-medium">
            <ArrowLeft size={20} className="mr-2" />
            Назад к проектам
          </Link>
          <div className="text-sm text-slate-400 hidden sm:block">
             Кейс: {study.title}
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl inline-flex ${
              study.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' : 
              study.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' : 
              'bg-rose-100 text-rose-600'
            }`}>
              <MainIcon size={32} />
            </div>
            <span className="text-sm font-semibold tracking-wider text-slate-500 uppercase">Automation Case Study</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {study.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            {study.problem}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        
        {/* Left Column (Details) */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* Solution Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Zap className="text-indigo-600" size={24} />
              <h2 className="text-2xl font-bold text-slate-900">Решение</h2>
            </div>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              {study.solution.description}
            </p>
            <ul className="space-y-4">
              {study.solution.steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5 ${
                     study.color === 'indigo' ? 'bg-indigo-600' : 
                     study.color === 'emerald' ? 'bg-emerald-600' : 
                     'bg-rose-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="text-slate-700">{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Results Section */}
          <section>
             <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-indigo-600" size={24} />
              <h2 className="text-2xl font-bold text-slate-900">Результаты</h2>
            </div>
            <div className="grid gap-6">
              {study.results.map((res, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-lg text-slate-700">{res}</span>
                </div>
              ))}
            </div>

            {/* Visualizing Data (Mock Chart) */}
            <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-200 h-80">
              <h3 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">Визуализация эффективности</h3>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    cursor={{ fill: '#f1f5f9' }}
                  />
                  <Bar dataKey={study.id === 'sales-automation' ? 'leads' : study.id === 'ai-consultant-bot' ? 'value' : 'val'} radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? barColor : '#cbd5e1'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        {/* Right Column (Sidebar Stats) */}
        <div className="space-y-8">
          
          {/* Key Stats Card */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Layers size={20} className="text-indigo-400" />
              Ключевые показатели
            </h3>
            <div className="space-y-8">
              {study.stats.map((stat, idx) => (
                <div key={idx} className="border-b border-slate-700/50 last:border-0 pb-6 last:pb-0">
                  <div className="text-3xl font-bold mb-1 text-indigo-400">{stat.value}</div>
                  <div className="font-medium text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-400">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Integrations Card */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-slate-900">
              <Cpu size={20} className="text-indigo-600" />
              Стек интеграций
            </h3>
            <div className="flex flex-wrap gap-2">
              {study.integrations.map((tech, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-lg border border-indigo-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};