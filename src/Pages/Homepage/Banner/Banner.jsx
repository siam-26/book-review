import './Banner.css';
import bannerImg from '../../../assets/file.png';

const Banner = () => {
    return (
        <div className='banner-parent'>
            <div className='banner-container'>
                <div className='title-div'>
                    <h1 className='title'>Books to freshen up your bookshelf</h1>
                    <button style={{ backgroundColor: "#23BE0A" }} className="banner-button">View The List</button>
                </div>

                <div className='img-div'>
                    <img className='banner-image' src={bannerImg} alt="" />
                </div>
            </div>
         </div>
    )
}

export default Banner