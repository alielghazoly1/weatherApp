import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// materaial UI components
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
const theme = createTheme({
  typography: {
    fontFamily: ['IBM'],
  },
});
function App() {
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
                      الاثنين 10-1-2026
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
                      <div>
                        <Typography
                          variant="h1"
                          gutterBottom
                          style={{ textAlign: 'right' }}
                        >
                          38
                        </Typography>
                        {/* temp IMAGE */}
                        {/* ============= */}
                        {/* temp IMAGE */}
                      </div>
                      <Typography
                        variant="h5"
                        gutterBottom
                        style={{ textAlign: 'right' }}
                      >
                        broken cloude
                      </Typography>
                      {/* min & max */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        }}
                      >
                        <h5>الصغري:34</h5>
                        <h5>الكبري:34</h5>
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
