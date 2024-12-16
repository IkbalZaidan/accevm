import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import DataTable from "react-data-table-component";
import '../styles/Style.css';


const ContractSpecification = () => {
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("Forex");
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      name: "Symbol",
      selector: (row) => row.symbol,
      sortable: true,
      grow: 1 // Columns grow proportionally
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
      grow: 1 // This column grows twice as much
    },
    {
      name: "Spread",
      selector: (row) => row.spread,
      sortable: true,
      grow: 1
    },
    {
      name: "Margin",
      selector: (row) => row.margin,
      sortable: true,

      grow: 1
    },
    {
      name: "Short Swap",
      selector: (row) => row.shortSwap, sortable: true,

      grow: 1
    },
    {
      name: "Long Swap",
      selector: (row) => row.longSwap, sortable: true,

      grow: 1
    },
    {
      name: "Contract Size",
      selector: (row) => row.contractSize, sortable: true,

      grow: 1
    },
    {
      name: "Currency",
      selector: (row) => row.currency, sortable: true,

      grow: 1
    },
    {
      name: "Trading Hours",
      selector: (row) => row.tradingHours, sortable: true,

      grow: 1 // Give more space to this column
    },
  ];

  // // Load data (with optional filtering logic)
  // useEffect(() => {
  //   // Filter data based on the selected category
  //   const filteredData = tableData.filter((item) => item.category === filter);
  //   setData(filteredData);
  // }, [filter]);

  useEffect(() => {
    // Fetch data.json from the public folder
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <section className="features-style2-area white-back">
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="bold-title">{t('Unlock Your Trading Potential')}</h2>
            <div className="sub-title">
              <p>{t('Empower your investments with our smart tools: mirror successful traders with AccuConnect, trade on the go with AccuGo,')}</p>
            </div>
          </div>


        </div>
      </section>
      <section className="features-style2-area white-back">
        <div className="row justify-content-center">
          <div className="col-md-10 col-12">
            <div className="contract-table">
              <div className="filter-section">
                <span>Filter by:</span>
                {["Forex", "Metals", "Indices", "Commodities", "Crypto", "Stocks"].map(
                  (category) => (
                    <button
                      key={category}
                      className={`filter-btn ${filter === category ? "active" : ""}`}
                      onClick={() => setFilter(category)}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>
              <DataTable
              className=""
                columns={columns}
                data={data}
                pagination
                // highlightOnHover
                responsive
                customStyles={customStyles}
              />
            </div>

          </div>



        </div>
      </section>

    </div>

  );
};

// Custom styles for table
const customStyles = {
  table: {
    style: {
      backgroundColor: "#0d1117",
      color: "#fff",
    },
  },
  headRow: {
    style: {
      backgroundColor: "#161b22",
      color: "#58a6ff",
    },
  },
  rows: {
    style: {
      backgroundColor: "#0d1117",
      color: "#c9d1d9",
      "&:nth-of-type(even)": {
        backgroundColor: "#161b22",
      },
    },
  },
};

export default ContractSpecification;
