import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const achievements = [
    { icon: 'Trophy', title: 'Чемпион Мира', desc: '2023', color: 'text-primary' },
    { icon: 'Target', title: '1000+ Побед', desc: 'Рекорд', color: 'text-secondary' },
    { icon: 'Award', title: 'Легенда Года', desc: '2024', color: 'text-accent' },
    { icon: 'Crown', title: 'Король Арены', desc: 'Вечный', color: 'text-primary' },
  ];

  const legends = [
    { title: 'Невозможная Комбинация', desc: 'Выполнил легендарный трюк на турнире' },
    { title: 'Соло против 100', desc: 'Победил в одиночку против сотни противников' },
    { title: 'Нулевой Урон', desc: 'Прошел рейд без единого повреждения' },
    { title: 'Первооткрыватель', desc: 'Открыл секретную локацию первым в мире' },
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/ba00f49a-a4e9-437d-9edf-1f90ba17db5d/files/7d2709b9-d43b-46c5-8420-c7f59a0a3f34.jpg',
    'https://cdn.poehali.dev/projects/ba00f49a-a4e9-437d-9edf-1f90ba17db5d/files/3ebae834-f8ae-4075-8130-08d2e34927df.jpg',
    'https://cdn.poehali.dev/projects/ba00f49a-a4e9-437d-9edf-1f90ba17db5d/files/89a0c0ff-c629-445f-9194-2b14535dd198.jpg',
    'https://cdn.poehali.dev/projects/ba00f49a-a4e9-437d-9edf-1f90ba17db5d/files/7d2709b9-d43b-46c5-8420-c7f59a0a3f34.jpg',
    'https://cdn.poehali.dev/projects/ba00f49a-a4e9-437d-9edf-1f90ba17db5d/files/3ebae834-f8ae-4075-8130-08d2e34927df.jpg',
    'https://cdn.poehali.dev/projects/ba00f49a-a4e9-437d-9edf-1f90ba17db5d/files/89a0c0ff-c629-445f-9194-2b14535dd198.jpg',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              KTO_TO404126
            </h1>
            <div className="flex gap-6">
              {['home', 'bio', 'achievements', 'legends', 'gallery', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'bio' && 'Биография'}
                  {section === 'achievements' && 'Достижения'}
                  {section === 'legends' && 'Легенды'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="text-center animate-fade-in">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-primary via-secondary to-accent rounded-full mx-auto glow-purple animate-pulse-glow" />
          </div>
          <h2 className="text-6xl font-black mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            KTO_TO404126
          </h2>
          <p className="text-2xl text-muted-foreground mb-8">Легенда Мира 🏆</p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('bio')}
              className="bg-primary hover:bg-primary/90 glow-purple"
            >
              Узнать Больше
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Связаться
            </Button>
          </div>
        </div>
      </section>

      <section id="bio" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Биография
            </span>
          </h2>
          <Card className="p-8 bg-card border-primary/20 glow-purple">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <span className="text-primary font-bold">KTO_TO404126</span> — легендарная фигура, 
                чье имя стало синонимом мастерства и совершенства. Начав свой путь в далеком 2015 году, 
                этот игрок изменил правила игры навсегда.
              </p>
              <p>
                За годы карьеры было достигнуто невозможное: рекорды, которые казались недостижимыми, 
                стратегии, которые переписали мета-игру, и моменты, которые вошли в историю.
              </p>
              <p className="text-secondary font-semibold">
                "Невозможное — это просто вызов" — девиз легенды
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="achievements" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Достижения
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <Card
                key={idx}
                className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:glow-purple cursor-pointer"
              >
                <div className={`mb-4 ${achievement.color}`}>
                  <Icon name={achievement.icon as any} size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{achievement.title}</h3>
                <p className="text-muted-foreground text-center">{achievement.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="legends" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Легенды
            </span>
          </h2>
          <div className="space-y-6">
            {legends.map((legend, idx) => (
              <Card
                key={idx}
                className="p-6 bg-card border-secondary/20 hover:border-secondary/50 transition-all hover:scale-102 hover:glow-pink"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-2xl font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-secondary">{legend.title}</h3>
                    <p className="text-muted-foreground">{legend.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Галерея
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <Card
                key={idx}
                className="aspect-square border-primary/30 hover:border-primary/70 transition-all hover:scale-105 hover:glow-purple cursor-pointer overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Контакты
            </span>
          </h2>
          <Card className="p-8 bg-card border-accent/20 glow-orange">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                <Icon name="Mail" size={24} className="text-accent" />
                <span>legend@kto_to404126.com</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                <Icon name="MessageCircle" size={24} className="text-primary" />
                <span>Telegram: @KTO_TO404126</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                <Icon name="Users" size={24} className="text-secondary" />
                <span>Discord: KTO_TO404126#0001</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 KTO_TO404126. Легенда продолжается.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;