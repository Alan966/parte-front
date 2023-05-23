import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../Redux/features/articles/ListArtilcesSlice';
import CardArticles from '../Moleculas/CardArticles';
const ListArticles = () => {

    const dispatch = useDispatch();
    const success = useSelector(state => state.listArticles.success);
    const message = useSelector(state => state.listArticles.message);
    const articles = useSelector(state => state.listArticles.artilces);
    useEffect(() => {
        dispatch(fetchArticles())
    }, [])
    return(
        <div className='main_contend_articles'>
            {
                success === false ?
                <h2>{message}</h2>
                :
                <>
                <h2>Articulos</h2>
                <section className="main_promotions">
                    {
                        articles.map(article => {
                            return(
                                <CardArticles
                                key={article.id_article}
                                article={article}
                                />
                            )
                        })
                    }
                </section>
                </>
            }
        </div>
    )
}

export default ListArticles;