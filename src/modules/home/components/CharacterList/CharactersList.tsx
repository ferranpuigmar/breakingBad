import LoadingBadge from 'modules/shared/components/LoadingBadge/LoadingBadge';
import Wrapper from 'modules/shared/components/Wrapper/Wrapper';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from 'store/features/charactersSlice';
import { RootState } from 'store/rootReducer';
import CharacterCard from '../CharacterCard/CharacterCard';
import NotFound from 'modules/shared/components/NotFound/NotFound';

import styles from './CharacterList.module.scss';

const CharactersList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const characters = useSelector((state: RootState) => state.characters);

  const loadCharactersList = async () => {
    dispatch(getCharacters({}));
  };

  useEffect(() => {
    loadCharactersList();
  }, []);

  if (characters.loading) {
    return <LoadingBadge />;
  }

  if (characters.error) {
    return <NotFound message={'not_found_characters'} />;
  }

  return (
    <Wrapper>
      <h1 className={styles.title}>{t('casting_title')}</h1>
      <div className={styles.characterList}>
        {characters.list.map((character) => (
          <CharacterCard key={character.char_id} {...character} />
        ))}
      </div>
    </Wrapper>
  );
};

export default CharactersList;
