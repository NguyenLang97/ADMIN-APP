import './datatableproducts.scss';
import { DataGrid } from '@mui/x-data-grid';
import { productsColumns } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const DatatableProducts = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    // const fetchData = async () => {
    //     let list = [];
    //     try {
    //         const querySnapshot = await getDocs(collection(db, 'users'));
    //         querySnapshot.forEach((doc) => {
    //             list.push({ id: doc.id, ...doc.data() });
    //         });
    //         setData(list);
    //         console.log(list);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    // fetchData();

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, 'products'),
      (snapShot) => {
        const list: any = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id: any) => {
    try {
      await deleteDoc(doc(db, 'products', id));
      setData(data.filter((item: any) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params: any) => {
        return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: 'none' }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
                            Delete
                        </div>
                    </div>
        );
      }
    }
  ];
  return (
        <div className="datatable">
            <div className="datatableTitle">
                Products
                <Link to="/products/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={productsColumns.concat(actionColumn)}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
  );
};

export default DatatableProducts;
