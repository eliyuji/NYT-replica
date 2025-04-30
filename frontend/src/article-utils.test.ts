import { describe, it, expect } from 'vitest';
import { mappingDocsToArticles,  type Article } from './article-utils';
//reference: https://vitest.dev/api/

describe('mappingDocsToArticles', () => {
    it('should return an Article with image when multimedia.default.url is present', () => {
      const docs = [
        {
          headline: { main: 'Tester Article with image' },
          snippet: 'This article has a default image.',
          web_url: 'https://tester1.com/with-image',
          multimedia: {
            default: {
              url: 'https://tester1.com/image.jpg'
            }
          }
        }
      ];
  
      const result: Article[] = mappingDocsToArticles(docs);
  
      expect(result[0].title).toBe('Tester Article with image');
      expect(result[0].picture).toBe('https://tester1.com/image.jpg');
      expect(result[0].url).toBe('https://tester1.com/with-image');
    });
  
    it('should return an Article with undefined picture when multimedia.default is missing', () => {
      const docs = [
        {
          headline: { main: 'Tester2 Article without image' },
          snippet: 'No image for this article.',
          web_url: 'https://tester2example.com/no-image',
          multimedia: {}
        }
      ];
  
      const result: Article[] = mappingDocsToArticles(docs);
  
      expect(result[0].title).toBe('Tester2 Article without image');
      expect(result[0].picture).toBe(undefined); //simulating no image
      expect(result[0].url).toBe('https://tester2example.com/no-image');
    });
  });