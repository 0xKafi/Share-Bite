import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="w-11/12 lg:max-w-screen-xl mx-auto mb-24 p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="q1">
          <AccordionTrigger className='text-md'>What is ShareBite?</AccordionTrigger>
          <AccordionContent  className='text-md'>
            ShareBite is a platform where individuals and organizations can share excess food with those in need, reducing waste and supporting the community.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger  className='text-md'>How do I donate food?</AccordionTrigger>
          <AccordionContent  className='text-md'>
            Simply sign in, click on “Add Food,” fill out the form with food details and pickup time, and post your listing. Nearby users will be able to request it.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger  className='text-md'>Is it safe to accept shared food?</AccordionTrigger>
          <AccordionContent  className='text-md'>
            Yes, we encourage donors to follow safety guidelines and only share fresh, hygienic food. Users can rate and review each other to ensure trust and accountability.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger  className='text-md'>Can I schedule a pickup time?</AccordionTrigger>
          <AccordionContent className='text-md'>
            Yes, when posting or requesting food, you can specify a convenient time. Both parties will receive notifications to coordinate the pickup.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5">
          <AccordionTrigger  className='text-md'>Do I have to pay to use ShareBite?</AccordionTrigger>
          <AccordionContent  className='text-md'>
            No, ShareBite is completely free for both donors and recipients. Our mission is to reduce food waste and help communities without any cost.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
