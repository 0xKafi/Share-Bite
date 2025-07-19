import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Lottie from "lottie-react";
import animation from "../../assets/Login.json";
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
import AuthContext from "../Auth/AuthContext";
import toast from "react-hot-toast";


const Login = () => {
  const {loginUser, googleSignIn} = useContext(AuthContext)
  const navigate = useNavigate()
   const location = useLocation()

  const handleLogin=(e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
    .then(()=> {
        toast.success("🔓 Logged in successfully. Welcome back!")
        navigate(`${location.state ? location.state : '/'}`)
    })
    .catch((error)=> toast.error(`${error.code}`))
  }

  const handleGoogleSignIn=()=>{
    googleSignIn()
    .then(()=>{
        toast.success("🔓 Logged in successfully. Welcome back!")
        navigate(`${location.state ? location.state : '/'}`)
    })
    .catch((error)=>toast.error(`${error.code}`))
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Lottie Animation */}
        <div className="flex items-center justify-center">
          <Lottie animationData={animation} className="max-w-lg w-full" />
        </div>

        {/* Login Card */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="mail@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2 mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" required />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button onClick={handleGoogleSignIn} variant="outline" className="w-full">
                Login with Google
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Sign Up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
