import React, { useEffect, forwardRef, useState } from "react";
import MaterialTable from "material-table";

import tableIcons from "../Shared/tableIcon";
import axios from "axios";
import Loading from "../Shared/Loading";
import { useDispatch, useSelector } from "react-redux";
import { saveBeerlist } from "../Modules/redux/saveList";

const Table = () => {
  const dispatch = useDispatch();
  const [beerlist, setBeerlist] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const result = useSelector((store) => store.saveList.list);

  const [columContents, setColumContents] = useState([
    {
      title: "Beer",
      field: "image_url",
      filtering: false,
      render: (rowData) => (
        <img src={rowData.image_url} style={{ width: 60 }} />
      ),
    },
    {
      title: "Name",
      field: "name",
      filtering: false,
      render: (rowData) => (
        <p
          style={{ padding: "0", fontSize: "15px", cursor: "pointer" }}
          onClick={() => {
          }}
        >
          {rowData.name}
        </p>
      ),
    },
    { title: "Description", field: "description", filtering: false },
    {
      title: "Abv",
      field: "abv",
      type: "numeric",
    }
  ]);

  console.log(columContents);
  useEffect(() => {
    const getBeerlist = async () => {
      setIsLoading(true);
      try {
        const response = await axios({
          method: "get",
          url: `https://api.punkapi.com/v2/beers`,
        });
        setBeerlist(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getBeerlist();
  }, [columContents]);

  if (isLoading) {
    return <Loading type="spin" color="black" />;
  }
  return (
    <>
      <MaterialTable
        style={{
          margin: "58px auto 0 auto",
          width: "1200px",
          padding: "0 40px 0 40px",
        }}
        title="BEERLIST"
        icons={tableIcons}
        options={{
          filtering: true,
          pageSize: 25,
          pageSizeOptions: false,
          draggable: "true",
        }}
        onColumnDragged={(from, to) => {
          let tmp = columContents[from];
          columContents[from] = columContents[to];
          columContents[to] = tmp;
          setColumContents(columContents);
          dispatch(saveBeerlist(columContents));
        }}
        columns={result === null ? columContents : result.payload}
        data={beerlist}
      />
    </>
  );
};

export default Table;
