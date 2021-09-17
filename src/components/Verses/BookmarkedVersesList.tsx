import React from 'react';

import { shallowEqual, useSelector } from 'react-redux';

import styles from './BookmarkedVersesList.module.scss';

import VerseLink from 'src/components/Verse/VerseLink';
import { selectBookmarks } from 'src/redux/slices/QuranReader/bookmarks';

const BookmarkedVersesList: React.FC = () => {
  const bookmarkedVerses = useSelector(selectBookmarks, shallowEqual);
  const verseKeys = Object.keys(bookmarkedVerses);
  return (
    <>
      {verseKeys.length > 0 && (
        <div className={styles.bookmarksContainer}>
          <p className={styles.bookmarksHeader}>Your latest bookmarks</p>
          <div className={styles.verseLinksContainer}>
            {verseKeys.slice(0, 10).map((verseKey) => (
              <VerseLink verseKey={verseKey} key={verseKey} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BookmarkedVersesList;
