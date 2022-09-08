import './category.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import _ from 'lodash'
import {
    collection,
    // getDocs,
    onSnapshot,
    deleteDoc,
    doc,
} from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import { Button, Grid, Item } from '@mui/material'

function Category() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(true)
    console.log({ filter })

    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, 'products'),
            (snapShot) => {
                let list = []
                snapShot.docs.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() })
                })
                const cloneList = _.clone(list)
                setFilter(cloneList)
                setData(list)
                setLoading(false)
            },
            (error) => {
                console.log(error)
            }
        )
        return () => {
            unsub()
        }
    }, [])
    console.log({ filter })

    const filterProduct = (category) => {
        const updateProduct = data.filter((item) => item.category === category)
        setFilter(updateProduct)
    }

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'products', id))
            setData(data.filter((item) => item.id !== id))
        } catch (err) {
            console.log(err)
        }
    }

    const handleEdit = (id) => {
        navigate('/products/edit', { state: id })
    }

    return (
        <div className="category">
            <div>
                <Button variant="outlined" onClick={() => setFilter(data)}>
                    All
                </Button>
                <Button variant="outlined" onClick={() => filterProduct('PC')}>
                    PC
                </Button>
                <Button variant="outlined" onClick={() => filterProduct('Điện thoại')}>
                    Điện thoại
                </Button>
                <Button variant="outlined" onClick={() => filterProduct('Bàn phím')}>
                    Bàn phím
                </Button>
                <Button variant="outlined" onClick={() => filterProduct('Chuột')}>
                    Chuột
                </Button>
                <Button variant="outlined" onClick={() => filterProduct('Tai nghe')}>
                    Tai nghe
                </Button>
                <Button variant="outlined" onClick={() => filterProduct('Laptop')}>
                    Laptop
                </Button>
                <Button variant="outlined" onClick={() => filterProduct('VGA')}>
                    VGA
                </Button>
            </div>
            <Grid container spacing={2} className="m-t-16 ">
                {filter.map((product) => {
                    return (
                        <Grid item xs={2} md={2} key={product.id} style={{ gap: 5 }} className="productItem d-flex flex-column m-1">
                            <div className="d-flex justify-content-center">
                                <img style={{ width: 80, height: 80 }} src={product.img[0].img} alt="" />
                                {/* <img style={{ width: 50, height: 50 }} src={product.img[1].img} alt="" /> */}
                            </div>
                            <h5 className="text-overflow-2 h-48"> {product.title}</h5>
                            <p>{product.category}</p>
                            <p>Giá: {product.price}</p>
                            <p className="text-overflow-3 w-100">Mô tả: {product.description}</p>
                            <p>Số lượng: {product.total}</p>
                            {/* <Link to={`/product/${product.id}`}>Buy Now</Link> */}
                            <div className="d-flex justify-content-between">
                                <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                                    <Button className="viewButton">View</Button>
                                </Link>

                                <Button className="viewButton" onClick={() => handleEdit(product.id)}>
                                    Edit
                                </Button>

                                <Button color="error" onClick={() => handleDelete(product.id)}>
                                    Delete
                                </Button>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Category
