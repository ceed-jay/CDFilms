
import React, { useState, useEffect } from 'react';
import { Save, Trash2, Plus, X, LayoutDashboard, Film, Video, Package, LogOut, Code, Lock, ShieldCheck, AlertCircle } from 'lucide-react';
import { PortfolioItem, PricingPackage } from '../types';

interface DashboardProps {
  onClose: () => void;
  heroVideoId: string;
  setHeroVideoId: (id: string) => void;
  portfolioItems: PortfolioItem[];
  setPortfolioItems: (items: PortfolioItem[]) => void;
  pricingPackages: PricingPackage[];
  setPricingPackages: (pkgs: PricingPackage[]) => void;
  adminPassword: string;
  setAdminPassword: (pass: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  onClose,
  heroVideoId,
  setHeroVideoId,
  portfolioItems,
  setPortfolioItems,
  pricingPackages,
  setPricingPackages,
  adminPassword,
  setAdminPassword
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [activeTab, setActiveTab] = useState<'hero' | 'portfolio' | 'pricing' | 'security'>('hero');
  
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === adminPassword) {
      setIsAuthenticated(true);
      setIsError(false);
    } else {
      setIsError(true);
      setErrorMessage('Access Denied. Incorrect password.');
      setTimeout(() => setIsError(false), 500);
    }
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 4) {
      alert('Password must be at least 4 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    setAdminPassword(newPassword);
    setPasswordChangeSuccess(true);
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setPasswordChangeSuccess(false), 3000);
  };

  const addPortfolioItem = () => {
    const newItem: PortfolioItem = {
      id: Date.now(),
      title: 'New Film Title',
      couple: 'Couple Name',
      category: 'SDE',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=640',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      description: 'A beautiful wedding story.'
    };
    setPortfolioItems([...portfolioItems, newItem]);
  };

  const removePortfolioItem = (id: number) => {
    setPortfolioItems(portfolioItems.filter(item => item.id !== id));
  };

  const updatePortfolioItem = (id: number, field: keyof PortfolioItem, value: string) => {
    setPortfolioItems(portfolioItems.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addPackage = () => {
    const newPkg: PricingPackage = {
      id: Date.now(),
      name: 'New Package',
      price: '₱0',
      description: 'Describe the package here.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=640',
      features: ['Feature 1']
    };
    setPricingPackages([...pricingPackages, newPkg]);
  };

  const removePackage = (id: number) => {
    setPricingPackages(pricingPackages.filter(p => p.id !== id));
  };

  const updatePackage = (id: number, field: keyof PricingPackage, value: any) => {
    setPricingPackages(pricingPackages.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[200] bg-neutral-50/90 backdrop-blur-xl flex items-center justify-center p-6">
        <div className={`w-full max-w-md bg-white p-12 rounded-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-neutral-100 transition-all duration-300 ${isError ? 'animate-shake border-red-200 shadow-red-100/20' : ''}`}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-black mb-2">Admin Access</h2>
            <p className="text-neutral-400 text-[10px] uppercase tracking-[0.3em] font-bold">CDFilms Studio Manager</p>
          </div>
          
          {errorMessage && !isError && (
            <div className="mb-6 flex items-center gap-2 p-4 bg-red-50 text-red-500 rounded-2xl border border-red-100 animate-in fade-in slide-in-from-top-2">
              <AlertCircle size={16} className="shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-300 mb-2 pl-2">Password</label>
              <input 
                type="password" 
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                className={`w-full bg-neutral-50/50 border px-6 py-4 text-sm rounded-3xl focus:outline-none focus:bg-white transition-all placeholder-neutral-300 ${errorMessage ? 'border-red-100 focus:border-red-400' : 'border-neutral-100 focus:border-gold'}`}
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className={`w-full py-5 rounded-3xl font-bold tracking-widest uppercase text-[10px] transition-all shadow-xl ${errorMessage ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-200' : 'bg-gold text-white hover:bg-gold/90 shadow-gold/20'}`}>
              Login to Dashboard
            </button>
            <button onClick={onClose} type="button" className="w-full text-neutral-400 py-2 text-[10px] font-bold uppercase tracking-widest hover:text-black transition-colors">Return to Site</button>
          </form>
        </div>
        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-8px); }
            80% { transform: translateX(8px); }
          }
          .animate-shake {
            animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] bg-neutral-50 flex flex-col md:flex-row h-screen overflow-hidden text-black font-sans">
      <div className="w-full md:w-72 bg-white border-r border-neutral-200 flex flex-col">
        <div className="p-10 border-b border-neutral-50">
          <div className="font-serif font-bold text-2xl tracking-tighter">CD <span className="text-gold italic">Films</span></div>
          <p className="text-[8px] font-bold text-neutral-300 uppercase tracking-widest mt-1">Admin Dashboard</p>
        </div>
        <nav className="p-6 flex-grow space-y-3">
          <button onClick={() => setActiveTab('hero')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${activeTab === 'hero' ? 'bg-gold text-white shadow-xl shadow-gold/20' : 'hover:bg-neutral-50 text-neutral-400 hover:text-black'}`}>
            <Film size={20} /> <span className="text-[11px] font-bold uppercase tracking-widest">Hero Video</span>
          </button>
          <button onClick={() => setActiveTab('portfolio')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${activeTab === 'portfolio' ? 'bg-gold text-white shadow-xl shadow-gold/20' : 'hover:bg-neutral-50 text-neutral-400 hover:text-black'}`}>
            <Video size={20} /> <span className="text-[11px] font-bold uppercase tracking-widest">Portfolio</span>
          </button>
          <button onClick={() => setActiveTab('pricing')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${activeTab === 'pricing' ? 'bg-gold text-white shadow-xl shadow-gold/20' : 'hover:bg-neutral-50 text-neutral-400 hover:text-black'}`}>
            <Package size={20} /> <span className="text-[11px] font-bold uppercase tracking-widest">Packages</span>
          </button>
          <button onClick={() => setActiveTab('security')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${activeTab === 'security' ? 'bg-gold text-white shadow-xl shadow-gold/20' : 'hover:bg-neutral-50 text-neutral-400 hover:text-black'}`}>
            <Lock size={20} /> <span className="text-[11px] font-bold uppercase tracking-widest">Security</span>
          </button>
        </nav>
        
        <div className="p-6 border-t border-neutral-50 space-y-3">
          <a 
            href="https://pixodeph.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 bg-neutral-50 text-neutral-400 hover:text-gold hover:bg-gold/5 rounded-2xl transition-all text-[9px] font-bold uppercase tracking-widest"
          >
            <Code size={8} /> PIXODE Philippines
          </a>
          
          <button onClick={onClose} className="w-full flex items-center justify-center gap-3 py-4 text-red-400 hover:bg-red-50 rounded-2xl transition-all text-[11px] font-bold uppercase tracking-widest">
            <LogOut size={18} /> Exit Dashboard
          </button>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-6 md:p-16 bg-neutral-50/50">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'hero' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-12">
                <h2 className="text-4xl font-serif mb-2">Cinematic Backdrop</h2>
                <p className="text-neutral-400 text-sm">Update the high-impact autoplaying video for the home screen.</p>
              </div>
              <div className="bg-white p-12 rounded-[40px] shadow-sm border border-neutral-100/50">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-300 mb-3 ml-2">Primary Video ID (YouTube)</label>
                <div className="flex flex-col md:flex-row gap-6">
                  <input 
                    type="text" 
                    value={heroVideoId}
                    onChange={(e) => setHeroVideoId(e.target.value)}
                    className="flex-grow bg-neutral-50 border border-neutral-100 px-6 py-5 text-sm rounded-3xl focus:outline-none focus:border-gold focus:bg-white transition-all font-mono"
                    placeholder="e.g. FcJC_0dqdds"
                  />
                  <div className="px-8 py-5 bg-gold/5 border border-gold/10 rounded-3xl text-gold text-[10px] flex items-center justify-center font-bold tracking-widest uppercase shrink-0">
                    Live Preview: {heroVideoId}
                  </div>
                </div>
                <div className="mt-8 flex items-start gap-3 p-4 bg-blue-50/30 rounded-2xl border border-blue-100/30">
                  <div className="text-blue-400 mt-0.5"><Save size={14}/></div>
                  <p className="text-[10px] text-blue-500/80 leading-relaxed font-medium">Changes are saved automatically to the local browser storage. For permanent site-wide updates, coordinate with the developer.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <h2 className="text-4xl font-serif mb-2">Film Portfolio</h2>
                  <p className="text-neutral-400 text-sm">Manage the cinematic stories captured by CDFilms.</p>
                </div>
                <button onClick={addPortfolioItem} className="flex items-center justify-center gap-3 bg-gold text-white px-10 py-5 rounded-[24px] text-[11px] font-bold uppercase tracking-widest hover:bg-gold/90 transition-all shadow-xl shadow-gold/20">
                  <Plus size={20} /> Add New Film
                </button>
              </div>
              <div className="space-y-10">
                {portfolioItems.map((item) => (
                  <div key={item.id} className="bg-white p-10 rounded-[40px] shadow-sm border border-neutral-100/50 flex flex-col lg:flex-row gap-10 group hover:shadow-xl transition-all duration-500">
                    <div className="w-full lg:w-72 aspect-video bg-neutral-100 rounded-[32px] overflow-hidden shrink-0 border border-neutral-50/50">
                      <img src={item.thumbnail} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex-grow grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[9px] font-bold uppercase text-neutral-300 tracking-widest ml-2">Featured Couple</label>
                          <input value={item.couple} onChange={(e) => updatePortfolioItem(item.id, 'couple', e.target.value)} placeholder="e.g. Liam & Sophia" className="w-full text-base font-bold bg-transparent border-b border-neutral-100 py-2 px-2 focus:border-gold outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] font-bold uppercase text-neutral-300 tracking-widest ml-2">Film Story Title</label>
                          <input value={item.title} onChange={(e) => updatePortfolioItem(item.id, 'title', e.target.value)} placeholder="e.g. A Garden Wedding" className="w-full text-sm text-neutral-500 bg-transparent border-b border-neutral-100 py-2 px-2 focus:border-gold outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] font-bold uppercase text-neutral-300 tracking-widest ml-2">Video Destination Link</label>
                          <input value={item.videoUrl} onChange={(e) => updatePortfolioItem(item.id, 'videoUrl', e.target.value)} placeholder="Link URL" className="w-full text-[10px] font-mono bg-transparent border-b border-neutral-100 py-2 px-2 focus:border-gold outline-none transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[9px] font-bold uppercase text-neutral-300 tracking-widest ml-2">Cover Thumbnail Image</label>
                          <input value={item.thumbnail} onChange={(e) => updatePortfolioItem(item.id, 'thumbnail', e.target.value)} placeholder="Image Address" className="w-full text-[10px] bg-transparent border-b border-neutral-100 py-2 px-2 focus:border-gold outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] font-bold uppercase text-neutral-300 tracking-widest ml-2">Brief Summary</label>
                          <textarea value={item.description} onChange={(e) => updatePortfolioItem(item.id, 'description', e.target.value)} placeholder="The mood and story behind this film..." className="w-full text-xs border border-neutral-100 p-4 rounded-3xl focus:border-gold outline-none h-28 bg-neutral-50/30 transition-colors" />
                        </div>
                        <button onClick={() => removePortfolioItem(item.id)} className="flex items-center gap-2 text-red-400 text-[10px] font-bold uppercase tracking-widest hover:bg-red-50 px-6 py-3 rounded-2xl transition-all self-end mt-2"><Trash2 size={14} /> Remove Entry</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <h2 className="text-4xl font-serif mb-2">Service Tiers</h2>
                  <p className="text-neutral-400 text-sm">Adjust your wedding investment packages and descriptions.</p>
                </div>
                <button onClick={addPackage} className="flex items-center justify-center gap-3 bg-gold text-white px-10 py-5 rounded-[24px] text-[11px] font-bold uppercase tracking-widest hover:bg-gold/90 transition-all shadow-xl shadow-gold/20">
                  <Plus size={20} /> New Package
                </button>
              </div>
              <div className="space-y-12">
                {pricingPackages.map((pkg) => (
                  <div key={pkg.id} className="bg-white p-12 rounded-[48px] shadow-sm border border-neutral-100/50">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div className="space-y-2">
                          <label className="block text-[9px] font-bold uppercase tracking-widest text-neutral-300 mb-2 ml-2">Tier Name</label>
                          <input value={pkg.name} onChange={(e) => updatePackage(pkg.id, 'name', e.target.value)} className="w-full text-3xl font-serif bg-transparent border-b border-neutral-100 py-2 px-2 focus:border-gold outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-[9px] font-bold uppercase tracking-widest text-neutral-300 mb-2 ml-2">Package Investment (PHP)</label>
                          <input value={pkg.price} onChange={(e) => updatePackage(pkg.id, 'price', e.target.value)} className="w-full text-2xl font-bold text-gold bg-transparent border-b border-neutral-100 py-2 px-2 focus:border-gold outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-[9px] font-bold uppercase tracking-widest text-neutral-300 mb-2 ml-2">List of Inclusions</label>
                          <textarea 
                            value={pkg.features.join('\n')} 
                            onChange={(e) => updatePackage(pkg.id, 'features', e.target.value.split('\n'))} 
                            placeholder="Add each feature on a new line..."
                            className="w-full text-sm border border-neutral-100 p-6 rounded-[32px] focus:border-gold outline-none h-56 font-mono bg-neutral-50/30 transition-colors"
                          />
                        </div>
                      </div>
                      <div className="space-y-8 flex flex-col h-full">
                        <div className="space-y-2">
                          <label className="block text-[9px] font-bold uppercase tracking-widest text-neutral-300 mb-2 ml-2">Package Philosophy</label>
                          <textarea value={pkg.description} onChange={(e) => updatePackage(pkg.id, 'description', e.target.value)} className="w-full text-sm italic border border-neutral-100 p-6 rounded-[32px] focus:border-gold outline-none h-32 bg-neutral-50/30 transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-[9px] font-bold uppercase tracking-widest text-neutral-300 mb-2 ml-2">Package Visual Header</label>
                          <input value={pkg.image} onChange={(e) => updatePackage(pkg.id, 'image', e.target.value)} className="w-full text-[11px] bg-transparent border-b border-neutral-100 py-2 px-2 focus:border-gold outline-none transition-colors" />
                        </div>
                        <div className="mt-auto pt-10 border-t border-neutral-50 flex flex-col md:flex-row items-center justify-between gap-6">
                          <label className="flex items-center gap-4 cursor-pointer select-none">
                            <input type="checkbox" checked={pkg.isPopular} onChange={(e) => updatePackage(pkg.id, 'isPopular', e.target.checked)} className="w-6 h-6 rounded-xl text-gold border-neutral-200 focus:ring-gold focus:ring-offset-0" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400">Featured Tier</span>
                          </label>
                          <button onClick={() => removePackage(pkg.id)} className="flex items-center gap-2 text-red-400 text-[11px] font-bold uppercase tracking-widest hover:bg-red-50 px-8 py-4 rounded-[20px] transition-all"><Trash2 size={18} /> Delete Package</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-12">
                <h2 className="text-4xl font-serif mb-2">Access Security</h2>
                <p className="text-neutral-400 text-sm">Update your administrator credentials for the CDFilms Studio Dashboard.</p>
              </div>
              <div className="bg-white p-12 rounded-[40px] shadow-sm border border-neutral-100/50 max-w-2xl">
                <form onSubmit={handlePasswordChange} className="space-y-8">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-300 mb-3 ml-2">New Password</label>
                    <input 
                      type="password" 
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-100 px-6 py-5 text-sm rounded-3xl focus:outline-none focus:border-gold focus:bg-white transition-all"
                      placeholder="Enter new password"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-neutral-300 mb-3 ml-2">Confirm New Password</label>
                    <input 
                    type="password" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-100 px-6 py-5 text-sm rounded-3xl focus:outline-none focus:border-gold focus:bg-white transition-all"
                      placeholder="Repeat new password"
                      required
                    />
                  </div>
                  
                  {passwordChangeSuccess && (
                    <div className="flex items-center gap-3 p-4 bg-green-50 text-green-600 rounded-2xl border border-green-100 animate-in fade-in zoom-in duration-300">
                      <ShieldCheck size={18} />
                      <span className="text-[11px] font-bold uppercase tracking-widest">Password Updated Successfully</span>
                    </div>
                  )}

                  <button 
                    type="submit"
                    className="w-full bg-gold text-white py-5 rounded-[24px] text-[11px] font-bold uppercase tracking-widest hover:bg-gold/90 transition-all shadow-xl shadow-gold/20 flex items-center justify-center gap-3"
                  >
                    <Save size={18} /> Update Access Password
                  </button>
                </form>
              </div>
              
              <div className="mt-12 p-8 bg-neutral-100/50 rounded-[32px] border border-neutral-200/30 max-w-2xl">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2">
                  <Lock size={12} /> Security Tip
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Your password is stored securely in your browser's local storage. To ensure maximum protection, choose a password that includes a mix of letters, numbers, and symbols. Remember to log out when using shared devices.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;