import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import RestaurantHeader from '../RestaurantHeader';
import RestaurantBanner from '../RestaurantBanner';
import MenuItem from '../MenuItem';
import Footer from '../Footer';

import './Restaurant.css';

const Restaurant = () => {
  const [data, setData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const restaurants = await new Promise(resolve => resolve(require('../api')));
      setData(restaurants.find(item => item.id === parseInt(id, 10)))
    }

    return () => getData();
  }, [id]);

  if (!data) return <h2>Loading...</h2>

  return (
    <>
      <div className='Restaurant'>
        <RestaurantHeader logo={data.restaurantLogo} />
        <RestaurantBanner banner={data.restaurantBanner} />

        {data.categories.map(category => (
          <Accordion key={category.name} square disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              id={`category-${category.name}`}
            >
              <Typography>{category.name}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: '#f2f2f2' }}>
              {category.items.map(item => (
                <Grid key={item.name} container spacing={2} sx={{ margin: '0.5rem 0' }}>
                  <Grid xs={12}>
                    <MenuItem title={item.name} description={item.description} image={item.image} />
                  </Grid>
                </Grid>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Restaurant;
