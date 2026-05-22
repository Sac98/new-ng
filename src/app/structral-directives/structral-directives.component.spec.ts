import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructralDirectivesComponent } from './structral-directives.component';

describe('StructralDirectivesComponent', () => {
  let component: StructralDirectivesComponent;
  let fixture: ComponentFixture<StructralDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructralDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
