import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function InfoBox({ info }) {
    const INIT_URL =
        "https://images.unsplash.com/photo-1709591281763-cbb0e4f219f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjYXR0ZXJlZCUyMGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL =
        "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL =
        "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL =
        "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAIN_URL
                                : info.temp > 15
                                ? HOT_URL
                                : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            {info.humidity > 80 ? (
                                <ThunderstormIcon />
                            ) : info.temp > 15 ? (
                                <SunnyIcon />
                            ) : (
                                <AcUnitIcon />
                            )}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                            component={"span"}
                        >
                            <div>Temperature = {info.temp}&deg;C</div>
                            <div>Humidity = {info.humidity}</div>
                            <div>Min Temp = {info.tempMin}&deg;C</div>
                            <div>Max Temp = {info.tempMax}&deg;C</div>
                            <div>
                                The weather can be described as{" "}
                                <i>{info.weather}</i> and feels like{" "}
                                {info.feelsLike}&deg;C
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
