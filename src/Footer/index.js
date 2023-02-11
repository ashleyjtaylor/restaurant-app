import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <Typography fontSize='0.75rem' color='#777' component='h5'>
        <Link to='/'>Restaruant App</Link> | &copy; {new Date().getFullYear()}
      </Typography>
    </div>
  );
}

export default Footer;
