'use client';

import useAddPropertyModal from "@/utils/property/useAddPropertyModal";
import useLoginModal from "@/utils/user/userLoginModal";


interface AddPropertyButtonProps {
    userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
    userId
}) => {
    const loginModal = useLoginModal();
    const addPropertyModal = useAddPropertyModal();

    const airbnbYourHome = () => {
        console.log('add property clicked.')
        console.log(userId)
        if (userId) {
            addPropertyModal.open()
        } else {
            loginModal.open();
        }
    }

    return (
        <div 
            onClick={airbnbYourHome}
            className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
        >
            Djangobnb your home
        </div>
    )
}

export default AddPropertyButton;