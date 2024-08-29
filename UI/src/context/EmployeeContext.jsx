import { createContext, useState } from "react";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employee, setEmployee] = useState([]);

  const addEmployee = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/employee/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Erro ao adicionar funcionário:", error);
    }
  };
  const findAllEmployee = async () => {
    try {
      const response = await fetch("http://localhost:3000/employee/");
      const result = await response.json();
      setEmployee(result);
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error);
    }
  };

  const addSale = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/sales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      return result;
    } catch (error) {
      console.error("Erro ao adicionar venda:", error);
      throw error;
    }
  };

  return (
    <EmployeeContext.Provider
      value={{ addEmployee, findAllEmployee, employee, addSale }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
