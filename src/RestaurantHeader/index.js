import './RestaurantHeader.css';

const RestaurantHeader = ({ logo }) => {
  return (
    <div className='Restaurant-header'>
      <img src={logo} className='Restaurant-logo' alt='Restaurant' />
    </div>
  )
}

export default RestaurantHeader;
