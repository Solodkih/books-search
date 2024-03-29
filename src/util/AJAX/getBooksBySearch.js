import stringWithSpaceToStringWithPlus from '../changeString';
import { workFromSearchObjects } from '../workFromObjectAJAX';

export default async function getBooksBySearch(
  { query, title, author, subject, place, person, language, publisher },
  page
) {
  try {
    const url = new URL('https://openlibrary.org/search.json');
    query && url.searchParams.set('q', stringWithSpaceToStringWithPlus(query));
    title && url.searchParams.set('title', stringWithSpaceToStringWithPlus(title));
    author &&
      url.searchParams.set('author', stringWithSpaceToStringWithPlus(author));
    subject &&
      url.searchParams.set('subject', stringWithSpaceToStringWithPlus(subject));
    place && url.searchParams.set('place', stringWithSpaceToStringWithPlus(place));
    person &&
      url.searchParams.set('person', stringWithSpaceToStringWithPlus(person));
    language &&
      url.searchParams.set('language', stringWithSpaceToStringWithPlus(language));
    publisher &&
      url.searchParams.set('publisher', stringWithSpaceToStringWithPlus(publisher));
    url.searchParams.set('page', page);

    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) throw new Error(response);
    const works = await response.json();

    const maxPage = Math.ceil((works.num_found || works.numFound) / 100);

    const arrayWorks = works.docs.map((item) => {
      return workFromSearchObjects(item);
    });

    return { arrayWorks, maxPage };
  } catch (e) {
    throw new Error(e);
  }
}
