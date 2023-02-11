import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MenuItem = ({ image, title, description }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 180 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom component="h5" color='black' fontWeight='normal'>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MenuItem;