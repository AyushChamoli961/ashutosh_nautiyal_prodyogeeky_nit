'use client'

import React, { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import Translate from '@google-cloud/translate';

// Assuming you have a valid API key stored in an environment variable
const GOOGLE_CLOUD_TRANSLATE_API_KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;

const translate = new Translate({
  projectId: 'your-project-id', // Replace with your Google Cloud project ID (optional)
  keyFilename: 'path/to/your/keyfile.json', // Path to your service account key file (optional)
  // Use the API key if not using service account authentication
  key: GOOGLE_CLOUD_TRANSLATE_API_KEY,
});

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Русский', value: 'ru' },
  { label: 'Polski', value: 'pl' }
];

const TranslationComponent = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [translationText, setTranslationText] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Added for loading state

  useEffect(() => {
    const fetchSavedLanguage = async () => {
      if (hasCookie('googtrans')) {
        const savedLanguage = getCookie('googtrans');
        setSelectedLanguage(savedLanguage);
        await translateText(savedLanguage);
      } else {
        setSelectedLanguage('en');
        await translateText('en');
      }
    };

    fetchSavedLanguage();
  }, []);

  const translateText = async (language) => {
    setIsLoading(true); // Set loading state

    try {
      const [translations] = await translate.translate(
        'The Tech Club at our college aims to bring together students passionate about technology. We organize workshops, hackathons, and seminars to explore various areas of technology such as programming, web development, artificial intelligence, and more. Our goal is to foster a collaborative and innovative environment where students can learn, share ideas, and work on exciting projects.',
        { to: language }
      );
      setTranslationText(translations);
    } catch (error) {
      console.error('Error translating text:', error);
      // Handle error gracefully, e.g., display an error message to the user
    } finally {
      setIsLoading(false); // Clear loading state
    }
  };

  const handleLanguageChange = (language) => {
    setCookie('googtrans', language);
    setSelectedLanguage(language);
    translateText(language);
  };

  return (
    <>
      {isLoading && <p>Translating...</p>} {/* Display loading indicator */}
      <div>
        {translationText}
      </div>
      <SelectPicker
        data={languages}
        style={{ width: 100 }}
        placement="bottomEnd"
        cleanable={false}
        value={selectedLanguage}
        searchable={false}
        onSelect={handleLanguageChange}
        placeholder="Lang"
      />
    </>
  );
};

export default TranslationComponent;
