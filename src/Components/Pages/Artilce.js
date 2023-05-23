import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../Redux/features/articles/ArticlesSlice";
import ArticleItem from "../Organisms/Article";


const Article = () => {

    const { id_promotion } = useParams();

    const dispatch = useDispatch();
    const success = useSelector(state => state.article.success);
    const message = useSelector(state => state.article.message);
    const article =  useSelector(state => state.article.article);

    useEffect(() => {
        const getArticleIdPromotion = () => {
            dispatch(getArticle(id_promotion));
        }
        getArticleIdPromotion();
    }, [id_promotion])

    return(
        <section className="section_artilces section_article">
            {
                success === false ?
                <h2>{message}</h2>
                :
                <ArticleItem
                article={article}
                />
            }
        </section>
    )
}

export default Article;