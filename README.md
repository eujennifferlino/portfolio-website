# 🚀 Portfólio Jenniffer Lino

Portfólio profissional desenvolvido com Next.js 15, TypeScript e Tailwind CSS, apresentando minha jornada como Desenvolvedora Full Stack.

## 🌐 Demo

**Acesse o site:** [https://portfolio-website-navy-rho-92.vercel.app/](https://portfolio-website-navy-rho-92.vercel.app/)

## ✨ Funcionalidades

### 🎯 Seções Principais

- **Hero Section**: Apresentação inicial com call-to-action para download do CV
- **Sobre Mim**: História pessoal e profissional com estatísticas de impacto
- **Projetos em Destaque**: Showcase de projetos com tecnologias utilizadas
- **Experiência Profissional**: Timeline detalhada das experiências de trabalho
- **Habilidades & Tecnologias**: Grid interativo com todas as tecnologias dominadas
- **Blog/Artigos**: Seção de artigos técnicos com categorização
- **Navegação Responsiva**: Menu adaptável para mobile e desktop

### 🎨 Design & UX

- **Tema Escuro/Claro**: Toggle automático baseado nas preferências do sistema
- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações Suaves**: Transições e micro-interações com Framer Motion
- **Acessibilidade**: Componentes acessíveis com Radix UI
- **Performance**: Otimizado com Next.js 15 e Image Optimization

### 🔧 Funcionalidades Técnicas

- **SEO Otimizado**: Meta tags, Open Graph e estrutura semântica
- **Performance**: Lazy loading, code splitting e otimizações de bundle
- **TypeScript**: Tipagem completa para maior robustez
- **Componentes Reutilizáveis**: Arquitetura modular com shadcn/ui

## 🛠️ Tecnologias Utilizadas

### Frontend

- **Next.js 15** - Framework React com SSR/SSG
- **React 19** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações e transições

### UI/UX

- **shadcn/ui** - Componentes de interface
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones modernos
- **next-themes** - Gerenciamento de temas

### Desenvolvimento

- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Prefixos CSS automáticos

### Deploy

- **Vercel** - Plataforma de deploy e hosting

## 📁 Estrutura do Projeto

```
portfolio-website/
├── app/                    # App Router (Next.js 15)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   ├── hero-section.tsx  # Seção hero
│   ├── about-section.tsx # Seção sobre
│   ├── projects-section.tsx # Seção projetos
│   ├── experience-section.tsx # Seção experiência
│   ├── skills-section.tsx # Seção habilidades
│   ├── blog-section.tsx  # Seção blog
│   ├── navigation.tsx    # Navegação
│   ├── footer.tsx        # Rodapé
│   └── theme-provider.tsx # Provedor de tema
├── hooks/                # Custom hooks
├── lib/                  # Utilitários
├── public/               # Assets estáticos
│   └── images/          # Imagens
└── styles/              # Estilos adicionais
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/portfolio-website.git
cd portfolio-website
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute em desenvolvimento**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse o projeto**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Executa build de produção
- `npm run lint` - Executa linting do código

## 🎨 Personalização

### Cores e Temas

As cores são definidas em `tailwind.config.ts` usando variáveis CSS customizadas. Para alterar o esquema de cores:

1. Modifique as variáveis CSS em `app/globals.css`
2. Atualize as cores no `tailwind.config.ts`

### Conteúdo

- **Dados pessoais**: Edite os componentes em `components/`
- **Projetos**: Atualize `projects-section.tsx`
- **Experiência**: Modifique `experience-section.tsx`
- **Habilidades**: Ajuste `skills-section.tsx`

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configurações

### Next.js

- **App Router**: Utilizando a nova arquitetura do Next.js 15
- **Image Optimization**: Configurado para otimização automática
- **TypeScript**: Configuração estrita para melhor DX

### Tailwind CSS

- **Dark Mode**: Suporte nativo com `next-themes`
- **Animações**: Customizadas para melhor UX
- **Componentes**: Integração com shadcn/ui

## 📈 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Core Web Vitals**: Otimizado para melhor experiência
- **Bundle Size**: Otimizado com tree shaking
- **Loading**: Lazy loading de componentes e imagens

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **LinkedIn**: [Jenniffer Lino Ferreira](https://linkedin.com/in/jennifferlinof/)
- **Instagram**: [@jennifferlmd](https://www.instagram.com/jennifferlmd/)
- **Email**: jennifferdeveloper@gmail.com

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
