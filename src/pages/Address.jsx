import {useEffect, useState} from "react";
import axios from "axios";

export default function Address(){
    const [address, setAddress] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const pageRows=10;

    useEffect(()=>{
        axios
            .get("https://fakerapi.it/api/v2/addresses?_quantity=100")
            .then((res)=>{
                setAddress(res.data.data);
                setIsLoading(false);
            })
            .catch((err)=>{
                console.error("Error message:", err);
                setIsLoading(false);
            })
    },[]);

    

    const  indexOfLastRow = currentPage * pageRows;
    const indexOfFirstRow = (indexOfLastRow - pageRows);
    const currentRows = address.slice(indexOfFirstRow, indexOfLastRow);

    const totalPage = Math.ceil(address.length / pageRows);
    const pageNumber = [...Array(totalPage).keys()].map((num) => num+1);

    return(
        <div className="container row col-12 mt-2">
            <h2>Address List</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                    <thead className="table-dark">
                        <tr className="balanace">
                            <th>Street</th>
                            <th>Street Name</th>
                            <th>Building Number</th>
                            <th>City</th>
                            <th>Zipcode</th>
                            <th>Country</th>
                            <th>Country Code</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan="9" className="text-center">
                                    <div className="spinner-border text-primary"></div>
                                </td>
                            </tr>
                            
                        ) :(
                        currentRows.map((address, id)=>(
                            <tr key={id} className="fixed_table_height">
                                <td>{address.street}</td>
                                <td>{address.streetName}</td>
                                <td>{address.buildingNumber}</td>
                                <td>{address.city}</td>
                                <td>{address.zipcode}</td>
                                <td>{address.country}</td>
                                <td>{address.country_code}</td>
                                <td>{address.latitude}</td>
                                <td>{address.longitude}</td>
                            </tr>
                        )))}
                    </tbody>
                </table>
            </div>
            <nav>
                <ul className="pagination justify-content-end">
                    {currentPage>1 &&
                        <li className="page-item" >
                            <button className="page-link bg-dark text-primary" onClick={() => setCurrentPage((prev) => prev - 1)}>
                                Prev
                            </button>
                        </li>
                    }
                    {pageNumber.map((number) => (
                        <li key={number} className={`page-item ${number === currentPage ? "active" : ""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(number)}>
                                {number}
                            </button>
                        </li>
                    ))}
                    {currentPage < 10 &&
                        <li className="page-item" >
                            <button className="page-link bg-dark text-primary" onClick={() => setCurrentPage((prev) =>prev + 1)}>
                                Next
                            </button>
                        </li>
                    }
                </ul>
            </nav>
        </div>
    )
}