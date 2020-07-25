import React from 'react';
import styled from 'styled-components';
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import Button from '../Button';

const mediumScreen = `@media (max-width: 830px)`;
const smallScreen = `@media (max-width: 430px)`;

const FilterRow = styled.div`
  padding: 30px 0 20px 0;
  font-size: 24px;
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #dadada;

  ${mediumScreen} {
    flex-direction: column;
  }
`;

const PriceRangeFields = styled.span`
  margin: 0 20px;
  display: flex;

  ${mediumScreen} {
    margin: 10px;
  }

  ${smallScreen} {
    flex-direction: column;
  }
`;

const Filters = ({
  name,
  priceRange,
  setNameFilter,
  setPriceRangeFilter,
  resetAll,
}) => (
  <FilterRow>
    <TextInput label="Search:" value={name} onChange={setNameFilter} />
    <PriceRangeFields>
      Price range:
      <Checkbox
        label="Cheap"
        checked={priceRange.free}
        onChange={setPriceRangeFilter('Cheap')}
      />
      <Checkbox
        label="Medium"
        checked={priceRange.cheap}
        onChange={setPriceRangeFilter('Medium')}
      />
      <Checkbox
        label="Expensive"
        checked={priceRange.expensive}
        onChange={setPriceRangeFilter('Expensive')}
      />
    </PriceRangeFields>
    <Button onClick={resetAll}>Clear</Button>
  </FilterRow>
);

export default Filters;
