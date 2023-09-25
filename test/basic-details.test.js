import { html, fixture, expect} from '@open-wc/testing';
import { stub,spy } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';


const basicdetails = await fixture(html`<basic-details></basic-details>`);
describe('Basic details', () => {
   it("basic details should be accessiable",()=>{
      expect(basicdetails).to.be.accessible();
   });

   it("testing lion-input , should be disabled",()=>{
    let ele = basicdetails.shadowRoot.querySelector("#type");
    expect(ele).to.be.accessible();
   })

   xit('testing captureDetails when clicked', async () => {
      const captureSpy = spy(basicdetails,'_captureDetails');
      const btn = basicdetails.shadowRoot.querySelectorAll('lion-button');
      // basicdetails._captureDetails();
      btn[1].click();
      expect(captureSpy).to.be.calledOnce;
      captureSpy.restore();   
    });

   xit('testing _toDashboard when clicked', async () => { 
     const dashbordSpy = spy(basicdetails,'_toDashboard');
     const btn = basicdetails.shadowRoot.querySelectorAll('lion-button');
     btn[0].click();
     expect(dashbordSpy).to.be.calledOnce;
     dashbordSpy.restore();
   });

  //  it("checking shadowDom",async()=>{
  //   expect(basicdetails).shadowDom.to.be.equal(`<div class="form-basic"></div>`);
  //  })

   describe("basic-details properties",()=>{
    it("testing ammount value",()=>{
      expect(basicdetails.amount).to.be.equal(10000);
    })

    it("testing ammout type",()=>{
      expect(basicdetails.amount).to.be.a("number");
    })
    
    it("testing range value",()=>{
      expect(basicdetails.range).to.be.equal(2);
     })

   })
});
