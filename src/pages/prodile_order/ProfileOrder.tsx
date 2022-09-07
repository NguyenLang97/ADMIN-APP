import './profile_order.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DatatableProducts from '../../components/datatable_products/DatatableProducts'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { useEffect, useState } from 'react'

interface CartItemsState {
    id: string
    title: string
    price: number
    quantity: number
    totalPrice: number
    img: [{ img: string }]
    totalAmountOrder: number
    totalStock: number
}

interface DataOrderState {
    id: string
    address: string
    cartItems: any[]
    email: string
    name: string
    phone: string
    status: string
    totalPrice: number
    timeStamp: any
    totalAmountOrder: number
    totalStock: number
    userId: string
}

const ListProducts = () => {
    const { orderId } = useParams()
    const [data, setData] = useState<DataOrderState>()

    const docRef = doc(db, 'order', orderId as string)

    useEffect(() => {
        const docSnap = async () => {
            await getDoc(docRef).then((docSnap) => {
                if (docSnap.exists()) {
                    console.log('Document data:', docSnap.data())
                    setData({ ...docSnap.data() } as any)
                } else {
                    console.log('No such document!')
                }
            })
        }
        docSnap()
    }, [])

    function setDate(unixTime: number) {
        const date = new Date(unixTime * 1000)
        // console.log(date.toLocaleDateString('en-US'))
        return date.toLocaleDateString('en-US')
    }
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Order
               
                <Link to="/users/new" className="link">
                    Add New
                </Link>
            </div>
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                    <div className="table-responsive ">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Ngày mua</th>
                                    <th scope="col">Sản phẩm</th>
                                    <th scope="col">Người mua</th>
                                    <th scope="col">Trạng thái đơn hàng</th>
                                    <th scope="col">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && (
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{setDate(data.timeStamp.seconds)}</td>
                                        <td className="">
                                            {data.cartItems.map((item: CartItemsState, index: number) => (
                                                <div key={index} className="d-flex flex-colum ">
                                                    <img src={item.img[0].img} className="order__item-img" />
                                                    <p>{item.title}</p>
                                                </div>
                                            ))}
                                        </td>
                                        {/* <td>
                                            {item.cartItems.map((item: CartItemsState, index: number) => (
                                                <div key={index} className="d-flex flex-colum justify-content-between">
                                                    <p>{item.quantity}</p>
                                                </div>
                                            ))}
                                        </td> */}
                                        <td>
                                            <p>{data.name}</p>
                                        </td>

                                        <td>{data.status}</td>
                                        <td className="d-flex ">
                                            <Link to={`/order/${data.id}`} style={{ textDecoration: 'none' }}>
                                                <Button variant="contained" color="success">
                                                    View
                                                </Button>
                                            </Link>

                                            <Button variant="outlined" color="error" className="m-l-8">
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListProducts
