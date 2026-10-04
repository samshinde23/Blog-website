import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
function Relationship() {
  const navigate = useNavigate();
  return (
    <>
      <div className="App">
        
        <h1>Relationship</h1>
        <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light"><b>Relationship</b></h1>
        <p class="lead text-muted">Relationship page</p>
        
      </div>
    </div>
  </section>
  <div class="album py-5 bg-light">
    <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
          <img src={`rel1.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Bright Minds</b></h3>
              <p class="card-text"> Helping Your Child Grow Smart, Kind, and Confident</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/RelationshipView/28")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">11 July 2020</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`rel2.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Roots and Wings</b></h3>
              <p class="card-text">Nurturing the Parent-Child Connection</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/RelationshipView/29")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">9 September 2022</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`rel3.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
          <div class="card-body">
          <h3><b>The Joyful Nest </b></h3>
              <p class="card-text">Creating a Loving Home for Growing Children</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/RelationshipView/30")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">21 June 2023</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={`rel4.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Giggles & Growth</b></h3>
              <p class="card-text">The Ultimate Guide to a Happy, Healthy Childhood</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/RelationshipView/31")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">5 October 2021</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`rel5.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>The Caring Cradle</b></h3>
              <p class="card-text">Supporting Your Child’s Journey From Toddler to Teen</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/RelationshipView/32")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">12 December 2020</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`rel100.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>The Unspoken Bond</b></h3>
              <p class="card-text">Lessons Learned Between Parent and Child</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/RelationshipView/100")} >View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")} >Comment</button>
                </div>
                <small class="text-muted">7 January 2021</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={`rel7.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>Mini Marvels</b></h3>
              <p class="card-text">Inspiring Creativity, Learning, and Fun for Young Minds</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/RelationshipView/34")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">18 May 2024</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`rel8.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>First Steps Together</b></h3>
              <p class="card-text">A Journey Through New Love and Connection</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/RelationshipView/35")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">29 February 2020</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={`rel9.jpg`} style={{ height: "225px", objectFit: "cover" }}/>
          <svg class="bd-placeholder-img card-img-top" width="100%" height="1" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false"></svg>
            <div class="card-body">
            <h3><b>The Work Harmony</b></h3>
              <p class="card-text">A Guide to Thriving Relationships with Colleagues</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/RelationshipView/36")}>View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate("/Comments")}>Comment</button>
                </div>
                <small class="text-muted">22 November 2023</small>
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

export default Relationship;
