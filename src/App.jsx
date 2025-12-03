import './App.css';
// react
import { useEffect, useState } from 'react';
// materaial UI components
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// external libraries
import axios from 'axios';
import moment from 'moment/min/moment-with-locales';
moment.locale("ar");
const theme = createTheme({
  typography: {
    fontFamily: ['IBM'],
  },
});
let cancelAxios = null;
function App() {
  let [dateAndTime, setDateAndTime] = useState('');
  let [temp, setTemp] = useState({
    number: null,
    description: '',
    min: null,
    max: null,
    icon: null,
  });
  useEffect(() => {
    setDateAndTime(moment().format("dddd - D MMMM YYYY - h:mm:ss a"));
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/weather?lat=30.033333&lon=31.233334&appid=38c8f743dc9dad3b44f625edcbe1f760',
        {
          cancelToken: new axios.CancelToken((c) => {
            cancelAxios = c;
          }),
        }
      )
      .then(function (response) {
        // handle success
        let responseTemp = Math.round(response.data.main.temp - 272.15);
        let min = Math.round(response.data.main.temp_min - 272.15);
        let max = Math.round(response.data.main.temp_max - 272.15);
        let description = response.data.weather[0].description;
        let responseIcon = response.data.weather[0].icon;
        setTemp({
          number: responseTemp,
          min: min,
          max: max,
          description: description,
          icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    return () => {
      cancelAxios();
    };
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Container maxWidth="sm">
            {/* content container */}
            <div
              style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              {/* Card */}
              <div
                dir="rtl"
                style={{
                  width: '100%',
                  background: 'rgb(28 52 91 / 364)',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '15px',
                  boxShadow: '0px 11px 1px rgba(0,0,0,0.05)',
                }}
              >
                {/* content */}
                <div>
                  {/* city & time */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'end',
                      justifyContent: 'start',
                    }}
                    dir="rtl"
                  >
                    <Typography
                      variant="h2"
                      gutterBottom
                      style={{ marginRight: '20px', fontWeight: '600' }}
                    >
                      القاهرة
                    </Typography>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{ marginRight: '20px' }}
                    >
                      {dateAndTime}
                    </Typography>
                  </div>
                  {/* =====city & time==== */}
                  <hr />

                  {/* degree & description */}
                  <div
                    style={{ display: 'flex', justifyContent: 'space-around' }}
                  >
                    <div>
                      {/* temp */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          variant="h1"
                          gutterBottom
                          style={{ textAlign: 'right' }}
                        >
                          {temp.number}
                        </Typography>
                        {/* temp IMAGE */}
                        <img src={temp.icon} alt="" />
                        {/* temp IMAGE */}
                      </div>
                      <Typography
                        variant="h5"
                        gutterBottom
                        style={{ textAlign: 'right' }}
                      >
                        {temp.description}
                      </Typography>
                      {/* min & max */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        }}
                      >
                        <h5> الصغري: {temp.min} </h5>
                        <h5> الكبري: {temp.max} </h5>
                      </div>
                      {/*==== temp ====*/}
                    </div>
                    {/* =====degree & description ===== */}
                    <CloudIcon style={{ fontSize: '200px', color: 'white' }} />
                  </div>
                </div>
                {/*====== content===== */}
              </div>
              {/*====== Card ==== */}
              {/* translation contener */}
              <div
                dir="rtl"
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  width: '100%',
                }}
              >
                <Button
                  variant="text"
                  style={{ color: 'white', marginTop: '20px' }}
                >
                  انجليزي
                </Button>
              </div>
              {/*========= translation contener====== */}
            </div>

            {/*=== content container======= */}
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
