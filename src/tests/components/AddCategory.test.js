import React from "react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe cambiar la caja de texto", () => {
    const input = wrapper.find("input");

    const value = "Hola Mundo";

    input.simulate("change", { target: { value } });
  });

  test("No debe de postear la info con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola Mundo";

    const input = wrapper.find("input");
    // 1. simular el inputChange
    input.simulate("change", { target: { value } });

    // 2. simular el submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // 3. se debe de haber llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );


    // 4. el valor del input debe quedar vacio

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
