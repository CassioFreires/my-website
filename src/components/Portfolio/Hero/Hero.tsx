import { Code, MapPin, Mail, Calendar, Users, Github, Award } from 'lucide-react';

interface StrategicValue {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface HeroProps {
    profile: {
        name: string;
        title: string;
        location: string;
        email: string;
        linkedin: string;
        github: string;
        yearsExperience: string;
        availability: string;
    };
    strategicValue: StrategicValue[];
}

export default function Hero({ profile, strategicValue }: HeroProps) {
    return (
        <section className="portfolio-hero bg-gradient-to-r from-[var(--bg-surface)] to-[var(--bg-surface-muted)] border border-[var(--border-color)] rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[var(--text-primary)]/10 p-2 rounded-lg"><Code size={24} className="text-[var(--text-primary)]" /></div>
                        <span className="text-sm font-medium text-[var(--text-primary)] bg-[var(--text-primary)]/10 px-3 py-1 rounded-full">{profile.yearsExperience} de experiência</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-white)] mb-2">{profile.name}</h1>
                    <h2 className="text-xl md:text-2xl text-[var(--text-primary)] font-semibold mb-4">{profile.title}</h2>
                    <div className="flex flex-wrap gap-4 mb-6 text-[var(--text-muted)]">
                        <span className="flex items-center gap-2"><MapPin size={16} /> {profile.location}</span>
                        <span className="flex items-center gap-2"><Mail size={16} /> {profile.email}</span>
                        <span className="flex items-center gap-2"><Calendar size={16} /> {profile.availability}</span>
                    </div>
                    <div className="flex gap-3">
                        <a href={profile.linkedin} target='_blank' className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition"><Users size={16} /> LinkedIn</a>
                        <a href={profile.github} target='_blank' className="inline-flex items-center gap-2 border border-[var(--border-color)] text-[var(--text-white)] px-4 py-2 rounded-lg hover:bg-[var(--bg-surface-muted)] transition"><Github size={16} /> GitHub</a>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-[var(--text-white)] mb-4 flex items-center gap-2"><Award size={20} /> Valor Estratégico</h3>
                        <ul className="space-y-4">
                            {strategicValue.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="text-[var(--text-primary)] mt-1">{item.icon}</div>
                                    <div>
                                        <h4 className="font-medium text-[var(--text-white)] text-sm">{item.title}</h4>
                                        <p className="text-[var(--text-muted)] text-xs">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}