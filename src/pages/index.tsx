import Navbar from "../components/navbar";
import Item from "../components/image_text";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="flex min-h-screen flex-col items-center pt-16 p-16">
                <p className="text-4xl font-bold pb-10">Hello There!</p>
                
                <Item
                    title="I'm Ethan Cherian!"
                    description="A developer passionate about learning new things. I've been programming since I was 14 and have gained a deep appreciation of the art of software development."
                    imageUrl='/personals/me_suit.jpeg'
                    width={400} height={250}
                    invert={false}/>

                <Item
                    title="Important note!"
                    description="I made this website to gain some solo experience with a particular framework which I've used in the past: Next.js. As a result, it's pretty barebones, but I made it without the use of templates or the like. :)"
                    imageUrl='/personals/me_barbados.jpeg'
                    width={500} height={350}
                    invert={true}/>
                
                <Item
                    title="Outside of coding,"
                    description="I love video games, movies, and music (listening to and making). I also enjoy traveling and hanging out with my friends!"
                    imageUrl="/personals/me_pizza.jpeg"
                    width={400} height={250}
                    invert={false}/>
            </div>
        </>
    );
}
