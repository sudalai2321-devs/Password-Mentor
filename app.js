// Advanced Password Strength Checker - Enhanced Interactive Application
class CyberGuardPro {
    constructor() {
        this.currentTheme = 'dark';
        this.currentSection = 'analyzer';
        this.animationsEnabled = true;
        this.soundEnabled = true;
        this.particlesEnabled = true;
        
        // User Progress System
        this.userStats = {
            totalChecks: 0,
            totalGenerated: 0,
            strongPasswords: 0,
            vulnerabilitiesFound: 0,
            currentXP: 150,
            unlockedAchievements: ['first_analysis']
        };
        
        // Application Data
        this.themes = {
            dark: {
                primary: "#6366f1",
                secondary: "#8b5cf6",
                accent: "#06ffa5",
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                surface: "rgba(30, 41, 59, 0.8)",
                text: "#f1f5f9"
            },
            light: {
                primary: "#3b82f6",
                secondary: "#6366f1",
                accent: "#10b981",
                background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
                surface: "rgba(255, 255, 255, 0.8)",
                text: "#1e293b"
            },
            cyber: {
                primary: "#00f5ff",
                secondary: "#ff006e",
                accent: "#8338ec",
                background: "linear-gradient(135deg, #000000 0%, #1a0033 100%)",
                surface: "rgba(0, 245, 255, 0.1)",
                text: "#00f5ff"
            },
            matrix: {
                primary: "#00ff41",
                secondary: "#39ff14",
                accent: "#00cc33",
                background: "linear-gradient(135deg, #000000 0%, #001100 100%)",
                surface: "rgba(0, 255, 65, 0.1)",
                text: "#00ff41"
            }
        };
        
        this.gamificationLevels = [
            {name: "Rookie", minScore: 0, color: "#ef4444", badge: "🔓"},
            {name: "Guardian", minScore: 250, color: "#f97316", badge: "🛡️"},
            {name: "Defender", minScore: 500, color: "#eab308", badge: "⚔️"},
            {name: "Protector", minScore: 1000, color: "#22c55e", badge: "🏰"},
            {name: "CyberMaster", minScore: 2000, color: "#8b5cf6", badge: "👑"}
        ];
        
        this.achievements = [
            {id: "first_analysis", name: "First Analysis", description: "Analyzed your first password", icon: "🔍", unlocked: true},
            {id: "first_strong", name: "First Strong Password", description: "Created your first strong password", icon: "💪", unlocked: false},
            {id: "entropy_master", name: "Entropy Master", description: "Achieved 80+ bits of entropy", icon: "🧮", unlocked: false},
            {id: "generator_pro", name: "Generator Pro", description: "Generated 10 passwords", icon: "⚡", unlocked: false},
            {id: "security_scholar", name: "Security Scholar", description: "Read all security tips", icon: "🎓", unlocked: false},
            {id: "comparison_expert", name: "Comparison Expert", description: "Compared 5 password pairs", icon: "⚖️", unlocked: false},
            {id: "no_dictionary", name: "Dictionary Dodger", description: "Avoided all dictionary words", icon: "📚", unlocked: false},
            {id: "symbol_master", name: "Symbol Master", description: "Used 8+ different symbols", icon: "🔣", unlocked: false},
            {id: "length_champion", name: "Length Champion", description: "Created 20+ character password", icon: "📏", unlocked: false},
            {id: "perfect_score", name: "Perfect Score", description: "Achieved 100/100 strength score", icon: "🌟", unlocked: false},
            {id: "theme_explorer", name: "Theme Explorer", description: "Tried all themes", icon: "🎨", unlocked: false},
            {id: "cyber_master", name: "Cyber Master", description: "Reached maximum level", icon: "👑", unlocked: false}
        ];
        
        this.securityTips = [
            {
                title: "Length Beats Complexity",
                content: "A 16-character passphrase is stronger than an 8-character complex password",
                icon: "📏",
                animation: "slideInLeft"
            },
            {
                title: "Unique for Every Account",
                content: "Never reuse passwords across different accounts or services",
                icon: "🔐",
                animation: "slideInRight"
            },
            {
                title: "Use a Password Manager",
                content: "Let technology handle the complexity while you remember one master password",
                icon: "🧰",
                animation: "slideInUp"
            },
            {
                title: "Enable 2FA Everywhere",
                content: "Two-factor authentication adds an extra layer of security beyond passwords",
                icon: "🛡️",
                animation: "slideInDown"
            },
            {
                title: "Avoid Personal Information",
                content: "Don't use birthdays, names, or other easily guessable personal details",
                icon: "👤",
                animation: "slideInLeft"
            },
            {
                title: "Regular Security Checkups",
                content: "Review and update your passwords regularly, especially for sensitive accounts",
                icon: "🔄",
                animation: "slideInRight"
            }
        ];
        
        this.commonPasswords = [
            "123456", "password", "123456789", "qwerty", "abc123", "111111", "1234567",
            "dragon", "123123", "baseball", "football", "monkey", "letmein", "shadow",
            "master", "696969", "michael", "mustang", "superman", "admin", "welcome",
            "login", "sunshine", "princess", "azerty", "trustno1", "000000"
        ];
        
        this.currentTipIndex = 0;
        this.particles = [];
        this.comparisonCount = 0;
        this.generatedCount = 0;
        this.themesExplored = new Set(['dark']);
        
        this.init();
    }
    
    init() {
        this.showLoadingScreen();
        setTimeout(() => {
            this.initializeElements();
            this.setupEventListeners();
            this.initializeParticles();
            this.updateUserProgress();
            this.updateAchievements();
            this.hideLoadingScreen();
            this.playNotificationSound('success');
            this.showNotification('Welcome to CyberGuard Pro! 🛡️', 'success');
        }, 3000);
    }
    
    initializeElements() {
        // Core elements
        this.passwordInput = document.getElementById('passwordInput');
        this.togglePassword = document.getElementById('togglePassword');
        this.sidebar = document.getElementById('sidebar');
        this.sidebarToggle = document.getElementById('sidebarToggle');
        
        // Navigation
        this.navItems = document.querySelectorAll('.nav-item');
        this.contentSections = document.querySelectorAll('.content-section');
        
        // Theme controls
        this.themeButtons = document.querySelectorAll('.theme-btn');
        this.animationsToggle = document.getElementById('animationsToggle');
        this.soundToggle = document.getElementById('soundToggle');
        this.particlesToggle = document.getElementById('particlesToggle');
        
        // Analysis elements
        this.strengthCircle = document.getElementById('strengthCircle');
        this.scoreValue = document.getElementById('scoreValue');
        this.strengthLevel = document.getElementById('strengthLevel');
        this.strengthDescription = document.getElementById('strengthDescription');
        
        // Metric elements
        this.lengthValue = document.getElementById('lengthValue');
        this.entropyValue = document.getElementById('entropyValue');
        this.charTypesValue = document.getElementById('charTypesValue');
        this.uniqueChars = document.getElementById('uniqueChars');
        
        // Character type elements
        this.charTypes = {
            lowercase: document.getElementById('lowercase'),
            uppercase: document.getElementById('uppercase'),
            numbers: document.getElementById('numbers'),
            symbols: document.getElementById('symbols')
        };
        
        // Count elements
        this.lowercaseCount = document.getElementById('lowercaseCount');
        this.uppercaseCount = document.getElementById('uppercaseCount');
        this.numbersCount = document.getElementById('numbersCount');
        this.symbolsCount = document.getElementById('symbolsCount');
        
        // Cracking time elements
        this.homeTime = document.getElementById('homeTime');
        this.professionalTime = document.getElementById('professionalTime');
        this.cloudTime = document.getElementById('cloudTime');
        
        // Vulnerability and recommendation lists
        this.vulnerabilityList = document.getElementById('vulnerabilityList');
        this.recommendationsList = document.getElementById('recommendationsList');
        
        // User progress elements
        this.userLevel = document.getElementById('userLevel');
        this.xpFill = document.getElementById('xpFill');
        this.xpText = document.getElementById('xpText');
        this.achievementCounter = document.getElementById('achievementCounter');
        
        // Generator elements
        this.lengthSlider = document.getElementById('lengthSlider');
        this.lengthDisplay = document.getElementById('lengthDisplay');
        this.generateMultiple = document.getElementById('generateMultiple');
        this.passwordList = document.getElementById('passwordList');
        
        // Generator checkboxes
        this.includeLowercase = document.getElementById('includeLowercase');
        this.includeUppercase = document.getElementById('includeUppercase');
        this.includeNumbers = document.getElementById('includeNumbers');
        this.includeSymbols = document.getElementById('includeSymbols');
        this.excludeSimilar = document.getElementById('excludeSimilar');
        this.excludeAmbiguous = document.getElementById('excludeAmbiguous');
        
        // Preset buttons
        this.presetButtons = document.querySelectorAll('.preset-btn');
        
        // Comparison elements
        this.compareA = document.getElementById('compareA');
        this.compareB = document.getElementById('compareB');
        this.metricsA = document.getElementById('metricsA');
        this.metricsB = document.getElementById('metricsB');
        this.comparisonResults = document.getElementById('comparisonResults');
        this.winnerAnnouncement = document.getElementById('winnerAnnouncement');
        
        // Education elements
        this.tipContent = document.getElementById('tipContent');
        this.prevTip = document.getElementById('prevTip');
        this.nextTip = document.getElementById('nextTip');
        this.startSimulation = document.getElementById('startSimulation');
        this.simulationDisplay = document.getElementById('simulationDisplay');
        
        // Achievement elements
        this.currentLevelBadge = document.getElementById('currentLevelBadge');
        this.levelDescription = document.getElementById('levelDescription');
        this.levelProgress = document.getElementById('levelProgress');
        this.levelProgressText = document.getElementById('levelProgressText');
        this.achievementGrid = document.getElementById('achievementGrid');
        
        // Stats elements
        this.totalChecks = document.getElementById('totalChecks');
        this.totalGenerated = document.getElementById('totalGenerated');
        this.strongPasswords = document.getElementById('strongPasswords');
        this.vulnerabilitiesFound = document.getElementById('vulnerabilitiesFound');
        
        // Action buttons
        this.generateBtn = document.getElementById('generateBtn');
        this.copyBtn = document.getElementById('copyBtn');
        this.clearBtn = document.getElementById('clearBtn');
        
        // Notification container
        this.notificationContainer = document.getElementById('notificationContainer');
        
        console.log('Elements initialized:', {
            passwordInput: !!this.passwordInput,
            generateBtn: !!this.generateBtn,
            generateMultiple: !!this.generateMultiple,
            scoreValue: !!this.scoreValue
        });
    }
    
    setupEventListeners() {
        // Password input analysis
        if (this.passwordInput) {
            this.passwordInput.addEventListener('input', (e) => {
                console.log('Password input detected:', e.target.value);
                this.analyzePassword(e.target.value);
            });
            this.passwordInput.addEventListener('keydown', () => this.playKeypressSound());
        }
        
        // Password visibility toggle
        if (this.togglePassword) {
            this.togglePassword.addEventListener('click', () => this.togglePasswordVisibility());
        }
        
        // Navigation
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.dataset.section;
                this.switchSection(section);
            });
        });
        
        // Sidebar toggle
        if (this.sidebarToggle) {
            this.sidebarToggle.addEventListener('click', () => this.toggleSidebar());
        }
        
        // Theme switching
        this.themeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.dataset.theme;
                this.switchTheme(theme);
            });
        });
        
        // Control toggles
        if (this.animationsToggle) {
            this.animationsToggle.addEventListener('change', (e) => {
                this.animationsEnabled = e.target.checked;
                this.updateAnimations();
            });
        }
        
        if (this.soundToggle) {
            this.soundToggle.addEventListener('change', (e) => {
                this.soundEnabled = e.target.checked;
            });
        }
        
        if (this.particlesToggle) {
            this.particlesToggle.addEventListener('change', (e) => {
                this.particlesEnabled = e.target.checked;
                this.toggleParticles();
            });
        }
        
        // Action buttons
        if (this.generateBtn) {
            this.generateBtn.addEventListener('click', () => {
                console.log('Generate button clicked');
                this.generateStrongPassword();
            });
        }
        
        if (this.copyBtn) {
            this.copyBtn.addEventListener('click', () => this.copyToClipboard());
        }
        
        if (this.clearBtn) {
            this.clearBtn.addEventListener('click', () => this.clearPassword());
        }
        
        // Generator controls
        if (this.lengthSlider && this.lengthDisplay) {
            this.lengthSlider.addEventListener('input', (e) => {
                this.lengthDisplay.textContent = e.target.value;
            });
        }
        
        if (this.generateMultiple) {
            this.generateMultiple.addEventListener('click', () => {
                console.log('Generate multiple button clicked');
                this.generateMultiplePasswords();
            });
        }
        
        // Preset buttons
        this.presetButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const preset = btn.dataset.preset;
                this.applyPreset(preset);
            });
        });
        
        // Comparison inputs
        if (this.compareA) {
            this.compareA.addEventListener('input', () => this.performComparison());
        }
        
        if (this.compareB) {
            this.compareB.addEventListener('input', () => this.performComparison());
        }
        
        // Education controls
        if (this.prevTip) {
            this.prevTip.addEventListener('click', () => this.showPreviousTip());
        }
        
        if (this.nextTip) {
            this.nextTip.addEventListener('click', () => this.showNextTip());
        }
        
        if (this.startSimulation) {
            this.startSimulation.addEventListener('click', () => this.startAttackSimulation());
        }
        
        // Auto-advance tips
        setInterval(() => this.showNextTip(), 8000);
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 'g':
                        e.preventDefault();
                        this.generateStrongPassword();
                        break;
                    case 'c':
                        if (e.target === this.passwordInput) {
                            e.preventDefault();
                            this.copyToClipboard();
                        }
                        break;
                }
            }
        });
        
        console.log('Event listeners setup complete');
    }
    
    showLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const progress = loadingScreen.querySelector('.loading-progress');
        
        let width = 0;
        const interval = setInterval(() => {
            width += Math.random() * 15;
            if (width >= 100) {
                width = 100;
                clearInterval(interval);
            }
            progress.style.width = width + '%';
        }, 100);
    }
    
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
    
    initializeParticles() {
        const container = document.getElementById('particleContainer');
        if (!container) return;
        
        // Clear existing particles
        container.innerHTML = '';
        this.particles = [];
        
        // Create particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 4 + 's';
            particle.style.animationDuration = (3 + Math.random() * 4) + 's';
            
            container.appendChild(particle);
            this.particles.push(particle);
        }
        
        console.log('Particles initialized:', this.particles.length);
        this.animateParticles();
    }
    
    animateParticles() {
        if (!this.particlesEnabled || this.particles.length === 0) return;
        
        this.particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const containerRect = particle.parentElement.getBoundingClientRect();
            
            // Get current position
            let currentTop = parseFloat(particle.style.top);
            let currentLeft = parseFloat(particle.style.left);
            
            // Add small random movement
            currentTop += (Math.random() - 0.5) * 0.1;
            currentLeft += (Math.random() - 0.5) * 0.1;
            
            // Wrap around edges
            if (currentTop < 0) currentTop = 100;
            if (currentTop > 100) currentTop = 0;
            if (currentLeft < 0) currentLeft = 100;
            if (currentLeft > 100) currentLeft = 0;
            
            particle.style.top = currentTop + '%';
            particle.style.left = currentLeft + '%';
        });
        
        requestAnimationFrame(() => this.animateParticles());
    }
    
    toggleParticles() {
        const container = document.getElementById('particleContainer');
        if (container) {
            if (this.particlesEnabled) {
                container.style.opacity = '0.6';
                this.animateParticles();
            } else {
                container.style.opacity = '0';
            }
        }
    }
    
    switchTheme(theme) {
        this.currentTheme = theme;
        this.themesExplored.add(theme);
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update theme buttons
        this.themeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });
        
        this.playNotificationSound('success');
        this.showNotification(`Switched to ${theme} theme! ✨`, 'success');
        
        // Check theme explorer achievement
        if (this.themesExplored.size >= 4) {
            this.unlockAchievement('theme_explorer');
        }
    }
    
    switchSection(sectionName) {
        // Update navigation
        this.navItems.forEach(item => {
            item.classList.toggle('active', item.dataset.section === sectionName);
        });
        
        // Update content sections
        this.contentSections.forEach(section => {
            section.classList.toggle('active', section.id === sectionName);
        });
        
        this.currentSection = sectionName;
        
        // Initialize section-specific features
        if (sectionName === 'achievements') {
            this.updateAchievements();
        } else if (sectionName === 'dashboard') {
            this.updateDashboard();
        }
        
        this.playNotificationSound('info');
    }
    
    toggleSidebar() {
        if (this.sidebar) {
            this.sidebar.classList.toggle('collapsed');
        }
    }
    
    analyzePassword(password) {
        console.log('Analyzing password:', password ? '***' : 'empty');
        
        if (!password || password.trim() === '') {
            this.resetAnalysis();
            return;
        }
        
        const analysis = this.calculatePasswordStrength(password);
        console.log('Analysis result:', analysis);
        
        this.updateAnalysisUI(analysis);
        this.updateStats();
        
        // Check for achievements
        if (analysis.score >= 80 && !this.achievements.find(a => a.id === 'first_strong').unlocked) {
            this.unlockAchievement('first_strong');
        }
        
        if (analysis.entropy >= 80) {
            this.unlockAchievement('entropy_master');
        }
        
        if (password.length >= 20) {
            this.unlockAchievement('length_champion');
        }
        
        if (analysis.score === 100) {
            this.unlockAchievement('perfect_score');
        }
        
        const uniqueSymbols = new Set(password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/g) || []);
        if (uniqueSymbols.size >= 8) {
            this.unlockAchievement('symbol_master');
        }
    }
    
    calculatePasswordStrength(password) {
        const length = password.length;
        
        // Character type analysis
        const hasLower = /[a-z]/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(password);
        
        // Count each type
        const lowercaseCount = (password.match(/[a-z]/g) || []).length;
        const uppercaseCount = (password.match(/[A-Z]/g) || []).length;
        const numbersCount = (password.match(/\d/g) || []).length;
        const symbolsCount = (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/g) || []).length;
        
        // Unique characters
        const uniqueChars = new Set(password).size;
        
        // Character pool size
        let poolSize = 0;
        if (hasLower) poolSize += 26;
        if (hasUpper) poolSize += 26;
        if (hasNumbers) poolSize += 10;
        if (hasSymbols) poolSize += 32;
        
        // Calculate entropy
        const entropy = length > 0 ? length * Math.log2(poolSize || 1) : 0;
        
        // Base score calculation
        let score = 0;
        
        // Length scoring (0-40 points)
        score += Math.min(40, length * 2);
        
        // Character type diversity (0-20 points)
        const charTypeCount = [hasLower, hasUpper, hasNumbers, hasSymbols].filter(Boolean).length;
        score += charTypeCount * 5;
        
        // Entropy bonus (0-30 points)
        score += Math.min(30, entropy / 3);
        
        // Unique character bonus (0-10 points)
        score += Math.min(10, (uniqueChars / length) * 10);
        
        // Penalties
        // Common password penalty
        const isCommon = this.commonPasswords.includes(password.toLowerCase());
        if (isCommon) score -= 50;
        
        // Pattern penalties
        if (/123|abc|qwe|asd/i.test(password)) score -= 10;
        if (/(.)\1{2,}/.test(password)) score -= 15;
        if (/^[a-z]+$/i.test(password)) score -= 10;
        if (/^\d+$/.test(password)) score -= 20;
        
        // Dictionary word penalty
        const commonWords = ['password', 'admin', 'user', 'login', 'welcome', 'test'];
        if (commonWords.some(word => password.toLowerCase().includes(word))) {
            score -= 25;
        }
        
        // Ensure score is between 0 and 100
        score = Math.max(0, Math.min(100, Math.round(score)));
        
        // Determine strength level
        let strengthLevel, strengthDescription, strengthColor;
        if (score < 20) {
            strengthLevel = 'Very Weak';
            strengthDescription = 'Extremely vulnerable to attacks';
            strengthColor = '#ef4444';
        } else if (score < 40) {
            strengthLevel = 'Weak';
            strengthDescription = 'Easy to crack with basic tools';
            strengthColor = '#f97316';
        } else if (score < 60) {
            strengthLevel = 'Fair';
            strengthDescription = 'Provides basic protection';
            strengthColor = '#eab308';
        } else if (score < 80) {
            strengthLevel = 'Strong';
            strengthDescription = 'Good protection against attacks';
            strengthColor = '#22c55e';
        } else {
            strengthLevel = 'Excellent';
            strengthDescription = 'Outstanding security level';
            strengthColor = '#10b981';
        }
        
        // Calculate cracking times
        const crackingTimes = this.calculateCrackingTimes(poolSize, length);
        
        // Generate vulnerabilities and recommendations
        const vulnerabilities = this.identifyVulnerabilities(password);
        const recommendations = this.generateRecommendations(password, {
            hasLower, hasUpper, hasNumbers, hasSymbols, 
            uniqueChars, length, entropy, score
        });
        
        return {
            length,
            hasLower,
            hasUpper,
            hasNumbers,
            hasSymbols,
            lowercaseCount,
            uppercaseCount,
            numbersCount,
            symbolsCount,
            uniqueChars,
            charTypeCount,
            entropy: Math.round(entropy * 10) / 10,
            score,
            strengthLevel,
            strengthDescription,
            strengthColor,
            isCommon,
            crackingTimes,
            vulnerabilities,
            recommendations
        };
    }
    
    calculateCrackingTimes(poolSize, length) {
        if (poolSize === 0 || length === 0) {
            return { home: "Instantly", professional: "Instantly", cloud: "Instantly" };
        }
        
        const combinations = Math.pow(poolSize, length);
        const averageCombinations = combinations / 2;
        
        const speeds = {
            home: 1000000, // 1M guesses/second
            professional: 164000000000, // RTX 4090
            cloud: 1000000000000 // 1T guesses/second
        };
        
        const times = {};
        Object.entries(speeds).forEach(([type, speed]) => {
            const seconds = averageCombinations / speed;
            times[type] = this.formatTime(seconds);
        });
        
        return times;
    }
    
    formatTime(seconds) {
        if (seconds < 1) return "Less than 1 second";
        if (seconds < 60) return `${Math.round(seconds)} second${Math.round(seconds) !== 1 ? 's' : ''}`;
        if (seconds < 3600) return `${Math.round(seconds / 60)} minute${Math.round(seconds / 60) !== 1 ? 's' : ''}`;
        if (seconds < 86400) return `${Math.round(seconds / 3600)} hour${Math.round(seconds / 3600) !== 1 ? 's' : ''}`;
        if (seconds < 31536000) return `${Math.round(seconds / 86400)} day${Math.round(seconds / 86400) !== 1 ? 's' : ''}`;
        if (seconds < 31536000000) return `${Math.round(seconds / 31536000)} year${Math.round(seconds / 31536000) !== 1 ? 's' : ''}`;
        return `${Math.round(seconds / 31536000000)} millennia`;
    }
    
    identifyVulnerabilities(password) {
        const vulnerabilities = [];
        
        if (this.commonPasswords.includes(password.toLowerCase())) {
            vulnerabilities.push({
                icon: '🚨',
                text: 'This password appears in common password lists and is extremely vulnerable!'
            });
        }
        
        if (password.length < 8) {
            vulnerabilities.push({
                icon: '📏',
                text: 'Password is too short. Minimum recommended length is 8 characters.'
            });
        }
        
        if (/123|abc|qwe|asd|zxc/i.test(password)) {
            vulnerabilities.push({
                icon: '🔢',
                text: 'Contains sequential patterns that are easy to guess.'
            });
        }
        
        if (/(.)\1{2,}/.test(password)) {
            vulnerabilities.push({
                icon: '🔄',
                text: 'Contains repeated characters which reduces security.'
            });
        }
        
        if (/^\d+$/.test(password)) {
            vulnerabilities.push({
                icon: '🔢',
                text: 'Contains only numbers - extremely vulnerable to brute force attacks.'
            });
        }
        
        if (/^[a-zA-Z]+$/.test(password)) {
            vulnerabilities.push({
                icon: '🔤',
                text: 'Contains only letters - missing numbers and symbols for better security.'
            });
        }
        
        const commonWords = ['password', 'admin', 'user', 'login', 'welcome', 'test'];
        commonWords.forEach(word => {
            if (password.toLowerCase().includes(word)) {
                vulnerabilities.push({
                    icon: '📚',
                    text: `Contains the common word "${word}" which reduces security.`
                });
            }
        });
        
        return vulnerabilities;
    }
    
    generateRecommendations(password, analysis) {
        const recommendations = [];
        
        if (password.length < 12) {
            recommendations.push({
                icon: '📏',
                text: `Add ${12 - password.length} more characters for better security (current: ${password.length}, recommended: 12+).`
            });
        }
        
        if (!analysis.hasLower) {
            recommendations.push({
                icon: '🔤',
                text: 'Include lowercase letters (a-z) to increase complexity.'
            });
        }
        
        if (!analysis.hasUpper) {
            recommendations.push({
                icon: '🔠',
                text: 'Include uppercase letters (A-Z) to increase complexity.'
            });
        }
        
        if (!analysis.hasNumbers) {
            recommendations.push({
                icon: '🔢',
                text: 'Include numbers (0-9) to strengthen your password.'
            });
        }
        
        if (!analysis.hasSymbols) {
            recommendations.push({
                icon: '🔣',
                text: 'Include special symbols (!@#$%^&*) for maximum security.'
            });
        }
        
        if (analysis.uniqueChars < password.length * 0.7) {
            recommendations.push({
                icon: '🎯',
                text: 'Use more unique characters to increase unpredictability.'
            });
        }
        
        if (analysis.entropy < 50) {
            recommendations.push({
                icon: '🧮',
                text: 'Increase entropy by using a wider variety of character types and longer length.'
            });
        }
        
        if (recommendations.length === 0) {
            recommendations.push({
                icon: '✅',
                text: 'Excellent! Your password meets all security recommendations.'
            });
        }
        
        return recommendations;
    }
    
    updateAnalysisUI(analysis) {
        console.log('Updating UI with analysis:', analysis);
        
        // Update progress circle
        const circle = this.strengthCircle?.querySelector('.progress-ring__circle');
        if (circle) {
            const circumference = 326.56;
            const offset = circumference - (analysis.score / 100) * circumference;
            circle.style.strokeDashoffset = offset;
            circle.style.stroke = analysis.strengthColor;
            console.log('Updated circle progress:', analysis.score);
        }
        
        // Update score and level
        if (this.scoreValue) {
            this.scoreValue.textContent = analysis.score;
            console.log('Updated score:', analysis.score);
        }
        
        if (this.strengthLevel) {
            this.strengthLevel.textContent = analysis.strengthLevel;
            this.strengthLevel.style.color = analysis.strengthColor;
        }
        
        if (this.strengthDescription) {
            this.strengthDescription.textContent = analysis.strengthDescription;
        }
        
        // Update metrics
        if (this.lengthValue) this.lengthValue.textContent = analysis.length;
        if (this.entropyValue) this.entropyValue.textContent = analysis.entropy;
        if (this.charTypesValue) this.charTypesValue.textContent = `${analysis.charTypeCount}/4`;
        if (this.uniqueChars) this.uniqueChars.textContent = analysis.uniqueChars;
        
        // Update character type indicators
        Object.entries(this.charTypes).forEach(([type, element]) => {
            if (element) {
                let hasType = false;
                switch(type) {
                    case 'lowercase': hasType = analysis.hasLower; break;
                    case 'uppercase': hasType = analysis.hasUpper; break;
                    case 'numbers': hasType = analysis.hasNumbers; break;
                    case 'symbols': hasType = analysis.hasSymbols; break;
                }
                element.classList.toggle('active', hasType);
            }
        });
        
        // Update character counts
        if (this.lowercaseCount) this.lowercaseCount.textContent = analysis.lowercaseCount;
        if (this.uppercaseCount) this.uppercaseCount.textContent = analysis.uppercaseCount;
        if (this.numbersCount) this.numbersCount.textContent = analysis.numbersCount;
        if (this.symbolsCount) this.symbolsCount.textContent = analysis.symbolsCount;
        
        // Update cracking times
        if (this.homeTime) this.homeTime.textContent = analysis.crackingTimes.home;
        if (this.professionalTime) this.professionalTime.textContent = analysis.crackingTimes.professional;
        if (this.cloudTime) this.cloudTime.textContent = analysis.crackingTimes.cloud;
        
        // Update vulnerabilities
        this.updateVulnerabilities(analysis.vulnerabilities);
        
        // Update recommendations
        this.updateRecommendations(analysis.recommendations);
        
        // Add XP for analysis
        this.addXP(5);
        
        // Update stats
        this.userStats.totalChecks++;
        if (analysis.score >= 70) {
            this.userStats.strongPasswords++;
        }
        this.userStats.vulnerabilitiesFound += analysis.vulnerabilities.length;
    }
    
    updateVulnerabilities(vulnerabilities) {
        if (!this.vulnerabilityList) return;
        
        if (vulnerabilities.length === 0) {
            this.vulnerabilityList.innerHTML = `
                <div class="no-vulnerabilities">
                    <span class="check-icon">✅</span>
                    No vulnerabilities detected! Your password looks secure.
                </div>
            `;
        } else {
            const vulnerabilityHTML = vulnerabilities.map(vuln => `
                <div class="vulnerability-item">
                    <div class="vulnerability-icon">${vuln.icon}</div>
                    <div class="vulnerability-text">${vuln.text}</div>
                </div>
            `).join('');
            this.vulnerabilityList.innerHTML = vulnerabilityHTML;
        }
    }
    
    updateRecommendations(recommendations) {
        if (!this.recommendationsList) return;
        
        const recommendationHTML = recommendations.map(rec => `
            <div class="recommendation-item">
                <div class="recommendation-icon">${rec.icon}</div>
                <div class="recommendation-text">${rec.text}</div>
            </div>
        `).join('');
        this.recommendationsList.innerHTML = recommendationHTML;
    }
    
    resetAnalysis() {
        console.log('Resetting analysis');
        
        // Reset progress circle
        const circle = this.strengthCircle?.querySelector('.progress-ring__circle');
        if (circle) {
            circle.style.strokeDashoffset = 326.56;
            circle.style.stroke = 'var(--theme-border)';
        }
        
        // Reset displays
        if (this.scoreValue) this.scoreValue.textContent = '0';
        if (this.strengthLevel) {
            this.strengthLevel.textContent = 'Enter Password';
            this.strengthLevel.style.color = 'var(--theme-text-secondary)';
        }
        if (this.strengthDescription) this.strengthDescription.textContent = 'Start typing to see analysis';
        
        // Reset metrics
        if (this.lengthValue) this.lengthValue.textContent = '0';
        if (this.entropyValue) this.entropyValue.textContent = '0';
        if (this.charTypesValue) this.charTypesValue.textContent = '0/4';
        if (this.uniqueChars) this.uniqueChars.textContent = '0';
        
        // Reset character types
        Object.values(this.charTypes).forEach(element => {
            element?.classList.remove('active');
        });
        
        // Reset counts
        if (this.lowercaseCount) this.lowercaseCount.textContent = '0';
        if (this.uppercaseCount) this.uppercaseCount.textContent = '0';
        if (this.numbersCount) this.numbersCount.textContent = '0';
        if (this.symbolsCount) this.symbolsCount.textContent = '0';
        
        // Reset cracking times
        if (this.homeTime) this.homeTime.textContent = '-';
        if (this.professionalTime) this.professionalTime.textContent = '-';
        if (this.cloudTime) this.cloudTime.textContent = '-';
        
        // Reset vulnerabilities and recommendations
        if (this.vulnerabilityList) {
            this.vulnerabilityList.innerHTML = `
                <div class="no-vulnerabilities">
                    <span class="check-icon">✅</span>
                    Enter a password to scan for vulnerabilities
                </div>
            `;
        }
        
        if (this.recommendationsList) {
            this.recommendationsList.innerHTML = `
                <div class="no-recommendations">
                    Enter a password to receive personalized recommendations
                </div>
            `;
        }
    }
    
    togglePasswordVisibility() {
        if (!this.passwordInput || !this.togglePassword) return;
        
        const isPassword = this.passwordInput.type === 'password';
        this.passwordInput.type = isPassword ? 'text' : 'password';
        this.togglePassword.querySelector('.eye-icon').textContent = isPassword ? '🙈' : '👁️';
    }
    
    generateStrongPassword() {
        console.log('Generating strong password');
        
        const length = 16;
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        let charset = lowercase + uppercase + numbers + symbols;
        let password = '';
        
        // Ensure at least one character from each type
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];
        
        // Fill remaining positions
        for (let i = 4; i < length; i++) {
            password += charset[Math.floor(Math.random() * charset.length)];
        }
        
        // Shuffle the password
        password = password.split('').sort(() => Math.random() - 0.5).join('');
        
        if (this.passwordInput) {
            this.passwordInput.value = password;
            this.analyzePassword(password);
        }
        
        this.addXP(10);
        this.userStats.totalGenerated++;
        this.generatedCount++;
        
        if (this.generatedCount >= 10) {
            this.unlockAchievement('generator_pro');
        }
        
        this.playNotificationSound('success');
        this.showNotification('Strong password generated! 🎯', 'success');
    }
    
    generateMultiplePasswords() {
        console.log('Generating multiple passwords');
        
        const passwords = [];
        const length = parseInt(this.lengthSlider?.value || 16);
        
        let charset = '';
        if (this.includeLowercase?.checked !== false) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (this.includeUppercase?.checked !== false) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (this.includeNumbers?.checked !== false) charset += '0123456789';
        if (this.includeSymbols?.checked !== false) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        if (this.excludeSimilar?.checked) {
            charset = charset.replace(/[0OIl]/g, '');
        }
        
        if (this.excludeAmbiguous?.checked) {
            charset = charset.replace(/[{}[\]()\/\\'"~,;.<>]/g, '');
        }
        
        if (!charset) {
            this.showNotification('Please select at least one character type!', 'warning');
            return;
        }
        
        console.log('Generating passwords with charset length:', charset.length);
        
        for (let i = 0; i < 5; i++) {
            let password = '';
            for (let j = 0; j < length; j++) {
                password += charset[Math.floor(Math.random() * charset.length)];
            }
            
            const analysis = this.calculatePasswordStrength(password);
            passwords.push({
                value: password,
                strength: analysis.strengthLevel,
                score: analysis.score,
                color: analysis.strengthColor
            });
        }
        
        this.displayGeneratedPasswords(passwords);
        this.addXP(15);
        this.userStats.totalGenerated += 5;
        
        this.playNotificationSound('success');
        this.showNotification('5 passwords generated! 🚀', 'success');
    }
    
    displayGeneratedPasswords(passwords) {
        if (!this.passwordList) return;
        
        console.log('Displaying generated passwords:', passwords.length);
        
        const passwordHTML = passwords.map((pwd, index) => `
            <div class="password-item">
                <div class="password-value">${pwd.value}</div>
                <div class="password-strength">
                    <div class="strength-dot" style="background: ${pwd.color}"></div>
                    <span style="color: ${pwd.color}">${pwd.strength} (${pwd.score}/100)</span>
                </div>
                <button class="copy-password-btn" onclick="navigator.clipboard.writeText('${pwd.value}').then(() => { this.textContent = '✓'; setTimeout(() => this.textContent = '📋', 2000); })">
                    📋
                </button>
            </div>
        `).join('');
        
        this.passwordList.innerHTML = passwordHTML;
    }
    
    applyPreset(preset) {
        // Reset all checkboxes first
        if (this.includeLowercase) this.includeLowercase.checked = false;
        if (this.includeUppercase) this.includeUppercase.checked = false;
        if (this.includeNumbers) this.includeNumbers.checked = false;
        if (this.includeSymbols) this.includeSymbols.checked = false;
        if (this.excludeSimilar) this.excludeSimilar.checked = false;
        if (this.excludeAmbiguous) this.excludeAmbiguous.checked = false;
        
        // Update active preset button
        this.presetButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.preset === preset);
        });
        
        switch (preset) {
            case 'standard':
                if (this.lengthSlider) this.lengthSlider.value = 12;
                if (this.includeLowercase) this.includeLowercase.checked = true;
                if (this.includeUppercase) this.includeUppercase.checked = true;
                if (this.includeNumbers) this.includeNumbers.checked = true;
                if (this.includeSymbols) this.includeSymbols.checked = true;
                break;
            case 'memorable':
                if (this.lengthSlider) this.lengthSlider.value = 16;
                if (this.includeLowercase) this.includeLowercase.checked = true;
                if (this.includeUppercase) this.includeUppercase.checked = true;
                if (this.includeNumbers) this.includeNumbers.checked = true;
                if (this.excludeSimilar) this.excludeSimilar.checked = true;
                if (this.excludeAmbiguous) this.excludeAmbiguous.checked = true;
                break;
            case 'ultra':
                if (this.lengthSlider) this.lengthSlider.value = 24;
                if (this.includeLowercase) this.includeLowercase.checked = true;
                if (this.includeUppercase) this.includeUppercase.checked = true;
                if (this.includeNumbers) this.includeNumbers.checked = true;
                if (this.includeSymbols) this.includeSymbols.checked = true;
                break;
            case 'pronounceable':
                if (this.lengthSlider) this.lengthSlider.value = 14;
                if (this.includeLowercase) this.includeLowercase.checked = true;
                if (this.includeUppercase) this.includeUppercase.checked = true;
                if (this.includeNumbers) this.includeNumbers.checked = true;
                if (this.excludeSimilar) this.excludeSimilar.checked = true;
                if (this.excludeAmbiguous) this.excludeAmbiguous.checked = true;
                break;
        }
        
        if (this.lengthDisplay && this.lengthSlider) {
            this.lengthDisplay.textContent = this.lengthSlider.value;
        }
    }
    
    performComparison() {
        const passwordA = this.compareA?.value;
        const passwordB = this.compareB?.value;
        
        if (!passwordA && !passwordB) {
            if (this.winnerAnnouncement) {
                this.winnerAnnouncement.innerHTML = 'Enter passwords above to see detailed comparison';
            }
            return;
        }
        
        if (passwordA) {
            const analysisA = this.calculatePasswordStrength(passwordA);
            this.updateComparisonMetrics(this.metricsA, analysisA);
        }
        
        if (passwordB) {
            const analysisB = this.calculatePasswordStrength(passwordB);
            this.updateComparisonMetrics(this.metricsB, analysisB);
        }
        
        if (passwordA && passwordB) {
            const analysisA = this.calculatePasswordStrength(passwordA);
            const analysisB = this.calculatePasswordStrength(passwordB);
            
            this.displayComparisonResults(analysisA, analysisB);
            this.comparisonCount++;
            
            if (this.comparisonCount >= 5) {
                this.unlockAchievement('comparison_expert');
            }
            
            this.addXP(8);
        }
    }
    
    updateComparisonMetrics(container, analysis) {
        if (!container) return;
        
        container.innerHTML = `
            <div class="comparison-metric">
                <span class="metric-name">Length:</span>
                <span class="metric-comparison-value">${analysis.length}</span>
            </div>
            <div class="comparison-metric">
                <span class="metric-name">Score:</span>
                <span class="metric-comparison-value" style="color: ${analysis.strengthColor}">${analysis.score}/100</span>
            </div>
            <div class="comparison-metric">
                <span class="metric-name">Entropy:</span>
                <span class="metric-comparison-value">${analysis.entropy} bits</span>
            </div>
            <div class="comparison-metric">
                <span class="metric-name">Char Types:</span>
                <span class="metric-comparison-value">${analysis.charTypeCount}/4</span>
            </div>
            <div class="comparison-metric">
                <span class="metric-name">Unique Chars:</span>
                <span class="metric-comparison-value">${analysis.uniqueChars}</span>
            </div>
        `;
    }
    
    displayComparisonResults(analysisA, analysisB) {
        const winner = analysisA.score > analysisB.score ? 'A' : analysisB.score > analysisA.score ? 'B' : 'Tie';
        const winnerAnalysis = winner === 'A' ? analysisA : analysisB;
        
        let resultHTML;
        
        if (winner === 'Tie') {
            resultHTML = `
                <div class="winner-announcement">
                    <h3 style="color: var(--theme-primary)">🤝 It's a Tie!</h3>
                    <p>Both passwords have the same strength score of ${analysisA.score}/100</p>
                </div>
            `;
        } else {
            resultHTML = `
                <div class="winner-card">
                    <div class="winner-title">🏆 Password ${winner} Wins!</div>
                    <div class="winner-details">
                        <div class="winner-stat">
                            <div class="winner-stat-value">${winnerAnalysis.score}/100</div>
                            <div class="winner-stat-label">Strength Score</div>
                        </div>
                        <div class="winner-stat">
                            <div class="winner-stat-value">${winnerAnalysis.entropy}</div>
                            <div class="winner-stat-label">Entropy (bits)</div>
                        </div>
                        <div class="winner-stat">
                            <div class="winner-stat-value">${winnerAnalysis.length}</div>
                            <div class="winner-stat-label">Length</div>
                        </div>
                        <div class="winner-stat">
                            <div class="winner-stat-value">${winnerAnalysis.charTypeCount}/4</div>
                            <div class="winner-stat-label">Char Types</div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        if (this.winnerAnnouncement) {
            this.winnerAnnouncement.innerHTML = resultHTML;
        }
    }
    
    showNextTip() {
        this.currentTipIndex = (this.currentTipIndex + 1) % this.securityTips.length;
        this.displayCurrentTip();
    }
    
    showPreviousTip() {
        this.currentTipIndex = (this.currentTipIndex - 1 + this.securityTips.length) % this.securityTips.length;
        this.displayCurrentTip();
    }
    
    displayCurrentTip() {
        const tip = this.securityTips[this.currentTipIndex];
        if (!this.tipContent) return;
        
        this.tipContent.innerHTML = `
            <div class="tip-icon">${tip.icon}</div>
            <div class="tip-title">${tip.title}</div>
            <div class="tip-description">${tip.content}</div>
        `;
        
        // Check if user has seen all tips
        if (this.currentTipIndex === this.securityTips.length - 1) {
            this.unlockAchievement('security_scholar');
        }
    }
    
    startAttackSimulation() {
        if (!this.simulationDisplay) return;
        
        this.simulationDisplay.innerHTML = `
            <div class="simulation-active">
                <h4>🎭 Brute Force Attack Simulation</h4>
                <div class="simulation-progress">
                    <div class="simulation-bar" style="width: 100%; height: 8px; background: var(--theme-border); border-radius: 4px; overflow: hidden;">
                        <div class="simulation-fill" id="simulationBar" style="height: 100%; width: 0%; background: linear-gradient(90deg, var(--theme-primary), var(--theme-accent)); transition: width 0.3s ease;"></div>
                    </div>
                    <div class="simulation-stats" style="margin-top: 1rem; display: flex; justify-content: space-between;">
                        <div>Attempts: <span id="attemptCount">0</span></div>
                        <div>Speed: <span id="attackSpeed">1M/sec</span></div>
                        <div>Status: <span id="attackStatus">Running...</span></div>
                    </div>
                </div>
                <div class="simulation-attempts" id="simulationAttempts" style="margin-top: 1rem; font-family: monospace; background: var(--theme-surface); padding: 1rem; border-radius: 8px; border: 1px solid var(--theme-border);">
                    Starting brute force attack...
                </div>
            </div>
        `;
        
        this.runAttackSimulation();
    }
    
    runAttackSimulation() {
        const simulationBar = document.getElementById('simulationBar');
        const attemptCount = document.getElementById('attemptCount');
        const attackStatus = document.getElementById('attackStatus');
        const simulationAttempts = document.getElementById('simulationAttempts');
        
        let attempts = 0;
        const maxAttempts = 1000000;
        
        const interval = setInterval(() => {
            attempts += Math.floor(Math.random() * 50000) + 1000;
            
            if (attemptCount) attemptCount.textContent = attempts.toLocaleString();
            
            const progress = Math.min((attempts / maxAttempts) * 100, 100);
            if (simulationBar) simulationBar.style.width = progress + '%';
            
            // Show random password attempts
            if (simulationAttempts) {
                const randomAttempt = this.generateRandomAttempt();
                simulationAttempts.innerHTML = `
                    <div style="color: var(--theme-text-secondary);">
                        Trying: ${randomAttempt}
                    </div>
                `;
            }
            
            if (attempts >= maxAttempts || Math.random() < 0.05) {
                clearInterval(interval);
                if (attackStatus) attackStatus.textContent = 'Simulation Complete!';
                if (simulationAttempts) {
                    simulationAttempts.innerHTML = `
                        <div style="color: var(--theme-primary); font-weight: bold;">
                            🎉 Password cracking simulation complete!<br>
                            This demonstrates why strong passwords are essential.
                        </div>
                    `;
                }
                this.addXP(20);
            }
        }, 100);
    }
    
    generateRandomAttempt() {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 8; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    
    copyToClipboard() {
        const password = this.passwordInput?.value;
        if (!password) {
            this.showNotification('No password to copy!', 'warning');
            return;
        }
        
        navigator.clipboard.writeText(password).then(() => {
            if (this.copyBtn) {
                const originalText = this.copyBtn.innerHTML;
                this.copyBtn.innerHTML = '<span class="btn-icon">✓</span>Copied!';
                this.copyBtn.style.background = 'var(--theme-primary)';
                
                setTimeout(() => {
                    this.copyBtn.innerHTML = originalText;
                    this.copyBtn.style.background = '';
                }, 2000);
            }
            
            this.playNotificationSound('success');
            this.showNotification('Password copied to clipboard! 📋', 'success');
        }).catch(() => {
            this.showNotification('Failed to copy password', 'error');
        });
    }
    
    clearPassword() {
        if (this.passwordInput) {
            this.passwordInput.value = '';
            this.resetAnalysis();
            this.playNotificationSound('info');
        }
    }
    
    updateUserProgress() {
        const currentLevel = this.getCurrentLevel();
        const nextLevel = this.getNextLevel();
        
        if (this.userLevel) {
            this.userLevel.textContent = `${currentLevel.badge} ${currentLevel.name}`;
        }
        
        if (this.xpFill && this.xpText) {
            if (nextLevel) {
                const progressPercent = ((this.userStats.currentXP - currentLevel.minScore) / (nextLevel.minScore - currentLevel.minScore)) * 100;
                this.xpFill.style.width = Math.min(progressPercent, 100) + '%';
                this.xpText.textContent = `${this.userStats.currentXP} / ${nextLevel.minScore} XP`;
            } else {
                this.xpFill.style.width = '100%';
                this.xpText.textContent = 'Max Level Reached!';
            }
        }
        
        // Update achievement counter
        const unlockedCount = this.achievements.filter(a => a.unlocked).length;
        if (this.achievementCounter) {
            const countElement = this.achievementCounter.querySelector('.achievement-count');
            if (countElement) {
                countElement.textContent = `${unlockedCount}/${this.achievements.length}`;
            }
        }
    }
    
    getCurrentLevel() {
        for (let i = this.gamificationLevels.length - 1; i >= 0; i--) {
            if (this.userStats.currentXP >= this.gamificationLevels[i].minScore) {
                return this.gamificationLevels[i];
            }
        }
        return this.gamificationLevels[0];
    }
    
    getNextLevel() {
        const currentLevel = this.getCurrentLevel();
        const currentIndex = this.gamificationLevels.indexOf(currentLevel);
        return currentIndex < this.gamificationLevels.length - 1 ? this.gamificationLevels[currentIndex + 1] : null;
    }
    
    addXP(amount) {
        const oldLevel = this.getCurrentLevel();
        this.userStats.currentXP += amount;
        const newLevel = this.getCurrentLevel();
        
        if (newLevel !== oldLevel) {
            this.showNotification(`Level Up! Welcome to ${newLevel.name} ${newLevel.badge}`, 'success');
            this.playNotificationSound('success');
            
            if (newLevel.name === 'CyberMaster') {
                this.unlockAchievement('cyber_master');
            }
        }
        
        this.updateUserProgress();
    }
    
    unlockAchievement(achievementId) {
        const achievement = this.achievements.find(a => a.id === achievementId);
        if (!achievement || achievement.unlocked) return;
        
        achievement.unlocked = true;
        this.userStats.unlockedAchievements.push(achievementId);
        
        this.showNotification(`Achievement Unlocked: ${achievement.name} ${achievement.icon}`, 'success');
        this.playNotificationSound('success');
        this.addXP(50);
        
        this.updateAchievements();
    }
    
    updateAchievements() {
        if (!this.achievementGrid) return;
        
        const achievementHTML = this.achievements.map(achievement => `
            <div class="achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-description">${achievement.description}</div>
            </div>
        `).join('');
        
        this.achievementGrid.innerHTML = achievementHTML;
        
        // Update level display
        const currentLevel = this.getCurrentLevel();
        const nextLevel = this.getNextLevel();
        
        if (this.currentLevelBadge) {
            this.currentLevelBadge.textContent = `${currentLevel.badge} ${currentLevel.name}`;
        }
        
        if (this.levelDescription) {
            const descriptions = {
                'Rookie': "You're just getting started on your security journey!",
                'Guardian': "You're learning the basics of password security!",
                'Defender': "You understand good password practices!",
                'Protector': "You're a password security expert!",
                'CyberMaster': "You've mastered the art of password security!"
            };
            this.levelDescription.textContent = descriptions[currentLevel.name];
        }
        
        if (this.levelProgress && this.levelProgressText && nextLevel) {
            const progressPercent = ((this.userStats.currentXP - currentLevel.minScore) / (nextLevel.minScore - currentLevel.minScore)) * 100;
            this.levelProgress.style.width = Math.min(progressPercent, 100) + '%';
            this.levelProgressText.textContent = `${this.userStats.currentXP} / ${nextLevel.minScore} XP to ${nextLevel.name}`;
        } else if (this.levelProgress && this.levelProgressText) {
            this.levelProgress.style.width = '100%';
            this.levelProgressText.textContent = 'Maximum level achieved!';
        }
    }
    
    updateStats() {
        if (this.totalChecks) this.totalChecks.textContent = this.userStats.totalChecks;
        if (this.totalGenerated) this.totalGenerated.textContent = this.userStats.totalGenerated;
        if (this.strongPasswords) this.strongPasswords.textContent = this.userStats.strongPasswords;
        if (this.vulnerabilitiesFound) this.vulnerabilitiesFound.textContent = this.userStats.vulnerabilitiesFound;
    }
    
    updateDashboard() {
        this.updateStats();
        // Additional dashboard updates could go here
    }
    
    updateAnimations() {
        const speedMultiplier = this.animationsEnabled ? 1 : 0;
        document.documentElement.style.setProperty('--animation-speed', speedMultiplier);
    }
    
    playKeypressSound() {
        if (!this.soundEnabled) return;
        this.playSound('keypress');
    }
    
    playNotificationSound(type) {
        if (!this.soundEnabled) return;
        this.playSound(type);
    }
    
    playSound(type) {
        // Create a simple beep using Web Audio API
        if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
            try {
                const audioContext = new (AudioContext || webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                const frequencies = {
                    'keypress': 800,
                    'success': 600,
                    'warning': 400,
                    'error': 300,
                    'info': 500
                };
                
                oscillator.frequency.value = frequencies[type] || 500;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            } catch (e) {
                console.log('Audio not available');
            }
        }
    }
    
    showNotification(message, type = 'info') {
        if (!this.notificationContainer) return;
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        this.notificationContainer.appendChild(notification);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }, 4000);
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing CyberGuard Pro');
    window.cyberGuardPro = new CyberGuardPro();
});