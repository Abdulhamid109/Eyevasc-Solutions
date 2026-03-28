"use client"
import AdminNavbar from '@/components/AdminNavbar'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Spinner } from '@/components/ui/spinner';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, useMemo } from 'react'
import toast from 'react-hot-toast';

interface CouponData {
    _id: string;
    CouponString: string;
    isClaimed: boolean;
    UserName: string;
    UserLoction: string;
    UserPhone: string;
    InterestedInSurgery: string;
}

const Page = () => {
    const [allData, setAllData] = useState<CouponData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [activeFilter, setActiveFilter] = useState<"all" | "claimed" | "unclaimed">("all");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const fetchAllCoupons = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/api/admin/displayCoupon");
            if (response.status === 200) {
                setAllData(response.data.coupons);
                setActiveFilter("all");
            }
        } catch (error) {
            console.log("Failed to fetch => " + JSON.stringify(error));
            if (error instanceof AxiosError) {
                toast.error("Failed to fetch coupons");
            }
        } finally {
            setLoading(false);
        }
    }

    const filteredData = useMemo(() => {
        let result = allData;

        if (activeFilter === "claimed") result = result.filter(c => c.isClaimed);
        if (activeFilter === "unclaimed") result = result.filter(c => !c.isClaimed);

        if (searchQuery.trim() !== "") {
            result = result.filter(c =>
                c.CouponString.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return result;
    }, [allData, activeFilter, searchQuery]);  

    const AddNewCoupon = async () => {
        try {
            const response = await axios.get("/api/admin/addCoupon");
            if (response.status === 200) {
                await fetchAllCoupons();
                toast.success("Coupon added successfully");
            }
        } catch (error) {
            console.log("Failed to add coupon => " + JSON.stringify(error));
            if (error instanceof AxiosError) {
                toast.error("Failed to add coupon");
            }
        }
    }

    const DeleteCoupon = async (id: string) => {
        try {
            const response = await axios.delete(`/api/admin/deletecoupon?id=${id}`);
            if (response.status === 200) {
                toast.success("Successfully deleted the Coupon");
                setAllData(allData.filter(d => d._id !== id))
            }
        } catch (error) {
            console.log("Failed to fetch => " + JSON.stringify(error));
            if (error instanceof AxiosError) {
                toast.error("Failed to Delete Coupons");
            }
        }
    }

    useEffect(() => {
        fetchAllCoupons();
    }, [])

    const filterBtnClass = (filter: string) =>
        activeFilter === filter
            ? 'p-2 border text-white bg-blue-400 rounded-xl'
            : 'p-2 text-white bg-gray-400 rounded-xl';

    return (
        <div className='w-screen h-screen'>
            <AdminNavbar />
            <section className='flex justify-center flex-wrap p-3 items-center gap-4'>
                <button onClick={AddNewCoupon} className='p-2 text-white bg-green-400 rounded-xl'>Add Coupon</button>
                <button onClick={fetchAllCoupons} className={filterBtnClass("all")}>All Coupons</button>
                <button onClick={() => setActiveFilter("claimed")} className={filterBtnClass("claimed")}>Claimed Coupons</button>
                <button onClick={() => setActiveFilter("unclaimed")} className={filterBtnClass("unclaimed")}>Un-Claimed Coupons</button>
            </section>

            <section className='flex justify-center items-center p-3 w-full backdrop-blur-2xl shadow-white/65 shadow-2xl'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Search for the Coupon'
                    className='p-2 rounded-md focus:outline border min-w-full'
                />
            </section>

            <section className='flex justify-center p-3 items-center'>
                {loading ? (
                    <div className='flex justify-center items-center min-h-full'>
                        <Spinner />
                    </div>
                ) : filteredData.length === 0 ? (
                    <div className='flex flex-col justify-center items-center gap-2 min-h-full'>

                        {searchQuery.trim() !== "" && (
                            <div className='flex flex-col items-center gap-2'>
                                <p className='text-gray-500'>No coupons found for <span className='font-semibold text-black'>{searchQuery}</span></p>
                                <button onClick={() => setSearchQuery("")} className='bg-blue-400 p-2 rounded-md text-white'>Clear Search</button>
                            </div>
                        )}

                        {searchQuery.trim() === "" && (
                            <>
                                {activeFilter === "all" && (
                                    <>
                                        <p className='text-gray-500'>No Coupons found</p>
                                        <button onClick={AddNewCoupon} className='bg-blue-400 p-2 rounded-md text-white'>Create a New Coupon</button>
                                    </>
                                )}
                                {activeFilter === "claimed" && <p className='text-gray-500'>No claimed coupons</p>}
                                {activeFilter === "unclaimed" && <p className='text-gray-500'>No unclaimed coupons</p>}
                            </>
                        )}
                    </div>
                ) : (
                    <div className='flex flex-col gap-2 w-full'>
                        {filteredData.map((d: CouponData) => (
                            <div key={d._id} className='flex justify-between border gap-3 flex-wrap bg-gray-100 rounded-md p-2 items-center min-w-full'>
                                <div>{d.CouponString}</div>
                                <div>{d.isClaimed ? <>Claimed</> : <>Not Claimed</>}</div>
                                <div className='flex justify-center items-center gap-2'>
                                    {d.isClaimed
                                        ? <Dialog>
                                            <DialogTrigger><button className='bg-green-500 text-white rounded-md p-1'>Associated User</button></DialogTrigger>
                                            <DialogContent>
                                                <DialogTitle>Redeem Coupon User</DialogTitle>
                                                <div>Name:{d.UserName}</div>
                                                <div>Phone:{d.UserPhone}</div>
                                                <div>Location:{d.UserLoction}</div>
                                                <div>Interest Status:{d.InterestedInSurgery?"Interested In Surgery":"Just want to connect"}</div>
                                            </DialogContent>
                                        </Dialog>
                                        : <span>No Associated user</span>
                                    }
                                    <button onClick={() => DeleteCoupon(d._id)} className='bg-red-500 text-white rounded-md p-1'>Delete Coupon</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}

export default Page