import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { blogData } from '../data/blogData';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPage = () => {
    const { language, t } = useLanguage();

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Header />
            
            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <header className="mb-20 text-center max-w-3xl mx-auto">
                        <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in">
                            {t('blog')}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                            {language === 'tr' ? 'Keşfet & Bilgilen' : 'Explore & Stay Informed'}
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {language === 'tr' 
                                ? 'Erişilebilir seyahat dünyasından en son haberler, ipuçları ve ilham verici hikayeler.' 
                                : 'The latest news, tips, and inspiring stories from the world of accessible travel.'}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogData.map((post) => (
                            <Link 
                                key={post.id} 
                                to={`/blog/${post.slug}`}
                                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col border border-slate-100"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={post.image} 
                                        alt={post.title[language]} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center text-xs text-slate-400 mb-4 font-medium uppercase tracking-wider">
                                        <span>{post.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>{post.author}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-snug">
                                        {post.title[language]}
                                    </h2>
                                    <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                                        {post.excerpt[language]}
                                    </p>
                                    <div className="mt-auto flex items-center text-orange-500 font-bold text-sm tracking-wide">
                                        {t('readMore')}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage;
