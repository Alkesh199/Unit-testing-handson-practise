import { html, fixture, expect } from '@open-wc/testing';
import { spy,stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';
import { Router } from '@vaadin/router';

describe('Success screen ', () => {
  let ele;
  before(async()=>{
     ele = await fixture(html`<loan-success></loan-success>`);
  })
  it("checking accessibility",async()=>{
    expect(ele).to.be.accessible();
  })

  it('checks for home method', async() => {
    const toHomeStub = stub(ele, "_toHome");
    const btn = ele.shadowRoot.querySelectorAll('lion-button');
    btn[0].click();
    expect(toHomeStub).to.have.callCount(0);
});

 it("lion button should containe home-btn class",()=>{
  const btn = ele.shadowRoot.querySelectorAll('lion-button');
  expect(btn[0]).to.have.class("home-btn");
 })

});

describe('error screen', () => {
  let ele;
  before(async()=>{
    ele = await fixture(html`<loan-error></loan-error>`);
  })

  it("checking accessibility",async()=>{
    expect(ele).to.be.accessible();
  })

  it('checking home method', async() => {
    const toHomeStub = stub(ele, "_toHome");
    const btn = ele.shadowRoot.querySelectorAll('lion-button');
    btn[0].click();
    expect(toHomeStub).to.have.callCount(0);
});

 it("lion button should containe home-btn class",()=>{
  const btn = ele.shadowRoot.querySelectorAll('lion-button');
  expect(btn[0]).to.have.class("home-btn");
 })


});
