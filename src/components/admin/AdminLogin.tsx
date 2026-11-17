import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSiteConfig, DEFAULT_LOGO_URL } from '../../context/SiteConfigContext';
import { ShieldCheck, Lock, Mail, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('admin@institut.com');
  const [password, setPassword] = useState('admin12345');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { config } = useSiteConfig();

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (email === 'admin@institut.com' && password === 'admin12345') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Identifiants incorrects. Veuillez utiliser les identifiants fournis ci-dessous.');
    }
  };

  const loginDemo = () => {
    localStorage.setItem('isAdmin', 'true');
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#FAF8F5] via-[#F5F5DC]/40 to-[#FAF8F5] px-4 py-12 text-[#2C1E16]">
      <div className="w-full max-w-md">
        
        {/* Return to website */}
        <div className="mb-6 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C1E16] hover:text-[#7A5C38] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au site public</span>
          </Link>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#2C1E16] px-2.5 py-0.5 bg-[#EAE0D5] border border-[#CBB8A2] rounded-full">
            Espace Sécurisé
          </span>
        </div>

        {/* Card */}
        <div className="bg-[#FFFDF9] rounded-2xl shadow-xl border border-[#DFD3C3] p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#EAE0D5] via-[#A68B6B] to-[#EAE0D5]" />

          {/* Logo display */}
          <div className="text-center mb-6">
            <img
              src={config.logoUrl || DEFAULT_LOGO_URL}
              alt={config.instituteName}
              className="h-20 sm:h-24 w-auto mx-auto mb-3 object-contain drop-shadow-sm"
              onError={(e) => {
                (e.target as HTMLImageElement).src = DEFAULT_LOGO_URL;
              }}
            />
            <h1 className="text-xl sm:text-2xl font-bold text-[#2C1E16] font-serif">
              Administration {config.instituteName}
            </h1>
            <p className="text-xs text-[#6B5D52] mt-1">
              Gestion des contenus, du logo et des coordonnées
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-5 p-3 rounded-xl bg-[#F5EAE6] border border-[#C99E9A] text-[#5C2320] text-xs font-medium flex items-start gap-2">
              <span className="font-bold">Erreur :</span>
              <span>{error}</span>
            </div>
          )}

          {/* 1-Click Instant Login (Zero Credentials) */}
          <div className="mb-6">
            <button
              type="button"
              onClick={loginDemo}
              className="w-full py-3.5 px-4 bg-[#EAE0D5] hover:bg-[#DFD2C3] text-[#2C1E16] font-bold text-sm rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer border border-[#CBB8A2]"
            >
              <Sparkles className="w-5 h-5 text-[#5C432B]" />
              <span>Connexion Automatique (Accès Direct en 1 Clic)</span>
            </button>
            <p className="text-[11px] text-center text-[#6B5D52] mt-2 font-medium">
              Accédez directement au tableau de bord sans saisir aucun identifiant.
            </p>
          </div>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#DFD3C3]" />
            </div>
            <span className="relative bg-[#FFFDF9] px-3 text-[11px] font-semibold text-[#6B5D52] uppercase tracking-wider">
              Ou connexion par identifiants
            </span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1E16] mb-1.5">
                Identifiant / Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#6B5D52] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@institut.com"
                  className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:outline-none focus:ring-2 focus:ring-[#EAE0D5] transition-all bg-[#FAF8F5] text-[#2C1E16]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1E16] mb-1.5">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#6B5D52] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-[#D4C5B4] focus:border-[#8C6D46] focus:outline-none focus:ring-2 focus:ring-[#EAE0D5] transition-all bg-[#FAF8F5] text-[#2C1E16]"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-[#F5EFE6] hover:bg-[#EAE0D5] text-[#2C1E16] border border-[#D4C5B4] font-bold text-sm rounded-xl shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#5C432B]" />
              <span>Se connecter manuellement</span>
            </button>
          </form>

          {/* Preset credentials reminder */}
          <div className="mt-6 p-3 rounded-xl bg-[#F5EFE6] border border-[#DFD3C3] text-[11px] text-[#3E3027] flex flex-col gap-1">
            <div className="flex items-center gap-1.5 font-bold text-[#2C1E16]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#5C432B]" />
              <span>Identifiants de test préconfigurés :</span>
            </div>
            <div className="font-mono text-[11px] pl-5 space-y-0.5 text-[#4A3F37]">
              <div>Identifiant : <span className="font-bold text-[#2C1E16]">admin@institut.com</span></div>
              <div>Mot de passe : <span className="font-bold text-[#2C1E16]">admin12345</span></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
