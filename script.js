(function() {
    // ==================== i18n ====================
    const i18n = {
        zh: {
            navLogo: '❄️ SnowDrive',
            navFeatures: '功能特性',
            navQuickstart: '快速开始',
            navTech: '技术栈',
            navSecurity: '安全',
            tooltipLang: 'Switch to English',
            tooltipTheme: '切换主题',
            heroBadge: 'Docker 一键部署 · 开源免费',
            heroTitle: '安全远程文件访问系统',
            heroDesc: '基于 Python/Flask 的轻量级 NAS 方案，支持 2FA 双因素认证、WebAuthn/Passkey、远程下载、批量操作，Docker 一键部署，全本地化零外部依赖。',
            heroDemoBtn: '在线演示',
            featuresLabel: '✨ 功能特性',
            featuresTitle: '一切尽在掌控',
            featuresSubtitle: '安全、高效、便捷的远程文件管理体验，满足个人与家庭的所有需求。',
            qsLabel: '🚀 快速开始',
            qsTitle: 'Docker 一键部署',
            qsSubtitle: '从 Docker Hub 拉取镜像，一分钟内启动你的私有云盘。',
            qsNote: '💡 中国大陆用户：如 Docker Hub 拉取缓慢，可从 <a href="https://github.com/lclty/snowdrive/releases" target="_blank" style="color:var(--primary);">Releases</a> 页面下载镜像离线导入。',
            readmeLink: '📖 查看完整 <a href="https://github.com/lclty/snowdrive/blob/main/README.md" target="_blank" style="color:var(--primary);">中文</a> | <a href="https://github.com/lclty/snowdrive/blob/main/README-en.md" target="_blank" style="color:var(--primary);">English</a> 文档',
            copyBtn: '复制',
            copiedBtn: '✅ 已复制',
            techLabel: '🏗️ 技术栈',
            techTitle: '现代技术构建',
            techSubtitle: '精选可靠的技术组合，确保系统稳定、高效、易维护。',
            secLabel: '🛡️ 安全说明',
            secTitle: '多层安全防护',
            secSubtitle: '从密码存储到会话管理，全方位保障你的数据安全。',
            starLabel: '⭐ Star History',
            starTitle: '社区认可',
            starSubtitle: '每一颗星都是对 SnowDrive 的肯定与鼓励，感谢所有支持者！',
            starFallback: '📊 Star History 图表暂时无法加载，请访问 <a href="https://star-history.com/#lclty/snowdrive&Date" style="color:var(--primary);">star-history.com</a> 查看完整趋势。',
            starLinkText: '在 star-history.com 上查看完整图表',
            footerText: '',
            features: [
                { icon: 'fa-solid fa-shield-halved', title: '安全认证', desc: '用户名 + 密码 + 强制双因素认证（2FA），支持 TOTP 动态验证码与 WebAuthn/Passkey。' },
                { icon: 'fa-solid fa-folder-open', title: '完整文件管理', desc: '浏览、上传、下载、新建文件/文件夹、复制、移动、重命名、删除，一应俱全。' },
                { icon: 'fa-solid fa-cloud-arrow-down', title: '远程下载', desc: '粘贴 URL 即可将远程文件下载到服务器，后台任务实时追踪进度。' },
                { icon: 'fa-solid fa-layer-group', title: '批量操作', desc: '多选文件批量下载（自动 ZIP 打包）、拖拽上传，效率倍增。' },
                { icon: 'fa-solid fa-palette', title: '精美 UI', desc: '响应式设计，深浅色主题切换，移动端完美适配，操作流畅优雅。' },
                { icon: 'fa-solid fa-house-lock', title: '单用户模式', desc: '全局唯一账户，首次访问引导注册，专为个人/家庭使用设计。' },
                { icon: 'fa-solid fa-hard-drive', title: '持久化存储', desc: '数据库与头像文件存储在容器外 Volume，升级/重建容器数据不丢失。' },
                { icon: 'fa-solid fa-shield', title: '全本地化', desc: 'CSS/JS/FontAwesome 全部本地引用，零外部 CDN 依赖，内网也能流畅使用。' },
            ],
            tech: [
                { icon: 'fa-brands fa-python', name: 'Python 3.12' },
                { icon: 'fa-solid fa-server', name: 'Flask 3.1' },
                { icon: 'fa-solid fa-database', name: 'SQLite' },
                { icon: 'fa-solid fa-key', name: 'bcrypt + PyJWT' },
                { icon: 'fa-solid fa-mobile-screen', name: 'TOTP + WebAuthn' },
                { icon: 'fa-solid fa-code', name: 'Jinja2 + JS + CSS3' },
                { icon: 'fa-brands fa-docker', name: 'Docker' },
                { icon: 'fa-solid fa-icons', name: 'FontAwesome 本地' },
            ],
            security: [
                { title: 'bcrypt 哈希存储', desc: '密码使用 bcrypt 哈希存储，不可逆，即使数据库泄露也无法还原密码。' },
                { title: 'httpOnly Secure Cookie + JWT', desc: '会话采用双重验证机制，JWT 令牌经 SHA-256 哈希后存库，防止令牌伪造。' },
                { title: '路径遍历防护', desc: '所有文件操作均有 safe_join_path 限制在 /data 目录内，杜绝目录穿越攻击。' },
                { title: '敏感操作二次验证', desc: '修改密码、删除 2FA 方式等操作均需验证当前密码，防止未授权变更。' },
                { title: '强制双因素认证', desc: '系统强制启用 2FA（TOTP 或 WebAuthn），登录必须验证动态码或生物识别，杜绝密码泄露风险。' },
            ],
        },
        en: {
            navLogo: '❄️ SnowDrive',
            navFeatures: 'Features',
            navQuickstart: 'Quick Start',
            navTech: 'Tech Stack',
            navSecurity: 'Security',
            tooltipLang: '切换到中文',
            tooltipTheme: 'Toggle Theme',
            heroBadge: 'Docker Deploy · Open Source',
            heroTitle: 'Secure Remote File Access System',
            heroDesc: 'A lightweight NAS solution based on Python/Flask, featuring 2FA two-factor authentication, WebAuthn/Passkey support, remote downloads, batch operations, and one-click Docker deployment — fully localized with zero external dependencies.',
            heroDemoBtn: 'Live Demo',
            featuresLabel: '✨ Features',
            featuresTitle: 'Everything Under Control',
            featuresSubtitle: 'A secure, efficient, and convenient remote file management experience for all your personal and family needs.',
            qsLabel: '🚀 Quick Start',
            qsTitle: 'One-Click Docker Deployment',
            qsSubtitle: 'Pull the image from Docker Hub and launch your private cloud drive in under a minute.',
            qsNote: '💡 Users in China: If Docker Hub is slow, download the image from the <a href="https://github.com/lclty/snowdrive/releases" target="_blank" style="color:var(--primary);">Releases</a> page for offline import.',
            readmeLink: '📖 View full <a href="https://github.com/lclty/snowdrive/blob/main/README.md" target="_blank" style="color:var(--primary);">Chinese</a> | <a href="https://github.com/lclty/snowdrive/blob/main/README-en.md" target="_blank" style="color:var(--primary);">English</a> documentation',
            copyBtn: 'Copy',
            copiedBtn: '✅ Copied',
            techLabel: '🏗️ Tech Stack',
            techTitle: 'Built with Modern Technology',
            techSubtitle: 'A carefully selected set of reliable technologies to ensure stability, efficiency, and easy maintenance.',
            secLabel: '🛡️ Security',
            secTitle: 'Multi-Layered Protection',
            secSubtitle: 'From password storage to session management, comprehensive protection for your data.',
            starLabel: '⭐ Star History',
            starTitle: 'Community Recognition',
            starSubtitle: 'Every star is a vote of confidence in SnowDrive — thank you to all our supporters!',
            starFallback: '📊 Star History chart is temporarily unavailable. Please visit <a href="https://star-history.com/#lclty/snowdrive&Date" style="color:var(--primary);">star-history.com</a> to view the full trend.',
            starLinkText: 'View full chart on star-history.com',
            footerText: '',
            features: [
                { icon: 'fa-solid fa-shield-halved', title: 'Secure Authentication', desc: 'Username + Password + mandatory 2FA, supporting TOTP and WebAuthn/Passkey.' },
                { icon: 'fa-solid fa-folder-open', title: 'Full File Management', desc: 'Browse, upload, download, create, copy, move, rename, delete — all covered.' },
                { icon: 'fa-solid fa-cloud-arrow-down', title: 'Remote Download', desc: 'Paste a URL to download remote files to the server with real-time progress tracking.' },
                { icon: 'fa-solid fa-layer-group', title: 'Batch Operations', desc: 'Multi-select batch download (auto ZIP) and drag-and-drop upload for maximum efficiency.' },
                { icon: 'fa-solid fa-palette', title: 'Beautiful UI', desc: 'Responsive design, light/dark theme toggle, fully optimized for mobile devices.' },
                { icon: 'fa-solid fa-house-lock', title: 'Single-User Mode', desc: 'One global account with guided first-time registration — ideal for personal/family use.' },
                { icon: 'fa-solid fa-hard-drive', title: 'Persistent Storage', desc: 'Database and avatar files stored outside the container via Volumes — data survives upgrades and rebuilds.' },
                { icon: 'fa-solid fa-shield', title: 'Fully Localized', desc: 'All CSS/JS/FontAwesome served locally with zero CDN dependencies — works flawlessly on intranets.' },
            ],
            tech: [
                { icon: 'fa-brands fa-python', name: 'Python 3.12' },
                { icon: 'fa-solid fa-server', name: 'Flask 3.1' },
                { icon: 'fa-solid fa-database', name: 'SQLite' },
                { icon: 'fa-solid fa-key', name: 'bcrypt + PyJWT' },
                { icon: 'fa-solid fa-mobile-screen', name: 'TOTP + WebAuthn' },
                { icon: 'fa-solid fa-code', name: 'Jinja2 + JS + CSS3' },
                { icon: 'fa-brands fa-docker', name: 'Docker' },
                { icon: 'fa-solid fa-icons', name: 'FontAwesome Local' },
            ],
            security: [
                { title: 'bcrypt Password Hashing', desc: 'Passwords are hashed with bcrypt — irreversible. Even if the database is compromised, passwords cannot be recovered.' },
                { title: 'httpOnly Secure Cookie + JWT', desc: 'Dual verification with JWT tokens hashed via SHA-256 stored in the database to prevent token forgery.' },
                { title: 'Path Traversal Protection', desc: 'All file operations are restricted to the /data directory via safe_join_path, preventing directory traversal attacks.' },
                { title: 'Sensitive Action Re-Verification', desc: 'Changing passwords and removing 2FA methods require current password verification to prevent unauthorized changes.' },
                { title: 'Mandatory Two-Factor Authentication', desc: '2FA (TOTP or WebAuthn) is enforced for all logins, requiring a dynamic code or biometric verification — eliminating password leak risks.' },
            ],
        },
    };

    let currentLang = localStorage.getItem('snowdrive-lang') || 'zh';
    let currentTheme = localStorage.getItem('snowdrive-theme') || 'system';

    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    // ==================== Theme ====================
    function applyTheme(theme) {
        if (theme === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }
        updateThemeIcon(theme);
    }

    function updateThemeIcon(theme) {
        const icon = $('#themeToggle i');
        if (!icon) return;
        const effectiveTheme = theme === 'system' ?
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') :
            theme;
        icon.className = effectiveTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    function cycleTheme() {
        const themes = ['system', 'light', 'dark'];
        const idx = themes.indexOf(currentTheme);
        currentTheme = themes[(idx + 1) % themes.length];
        localStorage.setItem('snowdrive-theme', currentTheme);
        applyTheme(currentTheme);
    }

    // ==================== Language ====================
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('snowdrive-lang', lang);
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

        // Elements with data-i18n-key
        $$('[data-i18n-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            const keys = key.split('.');
            let val = i18n[lang];
            for (const k of keys) {
                if (val && typeof val === 'object' && k in val) {
                    val = val[k];
                } else {
                    val = null;
                    break;
                }
            }
            if (typeof val === 'string') {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = val;
                } else {
                    el.textContent = val;
                }
            }
        });

        // Elements with data-i18n-html (allow HTML inside)
        $$('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const keys = key.split('.');
            let val = i18n[lang];
            for (const k of keys) {
                if (val && typeof val === 'object' && k in val) {
                    val = val[k];
                } else {
                    val = null;
                    break;
                }
            }
            if (typeof val === 'string') {
                el.innerHTML = val;
            }
        });

        // Update tooltip
        const langTooltip = $('#langToggle .tooltip');
        if (langTooltip) {
            langTooltip.textContent = lang === 'zh' ? 'Switch to English' : '切换到中文';
        }

        // Re-render dynamic lists
        renderFeatures();
        renderTechStack();
        renderSecurityList();
        updateCopyButtonsText();
    }

    function toggleLanguage() {
        applyLanguage(currentLang === 'zh' ? 'en' : 'zh');
    }

    function updateCopyButtonsText() {
        $$('.copy-btn').forEach(btn => {
            if (!btn.classList.contains('copied')) {
                const txt = i18n[currentLang].copyBtn;
                btn.innerHTML = `<i class="fa-solid fa-copy"></i> ${txt}`;
            }
        });
    }

    // ==================== Render Dynamic Content ====================
    function renderFeatures() {
        const grid = $('#featuresGrid');
        if (!grid) return;
        const items = i18n[currentLang].features;
        grid.innerHTML = items.map((item, i) => `
            <div class="feature-card fade-up" style="transition-delay:${i * 0.06}s">
              <div class="feature-icon"><i class="${item.icon}"></i></div>
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
            </div>
          `).join('');
        observeFadeUpElements();
    }

    function renderTechStack() {
        const grid = $('#techGrid');
        if (!grid) return;
        const items = i18n[currentLang].tech;
        grid.innerHTML = items.map((item, i) => `
            <div class="tech-item fade-up" style="transition-delay:${i * 0.04}s">
              <i class="${item.icon}"></i> ${item.name}
            </div>
          `).join('');
        observeFadeUpElements();
    }

    function renderSecurityList() {
        const list = $('#securityList');
        if (!list) return;
        const items = i18n[currentLang].security;
        list.innerHTML = items.map((item, i) => `
            <li class="security-item fade-up" style="transition-delay:${i * 0.06}s">
              <div class="security-icon"><i class="fa-solid fa-check"></i></div>
              <div>
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
              </div>
            </li>
          `).join('');
        observeFadeUpElements();
    }

    // ==================== Copy Button ====================
    function setupCopyButtons() {
        $$('.copy-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const targetId = this.getAttribute('data-copy-target');
                const codeBlock = document.getElementById(targetId);
                if (!codeBlock) return;
                const text = codeBlock.textContent || codeBlock.innerText;
                navigator.clipboard.writeText(text).then(() => {
                    this.classList.add('copied');
                    this.innerHTML = i18n[currentLang].copiedBtn;
                    setTimeout(() => {
                        this.classList.remove('copied');
                        this.innerHTML = `<i class="fa-solid fa-copy"></i> ${i18n[currentLang].copyBtn}`;
                    }, 1800);
                }).catch(() => {
                    const ta = document.createElement('textarea');
                    ta.value = text;
                    ta.style.position = 'fixed';
                    ta.style.opacity = '0';
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand('copy');
                    document.body.removeChild(ta);
                    this.classList.add('copied');
                    this.innerHTML = i18n[currentLang].copiedBtn;
                    setTimeout(() => {
                        this.classList.remove('copied');
                        this.innerHTML = `<i class="fa-solid fa-copy"></i> ${i18n[currentLang].copyBtn}`;
                    }, 1800);
                });
            });
        });
    }

    // ==================== Mobile Menu ====================
    function setupMobileMenu() {
        const btn = $('#mobileMenuBtn');
        const links = $('#navLinks');
        if (!btn || !links) return;
        btn.addEventListener('click', () => {
            links.classList.toggle('open');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = links.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
            }
        });
        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                links.classList.remove('open');
                const icon = btn.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            });
        });
        document.addEventListener('click', (e) => {
            if (!btn.contains(e.target) && !links.contains(e.target)) {
                links.classList.remove('open');
                const icon = btn.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            }
        });
    }

    // ==================== Scroll Animation ====================
    function observeFadeUpElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

        $$('.fade-up').forEach(el => {
            if (!el.classList.contains('visible')) {
                observer.observe(el);
            }
        });
    }

    // ==================== Snowflakes ====================
    function createSnowflakes() {
        const container = $('#snowflakesContainer');
        if (!container) return;
        const symbols = ['❄', '❅', '❆', '✦', '•', '·'];
        const count = window.innerWidth < 600 ? 20 : 35;
        container.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const span = document.createElement('span');
            span.className = 'snowflake';
            span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            span.style.left = Math.random() * 100 + '%';
            span.style.fontSize = (0.5 + Math.random() * 1.4) + 'rem';
            span.style.animationDuration = (8 + Math.random() * 20) + 's';
            span.style.animationDelay = Math.random() * 18 + 's';
            span.style.opacity = (0.25 + Math.random() * 0.55);
            container.appendChild(span);
        }
    }

    // ==================== Init ====================
    function init() {
        // Theme
        applyTheme(currentTheme);
        $('#themeToggle').addEventListener('click', cycleTheme);

        // Language
        applyLanguage(currentLang);
        $('#langToggle').addEventListener('click', toggleLanguage);

        // Dynamic content
        renderFeatures();
        renderTechStack();
        renderSecurityList();

        // Copy buttons
        setupCopyButtons();

        // Mobile menu
        setupMobileMenu();

        // Scroll animations
        observeFadeUpElements();

        // Snowflakes
        createSnowflakes();
        window.addEventListener('resize', () => {
            clearTimeout(window._snowResizeTimer);
            window._snowResizeTimer = setTimeout(createSnowflakes, 300);
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (currentTheme === 'system') {
                applyTheme('system');
            }
        });

        // Set current year in footer
        const yearSpan = document.getElementById('currentYear');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }

        console.log('❄️ SnowDrive 展示页已就绪 | SnowDrive showcase page ready');
        console.log('   GitHub: https://github.com/lclty/snowdrive');
        console.log('   Demo: https://snowdrive.lclty.cn/demo');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();