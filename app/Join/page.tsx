"use client"

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@heroui/react";

import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";

import { Accordion, AccordionItem } from "@heroui/react";

export default function App() {
  return (
    <div>
      <div>
        <h3 className="text-base/7">Volunteering</h3>
        <p className="mt-1 max-w-2xl text-5xl Freight-light text-gray-500">from students to students</p>
      </div>
      <div className="mt-6 border-t border-foreground">
        <dl className="divide-y divide-foreground">
          <div className="px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-10 sm:px-0">
            <dt className="text-5xl Freight-light font-medium">Find Your Space Or Make a New One</dt>
            <dd className="mt-1 text-lg sm:text-2xl sm:col-span-2 sm:mt-0">We believe every student should have a space to explore what they love whether it's tech, writing, debate, art, or something completely new. That’s why we support student-led clubs across Morocco. Join one of our existing clubs, or start your own and lead the way.</dd>
          </div>

          <div className="px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-10 sm:px-0">
            <dt className="text-5xl Freight-light font-medium">What Are Our Clubs?</dt>
            <dd className="mt-1 text-lg sm:text-2xl sm:col-span-2 sm:mt-0">
              Our clubs are student-led communities where you can explore your passions, build skills, and connect with like-minded peers all while making a real impact.
              Whether you're into tech, writing, debate, research, social action, or something completely new, there's a club for you.<br />
              And the best part?<br />
              Most of our meetings are online , so you can join from anywhere in Morocco no matter your city or school.<br />
              <br />
              📍 No location limits. Just great ideas and great people.
            </dd>
          </div>

          <div className="px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-10 sm:px-0">
            <dt className="text-5xl Freight-light font-medium">Why Our Clubs?</dt>
            <dd className="mt-1 text-lg sm:text-2xl sm:col-span-2 sm:mt-0">
              Because you deserve more than lectures and textbooks .
              You deserve a space to try new things, make mistakes, and grow.
              <br />
              With our clubs:<br />
              You’re not just a student you’re a creator, a leader, a builder<br />
              You’re not alone you’re part of a nationwide network of passionate students<br />
              You’re not waiting you’re doing something real, right now<br />
              <br />
              This isn’t just about joining a group.<br />
              It’s about finding your voice , building your confidence , and creating something that lasts.
            </dd>
          </div>


          <div className="px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-10 sm:px-0">
            <dt className="text-5xl Freight-light font-medium">Type of Clubs we support?</dt>
            <dd className="mt-1 text-lg sm:text-2xl sm:col-span-2 sm:mt-0">

              <ul role="list" className="mt-1 sm:col-span-2 sm:mt-0 space-y-6">
                <li className="flex items-start">
                  <i className="text-xl sm:text-2xl isax mr-4 isax-microscope flex-shrink-0 mt-1"></i>
                  <div className="flex-1">
                    <h3 className="Freight-med text-xl sm:text-2xl mb-1">STEM & Innovation</h3>
                    <p className="text-lg sm:text-2xl">Coding, robotics, AI, engineering, Development</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <i className="text-xl sm:text-2xl isax mr-4 isax-edit flex-shrink-0 mt-1"></i>
                  <div className="flex-1">
                    <h3 className="Freight-med text-xl sm:text-2xl mb-1">Writing & Media</h3>
                    <p className="text-lg sm:text-2xl">Journalism, creative writing, podcasting, storytelling</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <i className="text-xl sm:text-2xl isax mr-4 isax-profile-2user flex-shrink-0 mt-1"></i>
                  <div className="flex-1">
                    <h3 className="Freight-med text-xl sm:text-2xl mb-1">Debate & Public Speaking</h3>
                    <p className="text-lg sm:text-2xl">Argumentation, leadership, MUN-style debating</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <i className="text-xl sm:text-2xl isax mr-4 isax-brush flex-shrink-0 mt-1"></i>
                  <div className="flex-1">
                    <h3 className="Freight-med text-xl sm:text-2xl mb-1">Creative Arts</h3>
                    <p className="text-lg sm:text-2xl">Music, photography, design, poetry, visual arts</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <i className="text-xl sm:text-2xl isax mr-4 isax-global flex-shrink-0 mt-1"></i>
                  <div className="flex-1">
                    <h3 className="Freight-med text-xl sm:text-2xl mb-1">Social Impact & Activism</h3>
                    <p className="text-lg sm:text-2xl">Education reform, climate action, women in STEM, youth empowerment</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <i className="text-xl sm:text-2xl isax mr-4 isax-teacher flex-shrink-0 mt-1"></i>
                  <div className="flex-1">
                    <h3 className="Freight-med text-xl sm:text-2xl mb-1">Study & Learning Circles</h3>
                    <p className="text-lg sm:text-2xl">Math, languages, philosophy, history, exam prep</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <i className="text-xl sm:text-2xl isax mr-4 isax-award flex-shrink-0 mt-1"></i>
                  <div className="flex-1">
                    <h3 className="Freight-med text-xl sm:text-2xl mb-1">Competitions & Challenges</h3>
                    <p className="text-lg sm:text-2xl">essay contests, quiz bowls, startup challenges</p>
                  </div>
                </li>
              </ul>
              <span className="text-lg sm:text-2xl py-4">You’re not limited to these! If you have an idea for a new kind of club, we’ll help you make it real.</span>
            </dd>
          </div>


  <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base ">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
    

    
          
        </dl>
      </div>


    </div>
  );
}
