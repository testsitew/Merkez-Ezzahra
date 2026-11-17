import React, { useEffect, useState, useRef } from 'react';
import { useSiteConfig, DEFAULT_LOGO_URL } from '../../context/SiteConfigContext';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Upload, 
  Image as ImageIcon, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  Type, 
  Save, 
  RotateCcw, 
  LogOut, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Eye
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { config, updateConfig, resetConfig } = useSiteConfig();
  const [formData, setFormData] = useState(config);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'logo' | 'contact' | 'texts'>('logo');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  // Handle local image file upload & conversion to base64 Data URL
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("L'image sélectionnée est volumineuse (> 2Mo). Veuillez choisir une image plus légère pour de meilleures performances.");
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setFormData((prev) => ({
            ...prev,
            logoUrl: reader.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetLogo = () => {
    setFormData((prev) => ({
      ...prev,
      logoUrl: DEFAULT_LOGO_URL,
    }));
  };

  const handleSave = () => {
    updateConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
    }, 3500);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C1E16] flex flex-col font-sans">
      
      {/* Top Admin Header */}
      <header className="bg-[#FFFDF9] border-b border-[#DFD3C3] sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src={formData.logoUrl || DEFAULT_LOGO_URL} 
                alt={formData.instituteName} 
                className="h-11 w-auto object-contain"
                onError={(e) => { (e.target as HTMLImageElement).src = DEFAULT_LOGO_URL; }}
              />
              <span className="font-serif font-bold text-base text-[#2C1E16] hidden sm:inline-block">
                {formData.instituteName}
              </span>
            </Link>

            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#EAE0D5] text-[#2C1E16] border border-[#CBB8A2] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5C432B]" />
              Espace Administrateur
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#2C1E16] hover:bg-[#EAE0D5] bg-[#FAF8F5] border border-[#D4C5B4] rounded-xl transition-all shadow-2xs"
              title="Voir le site public en direct"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#5C432B]" />
              <span className="hidden sm:inline">Voir le site public</span>
            </Link>

            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-[#2C1E16] bg-[#EAE0D5] hover:bg-[#DFD2C3] border border-[#CBB8A2] rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <Save className="w-4 h-4 text-[#4A3F37]" />
              <span>Enregistrer</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#5C2320] hover:bg-[#F5EAE6] bg-[#FAF8F5] border border-[#D4B4B0] rounded-xl transition-all cursor-pointer"
              title="Se déconnecter"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Déconnexion</span>
            </button>
          </div>

        </div>
      </header>

      {/* Success Notification Banner */}
      {savedSuccess && (
        <div className="bg-[#EAE0D5] text-[#2C1E16] border-b border-[#CBB8A2] px-4 py-3 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm animate-fade-in-down">
          <CheckCircle2 className="w-4 h-4 text-[#5C432B]" />
          <span>Modifications enregistrées avec succès ! Toutes les pages du site sont mises à jour dynamiquement.</span>
        </div>
      )}

      {/* Main Admin Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10">
        
        {/* Title & Introduction */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2C1E16] font-serif">
            Panneau de Configuration & CMS
          </h1>
          <p className="text-[#4A3F37] text-sm mt-1">
            Modifiez le logo de l'institut, les coordonnées de contact et les textes en temps réel. Les changements sont enregistrés instantanément.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#DFD3C3] mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('logo')}
            className={`pb-3 px-5 text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'logo'
                ? 'border-[#7A5C38] text-[#2C1E16]'
                : 'border-transparent text-[#6B5D52] hover:text-[#2C1E16]'
            }`}
          >
            <ImageIcon className="w-4 h-4 text-[#7A5C38]" />
            <span>1. Gestion du Logo</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`pb-3 px-5 text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'contact'
                ? 'border-[#7A5C38] text-[#2C1E16]'
                : 'border-transparent text-[#6B5D52] hover:text-[#2C1E16]'
            }`}
          >
            <Phone className="w-4 h-4 text-[#7A5C38]" />
            <span>2. Coordonnées & Réseaux</span>
          </button>

          <button
            onClick={() => setActiveTab('texts')}
            className={`pb-3 px-5 text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'texts'
                ? 'border-[#7A5C38] text-[#2C1E16]'
                : 'border-transparent text-[#6B5D52] hover:text-[#2C1E16]'
            }`}
          >
            <Type className="w-4 h-4 text-[#7A5C38]" />
            <span>3. Textes & Titres du Site</span>
          </button>
        </div>

        {/* Tab 1: Logo Management */}
        {activeTab === 'logo' && (
          <div className="bg-[#FFFDF9] rounded-2xl border border-[#DFD3C3] shadow-sm p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-[#2C1E16] flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#7A5C38]" />
                <span>Identité & Logo de l'Institut</span>
              </h2>
              <p className="text-xs text-[#6B5D52] mt-1">
                Le nom et le logo configurés ici seront affichés dans la Navbar (en haut), le Hero, le Footer (en bas) et sur la page de connexion.
              </p>
            </div>

            {/* Institute Name */}
            <div className="space-y-1.5 p-4 rounded-xl bg-[#FAF8F5] border border-[#DFD3C3]">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1E16]">
                Nom de l'institut / Marque :
              </label>
              <input
                type="text"
                value={formData.instituteName}
                onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
                placeholder="Exemple : Merkez AlZahraa"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:outline-none focus:ring-2 focus:ring-[#EAE0D5] transition-all font-semibold bg-[#FFFDF9] text-[#2C1E16]"
              />
              <span className="text-[11px] text-[#6B5D52] block">
                Visible en en-tête à côté du logo, dans le pied de page et les mentions légales.
              </span>
            </div>

            {/* Live Preview Card */}
            <div className="p-6 rounded-xl bg-[#F5EFE6] border border-[#DFD3C3] flex flex-col sm:flex-row items-center gap-6">
              <div className="w-36 h-36 bg-[#FFFDF9] rounded-xl border border-[#D4C5B4] flex items-center justify-center p-3 shadow-inner shrink-0 relative group">
                <img
                  src={formData.logoUrl || DEFAULT_LOGO_URL}
                  alt="Aperçu du Logo"
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = DEFAULT_LOGO_URL;
                  }}
                />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#2C1E16]">
                  <Eye className="w-4 h-4 text-[#7A5C38]" />
                  <span>Aperçu en direct du logo actif</span>
                </div>
                <p className="text-xs text-[#4A3F37] max-w-md">
                  Formats recommandés : PNG transparent ou SVG. Privilégiez un fond transparent pour une intégration harmonieuse avec le thème beige du site.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-1.5 bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] text-xs font-semibold rounded-lg shadow-2xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#4A3F37]" />
                    <span>Téléverser une image locale</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleResetLogo}
                    className="px-3 py-1.5 bg-[#FFFDF9] hover:bg-[#FAF8F5] border border-[#D4C5B4] text-[#3E3027] text-xs font-semibold rounded-lg shadow-2xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-[#6B5D52]" />
                    <span>Rétablir le logo officiel</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />

            {/* Drag & Drop / Click Upload Zone */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-[#CBB8A2] hover:border-[#8C6D46] bg-[#FAF8F5] hover:bg-[#F5EFE6] rounded-xl p-8 text-center cursor-pointer transition-all duration-200"
            >
              <Upload className="w-8 h-8 text-[#7A5C38] mx-auto mb-2" />
              <div className="text-sm font-bold text-[#2C1E16]">
                Cliquez pour choisir un fichier image sur votre ordinateur
              </div>
              <div className="text-xs text-[#6B5D52] mt-1">
                PNG, JPG, WebP ou SVG (taille maximale recommandée : 2 Mo)
              </div>
            </div>

            {/* Or Paste Direct URL */}
            <div className="space-y-1.5 pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1E16]">
                Ou spécifiez directement une URL d'image :
              </label>
              <input
                type="text"
                value={formData.logoUrl}
                onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
                placeholder={`Exemple : ${DEFAULT_LOGO_URL} ou https://example.com/mon-logo.png`}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:outline-none focus:ring-2 focus:ring-[#EAE0D5] transition-all font-mono text-xs bg-[#FAF8F5] text-[#2C1E16]"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Contact Information & Social Links */}
        {activeTab === 'contact' && (
          <div className="bg-[#FFFDF9] rounded-2xl border border-[#DFD3C3] shadow-sm p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-[#2C1E16] flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#7A5C38]" />
                <span>Coordonnées & Canaux de Communication</span>
              </h2>
              <p className="text-xs text-[#6B5D52] mt-1">
                Ces informations sont automatiquement synchronisées dans le Header (boutons d'action), le Footer et la section Contact & FAQ.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Phone */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1E16] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#7A5C38]" />
                  <span>Numéro de Téléphone</span>
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+213 662 323 566"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:outline-none focus:ring-2 focus:ring-[#EAE0D5] transition-all bg-[#FAF8F5] text-[#2C1E16]"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1E16] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#7A5C38]" />
                  <span>Adresse Email Principale</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@merkezalzahraa.com"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:outline-none focus:ring-2 focus:ring-[#EAE0D5] transition-all bg-[#FAF8F5] text-[#2C1E16]"
                />
              </div>

              {/* Physical Address */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1E16] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#7A5C38]" />
                  <span>Adresse Physique / Siège de l'Institut</span>
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Adresse de l'institut, Ville, Pays"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:outline-none focus:ring-2 focus:ring-[#EAE0D5] transition-all bg-[#FAF8F5] text-[#2C1E16]"
                />
              </div>

              {/* WhatsApp Link */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1E16] flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-[#7A5C38]" />
                  <span>Lien Secrétariat WhatsApp</span>
                </label>
                <input
                  type="text"
                  value={formData.whatsappUrl}
                  onChange={(e) => setFormData({ ...formData, whatsappUrl: e.target.value })}
                  placeholder="https://wa.me/213662323566"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:outline-none focus:ring-2 focus:ring-[#EAE0D5] transition-all font-mono text-xs bg-[#FAF8F5] text-[#2C1E16]"
                />
                <span className="text-[11px] text-[#6B5D52] block">
                  Utilisé par le bouton WhatsApp dans le Header, le Footer et pour les inscriptions.
                </span>
              </div>

              {/* Telegram Link */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1E16] flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5 text-[#7A5C38]" />
                  <span>Lien Canal Telegram Officiel</span>
                </label>
                <input
                  type="text"
                  value={formData.telegramUrl}
                  onChange={(e) => setFormData({ ...formData, telegramUrl: e.target.value })}
                  placeholder="https://t.me/merkezalzahraa"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:outline-none focus:ring-2 focus:ring-[#EAE0D5] transition-all font-mono text-xs bg-[#FAF8F5] text-[#2C1E16]"
                />
                <span className="text-[11px] text-[#6B5D52] block">
                  Accessible depuis le bouton Telegram du Header et du Footer.
                </span>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Texts and Titles */}
        {activeTab === 'texts' && (
          <div className="bg-[#FFFDF9] rounded-2xl border border-[#DFD3C3] shadow-sm p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-[#2C1E16] flex items-center gap-2">
                <Type className="w-5 h-5 text-[#7A5C38]" />
                <span>Textes & Titres Clés du Site</span>
              </h2>
              <p className="text-xs text-[#6B5D52] mt-1">
                Personnalisez la phrase d'accroche et le sous-titre affichés au cœur du Hero en page d'accueil.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1E16]">
                  Titre Principal du Hero
                </label>
                <input
                  type="text"
                  value={formData.heroTitle}
                  onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })}
                  placeholder="Transmettre la Science avec Rigueur & Authenticité"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:outline-none focus:ring-2 focus:ring-[#EAE0D5] transition-all font-semibold bg-[#FAF8F5] text-[#2C1E16]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1E16]">
                  Sous-titre / Kicker du Hero
                </label>
                <textarea
                  rows={3}
                  value={formData.heroSubtitle}
                  onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
                  placeholder="Un enseignement d'excellence fondé sur la tradition authentique et la pédagogie moderne."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:outline-none focus:ring-2 focus:ring-[#EAE0D5] transition-all leading-relaxed bg-[#FAF8F5] text-[#2C1E16]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Save & Reset Actions Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#FFFDF9] border border-[#DFD3C3] shadow-xs">
          <div className="text-xs text-[#6B5D52] text-center sm:text-left">
            <span>Données stockées localement dans votre navigateur (persistance garantie).</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                if (window.confirm("Voulez-vous vraiment réinitialiser toutes les données aux valeurs par défaut de l'institut ?")) {
                  resetConfig();
                  window.location.reload();
                }
              }}
              className="px-4 py-2.5 bg-[#FAF8F5] hover:bg-[#F5EFE6] border border-[#D4C5B4] text-[#3E3027] font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#6B5D52]" />
              <span>Valeurs par défaut</span>
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] border border-[#CBB8A2] font-bold text-xs sm:text-sm rounded-xl shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4 text-[#4A3F37]" />
              <span>Enregistrer toutes les modifications</span>
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};
