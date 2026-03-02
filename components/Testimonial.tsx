'use client';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
    {
        text: "Precisávamos de uma escavadeira CAT para uma obra urgente e a Jacó entregou em menos de 48 horas. Máquina impecável.",
        author: "Rafael C.",
        company: "Construtora parceira · Florianópolis, SC",
    },
    {
        text: "Locamos mini escavadeiras para um loteamento inteiro. Preço justo, máquinas novas e suporte técnico durante toda a obra.",
        author: "Marcelo T.",
        company: "Empreiteira · Joinville, SC",
    },
    {
        text: "A variedade da frota impressiona. Desde mini escavadeiras de 1 tonelada até a CAT 320. Tudo em um só fornecedor.",
        author: "Juliana S.",
        company: "Construtora · Itajaí, SC",
    },
    {
        text: "Trabalhamos com a Jacó há mais de 5 anos na locação de máquinas pesadas. Sempre máquinas bem cuidadas e atendimento rápido.",
        author: "André P.",
        company: "Indústria · Criciúma, SC",
    },
    {
        text: "O manipulador telescópico ajudou muito na obra. Entrega e retirada pontuais, sem atrasar o cronograma.",
        author: "Carla M.",
        company: "Construtora · Blumenau, SC",
    },
    {
        text: "Orçamento rápido pelo WhatsApp, entrega pontual e máquina impecável. Virou nosso parceiro fixo de locação.",
        author: "Fernando L.",
        company: "Construtora · Chapecó, SC",
    },
];

const Stars = () => (
    <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        ))}
    </div>
);

export default function Testimonial() {
    return (
        <section className="py-16 lg:py-20 relative" style={{ backgroundColor: 'var(--surface-light)' }}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="inline-flex items-center px-5 py-2 rounded-full mb-6"
                        style={{ backgroundColor: 'var(--accent-badge-bg)', border: '1px solid var(--accent-badge-border)' }}
                    >
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: 'var(--accent-dark)' }}>Depoimentos</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
                        style={{ color: 'var(--text-dark)' }}
                    >
                        Quem constrói com a Jacó<br />recomenda
                    </motion.h2>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
                            className="break-inside-avoid rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                            style={{ backgroundColor: 'var(--surface-light-card)', border: '1px solid var(--border-light)' }}
                        >
                            <Stars />
                            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-dark)' }}>{t.text}</p>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }}>
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold" style={{ color: 'var(--text-dark)' }}>{t.author}</p>
                                    <p className="text-xs" style={{ color: 'var(--text-dark-secondary)' }}>{t.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
