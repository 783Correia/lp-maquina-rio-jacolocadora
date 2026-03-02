'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WA_LINK = "https://wa.me/5548999250605?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20locação%20de%20máquinas%20pesadas.";

const MACHINES = [
    { name: "CAT 320", type: "Escavadeira", weight: "20t", image: "/images/escavadeiras/cat-320.jpg" },
    { name: "XCMG XE150BR", type: "Escavadeira", weight: "15t", image: "/images/escavadeiras/xe150br.jpg" },
    { name: "CAT 313D2L", type: "Escavadeira", weight: "13t", image: "/images/escavadeiras/escavadeira-caterpillar-313d2l.jpg" },
    { name: "Escavadeira 8t", type: "Escavadeira", weight: "8t", image: "/images/escavadeiras/escavadeira-8-toneladas.jpg" },
    { name: "Bobcat S-650", type: "Mini Carregadeira", weight: "650kg", image: "/images/mini-carregadeiras/bobcat-s650.jpg" },
    { name: "Manitou 1650R", type: "Mini Carregadeira", weight: "1650kg", image: "/images/mini-carregadeiras/manitou-1650r.jpg" },
    { name: "Telescópico 12,8m", type: "Manipulador", weight: "3.5t", image: "/images/manipuladores/manipulador-12m.jpg" },
];

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden" style={{ backgroundColor: 'var(--surface-dark)' }}>
            {/* Subtle gradient orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(58,191,94,0.15), transparent 65%)' }} />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(58,191,94,0.1), transparent 65%)' }} />

            {/* Text content — centered */}
            <div className="relative z-10 pt-20 pb-12 text-center max-w-4xl mx-auto px-6">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8"
                    style={{ border: '1px solid rgba(58,191,94,0.3)', background: 'rgba(58,191,94,0.08)' }}
                >
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)' }} />
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: 'var(--accent)' }}>
                        Locação de Máquinas Pesadas
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
                >
                    Alugue máquinas<br />
                    pesadas{' '}
                    <span className="text-gradient-green">em SC.</span>
                </motion.h1>

                {/* Sub */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
                    style={{ color: 'var(--text-light-secondary)' }}
                >
                    Escavadeiras, mini escavadeiras, manipuladores e mais. Entrega rápida em todo o estado de Santa Catarina.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(58,191,94,0.35)]"
                        style={{ backgroundColor: 'var(--accent)' }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" /></svg>
                        Solicitar orçamento
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12H19M19 12L12 5M19 12L12 19" /></svg>
                    </a>
                </motion.div>
            </div>

            {/* Horizontal scrolling machine cards */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="relative z-10 pb-16"
            >
                {/* Edge fades */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-20 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, var(--surface-dark), transparent)' }} />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-20 pointer-events-none"
                    style={{ background: 'linear-gradient(to left, var(--surface-dark), transparent)' }} />

                <div className="flex gap-5 px-8 sm:px-16 overflow-x-auto no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {MACHINES.map((machine, i) => (
                        <motion.a
                            key={machine.name}
                            href={`${WA_LINK.replace('máquinas%20pesadas', encodeURIComponent(machine.name))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                            className="flex-shrink-0 w-[240px] sm:w-[260px] rounded-3xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                            style={{ border: '1px solid var(--border-dark)' }}
                        >
                            {/* Image area */}
                            <div className="relative h-[200px] sm:h-[220px] overflow-hidden bg-white">
                                <Image
                                    src={machine.image}
                                    alt={machine.name}
                                    fill
                                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                    sizes="260px"
                                />
                            </div>

                            {/* Info strip */}
                            <div className="px-5 py-4" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                                <h3 className="text-base font-bold text-white mb-1">{machine.name}</h3>
                                <p className="text-xs mb-3" style={{ color: 'var(--text-light-secondary)' }}>{machine.type}</p>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <div className="text-lg font-extrabold" style={{ color: 'var(--accent)' }}>{machine.weight}</div>
                                        <div className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-light-secondary)' }}>Peso</div>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
