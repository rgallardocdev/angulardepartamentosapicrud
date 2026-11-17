import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteRoutingDepartamentoComponent } from './delete-routing-departamento-component';

describe('DeleteRoutingDepartamentoComponent', () => {
  let component: DeleteRoutingDepartamentoComponent;
  let fixture: ComponentFixture<DeleteRoutingDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteRoutingDepartamentoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteRoutingDepartamentoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
