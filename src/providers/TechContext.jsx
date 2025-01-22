import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const techListAPI = user && user.techs;

  const [isModalVisible, setIsModalVisible] = useState(null);
  const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(null);
  const [selectedTech, setSelectedTech] = useState({});
  const [techList, setTechList] = useState();

  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    setTechList(techListAPI);
  }, [techListAPI]);

  async function addTech(formData, setLoading) {
    try {
      const response = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLoading(true);
      toast.success(response.statusText);

      setTechList([...techList, response.data]);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  async function removeTech(id, setLoading) {
    try {
      const response = await api.delete("/users/techs/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLoading(true);
      toast.success(response.statusText);

      const filteredTechList = techList.filter((tech) => tech.id !== id);
      setTechList(filteredTechList);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateTech(id, formData, setLoading) {
    try {
      const response = await api.put("/users/techs/" + id, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLoading(true);
      toast.success(response.statusText);
      setIsModalUpdateVisible(false);

      const newStatus = techList.map((tech) => {
        if (tech.id === id) {
          return { ...tech, status: formData.status };
        } else {
          return { ...tech };
        }
      });

      setTechList(newStatus);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <TechContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
        addTech,
        removeTech,
        techList,
        isModalUpdateVisible,
        setIsModalUpdateVisible,
        updateTech,
        selectedTech,
        setSelectedTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
