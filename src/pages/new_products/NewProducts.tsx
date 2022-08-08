import './newproducts.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useEffect, useState, ChangeEvent } from 'react';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db, storage } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

const NewProducts = () => {
    const [file, setFile] = useState<File>();
    const [img, setImg] = useState({});
    const [per, setPerc] = useState<null | number>(null);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    console.log(file);

    useEffect(() => {
        const uploadFile = () => {
            const name = file && new Date().getTime() + file.name;

            console.log(name);
            const storageRef = file && ref(storage, file.name);
            const uploadTask = storageRef && file && uploadBytesResumable(storageRef, file);

            uploadTask &&
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        setPerc(progress);
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                            default:
                                break;
                        }
                    },
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            setImg((prev) => ({ ...prev, img: downloadURL }));
                        });
                    }
                );
        };
        file && uploadFile();
    }, [file]);
    type FormValues = {
        title: string;
        file: string;
        description: string;
        category: string;
        price: string;
        email: string;
        total: string;
    };

    const handleAdd: SubmitHandler<FormValues> = async (data) => {
        let dataNew = { ...data, ...img };
        console.log(dataNew);
        console.log(img);

        try {
            await addDoc(collection(db, 'products'), {
                ...dataNew,
                timeStamp: serverTimestamp(),
            });
            navigate(-1);
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Add New Products</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit(handleAdd)}>
                            <div className="formInput-wrap">
                                <div className="formInput">
                                    <label htmlFor="file">
                                        Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                    </label>
                                    <input
                                        id="file"
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                            setFile(e.target.files![0])
                                        }
                                        // {...register('file', {
                                        //     required: 'Vui lòng chọn ảnh sản phẩm',
                                        // })}
                                    />
                                    {/* {errors.file && (
                                        <p className="messages">{errors.file.message}</p>
                                    )} */}
                                </div>
                                <div className="formInput">
                                    <label>Product's name</label>
                                    <input
                                        id="title"
                                        type="text"
                                        placeholder="Apple Macbook Pro"
                                        {...register('title', {
                                            required: 'Vui lòng nhập tên sản phẩm',
                                        })}
                                    />
                                    {errors.title && (
                                        <p className="messages">{errors.title.message}</p>
                                    )}
                                </div>

                                <div className="formInput">
                                    <label>Description</label>
                                    <input
                                        id="description"
                                        type="text"
                                        placeholder="Description"
                                        {...register('description', {
                                            required: 'Vui lòng nhập thông tin chi tiết sản phâm',
                                        })}
                                    />
                                    {errors.description && (
                                        <p className="messages">{errors.description.message}</p>
                                    )}
                                </div>

                                <div className="formInput">
                                    <label>Category</label>
                                    <select
                                        id="category"
                                        {...register('category', {
                                            required: 'Vui lòng chọn loại',
                                        })}
                                    >
                                        <option value="">None</option>
                                        <option value="PC">PC</option>
                                        <option value="Điện thoại">Điện thoại</option>
                                        <option value="Laptop">Laptop</option>
                                        <option value="Chuột">Chuột</option>
                                    </select>
                                    {errors.category && (
                                        <p className="messages">{errors.category.message}</p>
                                    )}
                                </div>
                                <div className="formInput">
                                    <label>Price</label>
                                    <input
                                        id="price"
                                        type="text"
                                        placeholder="1000000VND"
                                        {...register('price', {
                                            required: 'Vui lòng nhập giá',
                                            pattern: {
                                                value: /\d+/,
                                                message: 'Vui lòng nhập giá',
                                            },
                                        })}
                                    />
                                    {errors.price && (
                                        <p className="messages">{errors.price.message}</p>
                                    )}
                                </div>
                                <div className="formInput">
                                    <label>Total In Store</label>
                                    <input
                                        id="total"
                                        type="text"
                                        placeholder="180"
                                        {...register('total', {
                                            required: 'Vui lòng nhập tổng số lượng',
                                            pattern: {
                                                value: /\d+/,
                                                message: 'Vui lòng nhập tổng số lượng',
                                            },
                                        })}
                                    />
                                    {errors.total && (
                                        <p className="messages">{errors.total.message}</p>
                                    )}
                                </div>
                            </div>
                            {error && <p className="messageSubmit">Đã có sản phẩm trên hệ thống</p>}
                            <button disabled={per !== null && per < 100} type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProducts;
