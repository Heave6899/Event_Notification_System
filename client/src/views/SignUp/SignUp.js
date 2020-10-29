import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import {container} from "assets/jss/material-dashboard-react.js";
import {auth, signInWithGoogle, sendSignInLinkToEmail} from "Firebase_Functions/Auth"
import {Link} from 'react-router-dom'
const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
    content: {
        marginTop: "70px",
        padding: "30px 15px",
        minHeight: "calc(100vh - 123px)"
    },
    container,
    map: {
        marginTop: "70px"
    }
};

const useStyles = makeStyles(styles);

export default function SignIn() {
    const classes = useStyles();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState(null);
        const signInWithEmailAndPasswordHandler = 
                (event,email, password) => {
                event.preventDefault();
                auth.signInWithEmailAndPassword(email, password).catch(error => {
                    setError("Error signing in with password and email!");
                    console.error("Error signing in with password and email", error);
                  });
        };
          const onChangeHandler = (event) => {
              const {name, value} = event.currentTarget;
    
              if(name === 'email-address') {
                  setEmail(value);
              }
              else if(name === 'password'){
                setPassword(value);
              }
          };
    return (
        <div className={classes.container, classes.content}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="warning">
                            <h4 className={classes.cardTitleWhite}>Sign Up</h4>
                            <p className={classes.cardCategoryWhite}>Please enter the credentials</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="Email address"
                                        id="email-address"
                                        name="email-address"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        onChange = {(event) => onChangeHandler(event)}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="Password"
                                        id="password"
                                        type="password"
                                        name="password"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        onChange = {(event) => onChangeHandler(event)}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>SignIn with password</Button>
                            <Button color="primary" onClick = {() => signInWithGoogle()}>SignIn using Google</Button>
                            <Button color="primary" onClick = {()=> sendSignInLinkToEmail(email)}>SignIn with Link</Button>
                            <Link to ='/login' ><Button color="primary">Sign In</Button></Link>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}