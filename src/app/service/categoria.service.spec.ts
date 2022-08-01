import { TestBed } from "@angular/core/testing";
import { categoriaService } from "./categoria.service"


    describe('Categoria' , () => { 
        let service : categoriaService;
        
        beforeEach(()=>{
            TestBed.configureTestingModule({});
            service = TestBed.inject(categoriaService);
    });

    it('created',() => {
        expect(service).toBeTruthy();
    });

});
