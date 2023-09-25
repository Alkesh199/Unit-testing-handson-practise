import { html, fixture, expect,elementUpdated} from '@open-wc/testing';
import { stub,spy } from 'sinon';

import '../src/header/Header.js';

const header = await fixture(html`<loan-header></loan-header>`);

describe('loan-header', () => {

  it('header should be acessiable', async () => {
      expect(header).to.be.accessible();
  });

  it('header heading should be present',async ()=>{
    const ele = header.shadowRoot.querySelector("p");
    expect(ele).to.exist;
    expect(ele.innerText).to.be.equal("Apply Loan");
    })


  it('header div should containe container class', async () => {
      const ele = header.shadowRoot.querySelector('div');
      expect(ele).to.exist;
      expect(ele).to.have.class('container');
  });

  
  describe("loan-header-buttons",()=>{
    let btn;
    before(()=>{
      btn = header.shadowRoot.querySelectorAll("button");
    })

      it("buttons default classes",async ()=>{ 
       
       expect(btn).to.exist;
       expect(btn[0]).to.have.class("bg-btn-color");
       expect(btn[1]).to.have.class("btn-cursor"); 
      })
      
      it("tesing onClick on nl button",async ()=>{
        
        btn[1].click();
        expect(btn[0]).to.have.class("btn-cursor");
        expect(btn[1]).to.have.class("bg-btn-color");
      })
      
      it("testing click on en button",async ()=>{
        
        btn[0].click();
        expect(btn[0]).to.have.class("bg-btn-color");
        expect(btn[1]).to.have.class("btn-cursor");
      })
    
      it("on click of en button localeChanged should call",async()=>{
         const locleSpy = spy(header,"localeChanged");
         btn[0].click();
         expect(locleSpy).to.have.calledOnce;
         locleSpy.restore();
      })
      it("on click of nl button localeChanged should call",async()=>{
        const locleSpy = spy(header,"localeChanged");
        btn[0].click();
        expect(locleSpy).to.have.calledOnce;
        locleSpy.restore();
     })
    
     xit("on click of nl heading should update",async ()=>{
      btn[1].click();

      const ele = header.shadowRoot.querySelector("p");
      expect(ele).to.exist;
      expect(ele.innerText).to.be.equal('Lening toepassen');

     })
  })
  
}); 


