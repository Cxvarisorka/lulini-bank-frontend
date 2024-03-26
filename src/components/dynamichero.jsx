/*
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae sunt dolores voluptatum vero accusantium incidunt culpa blanditiis quod fugiat.
*/

const DynamicHero = ({title, text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae sunt dolores voluptatum vero accusantium incidunt culpa blanditiis quod fugiat."}) => {
    return (
        <header className="bg-purple-50">
            <div className="2xl:container mx-auto md:py-24 py-16 flex flex-col gap-5 px-3">
                <p className="text-gray-700 xl:text-5xl md:text-4xl text-2xl font-bold">{title}</p>
                <p className="text-gray-700 md:text-xl font-semibold sm:w-2/3">{text}</p> 
            </div>
        </header>
    )
}

export default DynamicHero;