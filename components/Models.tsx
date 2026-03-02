'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const WA_BASE = "https://wa.me/5548999250605?text=";

interface Model {
    name: string;
    fullName: string;
    weight: string;
    application: string;
    category: 'escavadeira' | 'mini-escavadeira' | 'manipulador' | 'mini-carregadeira' | 'rolo';
    image: string;
}

const MODELS: Model[] = [
    { name: "CAT 320", fullName: "Escavadeira Caterpillar 320", weight: "20t", application: "Escavações de grande porte", category: "escavadeira", image: "/images/escavadeiras/cat-320.jpg" },
    { name: "XCMG XE150BR", fullName: "Escavadeira XCMG XE150BR", weight: "15t", application: "Escavações médias", category: "escavadeira", image: "/images/escavadeiras/xe150br.jpg" },
    { name: "CAT 313D2L", fullName: "Escavadeira Caterpillar 313D2L", weight: "13t", application: "Versatilidade em obras", category: "escavadeira", image: "/images/escavadeiras/escavadeira-caterpillar-313d2l.jpg" },
    { name: "Escavadeira 8t", fullName: "Escavadeira 8 Toneladas", weight: "8t", application: "Obras compactas", category: "escavadeira", image: "/images/escavadeiras/escavadeira-8-toneladas.jpg" },
    { name: "Mini Escav. 1t", fullName: "Mini Escavadeira 1 Tonelada", weight: "1t", application: "Espaços ultra confinados", category: "mini-escavadeira", image: "/images/mini-escavadeiras/mini-escavadeira-1t.jpg" },
    { name: "Mini Escav. 2t", fullName: "Mini Escavadeira 2 Toneladas", weight: "2t", application: "Obras residenciais", category: "mini-escavadeira", image: "/images/mini-escavadeiras/mini-escavadeira-2t.jpg" },
    { name: "Mini Escav. 2,7t", fullName: "Mini Escavadeira 2,7 Toneladas", weight: "2,7t", application: "Escavações leves", category: "mini-escavadeira", image: "/images/mini-escavadeiras/mini-escavadeira-2.7t.jpg" },
    { name: "Mini Escav. 3t", fullName: "Mini Escavadeira 3 Toneladas", weight: "3t", application: "Obras e terraplanagem", category: "mini-escavadeira", image: "/images/mini-escavadeiras/mini-escavadeira-3t.jpg" },
    { name: "Mini Escav. 3,5t", fullName: "Mini Escavadeira 3,5 Toneladas", weight: "3,5t", application: "Fundações e valas", category: "mini-escavadeira", image: "/images/mini-escavadeiras/mini-escavadeira-3.5t.jpg" },
    { name: "Mini Escav. 5,5t", fullName: "Mini Escavadeira 5,5 Toneladas", weight: "5,5t", application: "Obras de médio porte", category: "mini-escavadeira", image: "/images/mini-escavadeiras/mini-escavadeira-5.5t.jpg" },
    { name: "Bobcat S-650", fullName: "Mini Carregadeira Bobcat S-650", weight: "650kg", application: "Carregamento e remoção", category: "mini-carregadeira", image: "/images/mini-carregadeiras/bobcat-s650.jpg" },
    { name: "Manitou 1650R", fullName: "Mini Carregadeira Manitou 1650R", weight: "1650kg", application: "Carregamento pesado", category: "mini-carregadeira", image: "/images/mini-carregadeiras/manitou-1650r.jpg" },
    { name: "Telescópico 12,8m", fullName: "Manipulador Telescópico 12,8m", weight: "3,5t", application: "Movimentação em altura", category: "manipulador", image: "/images/manipuladores/manipulador-12m.jpg" },
    { name: "Telescópico 17m", fullName: "Manipulador Telescópico 17m", weight: "4t", application: "Grandes alturas", category: "manipulador", image: "/images/manipuladores/manipulador-17m.jpg" },
    { name: "Rolo 1,5t Liso", fullName: "Rolo Compactador 1,5 Ton Liso", weight: "1,5t", application: "Compactação de solo", category: "rolo", image: "/images/rolo-compactador/rolo-compactador-1.5t.jpg" },
];

const TABS = [
    { label: 'Todas', value: 'all' },
    { label: 'Escavadeira', value: 'escavadeira' },
    { label: 'Mini Escavadeira', value: 'mini-escavadeira' },
    { label: 'Mini Carregadeira', value: 'mini-carregadeira' },
    { label: 'Manipulador', value: 'manipulador' },
    { label: 'Rolo', value: 'rolo' },
];

export default function Models() {
    const [active, setActive] = useState('all');
    const filtered = active === 'all' ? MODELS : MODELS.filter(m => m.category === active);

    return (
        <section className="py-16 lg:py-20 relative" id="frota" style={{ backgroundColor: 'var(--surface-light)' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

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
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: 'var(--accent-dark)' }}>Frota de Máquinas Pesadas</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
                        style={{ color: 'var(--text-dark)' }}
                    >
                        Equipamentos de ponta para<br />todo tipo de obra
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-lg mt-4 max-w-2xl mx-auto"
                        style={{ color: 'var(--text-dark-secondary)' }}
                    >
                        Máquinas das melhores marcas do mercado com suporte técnico especializado.
                    </motion.p>
                </div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    {TABS.map(tab => (
                        <button
                            key={tab.value}
                            onClick={() => setActive(tab.value)}
                            className="px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-[1.03]"
                            style={{
                                backgroundColor: active === tab.value ? 'var(--accent)' : 'white',
                                color: active === tab.value ? 'white' : 'var(--text-dark-secondary)',
                                border: active === tab.value ? '1px solid var(--accent)' : '1px solid var(--border-light)',
                                boxShadow: active === tab.value ? '0 4px 16px var(--accent-glow)' : '0 1px 4px rgba(0,0,0,0.04)',
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((model) => (
                            <motion.div
                                key={model.name}
                                layout
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                className="group rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                style={{ backgroundColor: 'var(--surface-light-card)', border: '1px solid var(--border-light)' }}
                            >
                                <div className="relative h-52 overflow-hidden bg-white">
                                    <Image
                                        src={model.image}
                                        alt={model.fullName}
                                        fill
                                        className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                    <div className="absolute top-3 right-3 px-3 py-1.5 text-white text-xs font-bold rounded-lg shadow-lg" style={{ backgroundColor: 'var(--accent)' }}>
                                        {model.weight}
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h3 className="text-base font-bold mb-1.5" style={{ color: 'var(--text-dark)' }}>{model.fullName}</h3>
                                    <span className="inline-block px-3 py-1 text-[10px] font-semibold rounded-full mb-4 capitalize" style={{ color: 'var(--accent-dark)', backgroundColor: 'var(--accent-badge-bg)' }}>
                                        {model.category.replace(/-/g, ' ')} · {model.application}
                                    </span>
                                    <a
                                        href={`${WA_BASE}Olá!%20Tenho%20interesse%20na%20${encodeURIComponent(model.fullName)}.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block py-3 text-center text-sm font-semibold text-white rounded-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                                        style={{ backgroundColor: 'var(--accent)' }}
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" /></svg>
                                            Pedir Orçamento
                                        </span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
