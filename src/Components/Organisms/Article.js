import backend from "../Templates/backend";
const ArticleItem = ({article}) => {
    return(
        <article key={article.id_article}>
                    <h2>{article.title_two}</h2>
                {
                    article.title && article.title.includes('video') ?
                    (
                        <video
                        autoPlay
                        className="img_article"
                        controls
                        src={`${backend.url_base}/id_article/img_one/${article.id_article}`}></video>
                    )
                    :
                    (
                        <img
                        className="img_article"
                        src={`${backend.url_base}/articles/id_article/img_one/${article.id_article}`}  alt="img article" />
                    )
                }
            <p className="p_article">{article.p_one}</p>
            <p className="p_article">{article.p_two}</p>
                <img className="img_article" src={`${backend.url_base}/articles/id_article/img_two/${article.id_article}`}  alt="img two article" />
            <p className="p_article">{article.p_three}</p>
                <img className="img_article" src={`${backend.url_base}/articles/id_article/img_three/${article.id_article}`} alt="img three article" />
        </article>
    )
}

export default ArticleItem;