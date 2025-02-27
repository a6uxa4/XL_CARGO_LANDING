
const Container = ({ children }) => {
    return (
        <div className="max-w-[1280px] w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] mx-auto">
            {children}
        </div>
    );
};

export default Container;
