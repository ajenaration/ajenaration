import { useCallback } from 'react';
import { ViewType } from '../types';

export const useNavigation = () => {
  const navigateTo = useCallback((view: ViewType) => {
    window.history.pushState({}, '', view === 'home' ? '/' : `/${view}`);
    window.dispatchEvent(new PopStateEvent('popstate')); // Add this line
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  const getInitialView = useCallback((): ViewType => {
    const path = window.location.pathname;
    if (path === '/about') return 'about';
    if (path === '/sponsorship') return 'sponsorship';
    return 'home';
  }, []);

  return { navigateTo, scrollToSection, getInitialView };
};