import Wrapper from 'modules/shared/components/Wrapper/Wrapper';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from 'store/features/charactersSlice';
import { RootState } from 'store/rootReducer';
import CharacterCard from '../CharacterCard/CharacterCard';
import styles from './CharacterList.module.scss';

type CharactersList = {
  message?: string;
};

const CharactersList = ({ message }: CharactersList) => {
  const dispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.characters);

  const loadCharactersList = async () => {
    const resultAction = await dispatch(getCharacters({}));
    console.log('resultAction: ', resultAction);
  };

  useEffect(() => {
    loadCharactersList();
  }, []);

  if (characters.loading) {
    return <p>Loading...</p>;
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
