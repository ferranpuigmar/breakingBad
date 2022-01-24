import LoadingBadge from 'modules/shared/components/LoadingBadge/LoadingBadge';
import Wrapper from 'modules/shared/components/Wrapper/Wrapper';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from 'store/features/charactersSlice';
import { RootState } from 'store/rootReducer';
import CharacterCard from '../CharacterCard/CharacterCard';

import styles from './CharacterList.module.scss';

const CharactersList = () => {
  const dispatch = useDispatch();
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

  return (
    <Wrapper>
      <div className={styles.characterList}>
        {characters.list.map((character) => (
          <CharacterCard key={character.char_id} {...character} />
        ))}
      </div>
    </Wrapper>
  );
};

export default CharactersList;
