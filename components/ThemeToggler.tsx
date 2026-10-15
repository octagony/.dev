import { ThemeSwitcher } from '@components/ui/theme-switcher';

export function ThemeToggler() {
  return (
    <div className="fixed bottom-0 left-[50%] translate-[-50%]">
      <ThemeSwitcher />
    </div>
  );
}
