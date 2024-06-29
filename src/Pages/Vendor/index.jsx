import { useEffect, useState } from "react";
import { FaStar, FaRegHeart, FaHeart, FaStarHalfAlt } from 'react-icons/fa';
import Left from '../Explore/assets/Left.png';
import Right from '../Explore/assets/Right.png';
import DetailsCard from '../Explore/Components/DetailsCard';
import { getUserData, getVendorProducts } from  '../../Store/urls';
import useFetch from "../../Components/CustomHooks/useFetch";
import { useParams } from "react-router-dom";

export default function Index() {

    const { id } = useParams();
    const { data, loading } = useFetch({
        url: getUserData(id),
        method: 'GET'
    })
    let url = getVendorProducts(id);
    const [productsData, setProductsData] = useState();
    const { data: products, loading: productsLoading } = useFetch({
        url : url,
        method: 'GET'
    })

    const [categoryId, setCategoryId] = useState(0);
    const [vendorData, setVendorData] = useState({});

    useEffect(() => {
        if(categoryId){
            url = getVendorProducts(id, categoryId);
            fetch(url).then(res => res.json()).then(data => {
                console.log(data);
                setProductsData(data.data.products);
            }).catch(err => {
                console.log(err.message);
            } 
            );
        }
    }, [categoryId]);
    
    const handleCategoryChange = (id) => {
        console.log(id);
        setCategoryId(id);
    }
    
    useEffect(() => {
        if (products) {
            console.log(products.data.products);
            setProductsData(products.data.products);
        }
    }, [products]);

    useEffect(() => {
        if (data) {
            console.log(data.data.user);
            setVendorData(data.data.user);
        }
    }, [data]);
    const StarCounter = ({rating, rating_count}) => {
        let stars = []
        if(!rating_count)
            rating_count = 1;
        if(!rating)
            rating = 0;
        console.log({rating_count});
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
    return (
        <div className=" relative max-lg:h-fit flex flex-col lg:grid lg:grid-cols-7 w-full h-screen  bg-Beige">
            <div className="col-span-2 max-lg:flex-wrap max-lg2:flex-wrap  max-lg:justify-center flex lg:block lg:gap-0   w-full h-full px-5  rounded-xl lg:shadow-2xl shadow-Beige3 border-black">
                <div className="flex flex-col justify-center items-center   h-fit lg:w-full w-2/4 max-md3:w-full   mt-[50px] ">
                    <img className="col-span-4  w-[180px]   h-[180px] rounded-2xl  object-cover   border-2 shadow-xl shadow-Beige3 border-Beige2" src={vendorData.image_url} alt="vendor's picture" />
                    <div className="text-xl flex flex-col w-fit   mt-8 justify-center items-center font-serif">
                        {
                        !loading && vendorData?.first_name && vendorData.first_name + " " + vendorData.last_name}
                        <div className="flex  justify-center items-center w-fit gap-2 mr-4">
                            {
                            !loading && vendorData && <p className="font-thin text-lg">
                                { Math.round(!vendorData.rating ? 0 : vendorData.rating / (!vendorData.rating_count ? 1 : vendorData.rating_count * 1.0) * 10) / 10 * 1.0 + " "}
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

            <div className="col-span-5 w-full max-lg:h-fit h-screen lg:grid lg:grid-rows-10   items-start lg:pt-10 lg:gap-10      ">
                <div className="max-lg:hidden text-5xl  lg:row-span-1 justify-self-center  font-serif font-bold">
                    Vendors Products
                </div>
                <div className="flex w-full items-center   lg:row-span-1 mt-12 lg:mt-4  shadow-Beige3  justify-center flex-wrap gap-4  justify-self-center">
                    {
                        !loading && vendorData?.categories && vendorData.categories.map((cat, index) => {
                            return (
                                <button onClick={() => handleCategoryChange(cat.id)} key={index}className="w-fit px-2 h-8 hover:bg-Beige2 duration-500 center border-black border-2 rounded-md "> {cat.name} </button>
                            )
                        })
                    }
                </div>
                <div className="lg:overflow-y-auto max-lg:h-full flex flex-wrap lg:justify-center lg:px-4 py-4 gap-4 px-8 md2:px-24 w-full h-full lg:row-span-8" >
                    {
                        !productsLoading && productsData && productsData.map((product, index) => {
                            return (
                                <DetailsCard key={index} id={product.id} img={product.images[0]?.image_url} name={product.name} description={product.description} price={product.price} rating={product.rating} rating_count={product.rating_count} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
