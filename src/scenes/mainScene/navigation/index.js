import React, { useState } from 'react';
import './navigation.scss';
import useGetSearchParams from '../../../components/hooks/useGetSearchParams';
import useSetUrl from '../../../components/hooks/useSetUrl';

export default function Navigation() {
  const [params, setParams] = useState({});
  useGetSearchParams(setParams);
  const handleSetParam = useSetUrl(params);

  const handleDeleteParam = (event) => {
    handleSetParam(event, '');
  };

  return (
    <nav className="navigation">
      <ul className="navigation_list">
        <li className="navigation_title">
          <span>{`We are looking `}</span>
          <button>a book</button>
        </li>
        {params.query && (
          <li className="navigation_item">
            <span>{`Query: `}</span>
            <button onClick={handleDeleteParam} data-name="query">
              {params.query}
            </button>
            <div className="navigation_button-cansel"></div>
          </li>
        )}
        {params.title && (
          <li className="navigation_item">
            <span>{`Title: `}</span>
            <button onClick={handleDeleteParam} data-name="title">
              {params.title}
            </button>
            <div className="navigation_button-cansel"></div>
          </li>
        )}
        {params.author && (
          <li className="navigation_item">
            <span>{`Author: `}</span>
            <button onClick={handleDeleteParam} data-name="author">
              {params.author}
            </button>
            <div className="navigation_button-cansel"></div>
          </li>
        )}
        {params.subject && (
          <li className="navigation_item">
            <span>{`Subject: `}</span>
            <button onClick={handleDeleteParam} data-name="subject">
              {params.subject}
            </button>
            <div className="navigation_button-cansel"></div>
          </li>
        )}
        {params.place && (
          <li className="navigation_item">
            <span>{`Place: `}</span>
            <button onClick={handleDeleteParam} data-name="place">
              {params.place}
            </button>
            <div className="navigation_button-cansel"></div>
          </li>
        )}
        {params.person && (
          <li className="navigation_item">
            <span>{`Person: `}</span>
            <button onClick={handleDeleteParam} data-name="person">
              {params.person}
            </button>
            <div className="navigation_button-cansel"></div>
          </li>
        )}
        {params.publisher && (
          <li className="navigation_item">
            <span>{`Publisher: `}</span>
            <button onClick={handleDeleteParam} data-name="publisher">
              {params.publisher}
            </button>
            <div className="navigation_button-cansel"></div>
          </li>
        )}
      </ul>
    </nav>
  );
}
