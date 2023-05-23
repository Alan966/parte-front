import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPromotions } from "../Redux/features/Promotions/promotionsSlice";
import Promotions from "../Moleculas/Promotions";

const Home = () => {

    const dispatch = useDispatch();
    const success = useSelector(state => state.promotions.success);
    const promotions = useSelector(state => state.promotions.promotions);

    useEffect(() => {
        const fetch = () => {
            dispatch(fetchPromotions());
        }
        fetch();
    }, [])

    return (
        <section className="main_promotions">
            {
                success === false ?
                <h2>Loading ...</h2>
                :
                promotions.map(promotion => (
                    <Promotions
                    key={promotion.id_promotion}
                    id_promotion={promotion.id_promotion}
                    title={promotion.title}
                    description={promotion.description}
                    />
                ))
            }
        </section>
    );
}

export default Home;