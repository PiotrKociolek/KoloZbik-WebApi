"use client"
import ZbikNavbar from "@/components/zbikNavbar";
import NewsCard from "@/components/newsCard";
import PaginationComponent from "@/components/pagination";

const News = () => {
    return (
        <div className="mx-auto p-4 max-w-screen-xl">
            <ZbikNavbar />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
            <div className="flex justify-center my-4">
                <PaginationComponent />
            </div>
        </div>


    );
};

export default News;