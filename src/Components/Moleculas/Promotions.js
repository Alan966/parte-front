import { Link } from 'react-router-dom';
const Promotions = ({id_promotion, title, description}) => {
    return(
        <Link
        to={`/8/${id_promotion}`}
        >
        <div
        className="content_promotion content_promotion_article"
        key={id_promotion}>
            <div className="content_img">
                {
                    title && title.includes('video') ?
                    <video
                    className="video_promotion"
                    autoPlay
                    muted
                    loop
                    controls="controls"
                    src={`https://parte-backend-ecommerce.onrender.com/promotions/photo/${id_promotion}`}
                    alt={title} />
                    :
                    <img
                    className="image_promotion"
                    src={`https://parte-backend-ecommerce.onrender.com/promotions/photo/${id_promotion}`}
                    alt={title} />
                }
            </div>
            <h2
            className="title_promotion"
            >{
                title && title.includes('video') ?
              ''
              :
              title
            }</h2>
            <p
            className="description_promotion"
            >{description}</p>
        </div>
        </Link>
    )
}

export default Promotions;