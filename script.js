const getPanelByButton = (button) => {
  const container = button.closest('.css__container');
  return container ? container.querySelector('.code__panel') : null;
};

const setLanguageTab = (panel, language) => {
  panel.dataset.activeLanguage = language;

  panel.querySelectorAll('.code-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.language === language);
  });
  panel.querySelectorAll('.code-block').forEach((block) => {
    block.classList.toggle('active', block.dataset.language === language);
  });
};

const getProjectStylesheetRules = () => {
  const stylesheet = Array.from(document.styleSheets).find((sheet) => (
    sheet.ownerNode?.getAttribute('href')?.endsWith('styles.css')
  ));

  if (!stylesheet) {
    throw new Error('No se encontró styles.css para generar el código CSS.');
  }

  return stylesheet.cssRules;
};

const getButtonCss = (button) => {
  const classes = new Set();
  [button, ...button.querySelectorAll('[class]')].forEach((element) => {
    element.classList.forEach((className) => {
      if (className !== 'active') classes.add(className);
    });
  });

  const matchingRules = [];
  const keyframeRules = [];
  const collectRules = (rules, conditions = []) => {
    Array.from(rules).forEach((rule) => {
      if (rule.type === CSSRule.STYLE_RULE) {
        const matchesButton = Array.from(classes).some((className) => {
          const escapedClass = className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          return new RegExp(`(^|[^\\w-])\\.${escapedClass}(?![\\w-])`).test(rule.selectorText);
        });

        if (matchesButton) matchingRules.push({ rule, conditions });
      } else if (rule.type === CSSRule.KEYFRAMES_RULE) {
        keyframeRules.push(rule);
      } else if (rule.cssRules) {
        const nestedConditions = rule.type === CSSRule.MEDIA_RULE
          ? [...conditions, `@media ${rule.conditionText}`]
          : conditions;
        collectRules(rule.cssRules, nestedConditions);
      }
    });
  };

  collectRules(getProjectStylesheetRules());

  const animationNames = new Set();
  matchingRules.forEach(({ rule }) => {
    rule.style.animationName.split(',').forEach((name) => {
      const trimmedName = name.trim();
      if (trimmedName && trimmedName !== 'none') animationNames.add(trimmedName);
    });
  });

  const groupedRules = new Map();
  matchingRules.forEach(({ rule, conditions }) => {
    const key = conditions.join('\n');
    const group = groupedRules.get(key) || [];
    group.push(rule.cssText);
    groupedRules.set(key, group);
  });

  const css = Array.from(groupedRules, ([conditions, rules]) => {
    let ruleText = rules.join('\n\n');
    if (conditions) {
      conditions.split('\n').reverse().forEach((condition) => {
        ruleText = `${condition} {\n${ruleText}\n}`;
      });
    }
    return ruleText;
  });
  keyframeRules.forEach((rule) => {
    if (animationNames.has(rule.name)) css.push(rule.cssText);
  });

  return css.length ? css.join('\n\n') : '/* No se encontraron reglas CSS específicas. */';
};

const getButtonHtml = (button, section) => {
  const clone = button.cloneNode(true);
  clone.classList.remove('btn-opcion');
  clone.classList.remove('active');
  clone.removeAttribute('data-panel');
  clone.removeAttribute('data-id');
  clone.setAttribute('type', 'button');

  const buttonMarkup = clone.outerHTML;
  if (section !== 'tailwind') return buttonMarkup;

  return `<script src="https://cdn.tailwindcss.com"></script>\n${buttonMarkup}`;
};

const getButtonJavaScript = (button) => {
  if (button.dataset.panel === 'svg' && button.dataset.id === 'muted') {
    return `const button = document.querySelector('.btn-svg-muted');\nbutton.addEventListener('click', () => button.classList.toggle('active'));`;
  }

  return 'No requiere JavaScript.';
};

const renderButtonCode = (button) => {
  const panel = getPanelByButton(button);
  if (!panel) {
    console.error('No se encontró el panel de código del botón seleccionado.');
    return;
  }

  const section = button.dataset.panel;
  const htmlNode = panel.querySelector('[data-language="html"] code');
  const cssNode = panel.querySelector('[data-language="css"] code');
  const jsNode = panel.querySelector('[data-language="js"] code');

  if (htmlNode) htmlNode.textContent = getButtonHtml(button, section);
  if (cssNode) {
    cssNode.textContent = section === 'tailwind'
      ? '/* Tailwind CSS se carga mediante el script CDN incluido en el HTML. */'
      : getButtonCss(button);
  }
  if (jsNode) jsNode.textContent = getButtonJavaScript(button);

  setLanguageTab(panel, panel.dataset.activeLanguage || 'html');
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.code__panel').forEach((panel) => {
    setLanguageTab(panel, panel.dataset.defaultLanguage || 'html');

    const copyButton = panel.querySelector('.btn-copy');
    copyButton?.addEventListener('click', async () => {
      const language = panel.dataset.activeLanguage || 'html';
      const block = panel.querySelector(`.code-block[data-language="${language}"] code`);
      const originalLabel = copyButton.textContent;

      try {
        await navigator.clipboard.writeText(block?.textContent || '');
        copyButton.textContent = '¡Copiado!';
      } catch (error) {
        console.error('Error al copiar el código:', error);
        copyButton.textContent = 'Error al copiar';
      }

      setTimeout(() => {
        copyButton.textContent = originalLabel;
      }, 1200);
    });

    panel.querySelectorAll('.code-tab').forEach((tab) => {
      tab.addEventListener('click', () => setLanguageTab(panel, tab.dataset.language));
    });
  });

  document.querySelectorAll('.btn-opcion[data-id]').forEach((button) => {
    button.addEventListener('click', () => renderButtonCode(button));
  });

  document.querySelectorAll('.btn-svg-muted').forEach((button) => {
    button.addEventListener('click', () => button.classList.toggle('active'));
  });

  const firstButton = document.querySelector('.btn-opcion[data-id]');
  if (firstButton) renderButtonCode(firstButton);
});
