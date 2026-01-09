import { GitCommit, Mail, Users } from 'lucide-react';

interface ContactCTAProps {
    profile: {
        email: string;
        linkedin: string;
    };
}

export default function ContactCTA({ profile }:ContactCTAProps) {
    return (
        <section className="portfolio-cta bg-gradient-to-r from-[var(--bg-surface)] to-[var(--bg-surface-muted)] border border-[var(--border-color)] rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-[var(--text-primary)]/10 text-[var(--text-primary)] px-4 py-2 rounded-full mb-6">
                    <GitCommit size={16} /> <span className="text-sm font-medium">Pronto para o próximo desafio</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-white)] mb-4">Vamos construir algo incrível juntos?</h3>
                <p className="text-[var(--text-muted)] mb-8">Especializado em sistemas corporativos, arquiteturas escaláveis e desenvolvimento full stack.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 bg-[var(--text-primary)] text-white px-6 py-3 rounded-lg"><Mail size={18} /> E-mail</a>
                    <a href={profile.linkedin} className="inline-flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--text-white)] px-6 py-3 rounded-lg"><Users size={18} /> LinkedIn</a>
                </div>
            </div>
        </section>
    );
}