import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

//const blogs = [{id :1}, {id :2}, {id :3}, {id :4}, {id :5}, {id :6}];

function Pets(){
  const navigate = useNavigate();
  
  /*const handleView = (id) => {
    navigate(`/PetsView/${id}`);
  };*/

  return (
    <>
      <div className="App">
        
        <h3>Pets</h3>
        <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light"><b>Pets</b></h1>
        <p class="lead text-muted">Pets page</p>
       
      </div>
    </div>
  </section>
  <div class="album py-5 bg-light">
    <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
          <img src={`pets1.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
            <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
          
            <div class="card-body">
            <h3><b>Paw Prints & Tails </b></h3>
              <p class="card-text">Heartwarming stories, tips, and pet care advice.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/PetsView/37")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">6 June 2025</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`pets2.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
            <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
          
            <div class="card-body">
            <h3><b>Furry Friends Forever</b></h3>
              <p class="card-text">Celebrating the joy of pet companionship.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/PetsView/38")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">16 October 2022</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`pets3.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
            <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>The Happy Paw</b></h3>
              <p class="card-text"> Everything you need to keep your pets happy and healthy.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/PetsView/39")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">30 April 2021</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={`pets4.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
            <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
          
            <div class="card-body">
            <h3><b>Whiskers & Wonders</b></h3>
              <p class="card-text">Exploring the magical world of pets.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/PetsView/40")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">4 March 2023</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`pets5.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
            <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
          
            <div class="card-body">
            <h3><b>Tail Wagging Tales</b></h3>
              <p class="card-text">Sharing adorable moments and pet stories.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/PetsView/41")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">28 July 2020</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`pets6.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
            <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
          
            <div class="card-body">
            <h3><b>Purrfectly Loved</b></h3>
              <p class="card-text">A blog for cat lovers and pet enthusiasts.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/PetsView/42")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">1 September 2021</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={`pets7.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
            <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
          
            <div class="card-body">
            <h3><b>Fetch & Snuggle</b></h3>
              <p class="card-text"> Adventures, training tips, and cozy pet moments.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/PetsView/43")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">20 February 2022</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`pets8.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
            <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
          
            <div class="card-body">
            <h3><b>The Pet Haven</b></h3>
              <p class="card-text">Your go-to guide for pet parenting.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/PetsView/44")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">15 June 2020</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`pet9.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
            <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
          
            <div class="card-body">
            <h3><b>Barks & Meows</b></h3>
              <p class="card-text"> A fun and informative space for all pet lovers.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/PetsView/45")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">26 October 2023</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
      <Footer />
    </>
  );
}

export default Pets;
