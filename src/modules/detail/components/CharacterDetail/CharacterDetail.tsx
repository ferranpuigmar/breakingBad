import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'store/rootReducer';
import { CharacterDetailDTO } from 'modules/shared/types/CharacterDetailDTO';
import getCharacterByIdService from 'services/getCharacterByIdService';
import getDeathCountByNameService from 'services/getDeathCountByNameService';
import getRandomQuoteByAuthorService from 'services/getRandomQuoteByAuthorService';
import { Col, Row } from 'react-grid-system';
import ImageLoader from 'modules/shared/components/ImageLoader/ImageLoader';
import styles from './CharacterDetail.module.scss';
import HeaderDetails from '../HeaderDetails/HeaderDetails';
import Wrapper from 'modules/shared/components/Wrapper/Wrapper';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterDetailDTO>();
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const characterDetails = useSelector((state: RootState) =>
    state.characters.list.find((character) => character.char_id === parseInt(id as string))
  );

  const loadDetails = async () => {
    let characterBasiInfo = characterDetails ?? null;

    try {
      if (!characterDetails) {
        characterBasiInfo = await getCharacterByIdService(id as string);
      }

      if (!characterBasiInfo) {
        setError(true);
        return null;
      }

      setIsLoading(true);
      const [deathCounts, quote] = await Promise.all([
        await getDeathCountByNameService(characterBasiInfo?.name),
        await getRandomQuoteByAuthorService(characterBasiInfo?.name)
      ]);

      setCharacter({
        ...characterBasiInfo,
        deads: deathCounts?.deathCount ?? null,
        quote: quote?.quote ?? null
      });
      setIsLoading(false);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    if (!character) loadDetails();
  }, [characterDetails]);

  return (
    <Wrapper>
      <Row>
        <Col>
          <ImageLoader url={character?.img} title={character?.name} alt={character?.name} />
        </Col>
        <Col>
          <HeaderDetails
            name={character?.name}
            nickname={character?.nickname}
            isLoading={isLoading}
            deads={character?.deads}
          />
          <div className={styles.characterDetail__fictionInfo}></div>
          <div className={styles.characterDetail__quote}>{character?.quote}</div>
          <div className={styles.characterDetail__realInfo}></div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default CharacterDetail;
