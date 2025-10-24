# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






<!-- import React, { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from './ui/card';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from './LanguageContext';
import { User, UserCheck, Shield, Loader2, Eye, EyeOff, Camera, Upload, Globe, X } from 'lucide-react';
import { toast } from 'sonner';
// import logo from 'figma:asset/6be294f1d47ee10486a13e931abe68f18ad20e13.png';
import { loginUser, registerUser, loginWithGoogle } from "../utils/supabase/auth";
import { GoogleLogin } from "@react-oauth/google";

interface UserType {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'user' | 'provider' | 'admin';
  specialties?: string[];
  profileImage?: string;
}

interface VerificationData {
  registrationId: string;
  email: string;
  expiresIn: number;
}

interface LoginPageProps {
  onLogin: (user: UserType) => void;
  onVerificationNeeded: (verificationData: VerificationData) => void;
  onGuestMode?: () => void;
}

export function LoginPage({ onLogin, onVerificationNeeded, onGuestMode }: LoginPageProps) {
  const { t, language, setLanguage } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<'user' | 'provider' | 'admin'>('user');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const services = [
    { id: 'electrical', name: t('electrical') },
    { id: 'plumbing', name: t('plumbing') },
    { id: 'cooling', name: t('cooling') },
    { id: 'air_conditioning', name: t('air_conditioning') },
    { id: 'gardening', name: t('gardening') },
    { id: 'blacksmithing', name: t('blacksmithing') },
    { id: 'carpentry', name: t('carpentry') },
    { id: 'satellite_engineer', name: t('satellite_engineer') },
    { id: 'digital', name: t('digital') }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    specialties: [] as string[]
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleSpecialty = (specialty: string) => {
    setFormData(prev => {
      const specialties = prev.specialties.includes(specialty)
        ? prev.specialties.filter(s => s !== specialty)
        : [...prev.specialties, specialty];
      return { ...prev, specialties };
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('يرجى اختيار ملف صورة صحيح');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error('حجم الصورة كبير جداً. يرجى اختيار صورة أصغر من 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => fileInputRef.current?.click();
  const removeProfileImage = () => {
    setProfileImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const validateForm = (): boolean => {
    if (!formData.email || !formData.password) {
      toast.error('البريد الإلكتروني وكلمة المرور مطلوبان');
      return false;
    }
    if (!isLogin && userType !== 'admin') {
      if (!formData.name || !formData.phone) {
        toast.error(t('please_fill_all_fields'));
        return false;
      }
      if (userType === 'provider' && formData.specialties.length === 0) {
        toast.error('يرجى اختيار تخصص واحد على الأقل');
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error('يرجى إدخال بريد إلكتروني صحيح');
        return false;
      }
      if (formData.password.length < 6) {
        toast.error('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
        return false;
      }
      const phoneRegex = /^[0-9+]{10,15}$/;
      if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
        toast.error('يرجى إدخال رقم هاتف صحيح');
        return false;
      }
    }
    return true;
  };

  const handlecreatgoogle = async (credentialResponse: any) => {
    if (!userType && !isLogin) return toast.error("من فضلك اختار نوع المستخدم");
    try {
      const data = await loginWithGoogle(credentialResponse.credential, userType);
      if (data.success) {
        toast.success("تم تسجيل الدخول بنجاح");
        onLogin(data.user);
      } else toast.error(data.message || "فشل تسجيل الدخول");
    } catch {
      toast.error("حدث خطأ أثناء تسجيل الدخول");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      if (isLogin || userType === 'admin') {
        const response = await loginUser({ email: formData.email, password: formData.password });
        if (response.error) return toast.error(response.error);
        toast.success('تم تسجيل الدخول بنجاح');
        onLogin(response.user);
      } else {
        const response = await registerUser({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          type: userType,
          specialties: formData.specialties,
          profileImage
        });
        if (response.error) return toast.error(response.error);
        toast.success('تم إرسال كود التحقق إلى بريدك الإلكتروني');
        onVerificationNeeded({ registrationId: response.registrationId, email: formData.email, expiresIn: response.expiresIn });
      }
    } catch (error: any) {
      console.error(error);
      toast.error('حدث خطأ غير متوقع، يرجى المحاولة لاحقاً');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', password: '', phone: '', specialties: [] });
    setProfileImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleTabChange = (value: string) => {
    setIsLogin(value === 'login');
    setShowAdminLogin(false);
    setUserType('user');
    resetForm();
  };

  const toggleAdminLogin = () => {
    setShowAdminLogin(!showAdminLogin);
    setUserType(showAdminLogin ? 'user' : 'admin');
    resetForm();
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4 transition-colors duration-200">
      <div className="w-full max-w-md">
        {/* شعار التطبيق */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg logo-container">
              <img src={logo} alt="مسكاوس" className="h-16 w-16 md:h-20 md:w-20 object-contain logo-image mx-auto" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl mb-2 text-primary font-bold">{t('welcome_to_miskawus').split(' ').slice(-1)[0]}</h1>
          <p className="text-muted-foreground text-lg">{t('home_services_platform')}</p>
        </div>

        {/* أدوات التحكم */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <Button variant="outline" size="sm" onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')} className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            {language === 'ar' ? 'English' : 'العربية'}
          </Button>
          <ThemeToggle />
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader>
            {!showAdminLogin ? (
              <Tabs value={isLogin ? 'login' : 'register'} onValueChange={handleTabChange}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">{t('login')}</TabsTrigger>
                  <TabsTrigger value="register">{t('register')}</TabsTrigger>
                </TabsList>
              </Tabs>
            ) : (
              <div className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-xl">
                  <Shield className="h-5 w-5 text-primary" />
                  دخول الأدمن
                </CardTitle>
                <CardDescription>تسجيل دخول مدير النظام</CardDescription>
              </div>
            )}

            <div className="flex justify-center mt-4">
              <Button variant="ghost" size="sm" onClick={toggleAdminLogin} className="text-xs text-muted-foreground hover:text-primary">
                {showAdminLogin ? 'العودة لتسجيل الدخول العادي' : (<><Shield className="h-3 w-3 mr-1" />دخول الأدمن</>)}
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* نوع المستخدم */}
              {!isLogin && !showAdminLogin && (
               <div className="space-y-3">
  <Label>{t('user_type')}</Label>
  <div className="grid grid-cols-2 gap-2">
    <Button
      type="button"
      variant={userType === 'user' ? 'default' : 'outline'}
      onClick={() => setUserType('user')}
      className="flex items-center gap-2 transition-all duration-200"
      disabled={isLoading}
    >
      <User className="h-4 w-4" />
      {t('user')}
    </Button>
    <Button
      type="button"
      variant={userType === 'provider' ? 'default' : 'outline'}
      onClick={() => setUserType('provider')}
      className="flex items-center gap-2 transition-all duration-200"
      disabled={isLoading}
    >
      <UserCheck className="h-4 w-4" />
      {t('service_provider')}
    </Button>
  </div>
</div>

              )}

              {/* رفع صورة البروفايل */}
              {!isLogin && !showAdminLogin && (
                <div className="space-y-3">
                  <Label>{t('profile_image')} ({t('optional')})</Label>
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-dashed border-border cursor-pointer hover:border-primary transition-colors"
                           onClick={handleUploadClick}>
                        {profileImage ? (
                          <img 
                            src={profileImage} 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Camera className="h-8 w-8 text-muted-foreground" />
                        )}
                      </div>
                      {profileImage && (
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                          onClick={removeProfileImage}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="text-center">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleUploadClick}
                      disabled={isLoading}
                    >
                      <Upload className="h-4 w-4 ml-2" />
                      {profileImage ? t('change_image') : t('upload_image')}
                    </Button>
                  </div>
                </div>
              )}

              {!isLogin && !showAdminLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">{t('name')} *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                    required={!isLogin && !showAdminLogin}
                    disabled={isLoading}
                    className="transition-all duration-200"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">{t('email')} *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder={showAdminLogin ? "admin@miskawus.com" : "example@email.com"}
                  required
                  disabled={isLoading}
                  className="transition-all duration-200"
                />
                {showAdminLogin && (
                  <p className="text-xs text-muted-foreground">
                    البريد الافتراضي: admin@miskawus.com
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">كلمة المرور *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder={isLogin || showAdminLogin ? "أدخل كلمة المرور" : "كلمة مرور قوية (6 أحرف على الأقل)"}
                    required
                    disabled={isLoading}
                    className="transition-all duration-200 pl-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute left-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                {showAdminLogin && (
                  <p className="text-xs text-muted-foreground">
                    كلمة المرور الافتراضية: MiskawusAdmin2024!
                  </p>
                )}
              </div>

              {!isLogin && !showAdminLogin && (
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="966512345678"
                    required={!isLogin && !showAdminLogin}
                    disabled={isLoading}
                    className="transition-all duration-200"
                    dir="ltr"
                  />
                </div>
              )}

              {!isLogin && userType === 'provider' && !showAdminLogin && (
                <div className="space-y-3">
                  <Label>التخصصات *</Label>
                  <div className="grid grid-cols-2 gap-2">
                   {services.map((service) => (
  <Badge
    key={service.id}
    variant={formData.specialties.includes(service.id) ? 'default' : 'outline'}
    onClick={() => toggleSpecialty(service.id)}
  >
    {service.name}
  </Badge>
))}

                  </div>
                  {userType === 'provider' && formData.specialties.length === 0 && (
                    <p className="text-sm text-muted-foreground">
                      اختر تخصص واحد على الأقل
                    </p>
                  )}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isLogin || showAdminLogin ? 'جاري تسجيل الدخول...' : 'جاري إرسال كود التحقق...'}
                  </>
                ) : (
                  showAdminLogin ? 'دخول لوحة التحكم' : 
                  isLogin ? 'تسجيل الدخول' : 'إنشاء الحساب'
                )}
              </Button>

              {/* تسجيل الدخول الاجتماعي */}
              {(isLogin || showAdminLogin) && (
                <div className="space-y-3">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-muted-foreground/20" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">أو</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {/* <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={handleWhatsAppLogin}
                      disabled={isLoading}
                    >
                      <MessageCircle className="mr-2 h-4 w-4 text-green-600" />
                      تسجيل الدخول بواتساب
                    </Button> */}

                    {/* <Button
                     
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={handlecreatgoogle}
                      disabled={isLoading}
                    >
                      <Chrome className="mr-2 h-4 w-4 text-blue-600" />
                      تسجيل الدخول بجوجل
                    </Button> */}
                   <GoogleLogin
  onSuccess={handlecreatgoogle}
  onError={() => console.log("Login Failed")}
  useOneTap
  scope="openid email profile"
/>

                  </div>

                  <p className="text-xs text-center text-muted-foreground">
                    تسجيل الدخول السريع والآمن
                  </p>
                </div>
              )}

              {/* تلميحات للمستخدمين الجدد */}
              {!isLogin && !showAdminLogin && (
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p className="text-center">بإنشاء حساب، أنت توافق على شروط الخدمة</p>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="font-medium mb-1">ملاحظات مهمة:</p>
                    <ul className="space-y-1">
                      <li>• تأكد من صحة البريد الإلكتروني</li>
                      <li>• ستحتاج لكود التحقق لتفعيل الحساب</li>
                      <li>• احتفظ برقم هاتفك للتواصل</li>
                    </ul>
                  </div>
                </div>
              )}

              {showAdminLogin && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                  <p className="text-xs text-yellow-700 dark:text-yellow-300 text-center">
                    مخصص للمدراء فقط. استخدم البيانات الافتراضية المذكورة أعلاه.
                  </p>
                </div>
              )}

              {isLogin && !showAdminLogin && (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-300 mb-2">
                    💡 حسابات تجريبية متاحة للاختبار:
                  </p>
                  <div className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                    <div>• <span className="font-mono">user@example.com</span> / password</div>
                    <div>• <span className="font-mono">provider@example.com</span> / password</div>
                    <div>• <span className="font-mono">test@test.com</span> / 123456</div>
                    <div>• <span className="font-mono">provider@test.com</span> / 123456</div>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Button variant="ghost" className="text-muted-foreground hover:text-primary" onClick={() => onGuestMode ? onGuestMode() : toast.info('سيتم إضافة وضع الضيف قريباً')}>
            تصفح كضيف (بدون تسجيل)
          </Button>
        </div>
      </div>
    </div>
  );
} -->
