import { useEffect, useState } from "react";
import { FaStar, FaRegHeart, FaHeart, FaStarHalfAlt } from 'react-icons/fa';
import DetailsCard from '../Explore/Components/DetailsCard';
import { getUserData, getVendorProducts } from '../../Store/urls';
import useFetch from "../../Components/CustomHooks/useFetch";
import Fetch from "../../Components/CustomHooks/Fetch";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../../Components/Ui-Components/Spinner";

export default function Index() {
    const Navigate = useNavigate()
    const { id } = useParams();
    const { data, loading } = useFetch({
        url: getUserData(`${id}?role=vendor`),
        method: 'GET',
    })
    let url = getVendorProducts(id);
    const [productsData, setProductsData] = useState(null);
    const { data: products } = useFetch({
        url: url,
        method: 'GET',
    })
    const [productsLoading, setProductsLoading] = useState(false);



    const [categoryId, setCategoryId] = useState(0);
    const [vendorData, setVendorData] = useState({});
    useEffect(() => {
        if (data && categoryId) {
            url = getVendorProducts(id, categoryId);
            setProductsLoading(true);
            fetch(url).then(res => res.json()).then(data => {
                setProductsData(data.data.products);
                setProductsLoading(false);
            }).catch(err => {
                console.error(err.message);
            }
            );
        }
    }, [categoryId]);
    useEffect(() => {
        setProductsLoading(prev => !prev);
    }, [data])

    const handleCategoryChange = (id) => {
        setCategoryId(id);
    }

    useEffect(() => {
        if (data && data.status === 'success' && !productsLoading && products) {
            setProductsData(products.data.products);
        }
    }, [products]);

    useEffect(() => {
        if (data && data.status === 'success') {
            setVendorData(data.data.user);
        }
    }, [data]);
    const StarCounter = ({ rating, rating_count }) => {
        let stars = []
        if (!rating_count)
            rating_count = 1;
        if (!rating)
            rating = 0;
        rating /= rating_count;
        for (let i = 0; i < 5; i++) {
            if (rating >= i + 1) {
                stars.push(<FaStar key={i} />)
            } else if (rating > i && rating < i + 1) {
                // if there is a half star
                stars.push(<FaStarHalfAlt key={i} />)
            } else {
                stars.push(<FaStar key={i} style={{ color: 'rgba(255,255,255,0.5)' }} />)
            }
        }
        return (
            <div className='flex items-center font-thin'>
                {stars}
            </div>
        )
    }

    if (loading) return <div className="w-full h-screen center bg-Beige">
        <Spinner />
    </div>

    if (!loading && data && data.status !== 'success') {
        Navigate('/Explore')
        return
    }

    return (
        <div className=" relative flex flex-col lg:grid lg:grid-cols-7 w-full h-fit overflow-hidden  bg-Beige">
            <div className="col-span-2 max-lg:flex-wrap max-lg2:flex-wrap  max-lg:justify-center flex lg:block lg:gap-0  sticky top-0 w-full max-h-screen lg:h-full px-5  rounded-xl lg:shadow-2xl shadow-Beige3 border-black">
                <div className="flex flex-col justify-center items-center   h-fit lg:w-full w-2/4 max-md3:w-full   mt-[50px] ">
                    <img className="col-span-4  w-[180px]   h-[180px] rounded-2xl  object-cover   border-2 shadow-xl shadow-Beige3 border-Beige2" src={vendorData.image_url} alt="vendor's picture" />
                    <div className="text-xl flex flex-col w-fit   mt-8 justify-center items-center font-serif">
                        {
                            !loading && vendorData?.first_name && vendorData.first_name + " " + vendorData.last_name}
                        <div className="flex  justify-center items-center w-fit gap-2 mr-4">
                            {
                                !loading && vendorData && <p className="font-thin text-lg">
                                    {Math.round(!vendorData.rating ? 0 : vendorData.rating / (!vendorData.rating_count ? 1 : vendorData.rating_count * 1.0) * 10) / 10 * 1.0 + " "}
                                    <span className="text-sm" > ({vendorData.rating_count})</span>
                                </p>}
                            {!loading && vendorData && < StarCounter className="w-8 h-8" rating={(vendorData.rating)} rating_count={vendorData.rating_count} />}
                        </div>
                    </div>
                </div>
                <div className="col-span-5 lg:w-full h-fit lg:mb-8 lg:mt-8 md3:mt-20 mt-4 w-2/4 max-md3:w-full max-md3:justify-center  justify-start items-center flex flex-row flex-wrap  gap-2 ">
                    {
                        !loading && vendorData?.categories && vendorData.categories.map((cat, index) => {
                            return (
                                <div key={index} className="w-fit px-2 h-8 center border-black border-2 rounded-md "> {cat.name} </div>
                            )
                        })
                    }
                </div>
                <div className="lg:flex flex-col inline-flex justify-center items-center w-fit max-lg:w-full max-lg:pt-8 max-md2:px-3 md1:w-3/4  max-lg:px-16 gap-2 mr-4">
                    <h1 className=" self-start font-mono font-bold">
                        About Vendor
                    </h1>
                    <p className="font-thin self-center text-justify">
                        {!loading && vendorData?.description && vendorData.description}
                    </p>
                </div>
            </div>

            <div className="col-span-5 w-full lg:h-screen lg:max-lg:h-fit lg:grid lg:grid-rows-10   items-start lg:pt-10 lg:gap-10 lg:overflow-y-auto ">
                <div className="max-lg:hidden text-5xl  lg:row-span-1 justify-self-center  font-serif font-bold">
                    Vendors Products
                </div>
                <div className="flex w-full items-center   lg:row-span-1 mt-12 lg:mt-4  shadow-Beige3  justify-center flex-wrap gap-4 px-8 justify-self-center">
                    {
                        !loading && vendorData?.categories && vendorData.categories.map((cat, index) => {
                            return (
                                <button onClick={() => handleCategoryChange(cat.id)} key={index} className="w-fit px-2 h-8 hover:bg-Beige2 duration-500 center border-black border-2 rounded-md "> {cat.name} </button>
                            )
                        })
                    }
                </div>
                <div className=" h-fit flex flex-wrap lg:justify-center lg:px-4 py-4 gap-4 px-8 md2:px-24 w-full lg:row-span-8" >
                    {
                        !productsLoading && productsData && productsData.map((product, index) => {
                            return (
                                <DetailsCard key={index} id={product.id} img={product.images[0]?.image_url} name={product.name} description={product.description} price={product.price} rating={product.rating} rating_count={product.rating_count} />
                            )
                        })
                    }
                    {
                        productsLoading && <>
                            {[...Array(10)].map((start, index) => {
                                return <LoadingSekeleton key={index} />
                            })}
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

const LoadingSekeleton = () => {
    return (
        <div className="flex-grow center animate-pulse xl:flex-grow-0 center w-full md:w-80 h-96 bg-Beige2 shadow-lg rounded-lg flex-col overflow-hidden group Fredoka border border-Black/15
        ">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
        </div>
    )
}