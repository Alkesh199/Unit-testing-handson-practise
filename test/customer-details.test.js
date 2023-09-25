import { html, fixture,expect} from '@open-wc/testing';
import { stub,spy} from 'sinon';
import '../src/Customer/Customer-details.js';



describe('customer details', () => {
  it("checking accessibility",async()=>{
    let ele = await fixture(html`<customer-details></customer-details>`);
    expect(ele).to.be.accessible();
  })

  it("checking main div should have class container",async()=>{
    let ele = await fixture(html`<customer-details></customer-details>`);
    let divEle = ele.shadowRoot.querySelector("div");
    expect(divEle).to.have.class("container");
  })

  it("checking lion-button class",async()=>{
    let ele = await fixture(html`<customer-details></customer-details>`);
    let btn = ele.shadowRoot.querySelectorAll("lion-button");
    expect(btn[0]).to.have.class("backbg-btn-color");
    expect(btn[1]).to.have.class("nextbg-btn-color");
  })
  
  it("checking on click of button",async()=>{
    let ele = await fixture(html`<customer-details></customer-details>`);
    let fnSpy = spy(ele,"_toEmidetails");
    let btn = ele.shadowRoot.querySelectorAll("lion-button");
    btn[0].click();
    // ele.requestUpdate();
    // await ele.elementComplete;
    expect(fnSpy).to.be.callCount(0);
    
  })


});
