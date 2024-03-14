import FormCalculator from '../components/FormCalculator';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h3>Calculadora de tinta</h3>
        <p>Calcule o consumo de tinta para a sua reforma</p>
      </div>

      <FormCalculator />
    </div>
  );
};

export default HomePage;
