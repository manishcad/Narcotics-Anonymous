"use client";
import { useState,useEffect } from "react";
import axios from "axios";

export default function Meetings() {
    const [city, setCity] = useState("");
    const [meetings, setMeetings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=>{
        setLoading(true)
        try{
            const fetchData=async ()=>{

                const response=await axios.get("/api/meetings")
                setMeetings(response.data.data)
            }
            fetchData()
        }catch(err){
            setLoading(false)
            console.log(err)
        }finally{
            setLoading(false)
        }
    },[])
    const handleSearch = async () => {
        if (!city.trim()) return;
        setLoading(true);
        setError("");
        
        try {
            const response = await axios.get(`/api/meetings?city=${city}`);
            setMeetings(response.data.data);
        } catch (err) {
            setError("No meetings found or something went wrong.");
            setMeetings([]);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>NA Meetings</h2>
            
            {/* Search Bar */}
            <div style={styles.searchContainer}>
                <input 
                    type="text" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    placeholder="Enter city name..." 
                    style={styles.input} 
                />
                <button onClick={handleSearch} style={styles.button}>
                    Search
                </button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p style={styles.error}>{error}</p>}

            {/* Meeting Cards */}
            <div style={styles.cardsContainer}>
                {meetings.map((meeting, index) => (
                    <div key={index} style={styles.card}>
                        <h3 style={styles.cardTitle}>{meeting.groupName}</h3>
                        <p style={styles.cardText}><strong>Time:</strong> {meeting.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        textAlign: "center",
    },
    heading: {
        fontSize: "24px",
        marginBottom: "20px",
        color: "#333", // Dark text
    },
    searchContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "20px",
    },
    input: {
        padding: "10px",
        width: "60%",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "16px",
    },
    button: {
        padding: "10px 15px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    cardsContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
    },
    card: {
        backgroundColor: "#fff", // Ensure a white background
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "left",
        color: "#000", // Ensure text is black
    },
    cardTitle: {
        margin: "0 0 10px 0",
        fontSize: "18px",
        fontWeight: "bold",
    },
    cardText: {
        margin: "5px 0",
        fontSize: "16px",
        color: "#333", // Ensure contrast
    },
    error: {
        color: "red",
        marginTop: "10px",
    }
};

