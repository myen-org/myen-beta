"use client"

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@heroui/react";

import { Accordion, AccordionItem } from "@heroui/react";

export default function App() {
  return (
    <div>
      <div>
        <h3 className="text-base/7 font-semibold">Volunteering</h3>
        <p className="mt-1 max-w-2xl text-5xl Freight-light text-gray-500">from students to students</p>
      </div>
      <div className="mt-6 border-t border-foreground">
        <dl className="divide-y divide-foreground">
          <div className="px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-10 sm:px-0">
            <dt className="text-5xl Freight-light font-medium">Join Our Volunteer Team</dt>
            <div className="columns-2 mt-1 text-lg sm:col-span-2 sm:mt-0">
              <dd className="mt-1 text-lg sm:text-2xl sm:col-span-2 sm:mt-0">Are you a student in Morocco passionate about making a difference? Do you want to gain leadership experience, build your skills, and help shape the future of student life in Morocco? We want you on our team!</dd>
              <dd className="mt-1 text-lg sm:text-2xl sm:col-span-2 sm:mt-0">Whether you're interested in social media, event planning, research, writing, or outreach, there's a place for you here. You don't need to start a club to get involved just bring your energy, ideas, and willingness to contribute.</dd>
            </div>
          </div>
          <div className="px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-10 sm:px-0">
            <dt className="text-5xl Freight-light font-medium">Why Volunteer with us?</dt>
            <div className="mt-1 text-lg sm:col-span-2 sm:mt-0">
              <ul role="list" className="mt-1 text-lg sm:col-span-2 sm:mt-0 space-y-4">
                <li className="flex items-start gap-3">
                  <i className="text-lg sm:text-2xl isax isax-people flex-shrink-0 mt-1"></i>
                  <span className="text-lg sm:text-2xl">Build real-world skills (leadership, teamwork, communication)</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="text-lg sm:text-2xl isax isax-messages-2 flex-shrink-0 mt-1"></i>
                  <span className="text-lg sm:text-2xl">Connect with students from across Morocco</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="text-lg sm:text-2xl isax isax-like-shapes flex-shrink-0 mt-1"></i>
                  <span className="text-lg sm:text-2xl">Make a real impact in your community and beyond</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="text-lg sm:text-2xl isax isax-personalcard flex-shrink-0 mt-1"></i>
                  <span className="text-lg sm:text-2xl">Find and build what you love by creating your own opportunities don't wait for them to come to you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="text-lg sm:text-2xl isax isax-status-up flex-shrink-0 mt-1"></i>
                  <span className="text-lg sm:text-2xl">Shape your own path and grow your profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="text-lg sm:text-2xl isax isax-lamp-on flex-shrink-0 mt-1"></i>
                  <span className="text-lg sm:text-2xl">Create the future you believe in one project, one idea, one step at a time</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-10 sm:px-0">
            <dt className="text-5xl Freight-light font-medium">Available Volunteer Roles</dt>
            <dd className="bg-transparent mt-1 text-lg sm:col-span-2 sm:mt-0 ">
              <Table removeWrapper aria-label="Example static collection table">
                <TableHeader className="bg-transparent">
                  <TableColumn className="bg-transparent text-xl sm:text-2xl Freight-med text-Oamber" >Role</TableColumn>
                  <TableColumn className="bg-transparent text-xl sm:text-2xl Freight-med text-Oamber" >Descreption</TableColumn>

                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell className="text-2xl Freight-med">Social Media & Content Team</TableCell>
                    <TableCell className="text-lg sm:text-xl" >Create posts, manage Instagram, design graphics</TableCell>

                  </TableRow>
                  <TableRow key="2">
                    <TableCell className="text-2xl Freight-med">Event Coordination</TableCell>
                    <TableCell className="text-lg sm:text-xl" >Help organize online and offline events</TableCell>

                  </TableRow>
                  <TableRow key="3">
                    <TableCell className="text-2xl Freight-med">Research Assistant</TableCell>
                    <TableCell className="text-lg sm:text-xl" >Design surveys, interview students, analyze feedback, and help shape better clubs, events, and opportunities for Moroccan students</TableCell>

                  </TableRow>
                  <TableRow key="4">
                    <TableCell className="text-2xl Freight-med">Writing & Editing</TableCell>
                    <TableCell className="text-lg sm:text-xl" >Write articles, edit submissions, and publish content</TableCell>

                  </TableRow>
                  <TableRow key="5">
                    <TableCell className="text-2xl Freight-med">Outreach & Recruitment</TableCell>
                    <TableCell className="text-lg sm:text-xl" >Help promote the initiative and grow our network</TableCell>

                  </TableRow>
                  <TableRow key="6">
                    <TableCell className="text-2xl Freight-med">Graphic Design & Video Editing</TableCell>
                    <TableCell className="text-lg sm:text-xl" >Create visuals, videos, and promotional materials</TableCell>

                  </TableRow>
                </TableBody>
              </Table>
            </dd>

          </div>
          <div className="px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-10 sm:px-0">
            <dt className="text-5xl Freight-light font-medium">How to apply</dt>
            <div className="mt-1 text-xl sm:col-span-2 sm:mt-0">
              <ul role="list" className="mt-1 text-xl sm:col-span-2 sm:mt-0 space-y-4">
                <li className="global-txt flex items-center">
                  <i className="text-lg sm:text-2xl isax mr-3 isax-clipboard-text flex-shrink-0"></i>
                  <span className="text-lg sm:text-2xl">Fill out our form</span>
                </li>
                <li className="global-txt flex items-center">
                  <i className="text-lg sm:text-2xl isax mr-3 isax-timer flex-shrink-0"></i>
                  <span className="text-lg sm:text-2xl">We'll review your application and reach out within 3–5 business days</span>
                </li>
                <li className="global-txt flex items-center">
                  <i className="text-lg sm:text-2xl isax mr-3 isax-like flex-shrink-0"></i>
                  <span className="text-lg sm:text-2xl">You'll be matched with a team based on your interests and skills</span>
                </li>
                <li className="global-txt flex items-center">
                  <i className="text-lg sm:text-2xl isax mr-3 isax-verify flex-shrink-0"></i>
                  <span className="text-lg sm:text-2xl">You'll receive an orientation and training to get started</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-10 text-lg sm:col-span sm:mt-3 py-8">
            <div className="flex-1 mt-1 text-lg sm:mt-0">
              <dt className="text-5xl Freight-light font-medium">Frequently asked questions</dt>
              <Accordion className="py-2">
                <AccordionItem key="1" aria-label="Accordion 1" title="Do I need to be part of a club to volunteer?">
                  No! Anyone can volunteer, even if you’re not starting or joining a club.
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="How much time do I need to commit?">
                  It depends on the role, but most volunteers contribute 2–4 hours per week.
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Can I volunteer remotely?">
                  Absolutely most of our work is done online via Discord and other platforms.
                </AccordionItem>
              </Accordion>
            </div>

            <div className="flex-1 mt-1 text-lg sm:mt-0 justify-items-center self-center">
              <dt className="text-5xl Freight-light font-medium mb-4">Still have questions?</dt>
              <p>Feel free to reach out to us via:</p>
              <ul>
                <li>Instagram: @myen_org</li>
                <li>Discord</li>
                <li>Email: myen.org@outlook.com</li>
              </ul>
            </div>
          </div>

        </dl>
      </div>


    </div>
  );
}
