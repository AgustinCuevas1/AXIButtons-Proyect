const codeLibrary = {
  classic: {
    btn_left_to_rigth: {
      html: `<button class="btn-opcion btn-left-to-right">To Right</button>`,
      css: `.btn-left-to-right {
  position: relative;
  display: inline-block;
  color: blue;
  background: transparent;
  border: 2px solid blue;
  border-radius: 4px;
  padding: 12px 24px;
  font-weight: 700;
  overflow: hidden;
  z-index: 1;
}

.btn-left-to-right::before {
  content: "";
  position: absolute;
  inset: 0;
  background: blue;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
  z-index: -1;
}

.btn-left-to-right:hover {
  color: white;
}

.btn-left-to-right:hover::before {
  transform: scaleX(1);
}`,
      js: 'No requiere JavaScript.'
    },
    btn_wave: {
      html: `<button class="btn-opcion btn-wave">Wave</button>`,
      css: `.btn-wave {
  position: relative;
  color: blue;
  background: transparent;
  border: 2px solid blue;
  overflow: hidden;
  padding: 12px 24px;
}

.btn-wave::before {
  content: "";
  position: absolute;
  inset: auto 0 0 0;
  height: 100%;
  background: rgba(0, 110, 255, 0.9);
  transform: translateY(100%);
  transition: transform 0.5s ease;
  z-index: -1;
}

.btn-wave:hover::before {
  transform: translateY(0);
}`,
      js: 'No requiere JavaScript.'
    },
    btn_neon: {
      html: `<button class="btn-opcion btn-neon">Neon</button>`,
      css: `.btn-neon {
  background: transparent;
  border: 1px solid rgba(0, 0, 255, 0.4);
  color: rgba(0, 0, 255, 0.7);
  transition: box-shadow 0.4s ease, color 0.4s ease;
}

.btn-neon:hover {
  color: rgba(0, 0, 255, 1);
  box-shadow: 0 0 20px rgba(0, 38, 255, 0.3);
}`,
      js: 'No requiere JavaScript.'
    },
    btn_hover: {
      html: `<button class="btn-opcion btn-hover">Hover</button>`,
      css: `.btn-hover {
  position: relative;
  background: transparent;
  border: none;
  padding: 12px 24px;
}

.btn-hover::before,
.btn-hover::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 2px solid transparent;
}

.btn-hover:hover::before {
  width: 100%;
  height: 100%;
  border-top-color: blue;
  border-right-color: blue;
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}`,
      js: 'No requiere JavaScript.'
    },
    btn_contact: {
      html: `<button class="btn-opcion btn-contact">Contact</button>`,
      css: `.btn-contact {
  background: transparent;
  border: 2px solid blue;
  color: blue;
  border-radius: 999px;
  transition: box-shadow 0.3s ease;
}

.btn-contact:hover {
  box-shadow: 0 0 15px rgba(0, 38, 255, 0.25);
}`,
      js: 'No requiere JavaScript.'
    },
    btn_gradient: {
      html: `<button class="btn-opcion btn-gradient">Gradient</button>`,
      css: `.btn-gradient {
  background: linear-gradient(135deg, #0f5bff, #0a1ecb);
  border: none;
  color: white;
  border-radius: 999px;
}`,
      js: 'No requiere JavaScript.'
    },
    btn_3d: {
      html: `<button class="btn-opcion btn-3d">3D</button>`,
      css: `.btn-3d {
  background: linear-gradient(#1e45ff, #001e9a);
  border: 1px solid rgba(255,255,255,0.4);
  box-shadow: 0 6px 0 #05116b;
  transform: translateY(0);
}

.btn-3d:active {
  transform: translateY(4px);
  box-shadow: 0 2px 0 #05116b;
}`,
      js: 'No requiere JavaScript.'
    },
    btn_center: {
      html: `<button class="btn-opcion btn-center">Center</button>`,
      css: `.btn-center {
  position: relative;
  background: transparent;
  color: blue;
  border: 2px solid blue;
  overflow: hidden;
}

.btn-center::before {
  content: "";
  position: absolute;
  inset: 0;
  background: blue;
  transform: scaleY(0);
  transform-origin: center;
  transition: transform 0.35s ease;
  z-index: -1;
}

.btn-center:hover::before {
  transform: scaleY(1);
}`,
      js: 'No requiere JavaScript.'
    },
    btn_elegant: {
      html: `<button class="btn-opcion btn-elegant">Elegant</button>`,
      css: `.btn-elegant {
  background: transparent;
  border: 2px solid blue;
  color: blue;
  overflow: hidden;
}

.btn-elegant::before,
.btn-elegant::after {
  content: "";
  position: absolute;
  inset: auto;
  border-radius: 50%;
  background: blue;
  transition: all 0.5s ease;
}`,
      js: 'No requiere JavaScript.'
    },
    btn_rgb: {
      html: `<button class="btn-opcion btn-rgb"><span>RGB</span></button>`,
      css: `.btn-rgb {
  position: relative;
  background: #0b0d13;
  border: 1px solid transparent;
  color: rgba(12,16,245,0.45);
  overflow: hidden;
}

.btn-rgb::before {
  content: "";
  position: absolute;
  inset: -2px;
  background: linear-gradient(90deg, #0b4cff, #002fff, #1100ff);
  background-size: 300% 300%;
  animation: rgbShine 2.5s linear infinite;
}`,
      js: 'No requiere JavaScript.'
    }
  },
  tailwind: {
    clip: {
      html: `<button class="bg-[#0027ff] text-white font-black uppercase tracking-widest px-10 py-3 [clip-path:polygon(10%_0,100%_0,100%_70%,90%_100%,0_100%,0_30%)] hover:bg-[#0015ff] hover:[clip-path:polygon(0_0,90%_0,100%_30%,100%_100%,10%_100%,0_70%)] transition-all duration-300">Clip</button>`,
      css: '/* Usa Tailwind CSS */\n// No se necesita CSS adicional.',
      js: 'No requiere JavaScript.'
    },
    ligth: {
      html: `<button class="bg-transparent text-[#0027ff] font-bold px-8 py-3 rounded-lg border border-blue-900 shadow-[0_0_15px_blue,inset_0_0_15px_blue] hover:bg-[#0027ff] hover:text-black hover:shadow-[0_0_30px_blue] transition-all duration-300">Ligth</button>`,
      css: '/* Usa Tailwind CSS */\n// No se necesita CSS adicional.',
      js: 'No requiere JavaScript.'
    },
    next: {
      html: `<button class="bg-gradient-to-r from-indigo-500 via-blue-900 to-[#0027ff] text-white font-bold px-8 py-3 rounded-full bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-lg hover:shadow-[#000c4f]">Next</button>`,
      css: '/* Usa Tailwind CSS */\n// No se necesita CSS adicional.',
      js: 'No requiere JavaScript.'
    },
    smoke: {
      html: `<button class="bg-gray-200 text-[#0027ff] font-semibold px-8 py-3 rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#bebebe] hover:shadow-[20px_20px_16px_transparent,-20px_-20px_16px_transparent] hover:bg-[#0027ff] hover:text-white transition-all duration-300">Smoke</button>`,
      css: '/* Usa Tailwind CSS */\n// No se necesita CSS adicional.',
      js: 'No requiere JavaScript.'
    },
    press_me: {
      html: `<button class="bg-[#0027ff] text-white font-bold px-8 py-3 rounded-xl border-b-4 border-[#061b94] hover:brightness-110 active:border-b-0 active:translate-y-1 transition-all duration-100">Press Me</button>`,
      css: '/* Usa Tailwind CSS */\n// No se necesita CSS adicional.',
      js: 'No requiere JavaScript.'
    },
    silicon_valley: {
      html: `<button class="bg-[#0027ff] text-white font-medium px-8 py-3 rounded-full shadow-[0_4px_14px_0_rgb(37,99,235,39%)] hover:shadow-[0_6px_20px_rgba(37,99,235,23%)] hover:-translate-y-1 focus:ring-4 focus:ring-blue-300 transition-all duration-300">Silicon Valley</button>`,
      css: '/* Usa Tailwind CSS */\n// No se necesita CSS adicional.',
      js: 'No requiere JavaScript.'
    },
    execute: {
      html: `<button class="bg-black text-[#0027ff] font-mono text-sm uppercase tracking-widest px-8 py-3 border-2 border-[#0027ff] hover:bg-[#0027ff] hover:text-black transition-colors duration-200">Execute_</button>`,
      css: '/* Usa Tailwind CSS */\n// No se necesita CSS adicional.',
      js: 'No requiere JavaScript.'
    },
    focus: {
      html: `<button class="text-[#0027ff] font-bold px-8 py-3 rounded-full border-2 border-[#0027ff] hover:bg-[#0027ff] hover:text-white hover:shadow-lg hover:shadow-[#010963] transition-all duration-300">Focus</button>`,
      css: '/* Usa Tailwind CSS */\n// No se necesita CSS adicional.',
      js: 'No requiere JavaScript.'
    },
    buttom_underline: {
      html: `<button class="relative px-6 py-2 text-sm font-bold uppercase tracking-[0.3em] text-[#000754] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#000754] after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100">Buttom</button>`,
      css: '/* Usa Tailwind CSS */\n// No se necesita CSS adicional.',
      js: 'No requiere JavaScript.'
    },
    buttom_glow: {
      html: `<button class="bg-gradient-to-b from-[#3848ff] via-[#0116fa] to-[#000ea6] text-white font-extrabold px-8 py-3 rounded-full shadow-[inset_0_2px_4px_#000ea6,0_5px_15px_-5px_#000ea6] hover:shadow-[inset_0_2px_4px_#000ea6,0_10px_25px_-5px_#000ea6] hover:brightness-110 active:scale-95 transition-all duration-200 border border-yellow-300">Buttom</button>`,
      css: '/* Usa Tailwind CSS */\n// No se necesita CSS adicional.',
      js: 'No requiere JavaScript.'
    }
  },
  svg: {
    archives: {
      html: `<button class="btn-opcion btn-svg-archives"><i class="bi bi-archive"></i>Archives</button>`,
      css: `.btn-svg-archives {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
  border: 2px solid aliceblue;
  border-radius: 30px;
  color: aliceblue;
  font-weight: bold;
  transition: color .3s ease-out, background .3s ease-out, border .3s ease-out, transform .3s ease;
}

.svg-archive {
  scale: 1.1;
}

.btn-svg-archives:hover {
  background-color: transparent;
  border: 2px solid blue;
  color: blue;
  transform: scale(1.08);
}

.btn-svg-archives:hover .svg-archive {
  scale: 1.1;
}

.btn-svg-archives:active {
  opacity: 0.5;
}`,
      js: 'No requiere JavaScript.'
    },
    home: {
      html: `<button class="btn-opcion btn-svg-home"><i class="bi bi-house"></i>Home</button>`,
      css: `.btn-svg-home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
  border: 2px solid aliceblue;
  border-radius: 30px;
  color: aliceblue;
  font-weight: bold;
  transition: color .3s ease-out, background .3s ease-out, border .3s ease-out, transform .3s ease;
}

.svg-home {
  scale: 1.1;
}

.btn-svg-home:hover {
  background-color: transparent;
  border: 2px solid blue;
  color: blue;
  transform: scale(1.08);
}

.btn-svg-home:hover .svg-aboutus {
  scale: 1.1;
}

.btn-svg-home:active {
  opacity: 0.5;
}`,
      js: 'No requiere JavaScript.'
    },
    leave: {
      html: `<button class="btn-opcion btn-svg-leave"><i class="bi bi-arrow-right-square"></i><span>Leave</span></button>`,
      css: `.btn-svg-leave {
  width: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 50px;
  overflow: hidden;
  transition: width .3s ease;
  color: aliceblue;
  background-color: blue;
  border: 2px solid aliceblue;
  border-radius: 30px;
}

.svg-leave {
  scale: 1.2;
}

.btn-svg-leave span {
  opacity: 0;
  transform: translateX(20px);
  white-space: nowrap;
  transition: opacity .3s ease, transform .3s ease;
}

.btn-svg-leave:hover {
  width: 10rem;
}

.btn-svg-leave:hover span {
  opacity: 1;
  transform: translateX(10px);
}

.btn-svg-leave:active {
  opacity: 0.5;
}`,
      js: 'No requiere JavaScript.'
    },
    bell: {
      html: `<button class="btn-opcion btn-svg-bell"><i class="bi bi-bell-fill"></i><span>Notifications</span></button>`,
      css: `.btn-svg-bell {
  width: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 50px;
  overflow: hidden;
  transition: width .3s ease;
  color: aliceblue;
  background-color: blue;
  border: 2px solid alicewhite;
  border-radius: 30px;
}

.svg-bell {
  scale: 1.2;
}

.btn-svg-bell span {
  opacity: 0;
  transform: translateX(20px);
  white-space: nowrap;
  transition: opacity .3s ease, transform .3s ease;
}

.btn-svg-bell:hover {
  width: 10rem;
}

.btn-svg-bell:hover span {
  opacity: 1;
  transform: translateX(8px);
}

.btn-svg-bell:active {
  opacity: 0.5;
}`,
      js: 'No requiere JavaScript.'
    },
    msg: {
      html: `<button class="btn-opcion btn-svg-msg"><i class="bi bi-chat-dots-fill"></i>Message</button>`,
      css: `.btn-svg-msg {
  width: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 50px;
  overflow: hidden;
  transition: width .3s ease;
  color: aliceblue;
  background-color: blue;
  border: 2px solid alicewhite;
  border-radius: 30px;
}

.btn-svg-msg:hover {
  animation-name: surprise;
  animation-duration: 1s;
}

@keyframes surprise {
  0% { transform: rotate(0deg) scale(1, 1); }
  20% { transform: rotate(-7deg) scale(1, 1); }
  40% { transform: rotate(7deg) scale(1, 1); }
  60% { transform: rotate(-7deg) scale(1, 1); }
  80% { transform: rotate(7deg) scale(1, 1); }
  100% { transform: rotate(0deg) scale(1, 1); }
}`,
      js: 'No requiere JavaScript.'
    },
    contact: {
      html: `<button class="btn-opcion btn-svg-contact"><i class="bi bi-telephone-forward-fill"></i><span>Phone</span></button>`,
      css: `.btn-svg-contact {
  color: blue;
  background: transparent;
  border: 2px solid blue;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  padding: 10px 28px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.btn-svg-contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: blue;
  transition: left 0.4s ease;
  z-index: -1;
}

.btn-svg-contact i {
  position: absolute;
  left: -100%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: aliceblue;
  transition: left 0.4s ease, transform 0.4s ease;
}

.btn-svg-contact span {
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.btn-svg-contact:hover::before {
  left: 0;
}

.btn-svg-contact:hover i {
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn-svg-contact:hover span {
  transform: translateX(150%);
  opacity: 0;
}`,
      js: 'No requiere JavaScript.'
    },
    muted: {
      html: `<button class="btn-opcion btn-svg-muted"><span class="span-muted"><i class="bi bi-mic-mute-fill"></i>Muted</span><span class="span-heading"><i class="bi bi-mic-fill"></i>Heading</span></button>`,
      css: `.btn-svg-muted {
  display: inline-grid;
  padding: 10px 24px;
  border: 2px solid aliceblue;
  background: blue;
  color: alicewhite;
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;
}

.btn-svg-muted span {
  grid-area: 1 / 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.btn-svg-muted .span-muted {
  opacity: 1;
  transform: translateY(0);
}

.btn-svg-muted .span-heading {
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
}

.btn-svg-muted.active .span-muted {
  opacity: 0;
  transform: translateY(-20px);
  pointer-events: none;
}

.btn-svg-muted.active .span-heading {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}`,
      js: 'No requiere JavaScript.'
    },
    send: {
      html: `<button class="btn-opcion btn-send-svg" type="button"><span class="btn-send-text">Send</span><span class="btn-send-icon-wrap"><i class="bi bi-send-fill"></i></span></button>`,
      css: `.buttoms__panel .btn-send-svg {
  width: 8.5rem;
}

.btn-send-svg {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  width: 8.5rem;
  padding: 0.8rem 1.15rem;
  border: 2px solid #ffffff;
  border-radius: 30px;
  background: blue;
  color: aliceblue;
  font-weight: 700;
  letter-spacing: 0.02em;
  overflow: hidden;
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.btn-send-svg > * {
  position: relative;
  z-index: 1;
}

.btn-send-text {
  display: inline-block;
  transition: transform 0.25s ease;
}

.btn-send-icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  transition: transform 0.25s ease, background 0.25s ease;
}

.btn-send-svg i {
  font-size: 0.9rem;
  line-height: 1;
  transition: transform 0.25s ease;
}

.btn-send-svg:hover {
  background: transparent;
  border-color: blue;
  color: blue;
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 0 0 1px rgba(0, 0, 255, 0.12), 0 10px 18px rgba(0, 0, 255, 0.12);
}

.btn-send-svg:hover .btn-send-text {
  transform: translateX(2px);
}

.btn-send-svg:hover .btn-send-icon-wrap {
  transform: translateX(3px) scale(1.08);
  background: rgba(0, 0, 255, 0.06);
}

.btn-send-svg:hover i {
  transform: rotate(12deg);
}

.btn-send-svg:active {
  transform: translateY(0) scale(0.98);
}`,
      js: 'No requiere JavaScript.'
    }
  }
};

const getPanelByButton = (button) => {
  const container = button.closest('.css__container');
  return container ? container.querySelector('.code__panel') : null;
};

const setLanguageTab = (panel, language) => {
  panel.dataset.activeLanguage = language;

  const tabs = panel.querySelectorAll('.code-tab');
  const blocks = panel.querySelectorAll('.code-block');

  tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.language === language));
  blocks.forEach((block) => block.classList.toggle('active', block.dataset.language === language));
};

const renderButtonCode = (button) => {
  const panel = getPanelByButton(button);
  if (!panel) return;

  const section = button.dataset.panel;
  const id = button.dataset.id;
  const snippet = codeLibrary[section]?.[id];

  if (!snippet) return;

  const htmlNode = panel.querySelector('[data-language="html"] code');
  const cssNode = panel.querySelector('[data-language="css"] code');
  const jsNode = panel.querySelector('[data-language="js"] code');

  if (htmlNode) htmlNode.textContent = snippet.html;
  if (cssNode) cssNode.textContent = snippet.css || '/* Sin CSS adicional */';
  if (jsNode) jsNode.textContent = snippet.js || 'No requiere JavaScript.';

  setLanguageTab(panel, panel.dataset.activeLanguage || 'html');
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.code__panel').forEach((panel) => {
    const firstLanguage = panel.dataset.defaultLanguage || 'html';
    setLanguageTab(panel, firstLanguage);

    const copyButton = panel.querySelector('.btn-copy');
    if (copyButton) {
      copyButton.addEventListener('click', async () => {
        const language = panel.dataset.activeLanguage || 'html';
        const block = panel.querySelector(`.code-block[data-language="${language}"] code`);
        const text = block ? block.textContent : '';

        try {
          await navigator.clipboard.writeText(text);
          const original = copyButton.textContent;
          copyButton.textContent = '¡Copiado!';
          setTimeout(() => {
            copyButton.textContent = original;
          }, 1200);
        } catch (error) {
          console.error('Error al copiar el código:', error);
        }
      });
    }

    panel.querySelectorAll('.code-tab').forEach((tab) => {
      tab.addEventListener('click', () => setLanguageTab(panel, tab.dataset.language));
    });
  });

  document.querySelectorAll('.btn-opcion[data-id]').forEach((button) => {
    button.addEventListener('click', () => renderButtonCode(button));
  });

  const firstButtons = document.querySelectorAll('.btn-opcion[data-id]');
  if (firstButtons.length) {
    const first = firstButtons[0];
    renderButtonCode(first);
  }

  const muteButton = document.querySelector('.btn-svg-muted');
  if (muteButton) {
    muteButton.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }
});

