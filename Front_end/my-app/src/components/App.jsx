import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import HomeView from "./HomeView";
import Food from "./Food";
import FoodView from "./FoodView";
import Travel from "./Travel";
import TravelView from "./TravelView";
import Relationship from "./Relationship";
import RelationshipView from "./RelationshipView";
import Pets from "./Pets";
import PetsView from "./PetsView";
import BlogWrite from "./BlogWrite"
import Comments from "./Comments";



function App() {
  return (
    <>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/Relationship" element={<Relationship />} />
        <Route path="/homeview/:id" element={<HomeView />} />
        <Route path="/foodview/:id" element={<FoodView />} />
        <Route path="/travelview/:id" element={<TravelView />} />
        <Route path="/relationshipview/:id" element={<RelationshipView />} />
        <Route path="/petsview/:id" element={<PetsView />} />
        <Route path="/BlogWrite" element={<BlogWrite />} />
        <Route path="/Comments" element={<Comments />} />
        <Route path="/Pets" element={<Pets />} />
      </Routes>
        
    </>
  );
}

export default App;
