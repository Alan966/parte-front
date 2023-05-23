import { Link } from "react-router-dom";

const CardArticles = ({article}) => {
    return(
        <Link
        to={`/8/${article.id_promotion}`}
        >
            <div
            key={article.id_article}
            className="content_promotion content_promotion_article_card"
            >
                <div className="content_img">
                    {
                    article.title && article.title.includes('video') ?
                        <video
                        className="video_promotion"
                        autoPlay
                        muted
                        loop
                        controls="controls"
                        src={`https://parte-backend-ecommerce.onrender.com/articles/id_article/img_one/${article.id_article}`}
                        ></video>
                            :
                        <img
                        className="image_promotion"
                        src={`https://parte-backend-ecommerce.onrender.com/articles/id_article/img_one/${article.id_article}`}
                        alt="imagen del articulo" />
                    }
                </div>
                <h2
                className="title_promotion title_article">
                {article.title_two}
                </h2>
            </div>
        </Link>
    )
}

export default CardArticles;