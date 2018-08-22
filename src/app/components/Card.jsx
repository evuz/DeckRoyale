import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  height: 100px;
`;

const BASE_PATH = 'https://royaleapi.github.io/cr-api-assets/cards-png8/';

export const Card = ({ card }) => <Image alt={card.key} src={`${BASE_PATH}${card.key}.png`} />;

Card.propTypes = {
  card: PropTypes.any, // eslint-disable-line
};
