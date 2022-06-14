import React,{ useState } from 'react';
import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const options = ["Magnesium", "Nitrogen", "Phosphorus","Potassium"];

function Home  () {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
return (
	<>
     <div style={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        color:'blue'
      }}>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Deficiencies"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </div>
    {selectedOption === "Magnesium" && (<h1><div class="card mb-3">
        <div class="row">
          <div class="col-md-12">
            <img src="assets/magnesium.jpeg" class="img-fluid rounded-start" alt="">
            </img></div>
          <div class="col-md-9">
            <div class="card-body">
              <h2 class="card-titile">Magnesium Deficient Plant</h2>
              <p class="card-text">Treatments for Magnesium Deficiency:
                Foliar applications. Commercial magnesium products. Epsom salt solution.
                Soil applied magnesium fertilizer applications.
                Dolomitic lime applications. Dolomitic lime is the best long term solution in acidic soils. Provides a magnesium mineral (fertilizer) source.</p>
            </div>
          </div>
        </div>
      </div></h1>)}
    {selectedOption === "Nitrogen" && (<h1><div class="card mb-3">
        <div class="row">
          <div class="col-md-12">
            <img src="assets/nitrogen.jpeg" class="img-fluid rounded-start" alt="">
            </img></div>
          <div class="col-md-9">
            <div class="card-body">
              <h2 class="card-titile">Nitrogen Deficient Plant</h2>
              <p class="card-text">Nitrogen deficiency can be corrected by applying either organic or inorganic fertilizers, but nitrate or ammonium-based fertilizers work the most quickly. Any general-purpose “grow” formula will usually provide enough nitrogen to correct major deficiencies.</p>
              <button class="btn btn-sm btn-outline-primary">Details</button>
            </div>
          </div>
        </div>
      </div></h1>)}
    {selectedOption === "Potassium" && (<h1><div class="card mb-3">
        <div class="row">
          <div class="col-md-12">
            <img src="assets/potassium.jpeg" class="img-fluid rounded-start" alt="">
            </img></div>
          <div class="col-md-9">
            <div class="card-body">
              <h2 class="card-titile">Potassium Deficient Plant</h2>
              <p class="card-text">For crops showing deficiency symptoms this year, there are no certain economically effective rescue treatments. Crops take up most of their potassium requirements during early vegetative stages. The best preventive treatment is to soil test and apply potassium as recommended before or at planting of the next crop.</p>
              <button class="btn btn-sm btn-outline-primary">Details</button>
            </div>
          </div>
        </div>
      </div></h1>)}
    {selectedOption === "Phosphorus" && (<h1><div class="card mb-3">
        <div class="row">
          <div class="col-md-12">
            <img src="assets/phosphorus.jpeg" class="img-fluid rounded-start" alt="">
            </img></div>
          <div class="col-md-9">
            <div class="card-body">
              <h2 class="card-titile">Phosphorus Deficient Plant</h2>
              <p class="card-text">How do you fix phosphorus deficiency in corn?
                The deficiency can be corrected by using one or more of the following solutions:
                Make pH adjustment.
                Flush plants with pH water and nutrients containing phosphorus.
                Do not overwater plants.
                Ensure the temperature is correct.
                Provide plants with the correct nutrient ratio.
                Change out the reservoir.</p>
              <button class="btn btn-sm btn-outline-primary">Details</button>
            </div>
          </div>
        </div>
      </div></h1>)}   
    <div class="card mb-3">
      <div class="row">
        <div class="col-md-12">
          <img src="assets/healthy.jpeg" class="img-fluid rounded-start" alt="">
          </img></div>
        <div class="col-md-9">
          <div class="card-body">
            <h2 class="card-titile">Healthy Plant</h2>
            <p class="card-text">Corn plants aren't very thirsty so wait until the soil is completely dry before you water them.
              Spray with a mister every few days for a humidity boost.
              Corn plants can grow in most light conditions, just keep them away from harsh sunlight to avoid sunburn.</p>
            <button class="btn btn-sm btn-outline-primary">Details</button>
          </div>
        </div>
      </div>
    </div>

      </>
);
};

export default Home;
