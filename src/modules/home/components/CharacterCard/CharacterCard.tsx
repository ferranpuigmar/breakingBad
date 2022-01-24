import ImageLoader from 'modules/shared/components/ImageLoader/ImageLoader';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CharacterCard.module.scss';

type CharacterCard = {
  char_id: number;
  name: string;
  img: string;
  nickname: string;
};

const CharacterCard = ({ char_id, name, img, nickname }: CharacterCard) => {
  console.log('img: ', img);
  return (
    <Link to={`/character/${char_id}`}>
      <div className={styles.characterCard}>
        <ImageLoader url={img} title={name} alt={name} className={styles.characterCard__image} />
        <div className={styles.characterCard__info}>
          <div className={styles.characterCard__names}>
            <h4 className={styles.characterCard__nickname}>{`"${nickname}"`}</h4>
            <h3 className={styles.characterCard__name}>{name}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
