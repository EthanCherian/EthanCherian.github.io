import Image from 'next/image';

type ItemProps = {
    title: string;
    description: string;
    imageUrl: string;
    invert?: boolean; // Optional prop to invert the layout
    width?: number;
    height?: number;
};

const Item: React.FC<ItemProps> = ({ title, description, imageUrl, invert = false, width = 200, height = 200 }) => {
    const orderClasses = invert ? "flex-row-reverse" : "flex-row";

    return (
        <div className={`flex ${orderClasses} items-center p-4 my-8`}>
            <div className="flex-1">
                <Image src={imageUrl} alt={title} width={width} height={height}/>
            </div>
            <div className="flex-1 p-4">
                <h3 className="text-2xl pb-4 font-bold">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Item;
