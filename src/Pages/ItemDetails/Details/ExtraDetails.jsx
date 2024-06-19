import ListItem from "./ListItem";

export default function ExtraDetails(){
    return (
        <>
            <div className='Fredoka pb-20 h-full w-[95%] flex flex-col lg:flex-row gap-14 px-4 overflow-hidden'>
                <div className="flex flex-col w-full h-full gap-8">
                    <h3 className="text-3xl font-medium">Description</h3>
                    <p className="text-Black text-lg">Step into bohemian elegance with the Boho Bliss Tote Bag. 
                        Immerse yourself in the beauty of handwoven details crafted 
                        with premium cotton for a touch of artisanal charm. This spacious 
                        tote is your versatile companion for daily adventures, seamlessly 
                        blending fashion and functionality.</p>
                </div>
                <div className="flex flex-col w-full h-full gap-8">
                    <h3 className="text-3xl font-medium">Details</h3>
                    <div className="w-full h-full gap-4 flex">
                        <ul className='list-disc'>
                            <ListItem label={`Material`} text={'Premium cotton'} />
                            <ListItem label={`Size`} text={'Spacious for daily essentials'} />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}