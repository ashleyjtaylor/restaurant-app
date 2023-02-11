import './RestaurantBanner.css';

const RestaurantBanner = ({ banner }) => {
  return (
    <div className='Restaurant-banner' style={{ background: `#00555a url("${banner}") no-repeat 50%`, backgroundSize: 'cover' }}>
        <div className='Restaurant-banner-content'>
          <h2>Menu</h2>
        </div>
      </div>
  )
}

export default RestaurantBanner;
