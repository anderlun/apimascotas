// components/ListPetsByMunicipality.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListPetsByMunicipality() {
  const [municipiosData, setMunicipiosData] = useState([]);

  useEffect(() => {
    const fetchMunicipiosData = async () => {
      try {
        const response = await axios.get(`${API_URL}/municipios/mascotas`);
        setMunicipiosData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMunicipiosData();
  }, []);

  return (
    <div>
      <h2>Municipios y cantidad de mascotas:</h2>
      <ul>
        {municipiosData.map((municipio, index) => (
          <li key={index}>
            {municipio.municipio}: {municipio.cantidad_mascotas}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPetsByMunicipality;
