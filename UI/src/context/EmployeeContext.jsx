import { createContext, useState } from "react";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState([]);

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

  return (
    <EmployeeContext.Provider value={{ addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
