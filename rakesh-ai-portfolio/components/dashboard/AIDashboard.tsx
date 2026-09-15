"use client";

import { motion } from "framer-motion";
import {
    BrainCircuit, Database, Network, ServerCog, Activity,
    Cpu, CheckCircle2, ArrowUpRight, Sparkles
} from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, fadeUpChild } from "@/lib/motion";

const METRICS=[
    {title:"GraphRAG Pipelines",value:"06",change:"+2 this month",icon:Network},
    {title:"LLM APIs",value:"20+",change:"GPT-5 • Claude • Gemini",icon:BrainCircuit},
    {title:"Vector Databases",value:"12",change:"Neo4j • Qdrant • Pinecone",icon:Database},
    {title:"AI Backend Services",value:"15+",change:"FastAPI • Docker • Redis",icon:ServerCog},
];

const PROVIDERS=[
    {name:"OpenAI GPT-5",usage:96},
    {name:"Claude",usage:88},
    {name:"Gemini",usage:82},
    {name:"OpenAI Embeddings",usage:92},
];

const PIPELINE=[
    "Documents Ingestion","Embedding Generation","Vector Search",
    "Neo4j Knowledge Graph","Hybrid Retrieval","GPT-5 Response Generation"
];

export default function AIDashboard(){
    return(
        <section id="dashboard" className="section-spacing relative overflow-hidden">
            <div className="container-ai relative z-10">
                <ScrollReveal>
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="badge-glow">AI Engineering Dashboard</span>
                        <h2 className="section-title mt-6">Production AI Infrastructure</h2>
                        <p className="section-description mt-6">
                            GraphRAG • AI Agents • LLM APIs • Vector Search • Knowledge Graphs • FastAPI
                        </p>
                    </div>
                </ScrollReveal>

                <motion.div
                    variants={staggerContainer(0.08,0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
                >
                    {METRICS.map(metric=>{
                        const Icon=metric.icon;
                        return(
                            <motion.div key={metric.title} variants={fadeUpChild} whileHover={{y:-6}} className="dashboard-card p-6">
                                <div className="flex items-center justify-between">
                                    <div className="icon-box"><Icon size={22}/></div>
                                    <ArrowUpRight size={18} className="text-cyan-400"/>
                                </div>
                                <h3 className="mt-8 text-4xl font-bold hero-gradient">{metric.value}</h3>
                                <p className="mt-2 font-medium text-white">{metric.title}</p>
                                <p className="mt-3 text-sm text-slate-400">{metric.change}</p>
                            </motion.div>
                        )
                    })}
                </motion.div>

                <div className="mt-20 grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
                    <ScrollReveal>
                        <div className="glass-card rounded-card p-8">
                            <div className="mb-8 flex items-center gap-3">
                                <Network className="text-cyan-400"/>
                                <h3 className="text-2xl font-semibold text-white">GraphRAG Pipeline</h3>
                            </div>

                            {PIPELINE.map((step,index)=>(
                                <div key={step} className="mb-5 flex items-center gap-4 rounded-xl border border-cyan-400/10 bg-cyan-500/5 p-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">
                                        {index+1}
                                    </div>
                                    <span className="text-slate-200">{step}</span>
                                    <CheckCircle2 className="ml-auto text-emerald-400"/>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="dashboard-card rounded-card p-8">
                            <div className="mb-8 flex items-center gap-3">
                                <Cpu className="text-cyan-400"/>
                                <h3 className="text-2xl font-semibold text-white">LLM Runtime Status</h3>
                            </div>

                            {PROVIDERS.map(provider=>(
                                <div key={provider.name} className="mb-6">
                                    <div className="mb-2 flex justify-between text-sm">
                                        <span className="text-slate-300">{provider.name}</span>
                                        <span className="text-cyan-300">{provider.usage}%</span>
                                    </div>

                                    <div className="h-2 rounded-full bg-slate-800">
                                        <motion.div
                                            initial={{width:0}}
                                            whileInView={{width:`${provider.usage}%`}}
                                            viewport={{once:true}}
                                            transition={{duration:1}}
                                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500"
                                        />
                                    </div>
                                </div>
                            ))}

                            <div className="mt-8 rounded-xl border border-cyan-400/10 bg-cyan-500/10 p-5">
                                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Current Workflow</p>
                                <h4 className="mt-3 text-lg font-semibold text-white">LangGraph Multi-Agent Execution</h4>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal className="mt-20">
                    <div className="glass-card rounded-card p-8">
                        <div className="mb-8 flex items-center gap-3">
                            <Activity className="text-cyan-400"/>
                            <h3 className="text-2xl font-semibold text-white">Live Engineering Activity</h3>
                        </div>

                        {[
                            "GraphRAG retrieval pipeline deployed successfully.",
                            "Hybrid search latency optimized below 150ms.",
                            "LLM streaming endpoint connected to FastAPI.",
                            "Embeddings indexed in Neo4j + Qdrant.",
                            "Docker deployment completed."
                        ].map((log,index)=>(
                            <motion.div
                                key={log}
                                initial={{opacity:0,x:-20}}
                                whileInView={{opacity:1,x:0}}
                                viewport={{once:true}}
                                transition={{delay:index*0.08}}
                                className="mb-4 flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4"
                            >
                                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse"/>
                                <span className="text-slate-300">{log}</span>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>

                <ScrollReveal className="mt-20">
                    <div className="dashboard-card rounded-card p-10 text-center">
                        <Sparkles className="mx-auto text-cyan-400" size={40}/>
                        <h3 className="mt-6 text-3xl font-semibold text-white">
                            Building Enterprise GenAI Platforms
                        </h3>
                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Production AI backend systems with FastAPI, GraphRAG, LangGraph,
                            Neo4j, Qdrant, Redis, Docker, streaming APIs, and cloud-native LLM infrastructure.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
