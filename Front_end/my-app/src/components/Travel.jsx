import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Travel() {
  const navigate = useNavigate();
  return (
    <>
      <div className="App">
        
        <h3>Travel</h3>
        <section class="py-5 text-center container travel" >
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light"><b>Travel</b></h1>
        <p class="lead text-muted">Travel page</p>
       
      </div>
    </div>
  </section>
  <div class="album py-5 bg-light">
    <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
          <img src={`travel1.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top"  width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Wanderlust Diaries</b></h3>
              <p class="card-text">Capturing adventures one journey at a time.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/TravelView/19")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">15 August 2023</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`travel2.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>The Roaming Spirit</b></h3>
              <p class="card-text"> Exploring the world, one step at a time.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/TravelView/20")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">1 January 2022</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`travel3.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Globetrotter’s Journal </b></h3>
              <p class="card-text">Stories, tips, and experiences from around the world.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/TravelView/21")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">30 June 2021</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={`travel4.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Miles & Memories</b></h3>
              <p class="card-text">Turning travels into unforgettable moments.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/TravelView/22")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">25 December 2023</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`travel5.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Nomadic Trails</b></h3>
              <p class="card-text">A guide to offbeat destinations and hidden gems.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/TravelView/23")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">17 March 2022</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`travel6.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Beyond Borders</b></h3>
              <p class="card-text"> Travel tales from across the globe.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/TravelView/24")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">19 September 2020</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={`travel7.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>The Curious Compass</b></h3>
              <p class="card-text"> Navigating through new cultures and destinations.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/TravelView/25")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">2 February 2023</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`travel8.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Lost & Loving It</b></h3>
              <p class="card-text">Embracing the beauty of getting lost in new places.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/TravelView/26")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">14 May 2021</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`travel9.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Suitcase & Sunsets</b></h3>
              <p class="card-text"> A blog for dreamers, explorers, and sunset chasers.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/TravelView/27")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">8 August 2024</small>
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

export default Travel;
