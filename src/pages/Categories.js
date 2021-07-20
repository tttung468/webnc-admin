/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet';
// eslint-disable-next-line object-curly-newline
import { Box, Container, Grid } from '@material-ui/core';
import CategoriesListResults from '../components/category/CategoriesListResults';
import SubcategoriesListResults from '../components/category/SubcategoriesListResults';

const Categories = () => (
  <>
    <Helmet>
      <title>Categories | Urskyll Admin</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <CategoriesListResults />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <SubcategoriesListResults />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  </>
);

export default Categories;
