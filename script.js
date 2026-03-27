alert("BOO!!!!");

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('[role="tabpanel"]');

  function activateTab(tab) {
    tabs.forEach(t => {
      const selected = t === tab;
      t.setAttribute('aria-selected', selected ? 'true' : 'false');
      t.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => panel.hidden = panel.id !== tab.getAttribute('aria-controls'));
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const idx = Array.from(tabs).indexOf(tab);
        const next = tabs[(idx + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        next.focus();
        activateTab(next);
      }
    });
  });

  const initial = document.querySelector('[role="tab"][aria-selected="true"]') || tabs[0];
  activateTab(initial);
});