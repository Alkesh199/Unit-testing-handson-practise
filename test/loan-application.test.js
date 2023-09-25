import { html, fixture, expect } from '@open-wc/testing';
import '../loan-application.js';


describe('LoanApplication', () => {
  // Write test cases inside this block
  it("checking acessibility",async()=>{
    let ele = await fixture(html`<loan-application></loan-application>`);
    expect(ele).to.be.accessible();
  })

  it("checking type of title",async()=>{
    let ele = await fixture(html`<loan-application></loan-application>`);
    expect(ele.title).to.be.a("string");
  })
  it("checking type of counter",async()=>{
    let ele = await fixture(html`<loan-application></loan-application>`);
    expect(ele.counter).to.be.a("number");
  })

  it("checking value of title",async()=>{
    let ele = await fixture(html`<loan-application></loan-application>`);
    expect(ele.title).to.be.equal("Hey there");
  })

  it("checking value of counter",async()=>{
    let ele = await fixture(html`<loan-application></loan-application>`);
    expect(ele.counter).to.be.equal(5);
  })

  it("calling __increment function to test behaviour",async()=>{
    let ele = await fixture(html`<loan-application></loan-application>`);
    ele.__increment();
    expect(ele.counter).to.be.equal(6);
  })

  it("checking shadowdom for loan-application",async()=>{
    let ele = await fixture(html`<loan-application></loan-application>`);
    expect(ele).shadowDom.to.equal(`<div><dash-board></dash-board></div>`);
  })
  it("checking shadowDom for dash-board",async()=>{
   let ele = await fixture(html`<dash-board></dash-board>`);
   expect(ele).shadowDom.to.equal(`<loan-header></loan-header><div id="outlet"></div>`)
  })

});


