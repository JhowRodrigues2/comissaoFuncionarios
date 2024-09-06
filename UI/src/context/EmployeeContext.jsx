import { createContext, useState } from "react";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employee, setEmployee] = useState([]);
  const [employeeSelected, setEmployeeSelected] = useState([]);
  const [saleEmployeeSelected, setSaleEmployeeSelected] = useState([]);

  const paymentMethods = {
    1: "Dinheiro",
    2: "Pix",
    3: "Cartão de Débito",
    4: "Cartão de Crédito",
  };
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
  const getEmployeeById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/employee/${id}`);
      const result = await response.json();
      setEmployeeSelected(result);
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error);
    }
  };
  const getSaleById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/sales/${id}`);
      const result = await response.json();
      setSaleEmployeeSelected(result);
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error);
    }
  };
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <EmployeeContext.Provider
      value={{
        addEmployee,
        findAllEmployee,
        employee,
        addSale,
        getEmployeeById,
        employeeSelected,
        getSaleById,
        saleEmployeeSelected,
        formatCurrency,
        paymentMethods,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
