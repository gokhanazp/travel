import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { blogData } from '../data/blogData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogDetailPage = () => {
    const { slug } = useParams();
    const { language, t } = useLanguage();
    
    // Find the post by slug
    const post = blogData.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center">
                <Header />
                <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
                <Link to="/blog" className="text-orange-500 hover:underline">Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Header />
            
            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <header className="mb-12">
                        <Link to="/blog" className="flex items-center text-orange-500 font-bold text-sm tracking-wide mb-8 group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:-translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            {language === 'tr' ? 'Blog Listesine Dön' : 'Back to Blog'}
                        </Link>
                        
                        <div className="flex items-center text-xs text-slate-400 mb-6 font-medium uppercase tracking-widest">
                            <span>{post.date}</span>
                            <span className="mx-2 text-slate-300">•</span>
                            <span>{post.author}</span>
                            <span className="ml-auto flex items-center bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                {language === 'tr' ? '5 dakikalık okuma' : '5 min read'}
                            </span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-[1.1] animate-fade-in-up">
                            {post.title[language]}
                        </h1>
                    </header>

                    <article className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100/50">
                        <div className="relative h-[25rem] md:h-[35rem] overflow-hidden group">
                            <img 
                                src={post.image} 
                                alt={post.title[language]} 
                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 group-hover:bg-transparent duration-700"></div>
                        </div>
                        
                        <div className="p-8 md:p-16 lg:p-20">
                            <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-700 prose-p:leading-relaxed prose-strong:text-orange-600 prose-li:text-slate-700">
                                {post.content[language].split('\n').map((paragraph, index) => {
                                    const trimmed = paragraph.trim();
                                    if (!trimmed) return null;
                                    
                                    if (trimmed.startsWith('###')) {
                                        return <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-slate-900">{trimmed.replace('### ', '')}</h2>;
                                    }
                                    
                                    if (trimmed.startsWith('**')) {
                                        return <p key={index} className="text-xl font-semibold text-slate-800 my-8 italic border-l-4 border-orange-500 pl-6 leading-relaxed">{trimmed.replace(/\*\*/g, '')}</p>;
                                    }

                                    if (trimmed.startsWith('-')) {
                                        return <li key={index} className="list-disc ml-6 my-2">{trimmed.replace('- ', '')}</li>;
                                    }
                                    
                                    return <p key={index} className="mb-6 leading-loose">{trimmed}</p>;
                                })}
                            </div>
                            
                            <div className="mt-16 pt-16 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between">
                                <div className="flex items-center mb-8 md:mb-0 group cursor-default">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden mr-5 shadow-lg border-2 border-white transition-transform duration-300 group-hover:scale-105">
                                        <img src="/pinar-siverek.jpg" alt={post.author} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg leading-tight uppercase tracking-wide">Pınar Siverek</h4>
                                        <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">{language === 'tr' ? 'Yazar / Kurucu' : 'Author / Founder'}</p>
                                    </div>
                                </div>
                                
                                <div className="flex space-x-3">
                                    <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-orange-50 hover:text-orange-500 transition-all duration-300 transform hover:-translate-y-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                    </button>
                                    <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-200 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-slate-100">
                                        {language === 'tr' ? 'Makaleyi Paylaş' : 'Share Article'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogDetailPage;
