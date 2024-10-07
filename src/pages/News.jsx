import React, { useState, useEffect } from 'react';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true); // Set loading state to true before fetching
      try {
        // Cek apakah data artikel sudah ada di localStorage
        const storedArticles = localStorage.getItem('articles');
        if (storedArticles) {
          // Jika ada, gunakan data dari localStorage
          setArticles(JSON.parse(storedArticles));
        } else {
          // Jika tidak ada, fetch data dari API
          const response = await fetch(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=peace&api-key=${apiKey}`
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setArticles(data.response.docs);
          // Simpan data ke localStorage
          localStorage.setItem('articles', JSON.stringify(data.response.docs));
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchNews();
  }, [apiKey]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Berita Terbaru</h1>
      {isLoading ? ( 
        <div className="text-center">
          <p>Memuat berita...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.slice(0, 12).map((article) => (
            <div key={article.web_url} className="bg-white rounded shadow-md p-4">
              {article.multimedia &&
                article.multimedia[0] &&
                article.multimedia[0].url && (
                  <img
                    src={`https://static01.nyt.com/${article.multimedia[0].url}`}
                    alt={article.headline.main}
                    className="w-full h-64 object-cover mb-4"
                  />
                )}
              <h2 className="text-2xl font-bold mb-2">{article.headline.main}</h2>
              <p className="text-gray-600 mb-4 truncate w-64">{article.snippet}</p>
              <a
                href={article.web_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Baca Selengkapnya
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
