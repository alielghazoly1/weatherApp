import './App.css';
import './i18n'; 
// react
import { useEffect, useState } from 'react';
// materaial UI components
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// external libraries
import moment from 'moment/min/moment-with-locales';
import { useTranslation } from 'react-i18next';
// react-redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './weatherApiSlice';
moment.locale('ar');
const theme = createTheme({
  typography: {
    fontFamily: ['IBM'],
  },
});
function App() {
  // redux
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.weather.isLoading);
  const temp = useSelector((state) => state.weather.weather);
  const { t, i18n } = useTranslation();

  // states ====
  let [dateAndTime, setDateAndTime] = useState('');
  let [locale, setLocal] = useState('ar');
  //  event handelars
  function handeleLanguageClick() {
    if (locale === 'ar') {
      setLocal('en');
      i18n.changeLanguage('en');
      moment.locale('en');
    } else {
      setLocal('ar');
      i18n.changeLanguage('ar');
      moment.locale('ar');
    }
    const interval = setInterval(() => {
      setDateAndTime(moment().format('dddd - D MMMM YYYY - h:mm:ss a'));
    }, 1000);
    return () => clearInterval(interval);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setDateAndTime(moment().format('dddd - D MMMM YYYY - h:mm:ss a'));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    dispatch(fetchWeather());
    i18n.changeLanguage(locale);
  }, []);
  useEffect(() => {
   
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
                      {t('city')}
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
                        {isLoading ? <CircularProgress style={{color:"white"}}/> : null}
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
                        <h5>
                          {' '}
                          {t('min')}: {temp.min}{' '}
                        </h5>
                        <h5>
                          {' '}
                          {t('max')}: {temp.max}{' '}
                        </h5>
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
                  onClick={handeleLanguageClick}
                  variant="text"
                  style={{ color: 'white', marginTop: '20px' }}
                >
                  {t('lang')}
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
