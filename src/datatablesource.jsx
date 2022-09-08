import defaultAvt from '../src/assets/images/default-avt.png'

export const orderColumns = [
    // {
    //     field: 'email',
    //     headerName: 'Email',
    //     width: 230,
    // },
    {
        field: 'cartItems',
        headerName: 'Products Order',
        width: 300,
        renderCell: (params) => (
            <div className="cellWithImg">
                {params.row.cartItems.map((item, index) => (
                    <div key={index} className="">
                        {item.title}
                    </div>
                ))}
                ,
            </div>
        ),
        // if (params.row.cartItems.length) {
        //     params.row.cartItems.map((item, index) => (
        //     <div key={index} className="cellWithImg">
        //         <img className="cellImg" src={item[index].img[index]} alt="" />
        // <div key={index}>{item[index].title}</div>
        //     ))
        // } else {
        //     return <>{console.log({ params })}</>
        // }
    },
    { field: 'name', headerName: 'Username', width: 120 },
    { field: 'phone', headerName: 'Phone', width: 120 },
    // {
    //     field: 'totalAmountOrder',
    //     headerName: 'totalAmountOrder',
    //     width: 100,
    // },
    // {
    //     field: 'totalQuantity',
    //     headerName: 'totalQuantity',
    //     width: 100,
    // },
    {
        field: 'address',
        headerName: 'Address',
        width: 200,
    },
]
export const userColumns = [
    {
        field: 'user',
        headerName: 'User',
        width: 160,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img || defaultAvt} alt="" />
                    {params.row.username}
                </div>
            )
        },
    },
    { field: 'phone', headerName: 'Phone', width: 120 },
    {
        field: 'email',
        headerName: 'Email',
        width: 230,
    },

    {
        field: 'address',
        headerName: 'Address',
        width: 200,
    },
    // {
    //     field: 'yearofbirth',
    //     headerName: 'Year of Birth',
    //     width: 100,
    // },
]
export const productsColumns = [
    {
        field: 'products',
        headerName: 'Products',
        width: 300,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img[0].img} alt="avatar" />
                    {params.row.title}
                </div>
            )
        },
    },

    {
        field: 'description',
        headerName: 'Description',
        width: 200,
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 100,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 100,
    },
    {
        field: 'total',
        headerName: 'Total',
        width: 100,
    },
    // {
    //     field: 'status',
    //     headerName: 'Status',
    //     width: 160,
    //     renderCell: (params) => {
    //         return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
    //     },
    // },
]

// temporary data
// export const userRows = [
//     {
//         id: 1,
//         username: 'Snow',
//         img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         status: 'active',
//         email: '1snow@gmail.com',
//         age: 35,
//     },
//     {
//         id: 2,
//         username: 'Jamie Lannister',
//         img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         email: '2snow@gmail.com',
//         status: 'passive',
//         age: 42,
//     },
//     {
//         id: 3,
//         username: 'Lannister',
//         img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         email: '3snow@gmail.com',
//         status: 'pending',
//         age: 45,
//     },
//     {
//         id: 4,
//         username: 'Stark',
//         img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         email: '4snow@gmail.com',
//         status: 'active',
//         age: 16,
//     },
//     {
//         id: 5,
//         username: 'Targaryen',
//         img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         email: '5snow@gmail.com',
//         status: 'passive',
//         age: 22,
//     },
//     {
//         id: 6,
//         username: 'Melisandre',
//         img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         email: '6snow@gmail.com',
//         status: 'active',
//         age: 15,
//     },
//     {
//         id: 7,
//         username: 'Clifford',
//         img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         email: '7snow@gmail.com',
//         status: 'passive',
//         age: 44,
//     },
//     {
//         id: 8,
//         username: 'Frances',
//         img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         email: '8snow@gmail.com',
//         status: 'active',
//         age: 36,
//     },
//     {
//         id: 9,
//         username: 'Roxie',
//         img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         email: 'snow@gmail.com',
//         status: 'pending',
//         age: 65,
//     },
//     {
//         id: 10,
//         username: 'Roxie',
//         img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         email: 'snow@gmail.com',
//         status: 'active',
//         age: 65,
//     },
// ]
