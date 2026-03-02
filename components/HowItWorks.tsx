'use client';
import { motion } from 'framer-motion';

const WA_LINK = "https://wa.me/5548999250605?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20locação%20de%20máquinas%20pesadas.";

const STEPS = [
    { num: '01', title: 'Solicite um Orçamento', desc: 'Entre em contato pelo WhatsApp ou telefone e informe o equipamento e o prazo da obra.', icon: '📋' },
    { num: '02', title: 'Receba a Proposta', desc: 'Nossa equipe analisa a necessidade e envia um orçamento personalizado rapidamente.', icon: '💰' },
    { num: '03', title: 'Entrega no Local', desc: 'Transportamos a máquina até o local da obra com pontualidade e segurança.', icon: '🚛' },
    { num: '04', title: 'Suporte Completo', desc: 'Conte com assistência técnica durante todo o período de locação.', icon: '🔧' },
];

export default function HowItWorks() {
    return (
        <section className="py-16 lg:py-20 relative" style={{ backgroundColor: 'var(--surface-light)' }}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="inline-flex items-center px-5 py-2 rounded-full mb-6"
                        style={{ backgroundColor: 'var(--accent-badge-bg)', border: '1px solid var(--accent-badge-border)' }}
                    >
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: 'var(--accent-dark)' }}>Processo Simples</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
                        style={{ color: 'var(--text-dark)' }}
                    >
                        Como funciona a locação
                    </motion.h2>
                </div>

                {/* Steps grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
                            className="rounded-3xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            style={{ backgroundColor: 'var(--surface-light-card)', border: '1px solid var(--border-light)' }}
                        >
                            <div className="text-4xl mb-5">{step.icon}</div>
                            <div className="text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: 'var(--accent)' }}>{step.num}</div>
                            <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-dark)' }}>{step.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dark-secondary)' }}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-center mt-10"
                >
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                        style={{ backgroundColor: 'var(--accent)' }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" /></svg>
                        Solicitar orçamento agora
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
