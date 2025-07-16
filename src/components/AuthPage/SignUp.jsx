import React, { useContext, useState } from 'react';
import { Link } from "react-router";
import Lottie from "lottie-react";
import animation from "../../assets/SignIn.json";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthContext from '../Auth/AuthContext';

const SignUp = () => {
  const [message, setMessage] = useState(null)
    const {createUser, updateUserProfile, googleSignIn} = useContext(AuthContext)

    const handleSignUp=(e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        setMessage(null)
        console.log(name, image, email, password)

        if(!hasUppercase){
            setMessage("add minimum one upppercase letter");
            return;
        }
        else if(!hasLowercase){
            setMessage("add minimum one lowercase letter");
            return;
        }
        else if(!isLongEnough){
            setMessage("password length must be 6 or above")
            return;
        }
       const profile = {
            displayName : name,
            photoURL: image
        }

        createUser(email, password)
        .then(()=> {
          updateUserProfile(profile)
          .then(()=> console.log("worked"))
        })
        .catch((error)=>console.log(error.code))
    }

    const handleGoogleSignIn=()=>{
      googleSignIn()
      .then((result)=>console.log(result.user))
      .catch((error)=>console.log(error.code))
  }


    return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Lottie Animation */}
        <div className="flex items-center justify-center">
          <Lottie animationData={animation} className="max-w-lg w-full" />
        </div>

        {/* Sign Card */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Create an your account</CardTitle>
              <CardDescription>
                Enter all the details to create account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignUp}>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                    <Label htmlFor="text">Name</Label>
                    <Input name="name" type="text" required />
                  </div>
                    <div className="grid gap-2">
                    <Label htmlFor="text">Photo Url</Label>
                    <Input name="url" type="text" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="mail@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input name="password" type="password" required />
                  </div>
                  {
                    message? <p className='text-red-600'>{message}</p>: ""
                  }
                </div>
                <Button type="submit" className="mt-4 w-full">
                Sign Up
              </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button onClick={handleGoogleSignIn} variant="outline" className="w-full">
                Sign in with Google
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
    );
};

export default SignUp;