import { writable } from'svelte/store';
  
  // actions
  export const toggleTheme = color => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", `var(--color-${color})`);
    root.style.setProperty("--color-primary-50", `var(--color-${color}-50)`);
    root.style.setProperty("--color-primary-100", `var(--color-${color}-100)`);
    root.style.setProperty(
      "--color-primary-light",
      `var(--color-${color}-light)`
    );
    root.style.setProperty(
      "--color-primary-lighter",
      `var(--color-${color}-lighter)`
    );
    root.style.setProperty(
      "--color-primary-dark",
      `var(--color-${color}-dark)`
    );
    root.style.setProperty(
      "--color-primary-darker",
      `var(--color-${color}-darker)`
    );
  };

  export let toggleDarkMode = color => {
    switch (color) {
      case 'dark':
        document.getElementsByTagName('body')[0].classList.add('dark');
        break;
      case 'light':
        document.getElementsByTagName('body')[0].classList.remove('dark');
        break;
      default:
        document.getElementsByTagName('body')[0].classList.toggle('dark');
        break;
    }
};

  // states
  export let themeColor = 'blue';

  export let isSettingsPanelOpen = writable(false);
  export let isNotificationPanelOpen = writable(false);
  export let isSearchPanelOpen = writable(false);