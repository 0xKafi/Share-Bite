import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Work = () => {
  const steps = [
    {
      id: 1,
      title: "Create an Account",
      description: "Sign up with your email to start sharing or receiving food on ShareBite.",
    },
    {
      id: 2,
      title: "Share or Request",
      description: "Post available food or browse items to request what you need.",
    },
    {
      id: 3,
      title: "Coordinate Pickup",
      description: "Schedule a convenient pickup time and complete the exchange easily.",
    },
  ];

  return (
        <div className="my-30">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="text-3xl font-bold text-center my-20">How It Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto my-10 px-4">
            {
                steps.map((step) => (
                <Card  data-aos="fade-up" data-aos-duration="1000" key={step.id} className="relative p-4 pt-10">
                <div className="absolute -top-4 left-4 bg-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                    {step.id}
                </div>
                <CardHeader>
                    <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                    {step.description}
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
  );
};

export default Work;
