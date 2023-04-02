import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledTabs as Tabs } from './CategoriesTabs.styled';
import { StyledTab as Tab } from './CategoriesTabs.styled';
import { DishCardContainer } from './CategoriesTabs.styled';
import { Box } from '@mui/material';

import DishCard from '../DishCard/DishCard';

import { Recipes } from '../../RecipesData';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`categories-tabpanel-${index}`}
      aria-labelledby={`categories-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            py: '50px',
            display: 'flex',
            flexWrap: 'wrap',
            rowGap: '100px',
            columnGap: '14px',
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `categories-tab-${index}`,
    'aria-controls': `categories-tabpanel-${index}`,
  };
}

export default function CategoriesTabs(props) {
  const { tabsTitles, idCategory } = props;
  const [value, setValue] = React.useState(idCategory);

  const handleChange = (event, tabId) => {
    setValue(tabId);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="categories"
          variant="scrollable"
          allowScrollButtonsMobile
          TabIndicatorProps={{
            sx: {
              backgroundColor: '#8baa36',
            },
          }}
          sx={{
            '& .Mui-selected': { color: '#8baa36 !important ' },
          }}
        >
          {tabsTitles.map((title, index) => {
            return <Tab key={index} label={title} {...a11yProps({ index })} />;
          })}
        </Tabs>
      </Box>
      <TabPanel value={value} index={value}>
        {Recipes.map(recipe => (
          <DishCardContainer>
            <DishCard recipe={recipe} />
          </DishCardContainer>
        ))}
      </TabPanel>
    </Box>
  );
}
