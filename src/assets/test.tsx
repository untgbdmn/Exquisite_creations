import React from 'react';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'id' ? 'en' : 'id';
    i18n.changeLanguage(newLang);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={toggleLanguage}>{t('toggleLanguage')}</button>
    </div>
  );
};

export default App;
