"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle,
  ChevronDown,
  Clock,
  Database,
  FileText,
  Globe,
  LineChart,
  Lock,
  MessageSquare,
  RefreshCw,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function GMXPitch() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-15%] w-[50%] h-[50%] bg-blue opacity-[0.04] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[40%] h-[50%] bg-teal opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute top-[40%] right-[-5%] w-[30%] h-[30%] bg-gold opacity-[0.02] blur-[100px] rounded-full" />
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 1: COVER */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="slide items-center text-center relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center justify-center gap-6 mb-10"
          >
            <img
              src="/logos/logo-horizontal.svg"
              alt="eximIA"
              className="h-8 md:h-10 opacity-90 invert"
            />
            <span className="text-edge-light text-2xl font-light">&times;</span>
            <img
              src="/logos/gmx-logo-branca.png"
              alt="GMX Consult"
              className="h-8 md:h-10 opacity-90"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue/20 bg-blue-subtle text-blue-light text-xs font-mono mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-light animate-pulse" />
            Proposta Comercial &mdash; Março 2026
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={2}
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-[1.05]"
          >
            IA para
            <br />
            <span className="text-gradient-blue italic">
              Consultoria Financeira
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-xl md:text-2xl text-dim max-w-2xl mx-auto leading-relaxed mb-12 font-light"
          >
            Como multiplicar a capacidade da GMX com Inteligência Artificial
            &mdash; sem perder o toque humano que conquistou 3.000+ clientes e
            20+ prêmios.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="flex items-center justify-center gap-6 text-sm text-cream-dim"
          >
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue" /> Hugo Capitelli &mdash;
              eximIA
            </span>
            <span className="w-1 h-1 rounded-full bg-edge-light" />
            <span className="flex items-center gap-2">
              <Target className="w-4 h-4 text-gold" /> Gustavo Maia &mdash; GMX
              Consult
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-dim animate-bounce" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 2: A GMX HOJE */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="slide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto w-full"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono text-gold mb-4 uppercase tracking-widest"
          >
            A GMX Hoje
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            14 anos de{" "}
            <span className="text-gradient-gold italic">fundação sólida.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-cream-dim max-w-3xl mb-12 leading-relaxed"
          >
            A GMX construiu algo raro: uma consultoria financeira independente
            com metodologia proprietária, a maior carteira de consórcio Mapfre
            do Brasil, e 20+ prêmios internacionais.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {[
              { value: "14", label: "anos de mercado" },
              { value: "3.000+", label: "clientes atendidos" },
              { value: "20+", label: "prêmios internacionais" },
              { value: "1.400", label: "clientes ativos" },
            ].map((stat) => (
              <div key={stat.label} className="gold-card text-center">
                <div className="text-3xl md:text-4xl font-serif text-gradient-gold mb-1">
                  {stat.value}
                </div>
                <p className="text-xs text-cream-dim">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={5}
            className="p-8 rounded-2xl border border-edge bg-surface/50"
          >
            <h3 className="text-sm font-mono text-dim mb-6 uppercase tracking-widest">
              Mas o modelo atual tem um teto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Globe,
                  title: "Invisibilidade digital",
                  desc: "Gustavo tem conteúdo valioso — 4 Potes, finanças pessoais — mas não há presença consistente. Fintechs ocupam o espaço enquanto a GMX fica de fora.",
                },
                {
                  icon: MessageSquare,
                  title: "Follow-up manual",
                  desc: "A maior carteira Mapfre do Brasil depende de alguém lembrar de ligar. Consórcios são abandonados por falta de acompanhamento sistemático.",
                },
                {
                  icon: Search,
                  title: "Pipeline estagnado",
                  desc: "Leads do programa MGM chegam por WhatsApp e ficam esperando triagem. Não há funil digital. Não há prospecção automatizada.",
                },
                {
                  icon: Clock,
                  title: "Sem CRM",
                  desc: "Ninguém consegue em 30 segundos dizer quantos clientes têm seguro mas não têm previdência. Ou quantos consórcios vencem nos próximos 30 dias.",
                },
              ].map((pain) => (
                <div
                  key={pain.title}
                  className="flex gap-4 group"
                >
                  <pain.icon className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-cream mb-1">
                      {pain.title}
                    </h4>
                    <p className="text-sm text-cream-dim leading-relaxed">
                      {pain.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={7}
            className="mt-8 p-6 rounded-xl border border-gold/20 bg-gold-subtle text-center"
          >
            <p className="text-lg font-serif text-gold-light">
              A GMX tem o DNA para escalar &mdash; Gustavo provou ao construir e
              vender a DM10 para a XP.
              <br />A questão não é <em>se</em>. É{" "}
              <strong>como usar IA para que 10 pessoas entreguem o que
              hoje exigiria 20.</strong>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 3: RESULTADOS */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="slide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto w-full"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono text-blue-light mb-4 uppercase tracking-widest"
          >
            Resultados
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-serif mb-16"
          >
            4 resultados{" "}
            <span className="text-gradient-blue italic">concretos.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                num: "01",
                title: "Presença digital sem esforço",
                desc: "4 artigos e 2 vídeos por semana com a voz do Gustavo — gerados por IA, revisados em minutos. LinkedIn ativo sem ninguém parar de vender para escrever.",
                icon: Sparkles,
                color: "blue" as const,
              },
              {
                num: "02",
                title: "Retenção automatizada de consórcios",
                desc: "A maior carteira Mapfre do Brasil com follow-up à altura. Mensagens via WhatsApp lembrando do objetivo, do próximo depósito, dos milestones. Cuidado, não spam.",
                icon: MessageSquare,
                color: "blue" as const,
              },
              {
                num: "03",
                title: "Pipeline de novos clientes 24/7",
                desc: "Conteúdo atrai. Lead magnet captura. Chatbot qualifica. CRM organiza. Humano fecha. Um funil digital alimentado pelo programa MGM e pela presença online.",
                icon: TrendingUp,
                color: "teal" as const,
              },
              {
                num: "04",
                title: "Visibilidade total dos 1.400 clientes",
                desc: "Um sistema único que responde em 1 clique: quem tem seguro mas não tem previdência? Quem está inativo há 6 meses? Quantos consórcios vencem nos próximos 30 dias?",
                icon: Database,
                color: "teal" as const,
              },
            ].map((item) => (
              <motion.div
                key={item.num}
                variants={fadeUp}
                className={`p-8 rounded-2xl border ${
                  item.color === "blue"
                    ? "border-blue/15 bg-gradient-to-br from-blue-subtle to-transparent"
                    : "border-teal/15 bg-gradient-to-br from-teal-dim/10 to-transparent"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-serif text-gradient-blue opacity-30">
                    {item.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <item.icon className="w-5 h-5 text-blue-light" />
                      <h3 className="font-serif text-xl">{item.title}</h3>
                    </div>
                    <p className="text-sm text-cream-dim leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 4: AS 2 FASES */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="slide !min-h-0 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto w-full"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono text-teal mb-4 uppercase tracking-widest"
          >
            Os Projetos
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            IA primeiro.{" "}
            <span className="text-gradient-blue italic">
              Infraestrutura depois.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-cream-dim max-w-3xl mb-16 leading-relaxed"
          >
            A GMX vê IA funcionando nas primeiras semanas. Depois, escalamos
            com a infraestrutura certa. Cada fase entrega valor independente.
          </motion.p>

          {/* ── FASE 1 HEADER ── */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex items-center gap-4 mb-8"
          >
            <div className="px-4 py-1.5 rounded-full bg-blue text-white text-xs font-bold uppercase tracking-widest">
              Fase 1
            </div>
            <h3 className="font-serif text-2xl">IA em Ação</h3>
            <span className="text-sm text-cream-dim">&mdash; semanas 1 a 5</span>
          </motion.div>

          {/* Projeto 1: Conteúdo com IA */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mb-6 p-8 rounded-2xl border-2 border-blue/30 bg-gradient-to-br from-blue-subtle to-transparent relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue/20 text-blue-light text-[10px] font-bold uppercase tracking-widest">
              IA Pura
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-7 h-7 text-blue-light" />
                  <h3 className="font-serif text-2xl">Conteúdo com IA</h3>
                  <span className="px-3 py-1 rounded-full bg-blue/10 text-blue-light text-xs font-mono">
                    Projeto 1
                  </span>
                </div>
                <p className="text-cream-dim leading-relaxed mb-6">
                  Presença digital profissional &mdash; artigos e vídeos com a
                  voz do Gustavo, sem ninguém parar de vender para escrever.
                  Resultado visível na primeira semana.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    "4 artigos/semana no tom do Gustavo",
                    "Treinamento de voz e estilo com IA",
                    "2 vídeos curtos/semana (avatar ou roteiro)",
                    "Publicação LinkedIn automatizada",
                    "Templates por vertical (seguros, consórcios, etc.)",
                    "Revisão humana em 5-10 minutos",
                  ].map((item) => (
                    <div key={item} className="flex gap-2 text-sm text-cream-dim">
                      <CheckCircle className="w-4 h-4 text-blue-light shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/3 flex flex-col justify-center items-center p-6 rounded-xl bg-surface/50 border border-edge">
                <div className="text-sm font-mono text-dim mb-4">
                  Valor gerado
                </div>
                <div className="text-4xl font-serif text-gradient-blue mb-1">
                  R$ 120K
                </div>
                <p className="text-sm text-cream-dim text-center mb-4">
                  por ano em posicionamento + referral
                </p>
                <div className="w-full h-px bg-edge my-2" />
                <div className="text-sm font-mono text-dim mt-2 mb-1">
                  Investimento
                </div>
                <div className="text-2xl font-serif text-cream">
                  R$ 14.000
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projeto 2: Follow-up */}
          <motion.div
            variants={fadeUp}
            custom={5}
            className="mb-6 p-8 rounded-2xl border border-blue/15 bg-gradient-to-br from-blue-subtle to-transparent relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue/20 text-blue-light text-[10px] font-bold uppercase tracking-widest">
              IA + Automação
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-7 h-7 text-blue-light" />
                  <h3 className="font-serif text-2xl">
                    Follow-up Inteligente de Consórcios
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-blue/10 text-blue-light text-xs font-mono">
                    Projeto 2
                  </span>
                </div>
                <p className="text-cream-dim leading-relaxed mb-6">
                  Motor de cadência com IA que cuida da maior carteira Mapfre do Brasil
                  automaticamente via WhatsApp &mdash; com aprovação antes do envio.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    "Lembrete do objetivo do consórcio",
                    "Aviso de depósito com 5 dias de antecedência",
                    "Celebração de milestones (50%, contemplação)",
                    "Alerta ao consultor quando cliente perde pagamento",
                    "10 templates personalizáveis com voz GMX",
                    "Fluxo de aprovação antes do envio",
                  ].map((item) => (
                    <div key={item} className="flex gap-2 text-sm text-cream-dim">
                      <CheckCircle className="w-4 h-4 text-blue-light shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/3 flex flex-col justify-center items-center p-6 rounded-xl bg-surface/50 border border-edge">
                <div className="text-sm font-mono text-dim mb-4">
                  Valor gerado
                </div>
                <div className="text-4xl font-serif text-gradient-blue mb-1">
                  R$ 132K
                </div>
                <p className="text-sm text-cream-dim text-center mb-4">
                  por ano em retenção de carteira
                </p>
                <div className="w-full h-px bg-edge my-2" />
                <div className="text-sm font-mono text-dim mt-2 mb-1">
                  Investimento
                </div>
                <div className="text-2xl font-serif text-cream">
                  R$ 13.200
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projeto 3: Prospecção */}
          <motion.div
            variants={fadeUp}
            custom={6}
            className="mb-16 p-8 rounded-2xl border border-blue/15 bg-gradient-to-br from-blue-subtle to-transparent relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue/20 text-blue-light text-[10px] font-bold uppercase tracking-widest">
              IA + Chatbot
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="w-7 h-7 text-blue-light" />
                  <h3 className="font-serif text-2xl">
                    Prospecção com IA
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-blue/10 text-blue-light text-xs font-mono">
                    Projeto 3
                  </span>
                </div>
                <p className="text-cream-dim leading-relaxed mb-6">
                  Chatbot inteligente que qualifica leads 24/7 +
                  funil digital completo &mdash; com verificação legal antes de qualquer ação.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    "Chatbot de qualificação (filtra antes do humano)",
                    "Verificação legal LGPD + ToS de cada plataforma",
                    "Lead magnet (ex: Guia dos 4 Potes) + landing page",
                    "LinkedIn Sales Navigator setup",
                    "Cadência de outreach semi-automatizada com IA",
                    "Integração total com o CRM (Fase 2)",
                  ].map((item) => (
                    <div key={item} className="flex gap-2 text-sm text-cream-dim">
                      <CheckCircle className="w-4 h-4 text-blue-light shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-cream-dim/70 italic">
                  Se a verificação legal identificar bloqueio em prospecção
                  ativa, adaptamos para 100% inbound &mdash; sem alteração de
                  investimento.
                </p>
              </div>
              <div className="lg:w-1/3 flex flex-col justify-center items-center p-6 rounded-xl bg-surface/50 border border-edge">
                <div className="text-sm font-mono text-dim mb-4">
                  Valor gerado
                </div>
                <div className="text-4xl font-serif text-gradient-blue mb-1">
                  R$ 180K
                </div>
                <p className="text-sm text-cream-dim text-center mb-4">
                  por ano em novos clientes
                </p>
                <div className="w-full h-px bg-edge my-2" />
                <div className="text-sm font-mono text-dim mt-2 mb-1">
                  Investimento
                </div>
                <div className="text-2xl font-serif text-cream">
                  R$ 18.000
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── FASE 2 HEADER ── */}
          <motion.div
            variants={fadeUp}
            custom={7}
            className="flex items-center gap-4 mb-8"
          >
            <div className="px-4 py-1.5 rounded-full bg-gold text-black text-xs font-bold uppercase tracking-widest">
              Fase 2
            </div>
            <h3 className="font-serif text-2xl">Infraestrutura para Escalar</h3>
            <span className="text-sm text-cream-dim">&mdash; semanas 5 a 10</span>
          </motion.div>

          {/* Projeto 4: CRM */}
          <motion.div
            variants={fadeUp}
            custom={8}
            className="p-8 rounded-2xl border border-gold/15 bg-gradient-to-br from-gold-subtle to-transparent"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-7 h-7 text-gold" />
                  <h3 className="font-serif text-2xl">CRM Customizado</h3>
                  <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-mono">
                    Projeto 4
                  </span>
                </div>
                <p className="text-cream-dim leading-relaxed mb-6">
                  O sistema que organiza tudo que a IA gera. Dashboard de
                  clientes, pipeline de vendas, alertas inteligentes &mdash;
                  construído para como a GMX realmente opera.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    "Dashboard com 1.400 clientes por produto",
                    "Pipeline de vendas com status de cada oportunidade",
                    "Alertas: renovação, inativo, cross-sell",
                    "Integração nativa com WhatsApp Business",
                    "Migração completa dos dados existentes",
                    "Detecção automática de cross-sell",
                  ].map((item) => (
                    <div key={item} className="flex gap-2 text-sm text-cream-dim">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/3 flex flex-col justify-center items-center p-6 rounded-xl bg-surface/50 border border-edge">
                <div className="text-sm font-mono text-dim mb-4">
                  Valor gerado
                </div>
                <div className="text-4xl font-serif text-gradient-gold mb-1">
                  R$ 157K
                </div>
                <p className="text-sm text-cream-dim text-center mb-4">
                  por ano em economia operacional
                </p>
                <div className="w-full h-px bg-edge my-2" />
                <div className="text-sm font-mono text-dim mt-2 mb-1">
                  Investimento
                </div>
                <div className="text-2xl font-serif text-cream">
                  R$ 15.700
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 4B: ROI CONSOLIDADO */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="slide !min-h-0 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto w-full"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono text-teal mb-4 uppercase tracking-widest"
          >
            Valor Gerado
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            R$ 589K de retorno no{" "}
            <span className="text-gradient-gold italic">primeiro ano.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-cream-dim max-w-3xl mb-14 leading-relaxed"
          >
            Cada valor foi calculado com base na operação real da GMX &mdash;
            1.400 clientes ativos, maior carteira Mapfre do Brasil, 6 verticais
            de receita.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Conteúdo */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="p-8 rounded-2xl border border-blue/20 bg-gradient-to-br from-blue-subtle to-transparent"
            >
              <div className="flex items-center gap-3 mb-5">
                <Sparkles className="w-6 h-6 text-blue-light" />
                <h3 className="font-serif text-xl">Conteúdo com IA</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue/20 text-blue-light">Fase 1</span>
              </div>
              <div className="text-4xl font-serif text-gradient-blue mb-6">
                R$ 120K<span className="text-lg text-cream-dim font-normal">/ano</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="text-sm text-cream font-medium">Substituição de produção</div>
                    <p className="text-xs text-cream-dim mt-0.5">
                      4 artigos + 2 vídeos/semana. Uma agência cobra R$6K/mês pelo mesmo volume. Com IA, sai em minutos.
                    </p>
                  </div>
                  <span className="text-sm font-mono text-blue-light whitespace-nowrap">R$ 72K</span>
                </div>
                <div className="h-px bg-edge/50" />
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="text-sm text-cream font-medium">Leads orgânicos</div>
                    <p className="text-xs text-cream-dim mt-0.5">
                      Autoridade digital gera indicações. Quem publica regularmente no LinkedIn atrai clientes sem pagar por lead.
                    </p>
                  </div>
                  <span className="text-sm font-mono text-blue-light whitespace-nowrap">R$ 48K</span>
                </div>
              </div>
            </motion.div>

            {/* Follow-up */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="p-8 rounded-2xl border border-blue/20 bg-gradient-to-br from-blue-subtle to-transparent"
            >
              <div className="flex items-center gap-3 mb-5">
                <MessageSquare className="w-6 h-6 text-blue-light" />
                <h3 className="font-serif text-xl">Follow-up Consórcios</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue/20 text-blue-light">Fase 1</span>
              </div>
              <div className="text-4xl font-serif text-gradient-blue mb-6">
                R$ 132K<span className="text-lg text-cream-dim font-normal">/ano</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="text-sm text-cream font-medium">Retenção de carteira</div>
                    <p className="text-xs text-cream-dim mt-0.5">
                      Maior carteira Mapfre do Brasil cuidada por cadência automática. Cada consórcio abandonado é receita recorrente perdida.
                    </p>
                  </div>
                  <span className="text-sm font-mono text-blue-light whitespace-nowrap">R$ 90K</span>
                </div>
                <div className="h-px bg-edge/50" />
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="text-sm text-cream font-medium">Redução de inadimplência</div>
                    <p className="text-xs text-cream-dim mt-0.5">
                      Lembrete de depósito 5 dias antes. Celebração de milestones. O cliente lembra do propósito e paga.
                    </p>
                  </div>
                  <span className="text-sm font-mono text-blue-light whitespace-nowrap">R$ 42K</span>
                </div>
              </div>
            </motion.div>

            {/* Prospecção */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="p-8 rounded-2xl border border-blue/20 bg-gradient-to-br from-blue-subtle to-transparent"
            >
              <div className="flex items-center gap-3 mb-5">
                <Bot className="w-6 h-6 text-blue-light" />
                <h3 className="font-serif text-xl">Prospecção com IA</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue/20 text-blue-light">Fase 1</span>
              </div>
              <div className="text-4xl font-serif text-gradient-blue mb-6">
                R$ 180K<span className="text-lg text-cream-dim font-normal">/ano</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="text-sm text-cream font-medium">Novos clientes via funil digital</div>
                    <p className="text-xs text-cream-dim mt-0.5">
                      90 leads/mês × 10% conversão × R$1.000/cliente/ano. Lead magnet + chatbot + qualificação 24/7.
                    </p>
                  </div>
                  <span className="text-sm font-mono text-blue-light whitespace-nowrap">R$ 108K</span>
                </div>
                <div className="h-px bg-edge/50" />
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="text-sm text-cream font-medium">Programa MGM ampliado</div>
                    <p className="text-xs text-cream-dim mt-0.5">
                      Indicações qualificadas por IA, não filtradas à mão no WhatsApp. Mais indicações convertidas com menos esforço.
                    </p>
                  </div>
                  <span className="text-sm font-mono text-blue-light whitespace-nowrap">R$ 72K</span>
                </div>
              </div>
            </motion.div>

            {/* CRM */}
            <motion.div
              variants={fadeUp}
              custom={6}
              className="p-8 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold-subtle to-transparent"
            >
              <div className="flex items-center gap-3 mb-5">
                <Database className="w-6 h-6 text-gold" />
                <h3 className="font-serif text-xl">CRM Customizado</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold/20 text-gold">Fase 2</span>
              </div>
              <div className="text-4xl font-serif text-gradient-gold mb-6">
                R$ 157K<span className="text-lg text-cream-dim font-normal">/ano</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="text-sm text-cream font-medium">Detecção de cross-sell</div>
                    <p className="text-xs text-cream-dim mt-0.5">
                      1.400 clientes × 6% conversão × R$1.000 ticket médio. Cliente tem seguro mas não previdência? Alerta automático.
                    </p>
                  </div>
                  <span className="text-sm font-mono text-gold whitespace-nowrap">R$ 84K</span>
                </div>
                <div className="h-px bg-edge/50" />
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="text-sm text-cream font-medium">Retenção + eficiência</div>
                    <p className="text-xs text-cream-dim mt-0.5">
                      5% menos cancelamentos com alertas de inatividade + ~0,5 FTE economizado em controle manual.
                    </p>
                  </div>
                  <span className="text-sm font-mono text-gold whitespace-nowrap">R$ 73K</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Total bar */}
          <motion.div
            variants={fadeUp}
            custom={7}
            className="mt-10 p-6 rounded-xl border-2 border-gold/30 bg-gradient-to-r from-gold-subtle to-transparent flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="text-center md:text-left">
              <div className="text-sm font-mono text-gold uppercase tracking-widest mb-1">
                Valor total gerado no Ano 1
              </div>
              <div className="text-5xl font-serif text-gradient-gold">
                R$ 589K
              </div>
            </div>
            <div className="flex gap-8 text-center">
              <div>
                <div className="text-2xl font-serif text-cream">9,7:1</div>
                <div className="text-xs text-cream-dim">ROI</div>
              </div>
              <div className="w-px bg-edge" />
              <div>
                <div className="text-2xl font-serif text-cream">~1 mês</div>
                <div className="text-xs text-cream-dim">Breakeven</div>
              </div>
              <div className="w-px bg-edge" />
              <div>
                <div className="text-2xl font-serif text-cream">1,7%</div>
                <div className="text-xs text-cream-dim">da receita GMX</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 5: INVESTIMENTO */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="slide !min-h-0 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto w-full"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono text-blue-light mb-4 uppercase tracking-widest"
          >
            Investimento
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Escolha o{" "}
            <span className="text-gradient-blue italic">seu caminho.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-cream-dim max-w-3xl mb-12 leading-relaxed"
          >
            Precificação baseada em ROI: cada projeto custa 10% do valor que gera no
            primeiro ano. Comece pela Fase 1 ou contrate tudo de uma vez.
          </motion.p>

          {/* Pricing table */}
          <motion.div variants={fadeUp} custom={3} className="mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-edge">
                    <th className="text-left py-4 pr-4 font-mono text-xs text-dim uppercase tracking-widest">
                      Projeto
                    </th>
                    <th className="text-center py-4 px-4 font-mono text-xs text-dim uppercase tracking-widest">
                      Fase
                    </th>
                    <th className="text-center py-4 px-4 font-mono text-xs text-dim uppercase tracking-widest">
                      ROI Ano 1
                    </th>
                    <th className="text-center py-4 px-4 font-mono text-xs text-dim uppercase tracking-widest">
                      Investimento
                    </th>
                    <th className="text-center py-4 px-4 font-mono text-xs text-dim uppercase tracking-widest">
                      Entrega
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cream-dim">
                  {[
                    {
                      name: "1. Conteúdo com IA",
                      phase: "Fase 1",
                      roiValue: "R$ 120K",
                      price: "R$ 14.000",
                      delivery: "2-3 sem",
                      phaseColor: "text-blue-light",
                    },
                    {
                      name: "2. Follow-up Consórcios",
                      phase: "Fase 1",
                      roiValue: "R$ 132K",
                      price: "R$ 13.200",
                      delivery: "2-3 sem",
                      phaseColor: "text-blue-light",
                    },
                    {
                      name: "3. Prospecção com IA",
                      phase: "Fase 1",
                      roiValue: "R$ 180K",
                      price: "R$ 18.000",
                      delivery: "3-4 sem",
                      phaseColor: "text-blue-light",
                    },
                    {
                      name: "4. CRM Customizado",
                      phase: "Fase 2",
                      roiValue: "R$ 157K",
                      price: "R$ 15.700",
                      delivery: "3-4 sem",
                      phaseColor: "text-gold",
                    },
                  ].map((row) => (
                    <tr key={row.name} className="border-b border-edge/50">
                      <td className="py-4 pr-4 font-medium text-cream">
                        {row.name}
                      </td>
                      <td className={`text-center py-4 px-4 font-mono text-xs ${row.phaseColor}`}>
                        {row.phase}
                      </td>
                      <td className="text-center py-4 px-4">{row.roiValue}</td>
                      <td className="text-center py-4 px-4 font-semibold text-blue-light">
                        {row.price}
                      </td>
                      <td className="text-center py-4 px-4">{row.delivery}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gold/30">
                    <td className="py-4 pr-4 font-bold text-cream text-base" colSpan={2}>TOTAL</td>
                    <td className="text-center py-4 px-4 font-bold text-cream">R$ 589K</td>
                    <td className="text-center py-4 px-4 font-bold text-gold text-lg">R$ 60.900</td>
                    <td className="text-center py-4 px-4 text-cream">8-10 sem</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Payment Options */}
          <motion.div
            variants={fadeUp}
            custom={5}
            className="mt-8"
          >
            <h4 className="text-sm font-mono text-dim mb-6 uppercase tracking-widest">
              Condições de pagamento
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* À vista */}
              <div className="p-6 rounded-xl border-2 border-gold/40 bg-gradient-to-br from-gold-subtle to-transparent relative">
                <div className="absolute -top-3 left-4 px-3 py-0.5 rounded-full bg-gold text-black text-[10px] font-bold uppercase tracking-widest">
                  Melhor valor
                </div>
                <div className="text-blue-light font-mono text-xs uppercase tracking-widest mb-3">
                  À vista
                </div>
                <div className="text-3xl font-serif text-gradient-gold mb-1">
                  R$ 54.800
                </div>
                <p className="text-xs text-gold mb-4">
                  Economia de R$ 6.100 (10% off)
                </p>
                <div className="w-full h-px bg-edge my-3" />
                <p className="text-xs text-cream-dim">
                  Pagamento único via Pix ou transferência antes do início do projeto.
                </p>
              </div>

              {/* 2x */}
              <div className="p-6 rounded-xl border border-edge bg-surface/30">
                <div className="text-blue-light font-mono text-xs uppercase tracking-widest mb-3">
                  Em 2×
                </div>
                <div className="text-3xl font-serif text-cream mb-1">
                  2× R$ 30.450
                </div>
                <p className="text-xs text-cream-dim mb-4">
                  Total: R$ 60.900 &mdash; sem juros
                </p>
                <div className="w-full h-px bg-edge my-3" />
                <p className="text-xs text-cream-dim">
                  50% no início + 50% na entrega da Fase 1.
                </p>
              </div>

              {/* Por fase */}
              <div className="p-6 rounded-xl border border-edge bg-surface/30">
                <div className="text-blue-light font-mono text-xs uppercase tracking-widest mb-3">
                  Por fase
                </div>
                <div className="text-3xl font-serif text-cream mb-1">
                  4 parcelas
                </div>
                <p className="text-xs text-cream-dim mb-4">
                  Total: R$ 60.900 &mdash; sem juros
                </p>
                <div className="w-full h-px bg-edge my-3" />
                <p className="text-xs text-cream-dim">
                  Paga cada projeto na entrega: R$ 14.000 + R$ 13.200 + R$ 18.000 + R$ 15.700.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 6: CRONOGRAMA */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="slide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-5xl mx-auto w-full"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono text-teal mb-4 uppercase tracking-widest"
          >
            Cronograma
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-serif mb-16"
          >
            Semana a{" "}
            <span className="text-gradient-blue italic">semana.</span>
          </motion.h2>

          <motion.div variants={fadeUp} custom={2} className="space-y-0">
            {[
              {
                phase: "Semana 1",
                title: "Conteúdo com IA — Setup",
                desc: "Treinamento de voz/tom do Gustavo, configuração do pipeline de artigos, primeiros artigos gerados.",
                project: "Conteúdo",
                color: "blue" as const,
              },
              {
                phase: "Semanas 2-3",
                title: "Conteúdo Operacional + Follow-up",
                desc: "Artigos e vídeos publicados no LinkedIn. Motor de cadência dos consórcios: templates, triggers, fluxo de aprovação.",
                project: "Conteúdo + Follow-up",
                color: "blue" as const,
              },
              {
                phase: "Semanas 3-4",
                title: "Chatbot + Prospecção",
                desc: "Verificação legal LGPD. Chatbot de qualificação treinado. Lead magnet e landing page prontos.",
                project: "Prospecção",
                color: "blue" as const,
              },
              {
                phase: "Semana 5",
                title: "Entrega Fase 1",
                desc: "Conteúdo rodando, follow-up ativo, chatbot qualificando. IA em produção. Testes e ajustes finais.",
                project: "Fase 1 completa",
                color: "teal" as const,
              },
              {
                phase: "Semanas 5-6",
                title: "CRM — Setup & Migração",
                desc: "Mapeamento de dados, configuração de ambiente, início da migração dos 1.400 clientes.",
                project: "CRM",
                color: "gold" as const,
              },
              {
                phase: "Semanas 7-8",
                title: "Dashboard & Pipeline",
                desc: "Dashboard de clientes por produto, pipeline de vendas, alertas inteligentes, integração WhatsApp.",
                project: "CRM",
                color: "gold" as const,
              },
              {
                phase: "Semanas 9-10",
                title: "Entrega Fase 2",
                desc: "CRM operacional, integrado com follow-up e prospecção. Cross-sell ativo. Treinamento da equipe.",
                project: "Fase 2 completa",
                color: "gold" as const,
              },
            ].map((step, i) => (
              <motion.div
                key={step.phase}
                variants={fadeUp}
                custom={2 + i}
                className="flex gap-6 items-stretch"
              >
                <div className="flex flex-col items-center shrink-0 w-28">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      step.color === "blue"
                        ? "bg-blue-light"
                        : step.color === "teal"
                          ? "bg-teal-light"
                          : "bg-gold"
                    }`}
                  />
                  {i < 6 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-edge-light to-edge" />
                  )}
                </div>
                <div className="pb-8 flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className={`text-xs font-mono uppercase tracking-widest ${
                        step.color === "blue"
                          ? "text-blue-light"
                          : step.color === "teal"
                            ? "text-teal-light"
                            : "text-gold"
                      }`}
                    >
                      {step.phase}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-edge text-dim">
                      {step.project}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-cream-dim leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={10}
            className="mt-4 text-sm text-cream-dim/70 italic text-center"
          >
            Fase 1 entrega IA funcionando em 5 semanas.
            Fase 2 escala com infraestrutura nas semanas seguintes.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 7: POR QUE EXIMIA */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="slide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto w-full"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono text-blue-light mb-4 uppercase tracking-widest"
          >
            Por que eximIA
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-serif mb-16"
          >
            As{" "}
            <span className="text-gradient-blue italic">alternativas.</span>
          </motion.h2>

          <motion.div variants={fadeUp} custom={2} className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-edge">
                  <th className="text-left py-4 pr-6 font-mono text-xs text-dim uppercase tracking-widest">
                    Alternativa
                  </th>
                  <th className="text-center py-4 px-4 font-mono text-xs text-dim uppercase tracking-widest">
                    Custo
                  </th>
                  <th className="text-center py-4 px-4 font-mono text-xs text-dim uppercase tracking-widest">
                    Problema
                  </th>
                </tr>
              </thead>
              <tbody className="text-cream-dim">
                {[
                  {
                    alt: "Dev interno",
                    cost: "R$15-25K/mês",
                    problem:
                      "Difícil reter. Meses para entregar. Sem garantia. Em 3 meses de salário, ultrapassou o investimento inteiro.",
                  },
                  {
                    alt: "CRM pronto (HubSpot)",
                    cost: "~R$4.800/mês",
                    problem:
                      "Não integra WhatsApp. Não faz follow-up de consórcio. Não gera conteúdo. É alugado. R$57K/ano — indefinidamente.",
                  },
                  {
                    alt: "Big 4",
                    cost: "R$150-300K",
                    problem:
                      "Escopo rígido. Meses de discovery. Consultores junior fazem o trabalho. A proposta deles custa mais que a entrega inteira.",
                  },
                  {
                    alt: "Não fazer nada",
                    cost: "Invisível",
                    problem:
                      "Cross-sells perdidos. Consórcios abandonados. Espaço digital cedido para fintechs. O custo cresce todo mês.",
                  },
                ].map((row) => (
                  <tr key={row.alt} className="border-b border-edge/50">
                    <td className="py-4 pr-6 font-medium text-cream">
                      {row.alt}
                    </td>
                    <td className="text-center py-4 px-4 text-gold font-mono text-xs whitespace-nowrap">
                      {row.cost}
                    </td>
                    <td className="py-4 px-4 text-sm">{row.problem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-10 p-6 rounded-xl border border-blue/20 bg-blue-subtle"
          >
            <p className="text-lg text-center">
              A eximIA nasceu como IA. Não é consultoria que adicionou IA
              depois.
              <br />É{" "}
              <strong className="text-blue-light">AI-first</strong> com
              delivery em semanas, não meses. Hugo acompanha como{" "}
              <strong className="text-cream">advisor estratégico e técnico</strong>{" "}
              &mdash; não é um software que você compra e reza para funcionar.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 8: SEGURANÇA + INCLUSO */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="slide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Security */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="p-8 rounded-2xl border border-edge bg-surface/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-blue-light" />
                <h3 className="font-serif text-2xl">Segurança & Privacidade</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Criptografia em trânsito e em repouso",
                  "Dados em ambiente isolado — nunca compartilhados",
                  "Nunca usados para treinar modelos de IA públicos",
                  "Compliance LGPD e boas práticas do setor financeiro",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-cream-dim">
                    <Lock className="w-4 h-4 text-blue-light shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Included */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="p-8 rounded-2xl border border-edge bg-surface/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-gold" />
                <h3 className="font-serif text-2xl">Incluso em Todos</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "30 dias de suporte pós-entrega",
                  "Treinamento prático da equipe GMX",
                  "Documentação técnica completa",
                  "Plano de Evolução Contínua disponível após suporte",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-cream-dim">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 9: EVOLUÇÃO CONTÍNUA */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="slide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto w-full"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-mono text-teal mb-4 uppercase tracking-widest"
          >
            Pós-Entrega
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Evolução{" "}
            <span className="text-gradient-blue italic">contínua.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-cream-dim max-w-3xl mb-14 leading-relaxed"
          >
            O sistema é entregue. A inteligência é contínua. Após os 30 dias de
            suporte incluso, a GMX pode optar por um plano mensal que mantém
            tudo atualizado e em constante evolução.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="p-8 md:p-10 rounded-2xl border-2 border-blue/30 bg-gradient-to-br from-blue-subtle to-transparent relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-blue text-white text-xs font-bold uppercase tracking-widest">
              Recomendado
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-2">
                  <RefreshCw className="w-7 h-7 text-blue-light" />
                  <h3 className="font-serif text-2xl">Plano Evolução Contínua</h3>
                </div>
                <p className="text-cream-dim leading-relaxed mb-8">
                  Suporte, otimização e melhorias contínuas &mdash; para que os
                  sistemas não apenas funcionem, mas melhorem mês a mês.
                  Infraestrutura definida à parte conforme necessidade.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    {
                      title: "Manutenção & Segurança",
                      desc: "Patches, atualizações, correções de bugs, backups",
                    },
                    {
                      title: "5h de suporte mensal",
                      desc: "Dúvidas, ajustes, treinamento de novos colaboradores",
                    },
                    {
                      title: "Otimização de IA",
                      desc: "Melhoria contínua do conteúdo, chatbot e automações",
                    },
                    {
                      title: "Relatórios de performance",
                      desc: "Métricas de uso do CRM, follow-up e funil digital",
                    },
                    {
                      title: "Prioridade de atendimento",
                      desc: "Canal direto com Hugo para questões urgentes",
                    },
                    {
                      title: "Evolução contínua",
                      desc: "Novas funcionalidades e ajustes conforme o negócio cresce",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-light shrink-0 mt-1" />
                      <div>
                        <div className="text-sm font-medium text-cream">
                          {item.title}
                        </div>
                        <p className="text-xs text-cream-dim mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/3 flex flex-col justify-center items-center p-8 rounded-xl bg-surface/50 border border-edge">
                <div className="text-sm font-mono text-dim mb-6 uppercase tracking-widest">
                  Investimento mensal
                </div>
                <div className="text-5xl font-serif text-gradient-blue mb-1">
                  R$ 2.500
                </div>
                <p className="text-sm text-cream-dim mb-6">/mês</p>

                <div className="w-full h-px bg-edge my-2" />

                <div className="mt-4 space-y-3 w-full text-center">
                  <p className="text-xs text-cream-dim italic">
                    Infraestrutura e hosting definidos à parte conforme escopo.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              {
                icon: Shield,
                title: "Sem surpresas",
                desc: "Valor fixo mensal. Sem taxa por chamado, sem cobrança extra por atualização.",
              },
              {
                icon: Zap,
                title: "Início após suporte",
                desc: "Os 30 dias de suporte incluso rodam primeiro. O plano começa depois, sem sobreposição.",
              },
              {
                icon: ArrowRight,
                title: "Sem fidelidade",
                desc: "Cancele quando quiser com 30 dias de aviso. Sem multa, sem contrato longo.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border border-edge bg-surface/30 text-center"
              >
                <item.icon className="w-5 h-5 text-blue-light mx-auto mb-3" />
                <h4 className="text-sm font-semibold text-cream mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-cream-dim">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* SLIDE 10: CTA */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="slide items-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <img
              src="/logos/simbolo.svg"
              alt="eximIA"
              className="w-12 h-12 opacity-80 invert"
            />
            <span className="text-edge-light text-xl font-light">&times;</span>
            <img
              src="/logos/gmx-icon.png"
              alt="GMX"
              className="h-12 opacity-80"
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Próximo{" "}
            <span className="text-gradient-blue italic">passo.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-cream-dim max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Comece pela Fase 1 &mdash; IA em ação nas primeiras semanas &mdash;
            ou contrate tudo de uma vez com desconto à vista. Na primeira semana,
            o conteúdo com IA já começa a rodar.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mb-12 p-6 rounded-xl border border-gold/20 bg-gold-subtle"
          >
            <p className="text-xl font-serif text-gold-light">
              A GMX tem 14 anos de fundação sólida.
              <br />
              Com IA, os próximos 14 vão ser de{" "}
              <strong>escala.</strong>
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="flex flex-col items-center gap-6"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue text-white font-semibold text-lg shadow-[var(--shadow-glow-blue)] hover:bg-blue-light transition-colors cursor-default">
              Vamos Começar
              <ArrowRight className="w-5 h-5" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-cream-dim">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-light" />
                IA rodando em semanas
              </span>
              <span className="w-1 h-1 rounded-full bg-edge-light" />
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-light" />
                Breakeven em 1-2 meses
              </span>
              <span className="w-1 h-1 rounded-full bg-edge-light" />
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-light" />
                ROI 9,7×
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={5}
            className="mt-20 pt-8 border-t border-edge"
          >
            <p className="text-xs text-dim">
              eximIA Ventures &mdash; Execução eXtraordinária por Inteligência,
              Maestria e Inovação Autônoma
            </p>
            <p className="text-xs text-dim mt-1">
              hugo@eximiaventures.com.br
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
