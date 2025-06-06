import { useState, useEffect } from "react";
import Loader from "../components/Loader";

export default function Feature({title}){
    const [isLoading, setIsLoading] = useState(true);
    const imageSets = {
        feature1: [
            'https://picsum.photos/id/1011/300/200',
            'https://picsum.photos/id/1015/300/200',
            'https://picsum.photos/id/1021/300/200',
            'https://picsum.photos/id/1025/300/200',
            'https://picsum.photos/id/1031/300/200',
            'https://picsum.photos/id/1035/300/200',
            'https://picsum.photos/id/1041/300/200',
            'https://picsum.photos/id/1045/300/200',
        ],
        feature2: [
            'https://picsum.photos/id/1011/300/200',
            'https://picsum.photos/id/1015/300/200',
            'https://picsum.photos/id/1021/300/200',
            'https://picsum.photos/id/1025/300/200',
            'https://picsum.photos/id/1031/300/200',
            'https://picsum.photos/id/1035/300/200',
            'https://picsum.photos/id/1041/300/200',
            'https://picsum.photos/id/1045/300/200',
        ],
        feature3: [
            'https://picsum.photos/id/1011/300/200',
            'https://picsum.photos/id/1015/300/200',
            'https://picsum.photos/id/1021/300/200',
            'https://picsum.photos/id/1025/300/200',
            'https://picsum.photos/id/1031/300/200',
            'https://picsum.photos/id/1035/300/200',
            'https://picsum.photos/id/1041/300/200',
            'https://picsum.photos/id/1045/300/200',
        ],
        feature4: [
            'https://picsum.photos/id/1011/300/200',
            'https://picsum.photos/id/1015/300/200',
            'https://picsum.photos/id/1021/300/200',
            'https://picsum.photos/id/1025/300/200',
            'https://picsum.photos/id/1031/300/200',
            'https://picsum.photos/id/1035/300/200',
            'https://picsum.photos/id/1041/300/200',
            'https://picsum.photos/id/1045/300/200',
        ]
    };
    const images= imageSets[title] || imageSets['feature1']

    useEffect(()=>{
        const timer = setTimeout(()=> {setIsLoading(false)},2000);
        return () => clearTimeout(timer);
    },[]);

    if(isLoading){
        return <Loader />;
    }

    return(
        <div className="container-fluid px-3 mt-3">
            <div className="row g-3">
                {images.map((url,index) => (
                    <div key={index} className="col-12 col-sm-6 col-lg-3 mb-3">
                        <div className="card h-100 shadow-sm custom_card">
                            <img src={url} alt={`images ${index + 1}`} className="card-img-top img-fluid"/>
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">This is a part of {title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 