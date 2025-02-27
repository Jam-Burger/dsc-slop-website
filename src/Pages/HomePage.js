import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Paper,
  Container,
  Button,
  Fab,
  Collapse,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Alert from "@material-ui/lab/Alert";
import { LaptopMac, School } from "@material-ui/icons";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ReactFullpage from "@fullpage/react-fullpage";
import bg from "../images/bg.png";
import logo from "../images/logo.png";
import LogoBear from "../components/LogoBear";
import ApplyWithDevfolio from "../components/ApplyWithDevfolio";
import Footer from "../components/Footer";
import Countdown from "../components/Countdown";
import CustomizedTimeline from "../components/TimeLine";
import TimelineHorizontal from "../components/TimelineHorizontal";
import "./TextGradient.css";
import "../components/blink.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#000000",
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: "center",
    minHeight: "25%",
  },
  paperCounter: {
    backgroundColor: "#000000",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: "center",
    minHeight: "25%",
  },

  button: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2),
    backgroundColor: "#91f8faef",
  },

  formlink: {
    padding: theme.spacing(2),
    textAlign: "center",
    minHeight: theme.spacing(40),
  },

  typo: {
    textAlign: "center",
    margin: theme.spacing(4),
    color: "white",
  },
  logo: {
    top: "10vh",
    // left: '5vw',
  },

  textdiv: {
    marginTop: "16vh",
  },

  textover: {
    fontSize: "200px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "100px",
    },
  },

  textcap: {
    fontSize: "32px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },

  prizes: {
    fontSize: "80px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
    },
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [alertmsg, setAlertMsg] = React.useState("");

  return (
    <ReactFullpage
      autoScrolling={true}
      responsiveWidth={600}
      navigation={true}
      scrollOverflow={true}
      scrollingSpeed={700}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Grid container justify="center">
              <Grid className="section" item xs={12}>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div className="min-h-screen relative">
                  <div className={"fixed text-center w-full " + classes.logo}>
                    <LogoBear
                      className={
                        "max-w-xs xs:max-w-xs xs:-translate-x-12 mx-auto transform -translate-x-20 "
                      }
                    />
                    <Typography
                      className={
                        classes.textcap + " txt--gradient-orange mt-12"
                      }
                      color="textPrimary"
                    >
                      <b>Developer Student Club DAIICT Presents</b>
                    </Typography>
                    <img
                      src={logo}
                      className="max-w-2xl xs:max-w-xs mx-auto mt-4"
                    />
                    <Typography
                      color="textPrimary"
                      className="mt-8 xs:text-xl text-3xl blink blink-two"
                    >
                      <div className="txt--gradient-orange">
                        <b>Contribution period started</b>
                      </div>
                    </Typography>
                  </div>
                </div>
              </Grid>

              <Grid className="section " item xs={12}>
                <Container maxWidth="md">
                  <Paper className={classes.paperCounter}>
                    <Countdown toDate={new Date(2020, 9, 28)} />
                  </Paper>
                </Container>
              </Grid>
              <Grid className="section xs:py-12" item xs={12}>
                <Container maxWidth="md">
                  <Paper className={classes.paper}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          variant="h4"
                          className="txt--gradient-blue mb-6"
                        >
                          <b>What is SLoP ?</b>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" align="left">
                          Semester Long Projects or SLoP is an initiative by the
                          Developer Student Club (DA-IICT), exclusively for
                          students who are new to open source software
                          development to get started with open source
                          contributions.
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" align="left">
                          We want to increase the development culture and
                          involvement of students with open-source technologies
                          which will present the benefits of open source as well
                          as introduce them to the cutting edge tech and coding
                          practices.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Container>
                <Container maxWidth="md">
                  <Paper className={classes.paper}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          variant="h4"
                          className="text-center txt--gradient-blue mb-6"
                        >
                          <b>How it Works ?</b>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" align="left">
                          Participants can apply for the program either as a
                          student or as a mentor. Mentors are selected through a
                          process at the discretion of the organizers. The
                          selected mentors propose projects, the best of which
                          are chosen to be included in the program. Students
                          work on these projects during the semester and try to
                          contribute as much as they can. The mentors review the
                          PRs and the overall work on their project of various
                          contributors throughout the coding period of the
                          program by assigning them some points. At the end of
                          the coding period, the students are compared on the
                          basis of the value of their contributions and their
                          points.
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" align="left">
                          For more info, please download the student or mentor
                          manual
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        className="mt-6"
                        justify="center"
                      >
                        <Grid item>
                          <Button
                            style={{ width: "200px" }}
                            variant="contained"
                            className={classes.button}
                            color="secondary"
                            startIcon={<School />}
                            href="https://drive.google.com/file/d/19cG4GJTrJjOvx3ALXWtAyBf63SkbjYfR/view?usp=sharing"
                            target="_blank"
                          >
                            Student Manual
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            style={{ width: "200px" }}
                            variant="contained"
                            className={classes.button}
                            color="secondary"
                            startIcon={<LaptopMac />}
                            href="https://drive.google.com/file/d/1URxwFF3BS3_QwTLMjpMthyQMhNFm1q_R/view?usp=sharing"
                            target="_blank"
                          >
                            Mentor Manual
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        container
                        direction="row"
                        className="mt-4"
                        justify="center"
                        alignItems="center"
                      >
                        <Grid item>
                          <Button
                            style={{ width: "200px" }}
                            variant="contained"
                            className={classes.button}
                            color="secondary"
                            startIcon={<ContactSupportIcon />}
                            href="https://drive.google.com/file/d/1nTYLJwaNzChRetQrEge80izJDbOtNbo-/view?usp=sharing"
                            target="_blank"
                          >
                            FAQs & Inquiries
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            style={{ width: "200px" }}
                            variant="contained"
                            className={classes.button}
                            color="secondary"
                            startIcon={<DescriptionIcon />}
                            href="https://drive.google.com/file/d/1ktwE1Rh7-C1zMeEOkzwreoBfZRIya7LQ/view?usp=sharing"
                            target="_blank"
                          >
                            How it Works ?
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Container>
              </Grid>

              <Grid className="section xs:py-2 xs:pb-20" item xs={12}>
                <Container maxWidth="md">
                  <Grid container md={12}>
                    <Collapse in={open} style={{ width: "100%" }}>
                      <Alert
                        severity="info"
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }
                      >
                        {alertmsg}
                      </Alert>
                    </Collapse>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    spacing={2}
                    alignContent="center"
                  >
                    <Grid item xs={12} sm={6} md={6}>
                      <Paper className={classes.formlink}>
                        <Typography
                          variant="h4"
                          className="txt--gradient-green"
                        >
                          <b> Are You Student ? </b>
                        </Typography>
                        <Typography variant="body1" className={classes.typo}>
                          If you are new to the ginormous world of open source
                          development or development in general, or just want to
                          explore, then SLoP is perfect for you. You'll get to
                          learn some super cool stuff from great mentors (most
                          of them will be working on awesome tech!) and can
                          compete for amazing prizes with your fellow beginners.
                          For more details, check out the Student's Manual above
                          and to register click below!
                        </Typography>
                        <a target="_blank">
                          <Fab
                            variant="extended"
                            color="secondary"
                            // href='https://dsc-slop.github.io/'
                            // target='_blank'
                            // rel='noopener noreferrer'
                            onClick={() => {
                              setAlertMsg("Student Registrations closed!");
                              setOpen(true);
                            }}
                          >
                            <School style={{ margin: 8 }} />
                            Be A Winner !
                          </Fab>
                        </a>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Paper className={classes.formlink}>
                        <Typography
                          variant="h4"
                          className="txt--gradient-green"
                        >
                          <b> Are You Mentor ? </b>
                        </Typography>
                        <Typography variant="body1" className={classes.typo}>
                          If you feel that you want to contribute back to
                          open-source and guide your fellow peers properly, then
                          SLoP is a great platform for you. You can interact
                          with new developers (you might also learn some cool
                          new things!) and guide them through your project. As a
                          bonus, you can get a chance to win a prize! For more
                          details, check out the Mentor's Manual above and to
                          register click below!
                        </Typography>
                        <Fab
                          variant="extended"
                          color="secondary"
                          href="/mentor-registration"
                          // target="_blank"
                          rel="noopener noreferrer"
                          // onClick={() => {
                          //   setAlertMsg(
                          //     "Oops ! Mentor Applications Are Closed."
                          //   );
                          //   setOpen(true);
                          // }}
                        >
                          <LaptopMac style={{ margin: 8 }} />
                          Be A Teacher !
                        </Fab>
                      </Paper>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid className="section" item xs={12}>
                <Container className="w-full mb-24">
                  <Paper className={classes.paper}>
                    <Typography className="txt--gradient-orange" variant="h4">
                      <b> Event Timeline</b>
                    </Typography>
                    <TimelineHorizontal />
                  </Paper>
                </Container>
                <div className="w-full xs:hidden absolute bottom-0 transform -translate-y-12">
                  <Footer />
                </div>
              </Grid>
            </Grid>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
