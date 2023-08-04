
const Expand = ({ setCurrentContact, user }) => {
    const handleOnClose = (e) => {
        if (e.target.id) setCurrentContact(null)
    }

    const cancelHandler = () => {
        setCurrentContact(null)
    }

    const getMonthName = (monthIndex) => {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return months[monthIndex - 1];
    }

    return (
        <div id="container" onClick={handleOnClose} className={`fixed inset-0 bg-opacity-20 flex items-center justify-center px-2 z-50`}>
            <div className={`bg-[#FAFAFA] shadow-[0_0px_50px_0px_rgba(0,0,0,0.3)] rounded-2xl md:min-w-[450px] lg:min-w-[500px] xl:min-w-[550px] 2xl:min-w-[600px] 3xl:min-w-[650px] flex flex-col  gap-12 px-14 py-20 z-50`}>
                <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                        <p className="text-lg font-bold">Name</p>
                        <p className="border px-3 py-2 rounded-md">{user.firstName} {user.lastName}</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-lg font-bold">Email</p>
                        <p className="border px-3 py-2 rounded-md">{user.email}</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-lg font-bold">Phone</p>
                        <p className="border px-3 py-2 rounded-md">{user.phone}</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-lg font-bold">Birthdate</p>
                        <p className="border px-3 py-2 rounded-md">{user.birthday.day} {getMonthName(user.birthday.month)}, {user.birthday.year}</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-lg font-bold">Appointtime</p>
                        <p className="border px-3 py-2 rounded-md">{user.appointtime}</p>
                    </div>
                    <div className="space-y-2 col-span-2">
                        <p className="text-lg font-bold">Message</p>
                        <p className="border px-3 py-2 rounded-md">{user.message}</p>
                    </div>

                </div>
                <div className={`flex justify-around gap-4`}>
                    <button onClick={cancelHandler} className='border border-[#FE6E6E] bg-[#FE6E6E] text-white transition-all py-3 px-16 rounded-full'>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Expand;
