import { useEffect, useState } from 'react';
import styles from './FormDimensions.module.scss';

const inputTypes = {
  areas: { id: 'byAreas', label: 'Área' },
  dimensions: { id: 'byDimensions', label: 'Dimensões' },
};

const FormDimensions = () => {
  const types = Object.keys(inputTypes);
  const [inputType, setInputType] = useState(inputTypes['areas']);

  const handleClick = (keyType) => {
    setInputType(inputTypes[keyType]);
  };

  useEffect(() => {
    //clean 'active' classes
    const navItems = document.querySelectorAll(`.navItem`);
    navItems.forEach((item) => item.classList.remove(styles.active));

    const select = document.querySelector(`#${inputType.id}`);
    select.classList.add(styles.active);
  }, [inputType]);

  return (
    <div className={styles.container}>
      <div className="input-group justify-content-end">
        {types.map((type) => (
          <button
            key={inputTypes[type].id}
            className={`navItem ${styles.navtab}`}
            id={inputTypes[type].id}
            onClick={() => handleClick(type)}
          >
            {inputTypes[type].label}
          </button>
        ))}
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormDimensions;
