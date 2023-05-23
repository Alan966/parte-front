import Mision from "../Organisms/Nosotros/Mision";
import NosotrosComponent from "../Organisms/Nosotros/Nosotros";
import Vision from "../Organisms/Nosotros/Vision";
import Valores from "../Organisms/Nosotros/Valores";

const Nosotros = () => {
    return (
       <main className="page">
        <NosotrosComponent />
        <Mision />
        <Vision />
        <Valores />
       </main>
    );
}

export default Nosotros;