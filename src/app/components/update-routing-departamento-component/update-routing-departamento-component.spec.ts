import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateRoutingDepartamentoComponent } from './update-routing-departamento-component';

describe('UpdateRoutingDepartamentoComponent', () => {
  let component: UpdateRoutingDepartamentoComponent;
  let fixture: ComponentFixture<UpdateRoutingDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateRoutingDepartamentoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateRoutingDepartamentoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
