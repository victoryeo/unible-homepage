import React from "react";
import Image from 'next/image';
import "./Details.css";

export const Details = () => {
  return (
    <>
      <div id="details"></div>
      <div className="details_container">

        <div className="detail_title">
          <h2>Challenges and Limitations of Current Solutions
          </h2>
          <div className="details_catalog">

          <div className="details-catalog_big-container">
            <ul>
            <li>Capital inefficiency</li>
            <li>Fluctuating and unpredictable transaction fees</li>
            <li>Lack of clarity on revenue generation and usage</li>
            </ul>
            <br/>
          <Image src="/stablecoin-issues.png" 
            alt="icon" 
            className="logo-icon" 
            width={400}
            height={400}            
            />
          </div>
          </div>
        </div>

        <div className="detail_title">
          <h2>Our Solutions
          </h2>
        </div>
        <div className="details_catalog">

          <div className="details-catalog_container">
            <div className="detail-icon">
              
            </div>
            <h4 className="detail_title">Price Stability</h4>
            <ul>
              <li>Backed 1:1 by USD-equivalent assets</li>
              <li>Initial collaterals: USDC, USDT, DAI</li>
              <li>Investment mandate: Approved stablecoins and RWAs</li>
            </ul>
          </div>

          <div className="details-catalog_container">
            <div className="detail-icon">
            </div>
            <h4 className="detail_title">Depegging Protection</h4>
            <ul>
              <li>Online reserve monitoring: Ensure stability and transparency</li>
              <li>Dynamic asset re-allocation: Optimize portfolio performance and mitigate risk exposure</li>
            </ul>
          </div>

          <div className="details-catalog_container">
            <div className="detail-icon">
            </div>
            <h4 className="detail_title">Yield Sharing</h4>
            <ul>
            <li>Gas fee refund: Incentivize daily use</li>
            <li>Reserve growing: Leverage compounding effect</li>
            <li>USBC rewards for stakeholders: Empower users and align utilities</li>
            </ul>
          </div>          
        </div>

        <div className="detail_title">
          <h2>Why Unible
          </h2>
        </div>
        <div className="details_catalog">
          <br />
          <div className="details-catalog_big-container">
            <ul>
            <li>Capital efficiency: Reserve utilization for yield</li>
            <li>Gas free transaction: User-centric yield</li>
            <li>Cross-chain transfer: Powered by LayerZero</li>
            <li>Effortless asset pairing: With any assets</li>
            </ul>
          </div>
        </div>

        <div className="detail_title">
          <h3>SBC token</h3>
          <h4>Unible companion token</h4>
        </div>
        <div className="details_catalog">
          <br />
          <div className="details-catalog_big-container">
          <Image src="/unible-sbc.png" 
            alt="icon" 
            className="logo-icon" 
            width={400}
            height={400}            
            />
            <br/>     
            <ul>
            <li>Governance token: SBC holders participate in DAO</li>
            <li>Reward collection: Stake SBC Get Unible</li>
            <li>Symbiotic Relationship: Unible and SBC foster mutual growth </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
