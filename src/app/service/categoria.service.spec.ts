import { TestBed } from "@angular/core/testing";
import { categoriaService } from "./categoria.service"


    describe('Categoria' , () => { 
        let Service : categoriaService;
        
        beforeEach(()=>{
            TestBed.configureTestingModule({});
            Service = TestBed.inject(categoriaService);
    });

    it('created',() => {
        expect(Service).toBeTruthy();
    });

});
