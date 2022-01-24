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
import CharacterHeaderDetails from '../CharacterHeaderDetails/CharacterHeaderDetails';
import LabelInfo from '../LabelInfo/LabelInfo';
import { useTranslation } from 'react-i18next';
import styles from './CharacterDetail.module.scss';
import getBirthdate from 'modules/shared/utils/getBirthdate';
import Quote from '../Quote/Quote';
import { ErrorResponse, ErrorState, HttpStatus } from 'modules/shared/utils/getError';
import { CharacterFromApi } from 'services/getCharactersService';
import NotFound from 'modules/shared/components/NotFound/NotFound';
import Wrapper from 'modules/shared/components/Wrapper/Wrapper';

const CharacterDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [character, setCharacter] = useState<CharacterDetailDTO>();
  const [error, setError] = useState<ErrorState>({
    status: null,
    message: '',
    isError: false
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const occupationValue = character?.occupation.join(', ');
  const appearancesValue = character?.appearance.join(', ');
  const birthDateValue = getBirthdate(character?.birthday);

  const characterDetails = useSelector((state: RootState) =>
    state.characters.list.find((character) => character.char_id === parseInt(id as string))
  );

  const loadDetails = async () => {
    try {
      const newCharacterResponse =
        characterDetails ?? (await getCharacterByIdService(id as string));

      if ((newCharacterResponse as ErrorResponse).type === 'error') {
        setError({
          status: (newCharacterResponse as ErrorResponse).status,
          message: t((newCharacterResponse as ErrorResponse).message ?? ''),
          isError: true
        });
        return null;
      }

      const characterBasicInfo = newCharacterResponse as CharacterFromApi;

      setIsLoading(true);
      const [deathCounts, quote] = await Promise.all([
        await getDeathCountByNameService(characterBasicInfo?.name),
        await getRandomQuoteByAuthorService(characterBasicInfo?.name)
      ]);

      setCharacter({
        ...characterBasicInfo,
        deads: deathCounts?.deathCount ?? null,
        quote: quote?.quote ?? null
      });
      setIsLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError({
        status: (err as ErrorResponse).status,
        message: t((err as ErrorResponse).message ?? ''),
        isError: true
      });
    }
  };

  useEffect(() => {
    if (!character) loadDetails();
  }, [characterDetails]);

  const renderErrorView = (error: ErrorState): React.ReactElement => {
    switch (error.status) {
      case HttpStatus.NOT_FOUND:
        return <NotFound message={error.message as string} />;
      default:
        return <></>;
    }
  };

  if (error.isError) {
    return renderErrorView(error);
  }

  return (
    <Wrapper>
      <Row>
        <Col sm={12} lg={6} xl={4} className={styles.characterDetail__image}>
          <ImageLoader url={character?.img} title={character?.name} alt={character?.name} />
        </Col>
        <Col>
          <CharacterHeaderDetails
            name={character?.name}
            nickname={character?.nickname}
            isLoading={isLoading}
            deaths={character?.deads}
            className={styles.characterDetail__header}
          />
          <div className={styles.characterDetail__occupation}>
            <LabelInfo isLoading={isLoading} title={t('occupation')} text={occupationValue} />
          </div>
          <div className={styles.characterDetail__fictionInfo}>
            <LabelInfo isLoading={isLoading} title={t('birthday')} text={birthDateValue} />
            <LabelInfo isLoading={isLoading} title={t('status')} text={character?.status} />
          </div>
          <div className={styles.characterDetail__realInfo}>
            <LabelInfo isLoading={isLoading} title={t('seasons')} text={appearancesValue} />
            <LabelInfo
              isLoading={isLoading}
              title={t('interpretedby')}
              text={character?.portrayed}
            />
          </div>
          <div className={styles.characterDetail__quote}>
            <Quote text={character?.quote} isLoading={isLoading} />
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default CharacterDetail;
