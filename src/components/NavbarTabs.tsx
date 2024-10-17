import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NavbarTabs = () => {
  return (
    <Tabs defaultValue="account" className="max-w-4xl mx-auto p-4 px-1">
      <TabsList className="flex justify-center gap-4 rounded-3xl p-6">
        <TabsTrigger value="account">Home</TabsTrigger>
        <TabsTrigger value="password">Projects</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      {/* <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent> */}
    </Tabs>
  );
};

export default NavbarTabs;
